import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center">

          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">Our Mission</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 font-sans">
            Engineering the {" "}
            <span className="text-gradient">Intelligent Enterprise</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            We partner with forward-thinking municipalities and enterprises to capture the full value of the digital economy. DigiLabs combines deep industry insight with rigorous data science and award-winning blockchain expertise to solve our clients' most complex challenges.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            We do not just navigate digital transformation; we architect the infrastructure for sustainable growth. From strategic roadmap to production-grade deployment, we help organizations build the capabilities they need to thrive in a secure, decentralized future.
          </p>
        </motion.div>

        {/* Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">

          {[
          { number: "10+", label: "Projects Delivered" },
          { number: "5+", label: "Years Experience" },
          { number: "100%", label: "Client Satisfaction" }].
          map((stat) =>
          <div
            key={stat.label}
            className="bg-card border border-border rounded-xl p-8 text-center glow-emerald">

              <p className="text-4xl font-bold text-gradient mb-2 font-sans">{stat.number}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          )}
        </motion.div> */}
      </div>
    </section>);

};

export default AboutSection;