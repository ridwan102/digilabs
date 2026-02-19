import { motion } from "framer-motion";
import { ArrowRight, Award, Bitcoin, Building2, Rocket } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/90 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}>

            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Strategic Technology Consulting
            </p>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 font-sans">
              Data-Driven AI & Blockchain {" "}
              <span className="text-gradient">Strategy</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Architecting secure infrastructure for municipalities and forward-thinking enterprises.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-16">

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity text-base">

              Schedule a Discovery Call
              <ArrowRight size={18} />
            </a>
            <a
              href="#cases"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-3.5 rounded-lg font-medium hover:bg-secondary transition-colors text-base">

              View Case Studies
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-8">

            {[
            { icon: Building2, label: "Enterprise & Gov Strategy" },
            { icon: Award, label: "Awarded for Technical Innovation" },
            { icon: Bitcoin, label: "Host of Bitcoinomics21 Podcast" },
            ].
            map((item) =>
            <div key={item.label} className="flex items-center gap-3 text-muted-foreground">
                <item.icon size={20} className="text-primary" />
                <span className="text-sm">{item.label}</span>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>);

};

export default HeroSection;