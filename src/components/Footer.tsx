const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} DigiLabs. All rights reserved.
      </p>
      <div className="flex gap-4">
        {[
          { label: "Capabilities", href: "#services" },
          { label: "Case Studies", href: "#cases" },
          { label: "The Founder", href: "#founder" },
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
