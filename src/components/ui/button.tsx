import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { FaCheck, FaX } from "react-icons/fa6";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
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
  onClickLoading?: () => Promise<unknown>;
  showStatusColor?: boolean;
  href?: string;
  toggle?: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      onClickLoading,
      showStatusColor = true,
      href,
      toggle,
      ...props
    },
    ref
  ) => {
    const Comp = (asChild ? Slot : "button") as React.ElementType;
    const [loading, setLoading] = React.useState(false);
    const [statusIcon, setStatusIcon] = React.useState<React.ReactNode | null>(
      null
    );
    const [currentVariant, setCurrentVariant] = React.useState(variant);

    const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
      if (props.disabled) return;

      if (onClickLoading) {
        setLoading(true);
        try {
          await onClickLoading();
          if (showStatusColor) {
            setCurrentVariant("default");
            setStatusIcon(<FaCheck />);
          }
        } catch (error) {
          if (showStatusColor) {
            setCurrentVariant("destructive");
            setStatusIcon(<FaX />);
          }
        } finally {
          setLoading(false);
          if (showStatusColor) {
            setTimeout(() => {
              setCurrentVariant(variant);
              setStatusIcon(null);
            }, 1000);
          }
        }
      }

      if (toggle) {
        toggle[1](!toggle[0]);
      }

      props.onClick?.(e);
    };

    const contents = (
      <>
        {loading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {statusIcon}
        {props.children}
      </>
    );

    return (
      <Comp
        className={cn(
          buttonVariants({ variant: currentVariant, size, className })
        )}
        ref={ref}
        onClick={handleClick}
        disabled={loading || props.disabled}
        {...props}
      >
        {contents}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
