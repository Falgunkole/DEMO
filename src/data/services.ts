import { Battery, Camera, Droplets, Fingerprint, Home, LucideIcon, ShieldCheck, Sun, Wrench, Zap } from 'lucide-react';

export type BusinessService = {
  id: string;
  icon: LucideIcon;
  title: string;
  shortDescription: string;
  description: string;
  gradient: string;
  popular?: boolean;
  includes: string[];
};

export const servicesData: BusinessService[] = [
  {
    id: 'cctv',
    icon: Camera,
    title: 'CCTV Camera Installation',
    shortDescription: 'HD and AI-enabled camera systems with mobile access.',
    description:
      'End-to-end CCTV planning, installation, DVR/NVR configuration, and remote app setup for shops, homes, offices, and societies.',
    gradient: 'from-blue-500 to-cyan-500',
    popular: true,
    includes: ['Site survey', 'Night vision camera options', 'Mobile monitoring app setup', 'Annual maintenance plans']
  },
  {
    id: 'door-lock',
    icon: Fingerprint,
    title: 'Smart Door Lock Systems',
    shortDescription: 'Biometric and app-controlled locking for homes and offices.',
    description:
      'Secure your entrance with modern fingerprint, passcode, RFID, and mobile-app-enabled smart locking systems.',
    gradient: 'from-purple-500 to-fuchsia-500',
    popular: true,
    includes: ['Biometric + PIN setup', 'Emergency access options', 'Access logs', 'User onboarding and training']
  },
  {
    id: 'solar',
    icon: Sun,
    title: 'Smart Solar Energy Systems',
    shortDescription: 'Efficient solar installations with generation monitoring.',
    description:
      'Reduce power bills with rooftop solar setup, inverter integration, and real-time generation tracking dashboards.',
    gradient: 'from-orange-500 to-yellow-500',
    includes: ['Load assessment', 'Subsidy guidance support', 'Inverter and battery integration', 'Post-installation maintenance']
  },
  {
    id: 'solar-cctv',
    icon: Battery,
    title: 'Solar CCTV for Remote Sites',
    shortDescription: 'Reliable surveillance where power supply is limited.',
    description:
      'Deploy off-grid CCTV systems for farms, construction sites, and warehouses with uninterrupted recording.',
    gradient: 'from-green-500 to-emerald-500',
    includes: ['Solar panel sizing', 'Battery backup systems', 'Weatherproof hardware', 'Remote health monitoring']
  },
  {
    id: 'automation',
    icon: Home,
    title: 'Smart Home Automation',
    shortDescription: 'Control lights, fans, and appliances from phone or voice.',
    description:
      'Integrate smart switches, sensors, and automation routines to improve comfort, security, and energy efficiency.',
    gradient: 'from-sky-500 to-indigo-500',
    includes: ['App + voice assistant integration', 'Scene automation', 'Energy usage optimization', 'Future-ready wiring consultation']
  },
  {
    id: 'drainage',
    icon: Droplets,
    title: 'Smart Drainage Monitoring',
    shortDescription: 'Prevent overflow with sensor-based alert systems.',
    description:
      'IoT-enabled drainage monitoring for campuses and societies with real-time alerts for proactive maintenance.',
    gradient: 'from-cyan-500 to-blue-600',
    includes: ['Sensor installation', 'Overflow alert setup', 'Dashboard reporting', 'Maintenance workflow integration']
  },
  {
    id: 'ev',
    icon: Zap,
    title: 'EV Charging Solutions',
    shortDescription: 'Compact and scalable EV charging setup for businesses.',
    description:
      'Deploy safe, standards-compliant EV charging points for residential complexes, offices, and retail spaces.',
    gradient: 'from-teal-500 to-green-600',
    includes: ['Load planning', 'Charging point installation', 'Safety checks', 'Usage reporting support']
  }
];

export const trustHighlights = [
  { icon: ShieldCheck, title: 'Verified Technicians', description: 'Trained team with reliable on-site execution.' },
  { icon: Wrench, title: 'Maintenance Support', description: 'Fast support response for troubleshooting and upkeep.' },
  { icon: Sun, title: 'Future-Ready Solutions', description: 'Scalable systems designed for business growth.' }
];
