import { ArrowRight, Camera, Sun, Droplets, Home as HomeIcon, Zap, Fingerprint, Battery, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';

const features = [
  {
    icon: CheckCircle2,
    title: 'Expert Installation',
    description: 'Professional technicians with years of experience'
  },
  {
    icon: CheckCircle2,
    title: 'Quality Products',
    description: 'Top brands like Hikvision & CP Plus'
  },
  {
    icon: CheckCircle2,
    title: 'After-Sales Support',
    description: 'Comprehensive maintenance and support'
  },
  {
    icon: CheckCircle2,
    title: 'Affordable Pricing',
    description: 'Competitive rates without compromising quality'
  }
];

const serviceOverview = [
  {
    icon: Camera,
    title: 'CCTV Surveillance',
    description: 'Advanced HD and Wi-Fi surveillance systems for comprehensive security monitoring of your property.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Sun,
    title: 'Solar Energy',
    description: 'Harness renewable energy with our solar panel installations and smart monitoring systems.',
    color: 'from-orange-500 to-yellow-500'
  },
  {
    icon: Battery,
    title: 'Solar CCTV',
    description: 'Off-grid surveillance powered by solar energy for remote and rural locations.',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: HomeIcon,
    title: 'Smart Automation',
    description: 'Control your entire home with voice commands and automated lighting, fans, and devices.',
    color: 'from-indigo-500 to-blue-600'
  },
  {
    icon: Droplets,
    title: 'Smart Drainage',
    description: 'IoT-enabled drainage monitoring system to prevent overflow and optimize water management.',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    icon: Fingerprint,
    title: 'Biometric Access',
    description: 'Secure biometric attendance and access control systems for enhanced security.',
    color: 'from-slate-600 to-gray-700'
  },
  {
    icon: Zap,
    title: 'EV Charging',
    description: 'Efficient and compact EV charging infrastructure for sustainable electric vehicle solutions.',
    color: 'from-green-600 to-teal-600'
  }
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Hero />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Vigicon?</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <feature.icon className="text-blue-600 mb-4" size={32} />
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive smart technology solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceOverview.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
              >
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <service.icon size={40} />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  <button
                    onClick={() => navigate('/services')}
                    className="mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center group"
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get expert consultation from our team. We'll assess your needs and provide customized smart solutions for your home or business.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center px-10 py-4 bg-white text-blue-600 font-bold rounded-lg shadow-lg hover:shadow-xl transform transition hover:scale-105"
          >
            Get Your Free Consultation Today
            <ArrowRight className="ml-3" size={20} />
          </button>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Successful Installations</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">7+</div>
              <p className="text-gray-600">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
