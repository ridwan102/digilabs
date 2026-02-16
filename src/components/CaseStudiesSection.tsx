import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Play } from "lucide-react";

const aiCases = [
  {
    tag: "Legal Technology Startup",
    title: "Legal Tech Document Intelligence",
    challenge: "Client needed to streamline legal document review and identify contractual similarities at scale.",
    solution: "Architected an AI-powered document comparison platform using semantic similarity analysis, delivering automated clustering, quantifiable similarity scoring, and automated black-lining of discrepancies.",
    impact: "Reduced document review time and enabled handling of more documents.",
    image: "https://www.digilabsai21.com/images/lawtech1.png",
  },
  {
    tag: "Government Technology Sector",
    title: "Social Intelligence Platform",
    challenge: "Agency required real-time insights from Congressional representatives' social media to inform strategic decision-making.",
    solution: "Developed AI platform for collecting and analyzing posts from X and BlueSky, implementing sentiment analysis and topic modeling.",
    impact: "Enabled trend identification and sentiment tracking.",
    image: "https://www.digilabsai21.com/images/govt.png",
  },
  {
    tag: "Transportation Technology",
    title: "Autonomous Vehicle Safety System",
    challenge: "Required real-time object detection for enhanced autonomous vehicle safety systems.",
    solution: "Implemented YOLO-based computer vision model for real-time detection of traffic signs, signals, and vehicles with high accuracy.",
    impact: "Achieved higher detection accuracy, enabling safer autonomous navigation.",
    github: "https://github.com/ridwan102/Autonomous_Vehicle_Object_Detector",
    demo: "https://www.youtube.com/watch?v=WGyilTbILEo",
    image: "https://www.digilabsai21.com/images/objectdetection.png",
  },
];

const blockchainCases = [
  {
    tag: "FinTech - Las Vegas Bitcoin Honorable Mention",
    title: "Privacy-Enhanced Bitcoin Transfer System",
    challenge: "Secure Bitcoin transfers with enhanced privacy features.",
    solution: "Developed mobile application integrating Lightning Network with steganography technology, enabling concealed Bitcoin token transfers within image files.",
    impact: "Award-winning solution recognized at Las Vegas Bitcoin Hackathon.",
    github: "https://github.com/cashucloak/cashu_cloak",
    demo: "https://www.youtube.com/watch?v=341GjWFwyPg&t=5s",
    image: "https://www.digilabsai21.com/images/cashucloak.png",
  },
  {
    tag: "E-Commerce & Retail - MIT Hackathon Winner",
    title: "Blockchain Authentication Platform",
    challenge: "Needed tamper-proof system for verifying product authenticity in the secondary market.",
    solution: "Built blockchain-based mobile verification platform with Lightning Network payment integration, creating immutable authenticity records.",
    impact: "Reduced counterfeit products in marketplace and enabled instant cryptocurrency payments.",
    github: "https://github.com/YongERong/soles",
    demo: "https://www.youtube.com/watch?v=b6b3Zs_Ski0",
    image: "https://www.digilabsai21.com/images/soles.png",
  },
  {
    tag: "FinTech Innovation",
    title: "Decentralized Lending Platform",
    challenge: "Sought to democratize access to micro-loans using cryptocurrency infrastructure.",
    solution: "Architected decentralized lending platform leveraging Lightning Network for instant, low-fee Bitcoin micro-loans.",
    impact: "Enabled sub-second loan disbursement, expanding financial access to underserved markets.",
    github: "https://github.com/ridwan102/bitloan",
    demo: "https://www.youtube.com/watch?v=qzWmGha4p5U&t=3s",
    image: "https://www.digilabsai21.com/images/bitloan.png",
  },
];

interface CaseCardProps {
  c: (typeof aiCases)[0];
  i: number;
  inView: boolean;
}

const CaseCard = ({ c, i, inView }: CaseCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: 0.1 * i }}
    className="bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/30 transition-colors"
  >
    <div className="aspect-video overflow-hidden bg-secondary">
      <img
        src={c.image}
        alt={c.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
    </div>
    <div className="p-6">
      <span className="text-xs text-primary font-medium tracking-wide uppercase">{c.tag}</span>
      <h4 className="text-lg font-display font-semibold mt-2 mb-4">{c.title}</h4>
      <div className="space-y-3 text-sm text-muted-foreground">
        <p><span className="text-foreground font-medium">Challenge:</span> {c.challenge}</p>
        <p><span className="text-foreground font-medium">Solution:</span> {c.solution}</p>
        <p><span className="text-foreground font-medium">Impact:</span> {c.impact}</p>
      </div>
      {(c.github || c.demo) && (
        <div className="flex gap-3 mt-5">
          {c.github && (
            <a href={c.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-primary hover:opacity-80 transition-opacity">
              <ExternalLink size={14} /> Technical Details
            </a>
          )}
          {c.demo && (
            <a href={c.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-primary hover:opacity-80 transition-opacity">
              <Play size={14} /> Demo
            </a>
          )}
        </div>
      )}
    </div>
  </motion.div>
);

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cases" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">Client Success Stories</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Real-World <span className="text-gradient">Results</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Proven outcomes from our consulting engagements across diverse industries.
          </p>
        </motion.div>

        {/* AI Solutions */}
        <h3 className="text-2xl font-display font-semibold mb-8 text-center">AI Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {aiCases.map((c, i) => (
            <CaseCard key={c.title} c={c} i={i} inView={inView} />
          ))}
        </div>

        {/* Blockchain Solutions */}
        <h3 className="text-2xl font-display font-semibold mb-8 text-center">Blockchain Solutions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blockchainCases.map((c, i) => (
            <CaseCard key={c.title} c={c} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
