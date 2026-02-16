import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
{ label: "Home", href: "#home" },
{ label: "About", href: "#about" },
{ label: "Services", href: "#services" },
{ label: "Case Studies", href: "#cases" },
{ label: "Contact", href: "#contact" }];


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="#home" className="text-xl font-bold text-gradient font-sans">
          DigiLabs
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors">

              {link.label}
            </a>
          )}
          <a
            href="#contact"
            className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2 rounded-lg hover:opacity-90 transition-opacity">

            Schedule Consultation
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}>

          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-card border-b border-border overflow-hidden">

            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) =>
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors">

                  {link.label}
                </a>
            )}
              <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-sm font-medium bg-primary text-primary-foreground px-5 py-2 rounded-lg text-center hover:opacity-90 transition-opacity">

                Schedule Consultation
              </a>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

};

export default Navbar;