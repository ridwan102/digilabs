import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Play } from "lucide-react";
import objectdetectionpic from "@/assets/objectdetection.png";
import bitloanpic from "@/assets/bitloan.png";
import solespic from "@/assets/soles.png";
import cashucloakpic from "@/assets/cashucloak.png";
import govtpic from "@/assets/govt.png";
import lawtechpic from "@/assets/lawtech1.png";
import nn from "@/assets/nn1.jpg";
import zohran from "@/assets/zohran.png";
import general from "@/assets/general3.png";

const aiCases = [
{
  tag: "Legal Technology Sector",
  title: "Legal Tech Document Intelligence",
  objective: "Streamline high-volume contractual review and similarity detection.",
  architecture: "Engineered a semantic similarity engine using NLP to automate document clustering and quantifiable discrepancy analysis.",
  impact: "Significantly expanded document processing capacity while reducing manual review cycles through automated black-lining and scoring.",
  image: lawtechpic
},
{
  tag: "Government Technology Sector",
  title: "Social Intelligence & Legislative Analytics",
  objective: "Provide real-time, data-driven insights into legislative discourse to inform strategic decision-making.",
  architecture: "Engineered a multi-source ingestion engine for X and BlueSky, utilizing advanced NLP for sentiment analysis and latent Dirichlet allocation (LDA) topic modeling.",
  impact: "Delivered a comprehensive legislative sentiment tracker, allowing for the early identification of emerging policy trends and shifting political narratives.",
  image: govtpic
},
{
  tag: "Enterprise Data Science & Predictive Analytics",
  title: "Scalable Risk & Retention Modeling",
  objective: "Architect high-impact predictive models to optimize marketing efficiency and lead conversion for a national insurance carrier.",
  architecture: "Engineered advanced models including a Real-Time Bidding GLM, a Logistic Regression model for lead transfers, and a Random Forest Classifier integrated with NLP techniques.",
  impact: "Generated $23 million in profit, achieved an 80% increase in CTR with a 47% reduction in CAC, and reached 98% accuracy in claims liability identification through rigorous A/B testing and cross-functional leadership.",
  image: general
},
// {
//   tag: "Transportation Technology",
//   title: "Autonomous Vehicle Safety System",
//   architecture: "Required real-time object detection for enhanced autonomous vehicle safety systems.",
//   architecture: "Implemented YOLO-based computer vision model for real-time detection of traffic signs, signals, and vehicles with high accuracy.",
//   impact: "Achieved higher detection accuracy, enabling safer autonomous navigation.",
//   github: "https://github.com/ridwan102/Autonomous_Vehicle_Object_Detector",
//   demo: "https://www.youtube.com/watch?v=WGyilTbILEo",
//   image: objectdetectionpic
// }
];

const municipalCases = [
{
  tag: "Public Sector & Financial Infrastructure",
  title: "Municipal Bitcoin Strategy & Utility Integration",
  objective: "Advise municipal leadership on Bitcoin integration, bridging the gap between strategic reserve policy and practical utility applications.",
  architecture: "Developed a legislative roadmap for a Municipal Bitcoin Strategic Reserve, supplemented by a secondary framework for Bitcoin-integrated utility payment systems.",
  impact: "Presented a blueprint to the Mayor and City Council, establishing a model for municipal digital asset treasury and public payment rails.",
  presentation: "https://www.youtube.com/watch?v=4IoVJgnI81s&t=2s",
  image: nn
},
{
  tag: "Civic Technology & Public Advocacy",
  title: "Strategic Recruitment & Endorsement Platform",
  objective: "Architect a custom digital platform to demonstrate technical capability and secure institutional support for a high-profile New York City legislative transition.",
  architecture: "Engineered a secure web infrastructure to manage recruitment workflows and public endorsements as a proof of concept for civic technology.",
  impact: "Mobilized 60 individual and organizational endorsements, demonstrating the strategic intersection of technical engineering and public advocacy.",
  website: "https://www.zohranhireridwan.com/",
  github: "https://github.com/ridwan102/zohran-mamdani-application",
  image: zohran
}
];

const blockchainCases = [
{
  tag: "FinTech & Privacy Engineering - Honorable Mention",
  title: "Secure Bitcoin Infrastructure",
  objective: "Architect a high-privacy Bitcoin transfer system using advanced cryptographic and steganographic protocols.",
  architecture: "Engineered a mobile application integrating the Lightning Network with steganography to enable concealed Bitcoin token transfers within digital image assets.",
  impact: "Awarded Honorable Mention at the Las Vegas Bitcoin Hackathon for pioneering privacy-enhanced Bitcoin scaling solutions.",
  github: "https://github.com/cashucloak/cashu_cloak",
  demo: "https://www.youtube.com/watch?v=341GjWFwyPg&t=5s",
  image: cashucloakpic
},
{
  tag: "Supply Chain & Digital Provenance - Winner",
  title: "Blockchain Authentication Infrastructure",
  objective: "Architect a tamper-proof verification system to ensure product authenticity and secure asset transfer.",
  architecture: "Engineered a blockchain-integrated mobile platform utilizing the Lightning Network to create immutable provenance records and facilitate instant payments.",
  impact: "Awarded First Place at the MIT Blockchain Hackathon for developing a scalable solution to eliminate counterfeit friction and streamline peer-to-peer commerce.",
  github: "https://github.com/YongERong/soles",
  demo: "https://www.youtube.com/watch?v=b6b3Zs_Ski0",
  image: solespic
},
// {
//   tag: "FinTech Innovation",
//   title: "Decentralized Lending Platform",
//   objective: "Sought to democratize access to micro-loans using cryptocurrency infrastructure.",
//   architecture: "Architected decentralized lending platform leveraging Lightning Network for instant, low-fee Bitcoin micro-loans.",
//   impact: "Enabled sub-second loan disbursement, expanding financial access to underserved markets.",
//   github: "https://github.com/ridwan102/bitloan",
//   demo: "https://www.youtube.com/watch?v=qzWmGha4p5U&t=3s",
//   image: bitloanpic
// }
];


interface CaseStudy {
  tag: string;
  title: string;
  objective: string;
  architecture: string;
  impact: string;
  image: string;
  github?: string;
  demo?: string;
  presentation?: string;
  website?: string;
}

interface CaseCardProps {
  c: CaseStudy;
  i: number;
  inView: boolean;
}

const CaseCard = ({ c, i, inView }: CaseCardProps) =>
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.1 * i }}
  className="bg-card border border-border rounded-xl overflow-hidden group hover:border-primary/30 transition-colors">

    {(c.presentation || c.demo || c.website) ? (
      <a href={c.presentation || c.demo || c.website} target="_blank" rel="noopener noreferrer" className="aspect-video overflow-hidden bg-secondary block cursor-pointer">
        <img
          src={c.image}
          alt={c.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy" />
      </a>
    ) : (
      <div className="aspect-video overflow-hidden bg-secondary">
        <img
          src={c.image}
          alt={c.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy" />
      </div>
    )}
    <div className="p-6">
      <span className="text-xs text-primary font-medium tracking-wide uppercase">{c.tag}</span>
      <h4 className="text-lg font-semibold mt-2 mb-4 font-sans">{c.title}</h4>
      <div className="space-y-3 text-sm text-muted-foreground">
        <p><span className="text-foreground font-medium">Objective:</span> {c.objective}</p>
        <p><span className="text-foreground font-medium">Architecture:</span> {c.architecture}</p>
        <p><span className="text-foreground font-medium">Impact:</span> {c.impact}</p>
      </div>
      {(c.demo || c.presentation || c.website || c.github) &&
    <div className="flex gap-3 mt-5">
          {c.demo &&
      <a href={c.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-primary hover:opacity-80 transition-opacity">
              <Play size={14} /> Demo
            </a>
      }
          {c.presentation &&
      <a href={c.presentation} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-primary hover:opacity-80 transition-opacity">
              <Play size={14} /> Presentation
            </a>
      }
          {c.website &&
      <a href={c.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-primary hover:opacity-80 transition-opacity">
              <ExternalLink size={14} /> Website
            </a>
      }
          {c.github &&
      <a href={c.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-primary hover:opacity-80 transition-opacity">
              <ExternalLink size={14} /> Technical Details
            </a>
      }
        </div>
    }
    </div>
  </motion.div>;


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
          className="text-center mb-16">

          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">Impact & Execution</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-sans">
            Real-World <span className="text-gradient">Results</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            From municipal Bitcoin strategy to enterprise-scale AI, we deliver technical solutions for complex institutional challenges.
          </p>
        </motion.div>

        {/* AI Solutions */}
        <h3 className="text-2xl font-semibold mb-8 text-center font-sans">Enterprise AI & Data Science</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {aiCases.map((c, i) =>
          <CaseCard key={c.title} c={c} i={i} inView={inView} />
          )}
        </div>

        {/* Municipal Solutions */}
        <h3 className="text-2xl font-semibold mb-8 text-center font-sans">Municipal & Policy Strategy</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {municipalCases.map((c, i) =>
          <CaseCard key={c.title} c={c} i={i} inView={inView} />
          )}
        </div>

        {/* Blockchain Solutions */}
        <h3 className="text-2xl font-semibold mb-8 text-center font-sans">Blockchain Infrastructure</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blockchainCases.map((c, i) =>
          <CaseCard key={c.title} c={c} i={i} inView={inView} />
          )}
        </div>
      </div>
    </section>);

};

export default CaseStudiesSection;