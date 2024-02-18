import { cn } from "@/lib/utils/cn";
import { HTMLAttributes } from "react";

type MainProps = HTMLAttributes<HTMLDivElement>;

const Main = ({ className, children, ...props }: MainProps) => {
  return (
    <main className={cn("page-container main", className)} {...props}>
      {children}
    </main>
  );
};

export default Main;
