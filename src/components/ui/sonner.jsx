import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group"
      style={{
        "--normal-bg": "#23252B",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "none",
      }}
      {...props}
    />
  );
};

export { Toaster };
