import { User, MapPin, FileText } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Vigicon Enterprises is a Pune-based technology solutions provider specializing in smart security, energy, and automation systems.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We combine innovation and reliability to make homes and businesses more secure, efficient, and future-ready.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With expertise across CCTV surveillance, solar energy, smart home automation, and biometric systems, we deliver comprehensive solutions tailored to your needs.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <User className="text-blue-600 mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Proprietor</h3>
                  <p className="text-gray-700">Mr. Vilas Shriram Kole</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <FileText className="text-blue-600 mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Udyog Aadhaar</h3>
                  <p className="text-gray-700">MH26D0206442</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <MapPin className="text-blue-600 mr-4 flex-shrink-0" size={28} />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-700">408, Audumber Apartment, Near Navasha Maruti Mandir, Sinhagad Road, Pune – 411030</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
