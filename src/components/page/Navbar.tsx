"use client";

import { Icons, SVGIconProps } from "@/components/Icons";
import Search from "@/components/page/Search";
import { Button, buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils/cn";
import { useScrollPosition } from "@/lib/utils/useScrollPosition";
import {
  CircleUserIcon,
  CodeSquareIcon,
  HomeIcon,
  LucideIcon,
  MailIcon,
  MenuIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnchorHTMLAttributes, useState } from "react";

type Link = {
  text?: string;
  link: string;
  icon: LucideIcon | React.ComponentType<SVGIconProps>;
};

export const navLinks = {
  logo: { link: "/", icon: Icons.iconSvg },
  home: { text: "Home", link: "/", icon: HomeIcon },
  about: { text: "About Me", link: "/about", icon: CircleUserIcon },
  projects: { text: "Projects", link: "/projects", icon: CodeSquareIcon },
  contact: { text: "Contact", link: "/contact", icon: MailIcon },
};

const progressEnabledPaths = ["/", "/about"];

const Navbar = () => {
  const pathname = usePathname();

  const { scrollY, scrollYProgress } = useScrollPosition();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const navDrawer = (
    <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="lg:hidden">
          <MenuIcon size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="my-4">
          <SheetTitle asChild>
            <Link href="/" className="text-center">
              <h5 className="font-bold">FADIGORGES.DEV</h5>
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col mt-8 gap-4">
          <SheetClose asChild></SheetClose>
          <NavLink link={navLinks.home} drawerLink />
          <NavLink link={navLinks.about} drawerLink />
          <NavLink link={navLinks.projects} drawerLink />
          <NavLink link={navLinks.contact} drawerLink />
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <nav className="fixed w-full z-40">
      <div
        className={cn(
          "relative page-container mt-0.5 lg:mt-1 px-4 py-2 lg:py-4 flex gap-2 items-center rounded-full border-foreground/5 overflow-hidden transition-[background-color,backdrop-filter]",
          scrollY !== 0 && "bg-background/85 backdrop-blur-md border"
        )}
      >
        {progressEnabledPaths.includes(pathname) && (
          <div
            className="absolute left-0 bottom-0 h-0.5 bg-primary/80"
            style={{ width: `${scrollYProgress * 100}%` }}
          />
        )}
        <NavLink link={navLinks.logo} className="inline-flex" />
        <NavLink link={navLinks.home} />
        <NavLink link={navLinks.about} />
        <NavLink link={navLinks.projects} />
        <NavLink link={navLinks.contact} />
        <Search className="ml-auto" />
        <ModeToggle />
        {navDrawer}
      </div>
    </nav>
  );
};

const NavLink = ({
  link,
  drawerLink = false,
  className,
  ...props
}: {
  link: Link;
  drawerLink?: boolean;
} & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const pathname = usePathname();
  const isActive =
    !link.text ||
    (link.link === "/"
      ? pathname === link.link
      : pathname.startsWith(link.link));

  return drawerLink ? (
    <SheetClose asChild>
      <Link
        href={link.link}
        className={cn(
          "flex justify-start items-center gap-4",
          isActive
            ? "text-primary dark:text-foreground font-bold"
            : "text-muted-foreground",
          className
        )}
        {...props}
      >
        <link.icon size={24} />
        <h6>{link.text}</h6>
      </Link>
    </SheetClose>
  ) : (
    <Link
      href={link.link}
      className={buttonVariants({
        variant: "ghost",
        size: link.text ? "sm" : "icon",
        className: cn(
          "hidden lg:inline-flex",
          link.text && "px-3",
          isActive ? "font-semibold" : "text-muted-foreground",
          className
        ),
      })}
      {...props}
    >
      {link.text ? <p>{link.text}</p> : <link.icon size={30} />}
    </Link>
  );
};

export default Navbar;
