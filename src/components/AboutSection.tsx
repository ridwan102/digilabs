import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { LinkedinIcon, Podcast } from "lucide-react";
import selfImage from "@/assets/self.png";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="founder" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center">

          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">About the Founder</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 font-sans">
            <span className="text-gradient">The Strategic Edge: </span>
            {" "} Enterprise AI & Blockchain Infrastructure
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <img
                src={selfImage}
                alt="Ridwan"
                className="w-48 md:w-60 border-1 border-primary/30 shadow-lg rounded-b-2xl"
              />
            </div>

            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I partner with municipalities and enterprises to capture the full value of the digital economy. At <b>DigiLabs</b>, I combine industry insight with data science and award-winning blockchain expertise to solve infrastructure challenges.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                I architect the infrastructure for sustainable growth. From strategic roadmaps to production-grade deployment, I help organizations <b>scale their technical advantage</b> and thrive in a digital landscape.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                As the creator and host of the Bitcoinomics21 podcast, I translate complex technical mechanics into strategic insights for a global audience. 
                {/* This deep engagement with the digital asset space informs my work—bridging the gap between emerging technology and institutional strategy. */}
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://linkedin.com/in/ridwanalam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <LinkedinIcon className="w-5 h-5" />
                  LinkedIn
                </a>
                <a
                  href="https://www.bitcoinomics21.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  <Podcast className="w-5 h-5" />
                  Bitcoinomics21 Podcast
                </a>
              </div>
            </div>
          </div>
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