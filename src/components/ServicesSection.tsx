import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Link2, Search, Landmark } from "lucide-react";

const services = [
{
  icon: Brain,
  title: "Enterprise AI & Data Science",
  desc: "I architect custom AI solutions tailored to your business needs. I build production-ready models that turn your proprietary data into a strategic asset.",
  items: ["Private LLM Agents & Semantic Search", "Predictive Modeling & Risk Analytics", "Automated Document Intelligence"]
},
{
  icon: Link2,
  title: "Blockchain Infrastructure",
  desc: "End-to-end solutions from architecture design to deployment. I specialize in building secure payment rails and apps on the Bitcoin and Lightning networks.",
  items: ["Lightning Network Payment Rails", "Secure Smart Contract Architecture", "Decentralized applications (dApp)"]
},
{
  icon: Landmark,
  title: "Municipal & Policy Strategy",
  desc: "I architect the technical and legislative frameworks required to integrate decentralized technology into public and private institutions.",
  items: ["Digital Asset Governance", "Political Technical Strategy", "Treasury Strategy"]
},

// {
//   icon: Search,
//   title: "Technical Due Diligence",
//   desc: "Expert evaluation of AI and Blockchain systems, architecture reviews, and strategic technology assessments.",
//   items: ["Technology stack evaluation", "Code & architecture review", "Feasibility analysis", "Risk assessment & mitigation"]
// },
// {
//   icon: GraduationCap,
//   title: "Advisory & Training",
//   desc: "Strategic guidance and hands-on training to upskill your team and establish internal AI and Blockchain capabilities.",
//   items: ["Technology roadmap planning", "Team training & workshops", "Best practices implementation", "Ongoing technical support"]
// }
];


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

          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">Core Capabilities</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-sans">
            Secure Infrastructure & {" "}
            <span className="text-gradient">Intelligent Systems</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            I architect the technical foundation to bridge the gap between corporate data science and decentralized finance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
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