import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Target, Zap, Building, Briefcase, HardHat, Heart, Package } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';
import logoImage from '../assets/logo.png';

const Home = () => {
  const services = [
    {
      icon: Target,
      title: 'Project Management',
      description: 'Comprehensive project planning, coordination, and delivery management.',
    },
    {
      icon: Users,
      title: 'Talent & Resource Solutions',
      description: 'Access to skilled professionals and resources for your projects.',
    },
    {
      icon: Package,
      title: 'Procurement & Sourcing',
      description: 'Strategic procurement, vendor management, and supply chain solutions.',
    },
    {
      icon: Zap,
      title: 'Project Execution',
      description: 'End-to-end execution with full accountability and ownership.',
    },
  ];

  const howWeWork = [
    { step: '01', title: 'Plan', description: 'Strategic planning and scope definition' },
    { step: '02', title: 'Source', description: 'Resource allocation and talent acquisition' },
    { step: '03', title: 'Manage', description: 'Continuous monitoring and coordination' },
    { step: '04', title: 'Deliver', description: 'Successful project completion and handover' },
  ];

  const industries = [
    { icon: Building, name: 'Corporate' },
    { icon: Briefcase, name: 'Government' },
    { icon: Users, name: 'SMEs' },
    { icon: HardHat, name: 'Construction' },
    { icon: Heart, name: 'Community' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={logoImage} 
            alt="Calvin's Projects Logo" 
            className="w-full h-full object-cover filter hue-rotate-180 saturate-0 blur-sm opacity-30 animate-pulse"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/70 to-navy/90"></div>
        </div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-orange/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center text-white px-4 max-w-5xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            End-to-End Project Delivery.
            <br />
            <span className="text-orange">Fully Managed.</span> Fully Accountable.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto"
          >
            We plan, source, and execute projects across industries — from concept to completion.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="large" href="/contact">
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="secondary" size="large" href="/services">
              Our Services
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Summary */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange mb-4">Our Services</h2>
            <p className="text-lg text-navy max-w-2xl mx-auto">
              Comprehensive project delivery solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} delay={index * 0.1}>
                <service.icon className="w-12 h-12 text-orange mb-4" />
                <h3 className="text-xl font-semibold text-navy mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange mb-4">How We Work</h2>
            <p className="text-lg text-navy max-w-2xl mx-auto">
              Our proven methodology ensures successful project delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {howWeWork.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orange text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange mb-4">Industries We Serve</h2>
            <p className="text-lg text-navy max-w-2xl mx-auto">
              Experienced across diverse sectors with specialized expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <Card key={index} delay={index * 0.1} className="text-center">
                <industry.icon className="w-12 h-12 text-orange mx-auto mb-3" />
                <h3 className="font-semibold text-navy">{industry.name}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-orange mb-6">
                We Take Full Ownership of Your Project
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange mr-3 mt-1 flex-shrink-0" />
                  From initial concept to final delivery, we assume complete responsibility for your project's success.
                </p>
                <p className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange mr-3 mt-1 flex-shrink-0" />
                  Our integrated approach ensures seamless coordination between planning, resources, and execution.
                </p>
                <p className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-orange mr-3 mt-1 flex-shrink-0" />
                  You get a single point of accountability and transparent communication throughout the project lifecycle.
                </p>
              </div>
              <Button className="mt-6" href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange/20 to-navy/20 rounded-2xl blur-2xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Project Management"
                  className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Have a project in mind?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Let's deliver it together. Your vision, our expertise.
            </p>
            <Button size="large" href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
