
import { Target, Building, Users, Zap, CheckCircle, Award, TrendingUp, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const About = () => {
  const approachItems = [
    {
      icon: Target,
      title: 'The Right Projects',
      description: 'We carefully select and evaluate projects that align with our expertise and deliver maximum value to our clients.',
    },
    {
      icon: Building,
      title: 'The Right Foundations',
      description: 'Building strong project frameworks with clear objectives, realistic timelines, and robust risk management.',
    },
    {
      icon: Users,
      title: 'The Right People',
      description: 'Access to skilled professionals and subject matter experts who bring depth and experience to every project.',
    },
    {
      icon: Zap,
      title: 'The Right Execution',
      description: 'Systematic implementation with continuous monitoring, quality assurance, and adaptive management.',
    },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Accountability',
      description: 'We take full ownership of project outcomes and deliver on our commitments.',
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description: 'Continuous improvement and adherence to highest industry standards.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working closely with clients to achieve shared goals and success.',
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'Transparent communication and ethical business practices in all we do.',
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
              About Calvin's Projects
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Your trusted partner in professional project delivery and management excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-orange mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Calvin's Projects (Pty) Ltd is a premier project delivery and management company specializing in end-to-end execution across corporate, government, SME, and construction sectors.
                </p>
                <p>
                  With years of experience and a proven track record, we bring together strategic planning, resource management, and execution excellence to deliver projects that exceed expectations.
                </p>
                <p>
                  Our approach combines industry expertise with innovative methodologies to ensure successful project outcomes, regardless of complexity or scale.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange/20 to-navy/20 rounded-2xl blur-2xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="About Us"
                  className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange mb-4">Our Mission & Vision</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <h3 className="text-2xl font-bold text-navy mb-4">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver exceptional project management and execution services that drive success for our clients, 
                fostering growth and innovation through strategic planning, resource optimization, and unwavering commitment to excellence.
              </p>
            </Card>

            <Card>
              <h3 className="text-2xl font-bold text-navy mb-4">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading project delivery partner in Africa, recognized for our integrity, innovation, 
                and ability to consistently transform complex challenges into successful outcomes across all industries.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange mb-4">Our Approach</h2>
            <p className="text-lg text-navy max-w-2xl mx-auto">
              Four pillars that define our project delivery methodology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachItems.map((item, index) => (
              <Card key={index} delay={index * 0.1}>
                <item.icon className="w-12 h-12 text-orange mb-4" />
                <h3 className="text-xl font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange mb-4">Our Core Values</h2>
            <p className="text-lg text-navy max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} delay={index * 0.1}>
                <value.icon className="w-12 h-12 text-orange mb-4" />
                <h3 className="text-xl font-semibold text-navy mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange mb-8 text-center">
              Why Choose Calvin's Projects?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy mb-2">Proven Track Record</h4>
                  <p className="text-gray-600">Successful delivery of complex projects across multiple industries</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy mb-2">Full Accountability</h4>
                  <p className="text-gray-600">We take complete ownership of project outcomes</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy mb-2">Expert Team</h4>
                  <p className="text-gray-600">Access to skilled professionals and subject matter experts</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-navy mb-2">Tailored Solutions</h4>
                  <p className="text-gray-600">Customized approaches for unique project requirements</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
