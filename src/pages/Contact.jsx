import { useState } from 'react';

import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: ['info@calvinsprojects.co.za', 'projects@calvinsprojects.co.za'],
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+27 12 345 6789', '+27 83 456 7890'],
    },
    {
      icon: MapPin,
      title: 'Office',
      details: ['123 Business Avenue', 'Pretoria, 0002', 'South Africa'],
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 1:00 PM'],
    },
  ];

  const services = [
    'Project Management & Delivery',
    'Programme & Time Management',
    'Talent & Resource Solutions',
    'Development & Execution Management',
    'Project Recovery & Support',
    'Commercial & Coordination Management',
    'Other',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy to-navy/90 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-orange/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Start Your Project
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Ready to transform your vision into reality? Get in touch with our team today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <Card>
                <div className="flex items-center space-x-3 mb-6">
                  <MessageSquare className="w-8 h-8 text-orange" />
                  <h2 className="text-2xl font-bold text-navy">Send us a Message</h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent outline-none transition-all duration-200"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent outline-none transition-all duration-200"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-navy mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent outline-none transition-all duration-200"
                        placeholder="+27 12 345 6789"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-navy mb-2">
                        Service Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent outline-none transition-all duration-200"
                      >
                        <option value="">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange focus:border-transparent outline-none transition-all duration-200 resize-none"
                      placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                    ></textarea>
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="mr-2 w-5 h-5" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <Card key={index} delay={index * 0.1}>
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-orange" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 text-sm">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              <Card className="bg-gradient-to-br from-orange to-orange/90 text-white">
                <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="mb-4 text-white/90">
                  Our team is standing by to discuss your project requirements and provide a customized solution.
                </p>
                <Button variant="secondary" className="border-white text-white hover:bg-white hover:text-orange">
                  Schedule a Call
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-navy max-w-2xl mx-auto">
              Common questions about our services and process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <h3 className="font-semibold text-navy mb-2">How long does a typical project take?</h3>
              <p className="text-gray-600 text-sm">
                Project timelines vary based on scope and complexity. We provide detailed timelines during the planning phase.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-navy mb-2">What industries do you specialize in?</h3>
              <p className="text-gray-600 text-sm">
                We work across corporate, government, SME, construction, and community projects with specialized expertise in each sector.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-navy mb-2">Do you provide ongoing support?</h3>
              <p className="text-gray-600 text-sm">
                Yes, we offer project recovery services and ongoing support to ensure continued success.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold text-navy mb-2">How do you ensure project quality?</h3>
              <p className="text-gray-600 text-sm">
                We implement rigorous quality assurance processes and continuous monitoring throughout the project lifecycle.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
