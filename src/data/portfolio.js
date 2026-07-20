// ================================================================
//  portfolio.js  —  SINGLE SOURCE OF TRUTH
//  Edit this file to update every piece of content on the site.
//  No need to touch any component files for content changes.
// ================================================================

// ── Personal Info ────────────────────────────────────────────────
export const personal = {
  name: 'Kaveenkumar',
  initials: 'KV',
  role: '.NET Developer',
  tagline:
    'I build scalable & high-performance web applications using .NET, SQL and modern technologies.',
  availability: 'Available for freelance work',
  profileImage: 'profile.png',
  cv: 'cv.pdf',           // place your CV file in /public/cv.pdf
  email: 'kaveen@example.com',
  phone: '+91 98765 43210',
  location: 'Tamil Nadu, India',
  availabilityStatus: 'Open to work',
}

// ── Navigation Links ─────────────────────────────────────────────
export const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

// ── Social Media Links ───────────────────────────────────────────
// icon: must match a key in the ICON_MAP inside Sidebar.jsx / Contact.jsx
export const socialLinks = [
  { icon: 'github',   label: 'GitHub',   href: 'https://github.com' },
  { icon: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: 'twitter',  label: 'Twitter',  href: 'https://twitter.com' },
  { icon: 'mail',     label: 'Email',    href: 'mailto:kaveen@example.com' },
]

// ── Hero: Floating Tech Badges ───────────────────────────────────
// Change these to the technologies you want to highlight
export const techBadges = ['.NET', 'C#', 'SQL', '</>']

// ── Hero: Stats Row ──────────────────────────────────────────────
export const stats = [
  { value: '2+',   label: 'Years Experience' },
  { value: '12+',  label: 'Projects Completed' },
  { value: '10+',  label: 'Technologies' },
  { value: '100%', label: 'Client Satisfaction' },
]

// ── About Section ────────────────────────────────────────────────
export const about = {
  headline: 'Crafting Solutions. Building Impact.',
  // Words to highlight in green (must match words in headline exactly)
  highlights: ['Solutions.', 'Impact.'],
  body: "I'm a passionate .NET developer who loves building efficient, scalable, and user-friendly applications that solve real-world problems.",
  // Info card items — shown in the right column
  infoItems: [
    { label: 'Name',         value: 'Kaveenkumar',         highlight: false },
    { label: 'Location',     value: 'Tamil Nadu, India',    highlight: false },
    { label: 'Email',        value: 'kaveen@example.com',   highlight: false },
    { label: 'Availability', value: 'Open to work',         highlight: true  },
  ],
}

// ── Services Section ─────────────────────────────────────────────
// icon: 'code2' | 'database' | 'server' | 'cloud' | 'monitor' | 'settings'
export const services = [
  {
    id: 1,
    icon: 'code2',
    title: 'Web Development',
    description: 'Building responsive and high-performance web applications.',
  },
  {
    id: 2,
    icon: 'database',
    title: 'Database Design',
    description: 'Designing optimized database solutions using SQL Server.',
  },
  {
    id: 3,
    icon: 'server',
    title: 'API Development',
    description: 'Creating secure and scalable RESTful APIs.',
  },
  {
    id: 4,
    icon: 'cloud',
    title: 'Cloud Solutions',
    description: 'Deploying and managing applications on Azure.',
  },
]

// ── Projects Section ─────────────────────────────────────────────
// accentColor: any Tailwind from-* gradient class
export const projects = [
  {
    id: 1,
    title: 'Client Report Dashboard',
    description:
      'A powerful dashboard to generate and analyze client reports in real-time.',
    tags: ['.NET', 'SQL', 'React'],
    accentColor: 'from-blue-900/40',
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 2,
    title: 'Workflow Automation',
    description:
      'Automated reporting workflow using RabbitMQ and Hangfire scheduler.',
    tags: ['.NET', 'RabbitMQ', 'Hangfire'],
    accentColor: 'from-purple-900/40',
    liveLink: '#',
    repoLink: '#',
  },
  {
    id: 3,
    title: 'Student Placement Portal',
    description:
      'A web portal to manage campus placements and student details.',
    tags: ['PHP', 'MySQL', 'JS'],
    accentColor: 'from-green-900/40',
    liveLink: '#',
    repoLink: '#',
  },
]

// ── Experience Section ───────────────────────────────────────────
export const experiences = [
  {
    id: 1,
    period: '2023 - Present',
    role: 'Software Developer',
    company: 'ABC Solutions Pvt. Ltd',
    description:
      'Working on client reporting systems, automation, and performance improvements using .NET, SQL, and modern tools.',
  },
  {
    id: 2,
    period: '2022 - 2023',
    role: 'Junior Developer',
    company: 'XYZ Infotech',
    description:
      'Developed and maintained web applications and collaborated with cross-functional teams.',
  },
  {
    id: 3,
    period: '2021 - 2022',
    role: 'Intern Developer',
    company: 'Tech Innovations',
    description:
      'Worked on various internal projects and gained experience in .NET and SQL.',
  },
]

// ── Testimonials Section ─────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    quote:
      'Kaveenkumar is a dedicated developer who delivers high-quality work on time and has deep technical knowledge.',
    name: 'Ramesh B',
    role: 'Project Manager, ABC Solutions',
  },
  {
    id: 2,
    quote:
      'Excellent problem-solving skills and great communication throughout the project. Highly recommend!',
    name: 'Priya M',
    role: 'Tech Lead, XYZ Infotech',
  },
]

// ── Footer ───────────────────────────────────────────────────────
export const footer = {
  copyright: '© 2024 Kaveenkumar. All rights reserved.',
  credit: 'Designed with ♥ using Figma',
}
