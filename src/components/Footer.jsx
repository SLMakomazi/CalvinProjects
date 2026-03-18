import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import logoCP from '../assets/logoCP.png';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Project Management', href: '/services' },
    { name: 'Talent & Resources', href: '/services' },
    { name: 'Procurement & Sourcing', href: '/services' },
    { name: 'Project Execution', href: '/services' },
    { name: 'Special Projects', href: '/services' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: '#' },
    { icon: Instagram, href: '#' },
  ];

  return (
    <footer className="bg-gradient-to-br from-navy to-navy/90 text-white overflow-x-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 px-4">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <img src={logoCP} alt="Calvin's Projects" className="h-20 w-auto" />
            </div>
            <p className="text-gray-300 mb-4">
              Professional project delivery and management company handling end-to-end execution across corporate, government, SME, and construction projects.
            </p>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-300 hover:text-orange transition-colors duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-orange">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-orange">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-orange transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 text-orange">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex justify-center items-center space-x-3">
                <Mail className="w-4 h-4 text-orange" />
                <span className="text-gray-300">info@calvinsprojects.co.za</span>
              </div>
              <div className="flex justify-center items-center space-x-3">
                <Phone className="w-4 h-4 text-orange" />
                <span className="text-gray-300">+27 12 345 6789</span>
              </div>
              <div className="flex justify-center items-center space-x-3">
                <MapPin className="w-4 h-4 text-orange" />
                <span className="text-gray-300">Pretoria, South Africa</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-navy/50 py-6">
          <div className="text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Calvin's Projects (Pty) Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
