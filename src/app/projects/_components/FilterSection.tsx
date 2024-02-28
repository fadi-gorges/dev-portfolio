import { SVGIconProps } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils/cn";
import { CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FilterSection = ({
  name,
  values,
  state,
  setState,
}: {
  name: string;
  values: { [key: string]: React.ComponentType<SVGIconProps> };
  state: string[];
  setState: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const [open, setOpen] = useState(name === "Platforms");

  const handleToggle = (value: string) => {
    setState((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="space-y-2">
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          size="lg"
          className="w-full flex items-center justify-between px-3"
        >
          <h6 className="font-semibold">{name}</h6>
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-[rotate]",
              open ? "rotate-180" : ""
            )}
          />
          <span className="sr-only">Toggle {name}</span>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="flex flex-col gap-1">
          {Object.entries(values).map(([name, Icon]) => (
            <Toggle
              key={name}
              aria-label={name}
              className="pl-6 justify-start gap-3 text-muted-foreground"
              pressed={state.includes(name)}
              onPressedChange={() => handleToggle(name)}
            >
              {<Icon />}
              <small>{name}</small>
            </Toggle>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default FilterSection;
