import { Filter } from "@/app/projects/ProjectList";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { Toggle } from "@/components/ui/toggle";
import { CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { ChevronsUpDown } from "lucide-react";

const FilterSection = ({
  name,
  values,
  state,
  setState,
}: {
  name: string;
  values: Filter[];
  state: Filter[];
  setState: React.Dispatch<React.SetStateAction<Filter[]>>;
}) => {
  const handleToggle = (value: Filter) => {
    setState((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  return (
    <Collapsible defaultOpen={name === "Platforms"} className="space-y-2">
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="w-full flex items-center justify-between"
        >
          <h6 className="font-semibold">{name}</h6>
          <ChevronsUpDown className="h-4 w-4" />
          <span className="sr-only">Toggle {name}</span>
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="flex flex-col gap-1">
          {values.map((value) => (
            <Toggle
              key={value.name}
              aria-label={value.name}
              className="pl-6 justify-start gap-3 text-muted-foreground"
              pressed={state.includes(value)}
              onPressedChange={() => handleToggle(value)}
            >
              <value.icon />
              <small>{value.name}</small>
            </Toggle>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default FilterSection;
