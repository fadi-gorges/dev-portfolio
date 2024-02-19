import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils/cn";
import { HTMLAttributes } from "react";

type TitleProps = HTMLAttributes<HTMLHeadingElement>;

export const Title = ({ className, children, ...props }: TitleProps) => {
  return (
    <h2 className={cn("font-bold", className)} {...props}>
      {children}
    </h2>
  );
};

type TitleSeparatorProps = HTMLAttributes<HTMLDivElement>;

export const TitleSeparator = ({
  className,
  ...props
}: TitleSeparatorProps) => {
  return <Separator className={cn("lg:my-3", className)} {...props} />;
};
