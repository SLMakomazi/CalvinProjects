import { ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import TechnologySection from '../components/TechnologySection';

export default function Technology() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section className="bg-navy text-white pt-32 pb-20">
          <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange uppercase tracking-widest text-sm font-bold mb-5">Calvin’s Projects / Technology Division</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Calvin Tech<br /><span className="text-orange">Solutions.</span></h1>
              <p className="text-xl text-gray-200 mb-8 max-w-xl">From project planning to digital delivery. Websites, business systems, software and cloud solutions built around your business.</p>
              <Button href="/contact?service=Technology%20Solutions">Start a Technology Project<ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" /></Button>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/5 p-6 md:p-8">
              <p className="text-orange font-semibold mb-3">One coordinated offering</p>
              <h2 className="text-2xl font-bold mb-5">Your project. Your technology. One delivery team.</h2>
              <ul className="space-y-4 text-gray-200">
                {['Plan the scope, budget and delivery milestones.', 'Build and integrate the right digital tools.', 'Deploy, hand over and support your solution.'].map(text => <li key={text} className="flex gap-3"><CheckCircle className="w-5 h-5 text-orange flex-shrink-0 mt-1" aria-hidden="true" /><span>{text}</span></li>)}
              </ul>
            </div>
          </div>
        </section>
        <TechnologySection full />
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <p className="text-orange font-semibold mb-3">How it comes together</p>
            <h2 className="text-3xl font-bold text-navy mb-5">Opening a shop? We connect the pieces.</h2>
            <p className="text-lg text-gray-600">Calvin’s Projects can coordinate planning, sourcing and implementation, while Calvin Tech Solutions delivers your website, point-of-sale system, network and data backup. Start with a single service or discuss a combined project.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
