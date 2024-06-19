import React, { useState, useEffect, useRef, useCallback } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { cn } from "@/lib/utils";
import { useController, Control } from "react-hook-form";

import { SelectContent, SelectTrigger } from "./select";
import { Input } from "./input";

export interface Option {
  value: string;
  label: string;
}

interface MultiSelectDropdownProps {
  name?: string;
  control?: Control<any>;
  options: Option[];
  onChange: (selectedItems: any) => void;
  defaultOpen?: boolean;
  multiValue?:boolean;
  label?: string;
  classname?: string
}

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & {
    checked: boolean;
    onItemSelect: (value: string) => void;
  }
>(({ className, checked, value, children, onItemSelect, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    value={value}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-hover focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    onClick={(event) => {
      event.stopPropagation();
      onItemSelect(value);
    }}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <Input
        type="checkbox"
        checked={checked}
        className="form-checkbox text-primary"
        onChange={(e: any) => {
          e.stopPropagation();
          onItemSelect(value);
        }}
      />
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));

SelectItem.displayName = SelectPrimitive.Item.displayName;

const MultiSelectDropdown = ({
  options,
  onChange,
  defaultOpen = false,
  multiValue,
  label,
  classname
}: MultiSelectDropdownProps) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleSelectChange = (value: string) => {
    if(multiValue){
      const updatedSelection = selectedItems.includes(value)
      ? selectedItems.filter((item) => item !== value)
      : [...selectedItems, value];
    setSelectedItems(updatedSelection);
      onChange(value);
    }else {
      const updatedSelection = selectedItems.includes(value)
      ? selectedItems.filter((item) => item !== value)
      : [...selectedItems, value];
    setSelectedItems(updatedSelection);
    onChange(updatedSelection);
    }
   
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    },
    [closeDropdown]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, handleClickOutside]);

  return (
    <SelectPrimitive.Root open={isOpen}>
      <SelectTrigger
        className={`border-2 border-primary bg-secondary py-5 pr-4 pl-6 w-full  focus:ring-2 focus:ring-primary focus:border-transparent ${classname}`}
        onClick={toggleDropdown}
      >
        {label}
      </SelectTrigger>
      <SelectContent ref={dropdownRef}>
        <SelectPrimitive.Group>
          {/* {label && <SelectPrimitive.Label>{label}</SelectPrimitive.Label>} */}
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              checked={selectedItems.includes(option.value)}
              onItemSelect={handleSelectChange}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectPrimitive.Group>
      </SelectContent>
    </SelectPrimitive.Root>
  );
};

export default MultiSelectDropdown;
