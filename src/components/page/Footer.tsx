import { Icons, MonoIcons } from "@/components/Icons";

const Footer = () => {
  return (
    <footer className="py-8 lg:py-10 bg-foreground/5">
      <div className="page-container flex items-center gap-5">
        <Icons.iconSvg size={40} />
        <div className="flex-1">
          <h6 className="font-semibold">FadiGorges.dev</h6>
          <p className="text-muted-foreground">Software Engineer & Developer</p>
        </div>
        {[
          {
            href: "https://www.linkedin.com/in/fadi-gorges",
            icon: MonoIcons.linkedin,
          },
          { href: "https://github.com/fadi-gorges", icon: MonoIcons.github },
        ].map((link) => (
          <a key={link.href} href={link.href} target="_blank">
            <link.icon
              size={30}
              className="transition-[color,filter,scale] hover:text-primary hover:drop-shadow-[0_3px_.8px_rgba(0,0,0,0.25)] dark:hover:drop-shadow-[0_3px_.8px_rgba(255,255,255,0.15)] active:scale-90"
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
