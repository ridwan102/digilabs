const Footer = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} DigiLabs. All rights reserved.
      </p>
      <div className="flex gap-4">
        {[, "Services", "Founder", "Case Studies"].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase().replace(" ", "")}`}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            {l}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
