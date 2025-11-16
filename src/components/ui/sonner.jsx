"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner";

const Toaster = ({
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme}
       position="top-right"
      className="toaster group top-0"
      // style={
      //   {
      //     "--normal-bg": "var(--popover)",
      //     "--normal-text": "var(--popover-foreground)",
      //     "--normal-border": "var(--border)"
      //   }
      // }
        style={
        {
          // Customize background (purple) and text (white)
          "--normal-bg": "#78367a",       
          "--normal-text": "#ffffff",     
          "--normal-border": "transparent",
          
          "--success-bg": "#78367a",
          "--success-text": "#ffffff",
          "--error-bg": "#78367a",
          "--error-text": "#ffffff",
        }}
      {...props} />
  );
}

export { Toaster }
