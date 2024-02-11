"use client";

import Icons from "@/components/Icons";
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
  href: string;
  icon: LucideIcon | ((props: any) => JSX.Element);
};

const links = {
  logo: { href: "/", icon: Icons.iconSvg },
  home: { text: "Home", href: "/", icon: HomeIcon },
  about: { text: "About Me", href: "/about", icon: CircleUserIcon },
  projects: { text: "Projects", href: "/projects", icon: CodeSquareIcon },
  contact: { text: "Contact", href: "/contact", icon: MailIcon },
};

const Navbar = () => {
  const pathname = usePathname();

  const { scrollY } = useScrollPosition();

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
          <NavLink link={links.home} drawerLink />
          <NavLink link={links.about} drawerLink />
          <NavLink link={links.projects} drawerLink />
          <NavLink link={links.contact} drawerLink />
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <nav className="fixed w-full z-40">
      <div
        className={cn(
          "page-container mt-0.5 lg:mt-1 px-4 lg:px-10 py-2 lg:py-4 flex gap-2 items-center rounded-full border-foreground/5 transition",
          scrollY !== 0 && "bg-background/85 backdrop-blur-md border"
        )}
      >
        <NavLink link={links.logo} className="flex" />
        <NavLink link={links.home} className="text-foreground" />
        <NavLink link={links.about} className="ml-auto" />
        <NavLink link={links.projects} />
        <NavLink link={links.contact} />
        <ModeToggle className="ml-auto lg:ml-0" />
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
    (link.href === "/"
      ? pathname === link.href
      : pathname.startsWith(link.href));

  return drawerLink ? (
    <SheetClose asChild>
      <Link
        href={link.href}
        className={cn(
          "flex justify-start items-center gap-4",
          isActive
            ? "text-primary dark:text-foreground font-bold"
            : "text-foreground/60",
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
      href={link.href}
      className={cn(
        buttonVariants({
          variant: "ghost",
          size: link.text ? "default" : "icon",
        }),
        "hidden lg:inline-flex",
        link.text && "px-3",
        isActive ? "font-semibold" : "text-foreground/60",
        className
      )}
      {...props}
    >
      {link.text ? <p>{link.text}</p> : <link.icon size={30} />}
    </Link>
  );
};

export default Navbar;
