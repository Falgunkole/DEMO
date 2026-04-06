import { Battery, Camera, Droplets, Fingerprint, Home, LucideIcon, ShieldCheck, Sun, Wrench, Zap } from 'lucide-react';

export type ServiceReview = {
  name: string;
  company: string;
  rating: number;
  quote: string;
};

export type ServicePackage = {
  name: string;
  price: string;
  timeline: string;
  idealFor: string;
  includes: string[];
};

export type BusinessService = {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  description: string;
  gradient: string;
  heroImage: string;
  gallery: string[];
  popular?: boolean;
  includes: string[];
  startingPrice: string;
  packages: ServicePackage[];
  reviews: ServiceReview[];
};

export const servicesData: BusinessService[] = [
  {
    id: 'cctv',
    icon: Camera,
    title: 'CCTV Camera Installation',
    shortDescription: 'HD and AI-enabled camera systems with 24/7 mobile monitoring.',
    description:
      'End-to-end CCTV planning, installation, DVR/NVR configuration, AI motion alerts, and remote app setup for villas, apartments, offices, warehouses, and societies.',
    gradient: 'from-blue-500 to-cyan-500',
    heroImage:
      'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581093588401-16ecf7e3b9f8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563201515-adbe35c669c9?auto=format&fit=crop&w=1200&q=80'
    ],
    popular: true,
    includes: ['Site risk audit', 'Night vision camera options', 'Mobile monitoring app setup', 'Annual maintenance plans'],
    startingPrice: '₹14,999',
    packages: [
      {
        name: 'Residential Essential',
        price: '₹14,999',
        timeline: '1 day',
        idealFor: '2-3 BHK homes',
        includes: ['4 Full-HD cameras', '1TB NVR storage', 'Mobile app setup', '90-day support']
      },
      {
        name: 'Business Professional',
        price: '₹38,000',
        timeline: '2-4 days',
        idealFor: 'Retail + office floors',
        includes: ['12 AI cameras', 'Central monitoring console', 'Remote backup setup', 'Quarterly health checks']
      }
    ],
    reviews: [
      { name: 'Rohan Kulkarni', company: 'GreenArc Realty', rating: 5, quote: 'The system quality and planning were exceptional. We now have complete coverage across all access points.' },
      { name: 'Swati Patil', company: 'Home Owner', rating: 5, quote: 'Installation was quick and very neat. Their team explained every feature clearly.' }
    ]
  },
  {
    id: 'door-lock',
    icon: Fingerprint,
    title: 'Smart Door Lock Systems',
    shortDescription: 'Biometric and app-controlled locking for secure access control.',
    description:
      'Secure entrances with modern fingerprint, passcode, RFID, and smartphone-enabled smart locking systems with audit trails and access control settings.',
    gradient: 'from-purple-500 to-fuchsia-500',
    heroImage: 'https://images.unsplash.com/photo-1558002038-3a2f97c0c9ad?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1616628182509-6e97f0f47ac0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80'
    ],
    popular: true,
    includes: ['Biometric + PIN setup', 'Emergency access options', 'Access logs', 'User onboarding and training'],
    startingPrice: '₹12,500',
    packages: [
      {
        name: 'Smart Home Access',
        price: '₹12,500',
        timeline: '4-6 hours',
        idealFor: 'Main door upgrades',
        includes: ['Fingerprint + PIN lock', '2 RFID cards', 'Backup key module', 'User training']
      },
      {
        name: 'Corporate Access Suite',
        price: '₹45,000',
        timeline: '2 days',
        idealFor: 'Small office facilities',
        includes: ['4 smart locks', 'Admin dashboard', 'Access logs', '3-month priority support']
      }
    ],
    reviews: [
      { name: 'Manasi Deshpande', company: 'Home Owner', rating: 5, quote: 'A premium setup with a clean finish. The app controls are very smooth.' },
      { name: 'Yash Gokhale', company: 'Aster Co-Working', rating: 5, quote: 'Perfect for our office cabins and server room. Better control and accountability.' }
    ]
  },
  {
    id: 'solar',
    icon: Sun,
    title: 'Smart Solar Energy Systems',
    shortDescription: 'High-efficiency rooftop solar with generation analytics.',
    description:
      'Reduce power bills with rooftop solar planning, inverter integration, generation dashboards, and preventive maintenance for residential and commercial properties.',
    gradient: 'from-orange-500 to-yellow-500',
    heroImage: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566093097221-ac2335b09e70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80'
    ],
    includes: ['Load assessment', 'Subsidy guidance support', 'Inverter and battery integration', 'Post-installation maintenance'],
    startingPrice: '₹89,000',
    packages: [
      {
        name: 'Residential 3kW',
        price: '₹89,000',
        timeline: '4-6 days',
        idealFor: 'Independent homes',
        includes: ['3kW panel setup', 'Hybrid inverter', 'Monitoring app', 'Installation + documentation']
      },
      {
        name: 'Commercial 10kW',
        price: '₹2,45,000',
        timeline: '7-12 days',
        idealFor: 'Shops, clinics, office rooftops',
        includes: ['10kW system', 'Net metering support', 'Energy analytics dashboard', '6-month preventive checks']
      }
    ],
    reviews: [
      { name: 'Neha Jadhav', company: 'Sankalp Clinic', rating: 5, quote: 'Our energy bill dropped significantly in the first month. Highly professional team.' },
      { name: 'Prathamesh Naik', company: 'Home Owner', rating: 4, quote: 'Great consultation and transparent pricing from day one.' }
    ]
  },
  {
    id: 'solar-cctv',
    icon: Battery,
    title: 'Solar CCTV for Remote Sites',
    shortDescription: 'Uninterrupted surveillance where electricity is unreliable.',
    description:
      'Deploy off-grid CCTV systems for farms, construction sites, and warehouses with weatherproof hardware, solar-powered uptime, and remote health alerts.',
    gradient: 'from-green-500 to-emerald-500',
    heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497206365907-f5e630693df0?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1529078155058-5d716f45d604?auto=format&fit=crop&w=1200&q=80'
    ],
    includes: ['Solar panel sizing', 'Battery backup systems', 'Weatherproof hardware', 'Remote health monitoring'],
    startingPrice: '₹55,000',
    packages: [
      {
        name: 'Farm Guard Pack',
        price: '₹55,000',
        timeline: '2-3 days',
        idealFor: 'Farms and open plots',
        includes: ['3 solar cameras', 'LTE connectivity', 'Battery backup', 'Remote alerts']
      },
      {
        name: 'Site Command Pack',
        price: '₹1,35,000',
        timeline: '5-7 days',
        idealFor: 'Large projects and warehouses',
        includes: ['10 cameras', 'AI intrusion alerts', 'Central panel', 'Maintenance contract']
      }
    ],
    reviews: [
      { name: 'Amit Borse', company: 'Kesar Farms', rating: 5, quote: 'Now we monitor our site remotely without electricity constraints.' },
      { name: 'Harshita Nene', company: 'BuildSphere Infra', rating: 4, quote: 'Reliable setup even during monsoon. Support team is responsive.' }
    ]
  },
  {
    id: 'automation',
    icon: Home,
    title: 'Smart Home Automation',
    shortDescription: 'Control lighting, climate, appliances, and scenes seamlessly.',
    description:
      'Integrate smart switches, occupancy sensors, voice assistants, and automation routines to improve comfort, security, and energy efficiency.',
    gradient: 'from-sky-500 to-indigo-500',
    heroImage: 'https://images.unsplash.com/photo-1556228453-efd1e833c9f5?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ],
    includes: ['App + voice assistant integration', 'Scene automation', 'Energy usage optimization', 'Future-ready wiring consultation'],
    startingPrice: '₹22,000',
    packages: [
      {
        name: 'Starter Smart Living',
        price: '₹22,000',
        timeline: '1 day',
        idealFor: '2BHK apartments',
        includes: ['8 smart switches', 'Voice integration', '2 automation scenes', 'Mobile app control']
      },
      {
        name: 'Luxury Automation Suite',
        price: '₹1,10,000',
        timeline: '4-6 days',
        idealFor: 'Premium homes and villas',
        includes: ['40+ smart points', 'Motion and occupancy sensors', 'Custom scene programming', 'Annual optimization support']
      }
    ],
    reviews: [
      { name: 'Akanksha More', company: 'Home Owner', rating: 5, quote: 'The experience feels premium. Everything is controllable and beautifully integrated.' },
      { name: 'Parth Shah', company: 'Design Studio 27', rating: 5, quote: 'A polished smart setup that our clients love during walkthroughs.' }
    ]
  },
  {
    id: 'drainage',
    icon: Droplets,
    title: 'Smart Drainage Monitoring',
    shortDescription: 'Sensor-driven overflow monitoring and alert automation.',
    description:
      'IoT-enabled drainage monitoring for campuses and societies with proactive alerts, visual dashboards, and maintenance escalation workflows.',
    gradient: 'from-cyan-500 to-blue-600',
    heroImage: 'https://images.unsplash.com/photo-1472745942893-4b9f730c7664?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1526999960988-3be0c9dca8f8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1565452344518-47fafa62b507?auto=format&fit=crop&w=1200&q=80'
    ],
    includes: ['Sensor installation', 'Overflow alert setup', 'Dashboard reporting', 'Maintenance workflow integration'],
    startingPrice: '₹30,000',
    packages: [
      {
        name: 'Society Safety Pack',
        price: '₹30,000',
        timeline: '2 days',
        idealFor: 'Housing complexes',
        includes: ['4 water-level sensors', 'SMS alerts', 'Monthly report', 'Basic dashboard']
      },
      {
        name: 'Campus Command Center',
        price: '₹95,000',
        timeline: '5 days',
        idealFor: 'Industrial and large campuses',
        includes: ['12+ smart sensors', 'Real-time monitoring console', 'Escalation automation', 'AMC included']
      }
    ],
    reviews: [
      { name: 'Kunal Shinde', company: 'Rivergate Society', rating: 5, quote: 'We eliminated monsoon overflow incidents after deploying this system.' },
      { name: 'Vidya Joshi', company: 'Facility Manager', rating: 4, quote: 'The alerts helped our team act before issues turned critical.' }
    ]
  },
  {
    id: 'ev',
    icon: Zap,
    title: 'EV Charging Solutions',
    shortDescription: 'Scalable EV infrastructure for homes, offices, and fleets.',
    description:
      'Deploy safe, standards-compliant EV charging points with power planning, load balancing, and usage analytics for future-ready properties.',
    gradient: 'from-teal-500 to-green-600',
    heroImage: 'https://images.unsplash.com/photo-1593941707882-a5bac6861d75?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1632759145351-1d592ca5f7a7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?auto=format&fit=crop&w=1200&q=80'
    ],
    includes: ['Load planning', 'Charging point installation', 'Safety checks', 'Usage reporting support'],
    startingPrice: '₹49,000',
    packages: [
      {
        name: 'Home EV Ready',
        price: '₹49,000',
        timeline: '1 day',
        idealFor: 'Independent homes and parking bays',
        includes: ['7.4kW charger', 'Electrical upgrades', 'Safety certification', 'App setup']
      },
      {
        name: 'Commercial Fleet Hub',
        price: '₹2,80,000',
        timeline: '8-12 days',
        idealFor: 'Offices, retail, fleet operators',
        includes: ['4 dual-port chargers', 'Smart load management', 'Energy reports', 'Priority support']
      }
    ],
    reviews: [
      { name: 'Siddharth K.', company: 'EV Taxi Partner', rating: 5, quote: 'Excellent execution and uptime. We charge multiple vehicles daily without issues.' },
      { name: 'Maitri Park', company: 'Residential Society', rating: 5, quote: 'A professional installation with future expansion already planned.' }
    ]
  }
];

export const trustHighlights = [
  { icon: ShieldCheck, title: 'Verified Technicians', description: 'Certified teams trained in electrical safety and smart-system integration.' },
  { icon: Wrench, title: '24/7 Maintenance Operations', description: 'Dedicated support workflows, service SLAs, and preventive maintenance coverage.' },
  { icon: Sun, title: 'Future-Ready Engineering', description: 'Scalable architecture suitable for upgrades, new add-ons, and business growth.' }
];
