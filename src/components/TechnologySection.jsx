import { ArrowRight, Globe, Network, Code2, Cloud, Bot, Megaphone } from 'lucide-react';
import Button from './Button';

const offerings = [
  { icon: Globe, title: 'Business Digitalisation', description: 'Turn manual processes into practical digital experiences.', items: 'Websites · E-commerce · SEO · Digital branding' },
  { icon: Network, title: 'Business Systems & IT', description: 'Connect the systems and infrastructure your business relies on.', items: 'POS systems · Networks · CCTV · Data backup' },
  { icon: Code2, title: 'Custom Software', description: 'Build applications around the way your business works.', items: 'Web & mobile apps · Databases · System integration' },
  { icon: Cloud, title: 'Cloud & DevOps', description: 'Deploy reliably and create room for your business to grow.', items: 'CI/CD · Docker & Kubernetes · Infrastructure as code · Cloud migration' },
  { icon: Bot, title: 'Chatbots & Automation', description: 'Make customer support and everyday workflows more efficient.', items: 'AI chatbots · Lead capture · Customer support automation' },
  { icon: Megaphone, title: 'Social Media Management', description: 'Build a consistent online presence and engage your customers.', items: 'Content strategy · Platform management · Analytics' },
];

export default function TechnologySection({ full = false }) {
  return (
    <section id="technology" aria-labelledby="technology-heading" className="section-padding bg-gray-50 scroll-mt-20">
      <div className="container-custom">
        <div className="max-w-3xl mb-10">
          <p className="text-sm font-bold tracking-widest uppercase text-orange mb-3">Calvin Tech Solutions</p>
          <h2 id="technology-heading" className="text-3xl md:text-4xl font-bold text-navy mb-4">Technology that moves your business forward.</h2>
          <p className="text-lg text-gray-600">The technology division of Calvin’s Projects brings digital solutions, software and IT delivery into one coordinated project offering.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(full ? offerings : offerings.slice(0, 3)).map((service) => (
            <article key={service.title} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center mb-5"><service.icon className="w-6 h-6 text-orange" aria-hidden="true" /></div>
              <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-sm text-navy leading-relaxed">{service.items}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Button href={full ? '/contact?service=Technology%20Solutions' : '/technology'}>
            {full ? 'Discuss Your Technology Project' : 'Explore Technology Solutions'}<ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
          </Button>
          {full && <Button variant="outline" href="/services">Explore Project Delivery</Button>}
        </div>
      </div>
    </section>
  );
}
