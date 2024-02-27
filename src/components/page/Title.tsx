import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils/cn";
import { HTMLAttributes } from "react";

type TitleProps = HTMLAttributes<HTMLHeadingElement>;

export const Title = ({ className, children, ...props }: TitleProps) => {
  return (
    <h1 className={cn("lg:text-4xl font-bold", className)} {...props}>
      {children}
    </h1>
  );
};

type TitleSeparatorProps = HTMLAttributes<HTMLDivElement>;

export const TitleSeparator = ({
  className,
  ...props
}: TitleSeparatorProps) => {
  return <Separator className={cn("mb-1 lg:mb-3", className)} {...props} />;
};
