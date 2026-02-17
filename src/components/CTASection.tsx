import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Mail, Calendar } from "lucide-react";

const CTASection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32 bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center">

          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">The Next Step</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-sans">
            Scale your <span className="text-gradient">Technical</span> Advantage
          </h2>
          <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
            Schedule a briefing to align your strategic objectives with production-ready AI and decentralized financial infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:ridwan@digilabsai21.com"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity">

              <Calendar size={18} />
              Schedule a Discovery Call
              <ArrowRight size={18} />
            </a>
            {/* <a
              href="mailto:contact@digilabsai21.com"
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-3.5 rounded-lg font-medium hover:bg-secondary transition-colors">

              <Mail size={18} />
              Email Us
            </a> */}
          </div>
        </motion.div>
      </div>
    </section>);

};

export default CTASection;