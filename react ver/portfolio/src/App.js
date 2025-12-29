import React, { useState } from 'react';
import { Gem, Home, Phone, Mail, Twitter, Facebook, Instagram, Menu, X } from 'lucide-react';

const SolidState = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <a href="#" className="text-white hover:text-blue-400 transition-colors">Solid State</a>
          </h1>
          <button 
            onClick={toggleMenu}
            className="text-white hover:text-blue-400 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <nav className={`fixed top-0 left-0 w-full h-full bg-gray-900/98 backdrop-blur-md z-40 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <h2 className="text-3xl font-bold mb-8">Menu</h2>
          <div className="space-y-6 text-center">
            <a href="#" className="block text-xl hover:text-blue-400 transition-colors" onClick={toggleMenu}>Home</a>
            <a href="#" className="block text-xl hover:text-blue-400 transition-colors" onClick={toggleMenu}>Generic</a>
            <a href="#" className="block text-xl hover:text-blue-400 transition-colors" onClick={toggleMenu}>Elements</a>
            <a href="#" className="block text-xl hover:text-blue-400 transition-colors" onClick={toggleMenu}>Log In</a>
            <a href="#" className="block text-xl hover:text-blue-400 transition-colors" onClick={toggleMenu}>Sign Up</a>
          </div>
          <button 
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-white hover:text-blue-400 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
      </nav>

      {/* Banner */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative text-center z-10 px-6">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full backdrop-blur-sm">
              <Gem size={40} className="text-blue-400" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            This is Solid State
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Another free + fully responsive site template by{' '}
            <a href="http://html5up.net" className="text-blue-400 hover:text-blue-300 transition-colors">
              HTML5 UP
            </a>
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        {/* Section One */}
        <div className="container mx-auto px-6 mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gray-800/50 flex items-center justify-center">
                  <span className="text-6xl">📷</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-blue-400">Magna arcu feugiat</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, 
                sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. 
                Nullam ultrices, neque et faucibus viverra, ex nulla cursus.
              </p>
              <a href="#" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors">
                Learn more
              </a>
            </div>
          </div>
        </div>

        {/* Section Two */}
        <div className="bg-gray-800 py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
              <div className="lg:w-1/2">
                <div className="aspect-square bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gray-900/50 flex items-center justify-center">
                    <span className="text-6xl">🎯</span>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold mb-6 text-purple-400">Tempus adipiscing</h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, 
                  sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. 
                  Nullam ultrices, neque et faucibus viverra, ex nulla cursus.
                </p>
                <a href="#" className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition-colors">
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section Three */}
        <div className="container mx-auto px-6 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="aspect-square bg-gradient-to-br from-green-500 to-teal-600 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gray-800/50 flex items-center justify-center">
                  <span className="text-6xl">⚡</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-green-400">Nullam dignissim</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, 
                sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. 
                Nullam ultrices, neque et faucibus viverra, ex nulla cursus.
              </p>
              <a href="#" className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition-colors">
                Learn more
              </a>
            </div>
          </div>
        </div>

        {/* Section Four - Features Grid */}
        <div className="bg-gray-800 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-6 text-center text-blue-400">Vitae phasellus</h2>
            <p className="text-gray-300 mb-12 text-center max-w-3xl mx-auto leading-relaxed">
              Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. 
              Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem 
              lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {[
                { title: 'Sed feugiat lorem', emoji: '🔧', color: 'from-red-500 to-orange-600' },
                { title: 'Nisl placerat', emoji: '🚀', color: 'from-blue-500 to-cyan-600' },
                { title: 'Ante fermentum', emoji: '⚙️', color: 'from-green-500 to-emerald-600' },
                { title: 'Fusce consequat', emoji: '💎', color: 'from-purple-500 to-violet-600' }
              ].map((item, index) => (
                <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                  <div className={`aspect-video bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    <span className="text-4xl">{item.emoji}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                    <p className="text-gray-400 mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id nulla dignissim dapibus ultrices.
                    </p>
                    <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold">
                      Learn more →
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <a href="#" className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg transition-colors">
                Browse All
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-20 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-blue-400">Get in touch</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Cras mattis ante fermentum, malesuada neque vitae, eleifend erat. Phasellus non pulvinar erat. 
                Fusce tincidunt, nisl eget mattis egestas, purus ipsum consequat orci, sit amet lobortis lorem 
                lacus in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
              </p>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none resize-none transition-colors"
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
            
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Home className="text-blue-400 mt-1 flex-shrink-0" size={20} />
                  <div className="text-gray-300">
                    <div className="font-semibold">Untitled Inc</div>
                    <div>1234 Somewhere Road Suite #2894</div>
                    <div>Nashville, TN 00000-0000</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="text-blue-400 flex-shrink-0" size={20} />
                  <span className="text-gray-300">(000) 000-0000</span>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="text-blue-400 flex-shrink-0" size={20} />
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors">
                    information@untitled.tld
                  </a>
                </div>
                
                <div className="flex space-x-4 pt-4">
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Twitter size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; Untitled Inc. All rights reserved. | Design: <a href="http://html5up.net" className="text-blue-400 hover:text-blue-300 transition-colors">HTML5 UP</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SolidState;