import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils/cn";
import { HTMLAttributes } from "react";

type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  separatorClassName?: string;
};

const Title = ({
  className,
  separatorClassName,
  children,
  ...props
}: TitleProps) => {
  return (
    <>
      <h2 className={cn("font-bold", className)} {...props}>
        {children}
      </h2>
      <Separator className={cn("lg:my-3", separatorClassName)} />
    </>
  );
};

export default Title;
