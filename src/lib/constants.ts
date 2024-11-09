import { TbDeviceVisionPro } from 'react-icons/tb';
import { GiDrill } from 'react-icons/gi';
import { RiToolsLine } from 'react-icons/ri';
import { GoShieldCheck } from 'react-icons/go';
import { MdOutlinePriceCheck } from 'react-icons/md';
import { TbClock24 } from 'react-icons/tb';
import { SiMaterialdesign } from 'react-icons/si';
import { IoConstructOutline } from 'react-icons/io5';
import { BsBuildings } from 'react-icons/bs';
import { PiArmchairThin } from 'react-icons/pi';

export const NAV_LINKS = [
  {
    name: 'services',
    href: '/services',
  },
  {
    name: 'projects',
    href: '/projects',
  },
  {
    name: 'about',
    href: '/about',
  },
  {
    name: 'contact',
    href: '/contact-us',
  },
];

export const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    href: 'https://facebook.com',
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com',
  },
  {
    name: 'X',
    href: 'https://x.com',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
  },
];

export const LEGAL_LINKS = [
  {
    name: 'Terms of Service',
    href: '/terms',
  },
  {
    name: 'Privacy Policy',
    href: '/privacy',
  },
];

export const FEATURES = [
  {
    header: 'Custom Architectural Design',
    Icon: TbDeviceVisionPro,
    text: 'We specialize in custom architectural design tailored to your vision, function, and lifestyle.',
  },
  {
    header: 'Seamless Project Management',
    Icon: GoShieldCheck,
    text: 'Our experienced specialists oversee the entire process, ensuring timelines and budgets are met.',
  },
  {
    header: 'Top-Quality Material Supply',
    Icon: GiDrill,
    text: 'We source only the finest materials from trusted suppliers to match your exact specifications.',
  },
  {
    header: 'Expert Interior Design & Installation',
    Icon: RiToolsLine,
    text: 'Our creative team transforms spaces with custom design and flawless installation.',
  },
  {
    header: 'Affordable Pricing',
    Icon: MdOutlinePriceCheck,
    text: 'We offer competitive pricing and flexible payment plans to suit your budget.',
  },
  {
    header: '24/7 Support',
    Icon: TbClock24,
    text: 'We offer 24/7 support for all of your design and installation needs.',
  },
];

export const SERVICES = [
  {
    imagePath: '/home/design_architecture.jpg',
    title: 'Design & Architecture',
    description:
      'From concept sketches to detailed architectural plans, we translate your ideas into functional, aesthetically pleasing spaces. Our in-house architects collaborate closely with you to ensure your vision is realized.',
    href: '/services#design-and-architecture',
    icon: SiMaterialdesign,
    slug: 'design-and-architecture',
  },
  {
    imagePath: '/home/construction_management.jpg',
    title: 'Construction Management',
    description:
      'We handle the entire construction process, coordinating every detail from ground-breaking to finishing touches. Our experienced project managers ensure that timelines, budgets, and quality standards are met.',
    href: '/services#construction-management',
    icon: BsBuildings,
    slug: 'construction-management',
  },
  {
    imagePath: '/home/interior_design_installation.jpg',
    title: 'Interior Design & Installation',
    description:
      'Our interior design team takes care of everything, from concept development and 3D renders to the final installation of fixtures, furniture, and decor. We create spaces that reflect your taste, lifestyle, and functional needs.',
    href: '/services#interior-design-and-installation',
    icon: PiArmchairThin,
    slug: 'interior-design-and-installation',
  },
  {
    imagePath: '/home/material_sourcing_supply.jpg',
    title: 'General Supply',
    description:
      'Our long-standing relations with reputable suppliers enable us to source premium construction materials at competitive prices. Whether you need raw materials, bespoke fixtures, or high-end finishes, we guarantee quality and reliability.',
    href: '/services#general-supply',
    icon: IoConstructOutline,
    slug: 'general-supply',
  },
];

export const PROCESS = [
  {
    imagePath: '/home/01-process-consulting.svg',
    title: 'Initial Consultation & Concept Development',
    description:
      'We begin with an in-depth consultation to understand your goals, needs, and vision. Our architects and designers then craft initial concepts to ensure that all requirements are met.',
    attribute:
      '<a href="https://storyset.com/work">Work illustrations by Storyset</a>',
  },
  {
    imagePath: '/home/02-process-design.svg',
    title: 'Design & Planning',
    description:
      'Once the concept is approved, our team develops detailed architectural drawings, floor plans, and a project timeline. We work closely with you to refine every detail before construction begins.',
    attribute:
      '<a href="https://storyset.com/work">Work illustrations by Storyset</a>',
  },
  {
    imagePath: '/home/03-process-construction.svg',
    title: 'Construction & Project Management',
    description:
      "Our professional construction team brings the design to life. We manage the entire process, ensuring that all work is carried out to the highest standard. You'll receive regular updates, so you're always informed.",
    attribute:
      '<a href="https://storyset.com/worker">Worker illustrations by Storyset</a>',
  },
  {
    imagePath: '/home/04-process-supplies.svg',
    title: 'Material Supply & Sourcing',
    description:
      'We take care of all material sourcing, partnering with trusted suppliers to deliver the finest materials for your project, ensuring quality and durability.',
    attribute:
      '<a href="https://storyset.com/worker">Worker illustrations by Storyset</a>',
  },
  {
    imagePath: '/home/05-process-installation.svg',
    title: 'Interior Design & Installation',
    description:
      'Once construction is complete, our interior design experts step in to create a space that reflects your style. From custom furniture to final decor touches, we handle it all with precision.',
    attribute:
      '<a href="https://storyset.com/team">Team illustrations by Storyset</a>',
  },
  {
    imagePath: '/home/06-process-completion-handover.svg',
    title: 'Final Handover',
    description:
      'After every detail is perfected, we conduct a thorough walkthrough to ensure your complete satisfaction. Your dream space is now ready to be enjoyed!',
    attribute:
      '<a href="https://storyset.com/work">Work illustrations by Storyset</a>',
  },
];

export const QUESTIONS = [
  {
    question: 'Getting Started with Us',
    answer: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
  },
  {
    question: 'Our Process and Services',
    answer: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
  },

  {
    question: 'Pricing, Payments, and Policies',
    answer: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
  },
];

export const PROJECTS = [
  {
    projectName: 'Project 1',
    projectDescription:
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    image: '/projects/construction_management_1.jpg',
  },
  {
    projectName: 'Project 2',
    projectDescription:
      'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
    image: '/projects/construction_management_2.jpg',
  },
];

export const SLIDES = [
  {
    asset: 'construction_management_1.jpg',
    alt: 'house under construction',
    width: 1920,
    height: 1080,
    category: 'construction-management',
  },
  {
    asset: 'construction_management_2.jpg',
    alt: 'house pending exterior finishing',
    width: 1920,
    height: 1080,
    category: 'construction-management',
  },
  {
    asset: '/fabricated_chair_1.jpg',
    alt: 'fabricated chair',
    width: 1920,
    height: 1080,
    category: 'interior-design-and-installation',
  },
  {
    asset: '/fabricated_chair_2.jpg',
    alt: 'fabricated chair',
    width: 1920,
    height: 1080,
    category: 'interior-design-and-installation',
  },
  {
    asset: '/fabricated_chair_3.jpg',
    alt: 'fabricated chair',
    width: 1920,
    height: 1080,
    category: 'interior-design-and-installation',
  },
  {
    asset: 'furniture_supply_1.jpg',
    alt: 'office chair with a glass table',
    width: 1920,
    height: 1080,
    category: 'material-supply-and-sourcing',
  },
  {
    asset: 'furniture_supply_2.jpg',
    alt: 'office desk and chair',
    width: 1920,
    height: 1080,
    category: 'material-supply-and-sourcing',
  },
  {
    asset: 'interior_decoration.jpg',
    alt: 'interior decoration',
    width: 1920,
    height: 1080,
    category: 'interior-design-and-installation',
  },
  {
    asset: 'interior_fittings.jpg',
    alt: 'interior fitting',
    width: 1920,
    height: 1080,
    category: 'interior-design-and-installation',
  },
  {
    asset: 'paint_work_1.jpg',
    alt: 'paint work',
    width: 1920,
    height: 1080,
    category: 'interior-design-and-installation',
  },
  {
    asset: 'paint_work_2.jpg',
    alt: 'paint work',
    width: 1920,
    height: 1080,
    category: 'interior-design-and-installation',
  },
];
