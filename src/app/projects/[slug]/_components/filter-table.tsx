import { TableCell, TableRow } from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const FilterIcon = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger className="hover:cursor-default">
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <small>{title}</small>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export const FilterTableRow = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <TableRow className="border-0 hover:bg-transparent">
      <TableCell className="p-0 font-medium w-24 border-r">{title}</TableCell>
      <TableCell className="py-3">{children}</TableCell>
    </TableRow>
  );
};
