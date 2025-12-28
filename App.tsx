
import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  PenTool, 
  Printer, 
  Camera, 
  Gift, 
  ChevronRight, 
  Menu, 
  X,
  Instagram,
  Facebook,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Heart,
  Smile
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'glass py-3 shadow-sm' : 'py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="w-10 h-10 bg-vibrant-pink rounded-full flex items-center justify-center text-white shadow-lg shadow-pink-200 group-hover:scale-110 transition-transform">
            <Smile size={24} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight uppercase leading-none text-[#2D3436]">Boas Novas</span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-vibrant-pink font-bold">Papelaria & Alegria</span>
          </div>
        </div>

        <div className="hidden md:flex space-x-10 items-center text-[11px] font-bold uppercase tracking-[0.15em]">
          <a href="#collections" className="hover:text-vibrant-pink transition-colors">Collections</a>
          <a href="#services" className="hover:text-vibrant-pink transition-colors">Services</a>
          <a href="#personalized" className="hover:text-vibrant-pink transition-colors">Personalized</a>
          <a href="#about" className="hover:text-vibrant-pink transition-colors">About</a>
          <button className="bg-vibrant-pink text-white px-7 py-3 rounded-full hover:bg-[#FF4F88] transition-all duration-300 shadow-md shadow-pink-100 flex items-center">
            Say Hello <Sparkles className="ml-2" size={14} />
          </button>
        </div>

        <button className="md:hidden text-[#2D3436]" onClick={() => setMobileMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 bg-pastel-pink z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button onClick={() => setMobileMenuOpen(false)} className="text-[#FF4F88]"><X size={36} /></button>
            </div>
            <div className="flex flex-col space-y-8 mt-12 text-4xl serif text-[#2D3436]">
              <a href="#collections" onClick={() => setMobileMenuOpen(false)}>Collections</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#personalized" onClick={() => setMobileMenuOpen(false)}>Personalized</a>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>Our Story</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Location</a>
            </div>
            <div className="mt-auto flex justify-center space-x-6 text-[#FF4F88]">
              <Instagram size={24} /><Facebook size={24} /><Mail size={24} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* Decorative Blobs */}
      <div className="blob bg-pink-200 w-[500px] h-[500px] top-[-100px] left-[-100px]"></div>
      <div className="blob bg-blue-200 w-[400px] h-[400px] bottom-[-50px] right-[-50px]"></div>
      <div className="blob bg-yellow-100 w-[300px] h-[300px] top-[20%] right-[10%]"></div>

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="z-10"
        >
          <div className="inline-flex items-center bg-white px-4 py-2 rounded-full shadow-sm mb-6">
            <Heart className="text-vibrant-pink mr-2" size={16} fill="#FF6B9D" />
            <span className="text-vibrant-pink font-bold tracking-widest uppercase text-[10px]">Happily Serving Since 1998</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-[100px] leading-[0.95] mb-8 font-black tracking-tight text-[#1A202C]">
            Colors of <br />
            <span className="italic serif text-vibrant-pink underline decoration-yellow-300">New Days</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-lg mb-10 font-medium leading-relaxed">
            Your daily dose of creativity! Premium stationery, personalized gifts, and expert services to brighten your school and workspace.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-vibrant-pink text-white px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-xl shadow-pink-200 flex items-center group">
              Start Shopping <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </button>
            <button className="bg-white border-2 border-vibrant-pink text-vibrant-pink px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-vibrant-pink hover:text-white transition-all duration-300">
              Personalize Now
            </button>
          </div>
        </motion.div>
        
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl shadow-blue-100 aspect-[4/5] md:aspect-square"
          >
            <img 
              src="https://images.unsplash.com/photo-1518107616985-bd48230d3b20?auto=format&fit=crop&q=80&w=1000" 
              alt="Happy Stationery" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          {/* Floating Element */}
          <motion.div 
            className="absolute -bottom-10 -left-10 z-20 bg-white p-8 rounded-3xl shadow-xl border-4 border-pastel-blue animate-float"
            initial={{ y: 20 }}
          >
            <div className="flex flex-col items-center text-center">
              <span className="text-5xl mb-2">✨</span>
              <p className="text-xs uppercase tracking-widest font-black text-[#2D3436]">New Planner<br/>Drops Today</p>
            </div>
          </motion.div>
          
          <div className="absolute top-1/2 -right-8 w-24 h-24 bg-yellow-300 rounded-full z-0 blur-2xl opacity-60"></div>
        </div>
      </div>
    </section>
  );
};

const CategoryGrid = () => {
  const categories = [
    { title: 'Art & Writing', desc: 'Calligraphy, markers & ink.', icon: <PenTool size={32} />, color: 'bg-pastel-pink', accent: 'text-pink-400', img: 'https://images.unsplash.com/photo-1456086272160-b28b0645b729?auto=format&fit=crop&q=80&w=600' },
    { title: 'Office Joy', desc: 'Desk organizers that smile.', icon: <ShoppingBag size={32} />, color: 'bg-pastel-mint', accent: 'text-teal-400', img: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=600' },
    { title: 'Back to School', desc: 'Bright essentials for students.', icon: <Smile size={32} />, color: 'bg-pastel-blue', accent: 'text-blue-400', img: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=600' },
    { title: 'Sweet Gifts', desc: 'Mugs, tags & love.', icon: <Gift size={32} />, color: 'bg-pastel-purple', accent: 'text-purple-400', img: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=600' },
  ];

  return (
    <section id="collections" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-vibrant-pink font-black tracking-widest uppercase text-xs mb-4 block">Categories</span>
            <h2 className="text-4xl md:text-6xl text-[#1A202C]">Brighten your day with <span className="text-blue-400 italic serif">essentials.</span></h2>
          </div>
          <button className="hidden md:block text-xs font-bold uppercase tracking-widest text-vibrant-pink border-b-4 border-pastel-pink pb-2 hover:border-vibrant-pink transition-all">
            See everything
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map((cat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -12 }}
              className={`group cursor-pointer rounded-[40px] p-6 transition-all duration-500 ${cat.color} hover:shadow-2xl hover:shadow-gray-100`}
            >
              <div className="aspect-[4/5] overflow-hidden mb-8 rounded-[30px] relative">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-sm text-vibrant-pink">
                  {cat.icon}
                </div>
              </div>
              <h3 className="text-2xl mb-2 font-bold text-[#2D3436]">{cat.title}</h3>
              <p className="text-sm text-gray-500 font-medium">{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceSection = () => {
  return (
    <section id="services" className="py-24 bg-pastel-mint relative overflow-hidden">
      <div className="blob bg-white w-64 h-64 top-[-32px] right-[-32px] opacity-100"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-[60px] overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800" 
                alt="Printing Services" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-yellow-300 text-[#1A202C] rounded-full p-8 flex flex-col justify-center text-center shadow-lg rotate-12">
              <span className="text-4xl font-black mb-1">Wow!</span>
              <p className="text-[10px] uppercase tracking-widest font-bold">Incredible Print Quality</p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-vibrant-mint font-black tracking-widest uppercase text-xs mb-4 block">Print & Personalize</span>
            <h2 className="text-4xl md:text-6xl mb-8 font-black leading-tight">Your ideas, printed with <span className="text-vibrant-pink">love.</span></h2>
            <p className="text-lg text-gray-600 font-medium mb-12 leading-relaxed">
              We're not just a store; we're your personal studio! From high-speed printing to custom gifts that make hearts melt, we do it all with a splash of color.
            </p>
            
            <div className="grid grid-cols-1 gap-8">
              {[
                { title: 'Super-Fast Printing', icon: <Printer />, desc: 'B&W or vibrant color, we make your documents pop!', color: 'bg-white' },
                { title: 'Instant Memories', icon: <Camera />, desc: 'Print your photos in high gloss while you wait.', color: 'bg-white' },
                { title: 'Gift Magic', icon: <Gift />, desc: 'Mugs, shirts, and tags with any design you wish!', color: 'bg-white' },
              ].map((service, idx) => (
                <motion.div 
                  key={idx} 
                  whileHover={{ x: 10 }}
                  className={`${service.color} p-6 rounded-3xl flex items-center space-x-6 shadow-sm border border-mint-100 cursor-default`}
                >
                  <div className="text-vibrant-mint bg-pastel-mint p-4 rounded-2xl">{service.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 tracking-tight text-[#2D3436]">{service.title}</h4>
                    <p className="text-sm text-gray-500 font-medium">{service.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PersonalizedSection = () => {
  return (
    <section id="personalized" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
           <span className="text-vibrant-pink font-black tracking-widest uppercase text-xs mb-4 block underline decoration-yellow-300">Custom Studio</span>
           <h2 className="text-4xl md:text-6xl font-black text-[#1A202C]">Make it <span className="italic serif">Uniquely Yours.</span></h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div whileHover={{ scale: 1.02 }} className="md:col-span-2 h-[500px] bg-pastel-pink rounded-[40px] relative overflow-hidden group">
            <img src="https://images.unsplash.com/photo-1574633912061-68953f938c6b?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover opacity-80" alt="Mugs" />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-400/80 to-transparent flex flex-col justify-end p-12 text-white">
              <h3 className="text-4xl md:text-5xl font-black mb-4">Dream Mugs</h3>
              <p className="max-w-md font-bold mb-8">Personalized with your favorite quotes or photos. The perfect gift for someone special.</p>
              <button className="bg-white text-vibrant-pink w-fit px-8 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:scale-110 transition-transform">Create Yours</button>
            </div>
          </motion.div>
          
          <div className="flex flex-col gap-8 h-[500px]">
            <motion.div whileHover={{ scale: 1.02 }} className="flex-1 bg-pastel-blue rounded-[40px] p-10 flex flex-col justify-between group cursor-pointer relative overflow-hidden">
              <div className="z-10">
                <Smile className="text-blue-400 mb-6" size={48} />
                <h4 className="text-2xl font-black text-[#2D3436]">Happy Tags</h4>
                <p className="text-sm text-gray-600 font-medium mt-2">Custom name tags for school bags & office keys.</p>
              </div>
              <div className="absolute bottom-[-20px] right-[-20px] text-8xl opacity-10 rotate-12 group-hover:rotate-45 transition-transform">🏷️</div>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} className="flex-1 bg-pastel-yellow rounded-[40px] p-10 flex flex-col justify-between group cursor-pointer relative overflow-hidden">
              <div className="z-10">
                <Sparkles className="text-orange-400 mb-6" size={48} />
                <h4 className="text-2xl font-black text-[#2D3436]">Bespoke Planners</h4>
                <p className="text-sm text-gray-600 font-medium mt-2">Add your name to our 2024 collections.</p>
              </div>
              <div className="absolute bottom-[-20px] right-[-20px] text-8xl opacity-10 rotate-12 group-hover:rotate-45 transition-transform">📓</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="py-24 bg-vibrant-pink text-white relative overflow-hidden">
      {/* Dynamic Background Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <Smile className="mx-auto mb-6" size={48} />
          <h2 className="text-4xl md:text-7xl mb-12 font-black italic tracking-tight">Join the Joyful Club!</h2>
          <p className="text-xl mb-12 opacity-90 font-medium">Be the first to know about secret sales, free stickers, and new happy arrivals.</p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-stretch max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="Your magical email..." 
              className="flex-grow bg-white/20 border-4 border-white/40 rounded-full focus:bg-white focus:text-[#1A1A1A] outline-none px-8 py-5 text-lg font-bold placeholder:text-white/60 transition-all"
            />
            <button className="md:ml-4 bg-yellow-300 text-[#1A1A1A] px-12 py-5 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 hover:bg-white transition-all shadow-xl">
              I'm in!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="pt-24 pb-12 bg-pastel-pink/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="lg:col-span-1">
             <div className="flex items-center space-x-3 mb-8">
              <div className="w-10 h-10 bg-vibrant-pink rounded-full flex items-center justify-center text-white">
                <Smile size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight uppercase leading-none text-[#2D3436]">Boas Novas</span>
                <span className="text-[9px] tracking-[0.2em] uppercase text-vibrant-pink font-bold">Papelaria & Alegria</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 font-medium leading-relaxed mb-8">
              Making life more colorful since 1998.<br />
              Av. Principal, 1234 - Centro<br />
              City, State, Country
            </p>
            <div className="flex space-x-6 text-vibrant-pink">
              <a href="#" className="hover:scale-125 transition-transform bg-white p-3 rounded-full shadow-sm"><Instagram size={20} /></a>
              <a href="#" className="hover:scale-125 transition-transform bg-white p-3 rounded-full shadow-sm"><Facebook size={20} /></a>
              <a href="#" className="hover:scale-125 transition-transform bg-white p-3 rounded-full shadow-sm"><Mail size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-8 text-[#2D3436]">The Goods</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><a href="#" className="hover:text-vibrant-pink">Pastel Collection</a></li>
              <li><a href="#" className="hover:text-vibrant-pink">Happy Pens</a></li>
              <li><a href="#" className="hover:text-vibrant-pink">Notebook Bar</a></li>
              <li><a href="#" className="hover:text-vibrant-pink">Gift Hampers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-8 text-[#2D3436]">Happy Help</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><a href="#" className="hover:text-vibrant-pink">Track Order</a></li>
              <li><a href="#" className="hover:text-vibrant-pink">Print Service FAQ</a></li>
              <li><a href="#" className="hover:text-vibrant-pink">Bulk Orders</a></li>
              <li><a href="#" className="hover:text-vibrant-pink">Visit Store</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest mb-8 text-[#2D3436]">Get in Touch</h4>
            <div className="space-y-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center space-x-4">
                <Phone size={18} className="text-vibrant-pink" />
                <span>+55 (11) 9876-5432</span>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-sm border border-pink-50">
                <p className="text-vibrant-pink font-bold mb-1 uppercase text-[10px]">Open Every Day</p>
                <p className="text-[#2D3436]">9:00 AM — 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-pink-100 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest font-black text-gray-400">
          <p>© 2024 Papelaria Boas Novas e Presentes Ltda. Made with ❤️ and color.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-vibrant-pink">Privacy</a>
            <a href="#" className="hover:text-vibrant-pink">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        
        {/* Colorful Bar */}
        <div className="w-full h-4 bg-gradient-to-r from-pink-200 via-blue-200 to-yellow-200"></div>

        <CategoryGrid />
        
        {/* Quote Break */}
        <section className="py-24 bg-pastel-blue text-center relative">
          <div className="max-w-4xl mx-auto px-6">
            <Sparkles className="mx-auto text-blue-400 mb-8" size={48} />
            <span className="text-4xl md:text-6xl serif italic leading-tight text-[#1A202C]">
              "Fill your days with colors, <br />
              your journals with <span className="text-vibrant-pink underline decoration-yellow-400">dreams</span>, <br />
              and your heart with joy."
            </span>
          </div>
        </section>

        <ServiceSection />
        <PersonalizedSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
