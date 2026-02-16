import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Link2, Search, GraduationCap } from "lucide-react";

const services = [
{
  icon: Brain,
  title: "AI Strategy & Implementation",
  desc: "Custom AI solutions including NLP, LLM integration, sentiment analysis, and neural network development tailored to your business needs.",
  items: ["Document processing & semantic analysis", "Custom LLM & chatbot development", "Predictive modeling & analytics", "Computer vision & object detection"]
},
{
  icon: Link2,
  title: "Blockchain Development",
  desc: "End-to-end Blockchain solutions from architecture design to deployment, specializing in Bitcoin Lightning Network and decentralized applications.",
  items: ["Smart contract development", "Lightning Network integration", "Decentralized application (dApp) development", "Cryptocurrency payment systems"]
},
{
  icon: Search,
  title: "Technical Due Diligence",
  desc: "Expert evaluation of AI and Blockchain systems, architecture reviews, and strategic technology assessments.",
  items: ["Technology stack evaluation", "Code & architecture review", "Feasibility analysis", "Risk assessment & mitigation"]
},
{
  icon: GraduationCap,
  title: "Advisory & Training",
  desc: "Strategic guidance and hands-on training to upskill your team and establish internal AI and Blockchain capabilities.",
  items: ["Technology roadmap planning", "Team training & workshops", "Best practices implementation", "Ongoing technical support"]
}];


const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 bg-card" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16">

          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">Consulting Services</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-sans">
            Solutions Tailored to Your{" "}
            <span className="text-gradient">Strategic Objectives</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We partner with forward-thinking organizations to implement cutting-edge AI and Blockchain solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) =>
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 * i }}
            className="bg-background border border-border rounded-xl p-8 hover:border-primary/30 transition-colors group">

              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-sans">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{service.desc}</p>
              <ul className="space-y-2">
                {service.items.map((item) =>
              <li key={item} className="flex items-start gap-2 text-sm text-secondary-foreground">
                    <span className="text-primary mt-1 text-xs">●</span>
                    {item}
                  </li>
              )}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default ServicesSection;