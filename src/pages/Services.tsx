import { Camera, Sun, Droplets, Home, Zap, Fingerprint, Battery } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: 'CCTV Camera Installation',
    description: 'High-quality Hikvision & CP Plus systems, wired & wireless surveillance solutions with remote monitoring capabilities. Our expert technicians ensure optimal placement and setup for maximum coverage.'
  },
  {
    icon: Sun,
    title: 'Smart Solar Energy Systems',
    description: 'Rooftop solar setup with monitoring and maintenance. Reduce your electricity bills while contributing to a greener future. We provide end-to-end solar solutions with performance tracking.'
  },
  {
    icon: Battery,
    title: 'Smart Solar CCTV',
    description: 'Solar-powered surveillance systems for remote areas. Reliable security without grid dependency. Perfect for farms, warehouses, and off-grid locations.'
  },
  {
    icon: Home,
    title: 'Smart Home Automation',
    description: 'Control your lights, fans, and devices with one touch. Experience modern living with intelligent automation. Voice-controlled and app-based management included.'
  },
  {
    icon: Droplets,
    title: 'Smart Drainage System',
    description: 'IoT-based drainage monitoring to prevent overflow and ensure efficient water management. Real-time alerts and analytics for proactive maintenance.'
  },
  {
    icon: Fingerprint,
    title: 'Biometric Access Control',
    description: 'Advanced attendance & door access systems for enhanced security and streamlined workforce management. Reliable, fast, and secure biometric recognition.'
  },
  {
    icon: Zap,
    title: 'EV Charging Solutions',
    description: 'Compact and efficient charging setups for electric vehicles. Future-ready infrastructure for sustainable transportation. Easy installation and management.'
  }
];

export default function Services() {
  return (
    <div className="pt-24 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive technology solutions for modern homes and businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-6"
            >
              <div className="mb-4">
                <service.icon className="text-blue-600" size={48} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
