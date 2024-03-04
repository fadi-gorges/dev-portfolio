import { cn } from "@/lib/utils/cn";

type SectionTitleProps = React.HTMLAttributes<HTMLHeadingElement>;

const SectionTitle = ({ className, ...props }: SectionTitleProps) => {
  return (
    <h3
      className={cn(
        "in-view text-primary font-bold [&:not(.show)]:opacity-0 transition-opacity duration-300",
        className
      )}
      {...props}
    />
  );
};

export default SectionTitle;
