import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, Star, Users, BarChart2, MessageSquare, Zap, Check } from 'lucide-react';
import Typewriter from 'typewriter-effect';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [restartTyping, setRestartTyping] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        // Restart animation when hero section is back in view
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setRestartTyping(prev => !prev);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0E1015] text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#0E1015]/90 backdrop-blur-sm' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Zap className="w-8 h-8 text-[#E4795A]" />
              <span className="ml-2 text-xl font-bold">AiME</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-[#E4795A] transition-colors">Features</a>
              <a href="#about" className="hover:text-[#E4795A] transition-colors">About</a>
              <a href="#pricing" className="hover:text-[#E4795A] transition-colors">Pricing</a>
              <button className="bg-gradient-to-r from-[#E4795A] to-[#FFBB41] px-6 py-2 rounded-full hover:scale-105 transition-transform">
                Get Started
              </button>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'h-64' : 'h-0'} overflow-hidden bg-[#0E1015]/90 backdrop-blur-sm`}>
          <div className="px-4 py-2 space-y-4">
            <a href="#features" className="block hover:text-[#E4795A] transition-colors">Features</a>
            <a href="#about" className="block hover:text-[#E4795A] transition-colors">About</a>
            <a href="#pricing" className="block hover:text-[#E4795A] transition-colors">Pricing</a>
            <button className="w-full bg-gradient-to-r from-[#E4795A] to-[#FFBB41] px-6 py-2 rounded-full hover:scale-105 transition-transform">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-[#E4795A]/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[#FFBB41]/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#E4795A] to-[#FFBB41] bg-clip-text text-transparent">
            <Typewriter
              key={restartTyping ? 'typing-1' : 'typing-2'}
              options={{
                strings: ['Transform Your Vision Into Reality'],
                autoStart: true,
                loop: false,
                delay: 50,
                deleteSpeed: 50,
              }}
            />
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            Create stunning digital experiences with our modern design tools and components
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-gradient-to-r from-[#E4795A] to-[#FFBB41] px-8 py-3 rounded-full text-lg font-medium hover:scale-105 transition-transform">
              Get Started
            </button>
            <button className="w-full sm:w-auto bg-white/10 px-8 py-3 rounded-full text-lg font-medium hover:bg-white/20 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-gray-400">Everything you need to create amazing digital experiences</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Users className="w-8 h-8" />, title: "Team Collaboration", description: "Work together seamlessly with your team in real-time" },
              { icon: <BarChart2 className="w-8 h-8" />, title: "Analytics", description: "Get detailed insights about your projects and performance" },
              { icon: <MessageSquare className="w-8 h-8" />, title: "Communication", description: "Stay connected with integrated messaging and notifications" },
              { icon: <Star className="w-8 h-8" />, title: "Premium Support", description: "24/7 support to help you with any questions or issues" },
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="text-[#E4795A] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E4795A]/5 to-[#FFBB41]/5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-gray-400">Scale your outreach with our flexible pricing options</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$50</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['7,500 messages per year', '50 account warmups', '10 AI profiles'].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-[#E4795A] mr-2" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-r from-[#E4795A] to-[#FFBB41] px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform">
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-b from-[#E4795A]/20 to-[#FFBB41]/20 p-8 rounded-2xl backdrop-blur-sm hover:scale-105 transition-all duration-300 border border-white/20 lg:scale-105">
              <h3 className="text-2xl font-bold mb-4">Professional</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$200</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {['40,000 messages per year', '200 account warmups', '40 AI profiles'].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-[#FFBB41] mr-2" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-white text-[#0E1015] px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 border border-white/10">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$5,000</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  '1.2M messages per year',
                  '5,000 account warmups',
                  'Unlimited AI profiles',
                  'Custom specifications available'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-5 h-5 text-[#E4795A] mr-2" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-gradient-to-r from-[#E4795A] to-[#FFBB41] px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform">
                Contact Sales
              </button>
            </div>
          </div>

          <div className="mt-16 text-center bg-white/5 p-8 rounded-2xl backdrop-blur-sm">
            <h4 className="text-2xl font-bold mb-4">Need More?</h4>
            <p className="text-gray-400">
              Additional package: $75 for 5,000 messages, 10 account warmups, and 10 AI profiles
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#E4795A]/20 to-[#FFBB41]/20 blur-3xl" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8">Join thousands of users creating amazing experiences</p>
          <button className="bg-white text-[#0E1015] px-8 py-3 rounded-full text-lg font-medium hover:scale-105 transition-transform">
            Start Your Journey <ChevronRight className="inline-block ml-2" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;