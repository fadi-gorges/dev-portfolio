import { SVGIconProps } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";
import { VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";
import Link, { LinkProps } from "next/link";
import React from "react";

export type VisitButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  LinkProps & {
    icon: LucideIcon | React.ComponentType<SVGIconProps>;
    variant?: VariantProps<typeof buttonVariants>["variant"];
    small?: boolean;
  };

const VisitButton = ({
  className,
  icon: Icon,
  variant = "secondary",
  small,
  children,
  ...props
}: VisitButtonProps) => {
  return (
    <Link
      target="_blank"
      className={cn(
        buttonVariants({
          variant,
          size: small ? "default" : "lg",
          className: `w-full ${small ? "flex-1" : ""} py-6 lg:py-7`,
        }),
        className
      )}
      {...props}
    >
      {small ? <p>{children}</p> : <h6>{children}</h6>}
      <Icon />
    </Link>
  );
};

export default VisitButton;
