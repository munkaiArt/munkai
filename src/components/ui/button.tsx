import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-[#006097]/90 dark:hover:bg-[#87CEEB]/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-transparent hover:bg-hover hover:text-accent-foreground",
        outline2:
          "border-2 border-primary bg-transparent hover:bg-hover text-primary",
        transparent: "bg-transparent hover:bg-hover text-primary",
        filter: "bg-hover rounded-lg hover:bg-hover/20",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground border text-background rounded-xl",
        link: "text-primary underline-offset-4 hover:underline",
        discord:
          "hover:bg-accent bg-[#E0E1E4] border lg:w-[163px] hover:border-border text-accent-foreground h-[60px] rounded-full cursor-pointer  hover:border",
        discord_blue:
          "bg-text_blue_1 hover:opacity-50 lg:w-[163px] h-[60px] rounded-full cursor-pointer",
        discord_grey:
          " bg-[#E0E1E4] lg:w-[163px] text-text_dark_1 h-[60px] rounded-full cursor-pointer",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8  rounded-md px-3",
        lg: "h-10 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    compoundVariants: [
      {
        size: "sm",
        variant: "default",
        className: "",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
