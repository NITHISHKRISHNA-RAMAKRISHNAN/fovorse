import { 
  ArrowRight, BarChart3, Globe, Lightbulb, Users, Zap, 
  Target, TrendingUp, Search, Map, Trophy, CheckCircle2,
  ChevronDown, Mail, Phone, MapPin, BrainCircuit, Code, LineChart, Megaphone, Cpu, Plus, Minus
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import LiveBackground from "../components/LiveBackground";

export default function Home() {
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What services do you provide?",
      a: "We provide end-to-end digital marketing, conversion-focused web development, AI marketing automation, market research, and dedicated project staffing."
    },
    {
      q: "How do you help businesses grow?",
      a: "We use a data-driven approach starting with deep market research, followed by custom strategy creation, agile execution, and continuous optimization based on performance analytics."
    },
    {
      q: "Do you provide project support?",
      a: "Yes, we offer dedicated project teams and talent solutions to act as an extension of your internal team, ensuring seamless execution of growth strategies."
    },
    {
      q: "How do I get started?",
      a: "You can start by booking a free strategy session with our experts. We'll audit your current setup and discuss potential growth opportunities tailored to your business."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-light">
      {/* 1. Hero Section */}
      <section id="home" className="relative bg-brand-dark text-white min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark to-[#1e3a8a] opacity-90" />
          <LiveBackground />
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-accent/20 blur-3xl mix-blend-screen" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-accent-light/10 blur-3xl mix-blend-screen" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-8 leading-tight">
              We don't just run campaigns <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-light to-white">
                we create demands
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
              Helping businesses scale with digital marketing, conversion-focused web development, and data-driven insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeUp}>
            <h2 className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-3">About Us</h2>
            <h3 className="text-4xl font-serif font-bold text-brand-dark mb-6">Modern Marketing & Analytics</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              We are a collective of strategists, analysts, and growth engineers dedicated to scaling ambitious businesses. We bridge the gap between creative marketing and hard business analytics to build sustainable growth engines tailored to your specific market dynamics.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Target className="w-8 h-8" />, title: "Strategic Digital Marketing" },
              { icon: <BarChart3 className="w-8 h-8" />, title: "Strategic Intelligence" },
              { icon: <TrendingUp className="w-8 h-8" />, title: "Business Growth Consulting" },
              { icon: <Code className="w-8 h-8" />, title: "Conversion-Focused Web Dev" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-brand-light p-8 rounded-2xl text-center border border-gray-100"
              >
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-brand-accent shadow-sm mb-6">
                  {item.icon}
                </div>
                <h4 className="font-bold text-brand-dark">{item.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section id="services" className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeUp}>
            <h2 className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-3">Our Services</h2>
            <h3 className="text-4xl font-serif font-bold text-brand-dark mb-6">Comprehensive Solutions</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Megaphone className="w-8 h-8" />,
                title: "Digital Marketing",
                items: ["Social Media Marketing", "Creative & Content Strategy", "SEO", "Paid Campaigns"]
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Web Development",
                items: ["Conversion-focused websites", "High-performing landing pages", "E-commerce solutions", "Performance optimization"]
              },
              {
                icon: <Cpu className="w-8 h-8" />,
                title: "AI Automation",
                items: ["AI-based automation", "Smart campaign optimization", "Predictive analytics", "Personalization engines"]
              },
              {
                icon: <LineChart className="w-8 h-8" />,
                title: "Market Research & Analytics",
                items: ["Data insights", "BI reporting", "Performance analysis", "Competitor benchmarking"]
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Staffing & Project Support",
                items: ["Dedicated project teams", "Talent solutions", "Growth support", "Interim leadership"]
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-light flex items-center justify-center mb-6 text-brand-accent">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold text-brand-dark mb-4">{service.title}</h4>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Growth Framework */}
      <section id="Approach" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeUp}>
            <h2 className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-3">Methodology</h2>
            <h3 className="text-4xl font-serif font-bold text-brand-dark mb-6">Our Growth Approach</h3>
            <p className="text-gray-600 text-lg">A systematic 5-step process to scale your business predictably.</p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
              {[
                { step: "01", title: "Research", icon: <Search className="w-6 h-6" />, desc: "Deep market & competitor analysis" },
                { step: "02", title: "Analytics", icon: <BarChart3 className="w-6 h-6" />, desc: "Data auditing & opportunity mapping" },
                { step: "03", title: "Strategy", icon: <Map className="w-6 h-6" />, desc: "Custom growth roadmap creation" },
                { step: "04", title: "Action", icon: <Zap className="w-6 h-6" />, desc: "Agile execution & optimization" },
                { step: "05", title: "Results", icon: <Trophy className="w-6 h-6" />, desc: "Measurable ROI & scaling" }
              ].map((phase, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="w-24 h-24 rounded-full bg-white flex flex-col items-center justify-center mb-6 shadow-lg border-4 border-brand-light text-brand-accent">
                    {phase.icon}
                    <span className="text-xs font-bold mt-1 text-brand-dark">{phase.step}</span>
                  </div>
                  <h4 className="text-xl font-bold text-brand-dark mb-2">{phase.title}</h4>
                  <p className="text-gray-500 text-sm">{phase.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Strengths Section */}
      <section id="strengths" className="py-24 bg-brand-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeUp}>
            <h2 className="text-brand-accent-light font-semibold tracking-wider uppercase text-sm mb-3">Why Choose Us</h2>
            <h3 className="text-4xl font-serif font-bold mb-6">Key Strengths</h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Target className="w-8 h-8" />, title: "Strategy-First Approach" },
              { icon: <BarChart3 className="w-8 h-8" />, title: "Data-Driven Marketing" },
              { icon: <BrainCircuit className="w-8 h-8" />, title: "AI-Powered Solutions" },
              { icon: <TrendingUp className="w-8 h-8" />, title: "Business-Focused Consulting" },
              { icon: <Users className="w-8 h-8" />, title: "Dedicated Project Support" }
            ].map((strength, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl flex items-center gap-6 hover:bg-white/10 transition-colors"
              >
                <div className="text-brand-accent-light shrink-0">
                  {strength.icon}
                </div>
                <h4 className="text-lg font-bold">{strength.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Performance / Results Section */}
      <section id="results" className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeUp}>
            <h2 className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-3">Our Impact</h2>
            <h3 className="text-4xl font-serif font-bold text-brand-dark mb-6">Performance & Results</h3>
            <p className="text-gray-600 text-lg">We measure our success by the growth of your business.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { metric: "Max", label: "Traffic Growth" },
              { metric: "High", label: "Lead Generation" },
              { metric: "Max", label: "Conversion Rates" },
              { metric: "High", label: "ROI" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-brand-dark mb-2">{stat.metric}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col sm:flex-row"
              >
                <div className="sm:w-2/5 bg-gray-200 aspect-video sm:aspect-auto">
                  <img src={`https://picsum.photos/seed/casestudy${item}/600/400`} alt="Case Study" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8 sm:w-3/5 flex flex-col justify-center">
                  <div className="text-sm font-bold text-brand-accent mb-2">CASE STUDY</div>
                  <h4 className="text-xl font-bold text-brand-dark mb-3">Conversion based web development</h4>
                  <p className="text-gray-600 mb-4">How we implemented AI-driven strategies and analytics to make higher conversion results.</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Try Before / Strategy Session Section */}
      <section id="strategy" className="py-24 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Know your demand today</h2>
            <p className="text-xl text-brand-accent-light mb-10 max-w-2xl mx-auto">
              Ready to see what Strategic Intelligence can do for your business? Let's get strated.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-16" {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-bold text-brand-dark text-lg">{faq.q}</span>
                  {openFaq === idx ? (
                    <Minus className="w-5 h-5 text-brand-accent shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-brand-accent shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 bg-white text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Contact Section */}
      <section id="contact" className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center max-w-3xl mx-auto mb-16" {...fadeUp}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-6">Let’s Build Your Growth Strategy</h2>
            <p className="text-gray-600 text-lg">Reach us, to know your potential atleast by today.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col items-center text-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center border border-gray-100 text-brand-accent mb-6">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">Email Us</h3>
              <p className="text-gray-600 leading-relaxed">fovorse@gmail.com</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center text-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center border border-gray-100 text-brand-accent mb-6">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">Call Us</h3>
              <p className="text-gray-600 leading-relaxed">+91 63831 20945<br />Mon-Fri, 9am - 6pm IST</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center text-center bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
            >
              <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center border border-gray-100 text-brand-accent mb-6">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-brand-dark mb-2">Our Headquarters</h3>
              <p className="text-gray-600 leading-relaxed">India</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
