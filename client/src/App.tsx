import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, 
  Target, 
  Activity, 
  HelpCircle, 
  Menu, 
  X, 
  Play,
  Cpu, 
  Eye, 
  Lock,
  Globe,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

// --- Components ---

const Nav = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (t: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const tabs = [
    { id: "story", label: "Our Story", icon: Shield },
    { id: "product", label: "Our Product", icon: Target },
    { id: "traction", label: "Traction", icon: Activity },
    { id: "faqs", label: "FAQs", icon: HelpCircle },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => setActiveTab("hero")}
        >
          <div className="w-8 h-8 bg-primary/20 rounded-sm flex items-center justify-center border border-primary/50 group-hover:bg-primary/40 transition-colors">
            <Target className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
          </div>
          <span className="font-display font-bold text-xl tracking-wider text-white">
            SHOT<span className="text-primary group-hover:text-white transition-colors">HAWK</span>
          </span>
        </div>

        {/* Desktop Tabs */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-300
                flex items-center gap-2
                ${activeTab === tab.id ? "text-white" : "text-neutral-400 hover:text-white"}
              `}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-primary/20 border border-primary/40 rounded-md shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <tab.icon className="w-4 h-4 relative z-10" />
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-white/10 bg-neutral-900 overflow-hidden"
          >
            <div className="p-4 flex flex-col gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsOpen(false);
                  }}
                  className={`
                    p-3 rounded-md text-left flex items-center gap-3
                    ${activeTab === tab.id ? "bg-primary/20 text-white border border-primary/40" : "text-neutral-400"}
                  `}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onExplore }: { onExplore: () => void }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-20" />
        <div className="absolute inset-0 bg-black/40 z-20" />
        <div className="absolute inset-0 z-10 w-full h-full overflow-hidden pointer-events-none">
           <iframe 
            src="https://player.vimeo.com/video/1062485498?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1" 
            className="w-[150%] h-[150%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover"
            frameBorder="0" 
            allow="autoplay; fullscreen" 
          />
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-20 z-30" />
      </div>

      <div className="relative z-40 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            System Online
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            REACT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-400 glitch-effect" data-text="NOW">
              NOW
            </span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-white/90 text-lg md:text-xl mb-10 leading-relaxed font-medium drop-shadow-lg">
            School shootings are serious, and so are we. Push one button, and our 
            product will provide an AI driven response in seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-red-600 text-white min-w-[180px] h-14 text-lg border border-red-400/50 shadow-[0_0_20px_rgba(239,68,68,0.4)]"
              onClick={onExplore}
            >
              <Play className="w-5 h-5 mr-2 fill-current" />
              Watch Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/20 bg-black/40 backdrop-blur-md hover:bg-white/10 text-white min-w-[180px] h-14 text-lg"
              onClick={onExplore}
            >
              Explore Intelligence
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-6 text-xs text-white/50 font-mono hidden md:block z-40">
        COORDS: 34.0522° N, 118.2437° W<br />
        STATUS: MONITORING<br />
        VER: 2.4.0-ALPHA
      </div>
    </section>
  );
};

const MissionVision = () => (
  <div className="container mx-auto px-6 py-12 border-y border-white/5">
    <div className="grid md:grid-cols-2 gap-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex gap-6 items-start"
      >
        <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
          <Rocket className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h4 className="text-xl font-display font-bold text-white mb-3">MISSION</h4>
          <p className="text-neutral-400 leading-relaxed">
            To eliminate the delay between threat detection and emergency response, 
            ensuring every school becomes a safe haven through advanced autonomous intelligence.
          </p>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex gap-6 items-start"
      >
        <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 shrink-0">
          <Globe className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h4 className="text-xl font-display font-bold text-white mb-3">VISION</h4>
          <p className="text-neutral-400 leading-relaxed">
            A world where proactive technology anticipates crisis before it occurs, 
            setting the global standard for public safety and threat prevention.
          </p>
        </div>
      </motion.div>
    </div>
  </div>
);

const OurStory = () => {
  return (
    <div className="container mx-auto px-6 py-24">
      <MissionVision />
      <div className="grid lg:grid-cols-2 gap-16 items-center mt-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-primary text-lg font-bold tracking-widest mb-2">ORIGIN</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              RESPOND IN SECONDS.
            </h3>
            <p className="text-neutral-400 text-lg leading-relaxed">
              We didn't build ShotHawk to be just another camera system. We built it to be a shield. 
              In a world where threats evolve instantly, reaction time is the difference between tragedy and safety.
            </p>
            <p className="text-neutral-400 text-lg leading-relaxed mt-4">
              Born from a need to protect our schools and public spaces, ShotHawk combines military-grade 
              computer vision with intuitive response protocols. We aren't just watching; we're anticipating.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 border border-white/10 rounded-lg bg-white/5">
              <div className="text-3xl font-display font-bold text-white mb-1">85%+</div>
              <div className="text-sm text-neutral-500">Detection Accuracy</div>
            </div>
            <div className="p-4 border border-white/10 rounded-lg bg-white/5">
              <div className="text-3xl font-display font-bold text-white mb-1">&lt;3s</div>
              <div className="text-sm text-neutral-500">Response Time</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-primary/20 rounded-xl blur-2xl" />
          <img 
            src="https://images.unsplash.com/photo-1517430816045-df4b7de8db2b?auto=format&fit=crop&q=80&w=2670" 
            alt="Team working" 
            className="relative rounded-xl border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </div>
    </div>
  );
};

const ProductCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <Card className="bg-neutral-900/50 border-white/10 hover:border-primary/50 transition-colors duration-300 group">
    <CardContent className="p-8">
      <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-xl font-display font-bold text-white mb-3">{title}</h3>
      <p className="text-neutral-400 leading-relaxed">
        {description}
      </p>
    </CardContent>
  </Card>
);

const OurProduct = () => {
  return (
    <div className="container mx-auto px-6 py-24">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-primary text-lg font-bold tracking-widest mb-2">TECHNOLOGY</h2>
        <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          THE S.P.O.T. SYSTEM
        </h3>
        <p className="text-neutral-400 text-lg">
          Combining computer vision, machine learning, and custom mechanics, our products - The BETA and SPOT - 
          are capable of delivering high-accuracy responses within seconds.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <ProductCard 
          icon={Eye}
          title="Computer Vision"
          description="Analyzing the data frame by frame to provide an accurate response. It doesn't just see; it understands context."
        />
        <ProductCard 
          icon={Cpu}
          title="Neural Prediction"
          description="Trained on thousands of scenarios to track movement and anticipate the shooter's next move before it happens."
        />
        <ProductCard 
          icon={Lock}
          title="Secure & Private"
          description="ShotHawk works on-edge. Data is processed locally to protect privacy and ensure zero-latency response."
        />
      </div>

      <div className="rounded-2xl border border-white/10 overflow-hidden bg-neutral-900/50">
        <div className="grid lg:grid-cols-2">
          <div className="p-12 flex flex-col justify-center">
            <h4 className="text-2xl font-display font-bold text-white mb-4">See It In Action</h4>
            <p className="text-neutral-400 mb-8">
              Watch how our system identifies, tracks, and alerts in real-time scenarios. 
              The video demonstration shows the raw output of our detection engine.
            </p>
            <div className="flex gap-4">
              <Button className="bg-white text-black hover:bg-neutral-200">
                <Play className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/5">
                Download Specs
              </Button>
            </div>
          </div>
          <div className="relative aspect-video lg:aspect-auto bg-black">
            <div className="absolute inset-0 flex items-center justify-center">
               <iframe 
                src="https://player.vimeo.com/video/1062485498?background=1" 
                className="w-full h-full absolute inset-0 opacity-60"
                frameBorder="0" 
                allow="autoplay; fullscreen" 
              />
              <div className="relative z-10 w-16 h-16 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-white ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const RollingLogos = () => {
  const logos = [
    "Fortress Bank Tank",
    "Venturewell E teams",
    "Bradley University",
    "Northwestern University",
    "University of Illinois Urbana Champaign",
    "SXSW",
    "ISC west",
    "ISC east",
    "TechCrunch",
    "Microsoft for startups",
    "Distillery Labs"
  ];

  return (
    <div className="w-full overflow-hidden bg-white/5 border-y border-white/10 py-10 relative">
      <div className="flex gap-16 animate-[scroll_40s_linear_infinite] w-max items-center">
        {[...logos, ...logos].map((logo, i) => (
          <div 
            key={i} 
            className="text-neutral-500 font-display font-bold text-2xl uppercase tracking-tighter whitespace-nowrap hover:text-primary transition-colors cursor-default"
          >
            {logo}
          </div>
        ))}
      </div>
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
    </div>
  );
};

const Traction = () => {
  return (
    <div className="py-24">
      <div className="container mx-auto px-6 mb-16">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-primary text-lg font-bold tracking-widest mb-2">VALIDATION</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              TRACTION & ANALYTICS
            </h3>
            <p className="text-neutral-400 text-lg mb-8">
              Our technology isn't just theoretical. We've rigorously tested our models against 
              diverse datasets and real-world simulation environments.
            </p>

            <div className="space-y-6">
              {[
                { label: "Model Accuracy", value: 87, color: "bg-primary" },
                { label: "False Positive Rate Reduction", value: 94, color: "bg-blue-500" },
                { label: "Response Speed Improvement", value: 99, color: "bg-emerald-500" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{stat.label}</span>
                    <span className="text-white font-bold">{stat.value}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${stat.value}%` }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                      className={`h-full ${stat.color}`} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Card className="bg-neutral-900 border-white/10">
            <CardContent className="p-6">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                Deployment Timeline
              </h4>
              <div className="space-y-4 border-l border-white/10 ml-2 pl-6">
                <div className="relative">
                  <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-primary" />
                  <div className="text-sm text-primary font-bold mb-1">PHASE 1 - COMPLETED</div>
                  <div className="text-white font-bold">Alpha Testing</div>
                  <div className="text-xs text-neutral-500">Core algorithm validation</div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-white border border-neutral-500" />
                  <div className="text-sm text-neutral-300 font-bold mb-1">PHASE 2 - ACTIVE</div>
                  <div className="text-white font-bold">Beta Deployment</div>
                  <div className="text-xs text-neutral-500">Pilot programs in select facilities</div>
                </div>
                <div className="relative">
                  <div className="absolute -left-[29px] top-1 w-3 h-3 rounded-full bg-white/20" />
                  <div className="text-sm text-neutral-500 font-bold mb-1">PHASE 3</div>
                  <div className="text-white font-bold">Wide Scale Release</div>
                  <div className="text-xs text-neutral-500">National availability</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <RollingLogos />
    </div>
  );
};

const FAQs = () => {
  const faqs = [
    { q: "How does ShotHawk respect student privacy?", a: "ShotHawk processes all video feeds locally on the Edge device ('The SPOT'). No video leaves the premises unless a threat is positively identified. Routine footage is overwritten and never stored on cloud servers." },
    { q: "What is the installation process?", a: "Our system is designed for retrofit. It connects to existing IP camera infrastructure or can be deployed as standalone units. A typical school installation takes 1-2 days with zero downtime for security systems." },
    { q: "Does it work in low light?", a: "Yes. Our computer vision models are trained on IR (Infrared) and low-light footage to ensure 24/7 protection, even in poorly lit corridors or outdoor areas at night." },
    { q: "Can it distinguish between real weapons and toys?", a: "Our 'Neural Prediction' engine is specifically trained to identify weapon signatures, distinct from phones, toys, or other handheld objects, significantly reducing false positives compared to traditional motion sensors." },
  ];

  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-primary text-center text-lg font-bold tracking-widest mb-2">SUPPORT</h2>
        <h3 className="text-4xl md:text-5xl text-center font-display font-bold text-white mb-12">
          FREQUENTLY ASKED
        </h3>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border border-white/10 rounded-lg bg-neutral-900 px-4 data-[state=open]:border-primary/50 transition-colors">
              <AccordionTrigger className="text-lg font-medium text-white hover:text-primary hover:no-underline py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-neutral-400 pb-6 text-base leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="border-t border-white/10 bg-black py-12">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary/20 rounded-sm flex items-center justify-center border border-primary/50">
          <Target className="w-5 h-5 text-primary" />
        </div>
        <span className="font-display font-bold text-xl tracking-wider text-white">
          SHOT<span className="text-primary">HAWK</span>
        </span>
      </div>
      <div className="text-neutral-500 text-sm">
        © 2026 ShotHawk AI. All systems operational.
      </div>
    </div>
  </footer>
);

export default function App() {
  const [activeTab, setActiveTab] = useState("hero");

  const renderContent = () => {
    switch(activeTab) {
      case "story": return <OurStory />;
      case "product": return <OurProduct />;
      case "traction": return <Traction />;
      case "faqs": return <FAQs />;
      default: return (
        <>
          <OurStory />
          <OurProduct />
          <Traction />
          <FAQs />
        </>
      );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-white">
      <Nav activeTab={activeTab} setActiveTab={setActiveTab} />
      <Hero onExplore={() => setActiveTab("product")} />
      
      <main className="relative z-10 bg-background shadow-[0_-20px_50px_rgba(0,0,0,1)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
