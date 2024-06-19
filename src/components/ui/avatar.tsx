"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

interface AvatarWithStatusIndicatorProps {
  src: string;
  alt: string;
  isOnline: boolean;
}

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

const OnlineIndicator = ({ isOnline }: { isOnline: boolean }) => (
  <span
    className={`absolute bottom-0 right-0 ${
      isOnline ? 'bg-green-500' : 'bg-red-500'
    } w-3 h-3 border border-white rounded-full`}
  />
);

const AvatarWithStatusIndicator: React.FC<AvatarWithStatusIndicatorProps> = ({
  src,
  alt,
  isOnline,
}) => (
  <div className="relative">
    <AvatarPrimitive.Root
      className={cn(
        "h-10 w-10 shrink-0 overflow-hidden rounded-full",
      )}
    >
      <AvatarPrimitive.Image src={src} alt={alt} />
      <AvatarPrimitive.Fallback>CN</AvatarPrimitive.Fallback>
    </AvatarPrimitive.Root>
    <OnlineIndicator isOnline={isOnline} />
  </div>
);

export { Avatar, AvatarImage, AvatarFallback, AvatarWithStatusIndicator  }
