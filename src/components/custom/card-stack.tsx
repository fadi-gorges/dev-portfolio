import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils/cn";

type CardStackProps = React.HTMLAttributes<HTMLDivElement> & {
  cardClassName?: string;
  stackClassName?: string;
  hoverEffect?: boolean;
};

const CardStack = ({
  className,
  cardClassName,
  stackClassName,
  hoverEffect = false,
  ...props
}: CardStackProps) => {
  return (
    <div className={cn("group relative w-fit", className)}>
      <Card className={cn("", cardClassName)} {...props} />
      <div className="absolute left-0 top-2 w-full h-full space-y-2 lg:group-hover:top-3 lg:group-hover:space-y-3 transition-[top]">
        {Array.from({ length: 2 }, (_, i) => i + 1).map((i) => (
          <Card
            key={i}
            className={cn(
              `absolute top-0 left-1/2 -translate-x-1/2 h-full `,
              stackClassName
            )}
            style={{
              width: `${100 - 5 * i}%`,
              zIndex: -i,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CardStack;
