
import { motion } from 'framer-motion';
import { Target, Clock, Users, Zap, Shield, TrendingUp, CheckCircle, ArrowRight, Package } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';

const Services = () => {
  const services = [
    {
      icon: Target,
      title: 'Project Management & Delivery',
      description: 'Comprehensive project planning, coordination, and delivery management ensuring successful outcomes.',
      features: [
        'Project scope definition and planning',
        'Stakeholder management',
        'Risk assessment and mitigation',
        'Quality assurance and control',
        'Performance monitoring and reporting',
      ],
    },
    {
      icon: Package,
      title: 'Procurement & Sourcing',
      description: 'Strategic procurement solutions, vendor management, and supply chain optimization for project success.',
      features: [
        'Supplier identification and vetting',
        'Strategic sourcing and negotiation',
        'Contract management and compliance',
        'Supply chain optimization',
        'Cost analysis and budget management',
      ],
    },
    {
      icon: Clock,
      title: 'Programme & Time Management',
      description: 'Strategic program coordination and timeline optimization for complex, multi-project initiatives.',
      features: [
        'Program strategy development',
        'Schedule optimization',
        'Critical path management',
        'Milestone tracking',
        'Resource allocation planning',
      ],
    },
    {
      icon: Users,
      title: 'Talent & Resource Solutions',
      description: 'Access to skilled professionals and resources tailored to your specific project requirements.',
      features: [
        'Talent acquisition and placement',
        'Skills assessment and matching',
        'Team building and development',
        'Resource planning and allocation',
        'Performance management',
      ],
    },
    {
      icon: Zap,
      title: 'Development & Execution Management',
      description: 'End-to-end project execution with hands-on management and technical oversight.',
      features: [
        'Implementation planning',
        'Technical coordination',
        'Progress monitoring',
        'Issue resolution',
        'Change management',
      ],
    },
    {
      icon: Shield,
      title: 'Project Recovery & Support',
      description: 'Specialized recovery services for projects facing challenges and ongoing support.',
      features: [
        'Project assessment and diagnosis',
        'Recovery strategy development',
        'Performance turnaround',
        'Ongoing support services',
        'Lessons learned documentation',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Commercial & Coordination Management',
      description: 'Commercial oversight and coordination across all project stakeholders and vendors.',
      features: [
        'Commercial strategy development',
        'Vendor management',
        'Contract oversight',
        'Budget coordination',
        'Stakeholder alignment',
      ],
    },
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
              Our Services
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Comprehensive project delivery solutions designed to meet your unique business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} delay={index * 0.1} className="h-full">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-6 h-6 text-orange" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-orange mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-orange mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange mb-4">Our Service Process</h2>
            <p className="text-lg text-navy max-w-2xl mx-auto">
              How we deliver exceptional results for every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and objectives' },
              { step: '02', title: 'Planning', description: 'Developing comprehensive project strategies' },
              { step: '03', title: 'Execution', description: 'Implementing with precision and care' },
              { step: '04', title: 'Delivery', description: 'Ensuring successful project completion' },
            ].map((step, index) => (
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

      {/* CTA Section */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Let's discuss how our services can help you achieve your project goals.
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

export default Services;
