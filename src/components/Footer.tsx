import logo from "@/assets/logos/logo1.png";

const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img src={logo} alt="DigiLabs" className="h-8" />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} DigiLabs21. All rights reserved.
        </p>
      </div>
      <div className="flex gap-4">
        {[
          { label: "Capabilities", href: "#services" },
          { label: "Case Studies", href: "#cases" },
          { label: "About the Founder", href: "#founder" },
        ].map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
