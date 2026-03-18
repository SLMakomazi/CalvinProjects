
import { Building, Briefcase, Users, HardHat, Heart, ArrowRight, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Card from '../components/Card';

const Projects = () => {
  const industries = [
    {
      icon: Building,
      title: 'Corporate Projects',
      description: 'Strategic business initiatives, office developments, and corporate infrastructure projects that drive organizational growth and efficiency.',
      image: 'https://images.unsplash.com/photo-1497366216548-375f70e06b3c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Office complex development',
        'Business process optimization',
        'Corporate infrastructure',
        'Strategic implementation',
      ],
    },
    {
      icon: Briefcase,
      title: 'Government Projects',
      description: 'Public sector initiatives, municipal developments, and government infrastructure projects serving communities and citizens.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Public infrastructure',
        'Municipal developments',
        'Government facility projects',
        'Community initiatives',
      ],
    },
    {
      icon: Users,
      title: 'SME Projects',
      description: 'Small and medium enterprise projects focused on business growth, operational efficiency, and market expansion.',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Business expansion projects',
        'Operational optimization',
        'Technology implementation',
        'Market development',
      ],
    },
    {
      icon: HardHat,
      title: 'Construction Projects',
      description: 'Large-scale construction developments, building projects, and infrastructure implementations with precision engineering.',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Commercial construction',
        'Industrial facilities',
        'Infrastructure development',
        'Building renovation',
      ],
    },
    {
      icon: Heart,
      title: 'Community Projects',
      description: 'Community-focused initiatives, social impact projects, and developments that enhance quality of life and social wellbeing.',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      features: [
        'Social infrastructure',
        'Community facilities',
        'Public spaces development',
        'Social impact initiatives',
      ],
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Industry Experts' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' },
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
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Extensive experience across diverse sectors with specialized expertise and proven results
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-orange mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange mb-4">Our Industry Expertise</h2>
            <p className="text-lg text-navy max-w-2xl mx-auto">
              Specialized knowledge and experience across multiple sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} delay={index * 0.1} className="overflow-hidden">
                <div className="relative h-48 mb-6">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-t-2xl"></div>
                  <div className="absolute bottom-4 left-4">
                    <industry.icon className="w-8 h-8 text-orange mb-2" />
                    <h3 className="text-2xl font-bold text-white">{industry.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{industry.description}</p>
                
                <div className="space-y-2">
                  {industry.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange rounded-full"></div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-orange mb-6">
                Industry-Specific Approach
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Each industry has unique challenges, requirements, and success metrics. 
                  We tailor our approach to meet the specific needs of your sector.
                </p>
                <p>
                  Our team brings deep domain expertise and understanding of industry best practices, 
                  ensuring your project benefits from specialized knowledge and proven methodologies.
                </p>
                <p>
                  From regulatory compliance to industry-specific technical requirements, 
                  we navigate the complexities of your sector to deliver optimal outcomes.
                </p>
              </div>
              <Button className="mt-6" href="/contact">
                Discuss Your Industry
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange/20 to-navy/20 rounded-2xl blur-2xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Industry Expertise"
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
              Have a Project in Your Industry?
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              Let's bring our industry expertise to your next project.
            </p>
            <Button size="large" href="/contact">
              Start Your Industry Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
