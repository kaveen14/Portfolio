// ================================================================
//  portfolio.js  —  SINGLE SOURCE OF TRUTH
//  Edit this file to update every piece of content on the site.
//  No need to touch any component files for content changes.
// ================================================================

// ── Personal Info ────────────────────────────────────────────────
export const personal = {
  name: 'Kaveenkumar C',
  initials: 'KV',
  role: 'Full Stack Developer',
  tagline:
    'I build scalable & high-performance web applications using .NET, SQL and modern technologies.',
  availability: 'Available for freelance work',
  profileImage: 'profile.png',
  cv: './Resume/Kaveenkumar-C Resume.pdf',           // place your CV file in /public/cv.pdf
  email: 'kaveenkumarc@gmail.com',
  phone: '+91 9629894628',
  location: 'Tamil Nadu, India',
  availabilityStatus: 'Open to work',
}

// ── Navigation Links ─────────────────────────────────────────────
export const navLinks = [
  { label: 'Home',       href: '#home' },
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Courses', href: '#courses' },
  { label: 'Project Demo', href: '#demos' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

// ── Social Media Links ───────────────────────────────────────────
// icon: must match a key in the ICON_MAP inside Sidebar.jsx / Contact.jsx
export const socialLinks = [
  { icon: 'github',   label: 'GitHub',   href: 'https://github.com/ksite1' },
  { icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/kaveenkumar-c-206a2b1b1' },
  { icon: 'twitter',  label: 'Twitter',  href: 'https://x.com/KaveenkumarC' },
  { icon: 'mail',     label: 'Email',    href: 'mailto:kaveenkumarc@gmail.com' },
]

// ── Hero: Floating Tech Badges ───────────────────────────────────
// Change these to the technologies you want to highlight
export const techBadges = ['.NET', 'C#', 'SQL', 'React JS']//, '</>']

// ── Hero: Stats Row ──────────────────────────────────────────────
export const stats = [
  { value: '3+',   label: 'Years Experience' },
  // { value: '12+',  label: 'Projects Completed' },
  { value: '5+',  label: 'Technologies' },
  { value: '90%', label: 'Client Satisfaction' },
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
    { label: 'Email',        value: 'kaveenkumarc@gmail.com',   highlight: false },
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
    tags: ['.NET', 'RabbitMQ', 'Hangfire', 'SQL'],
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
    company: 'INNOCAP',
    description:
      'Working on client reporting systems, automation, and performance improvements using .NET, SQL, and modern tools.',
  },
]

// ── Testimonials Section ─────────────────────────────────────────
export const testimonials = [
  {
    id: 1,
    quote:
      'Kaveen is a skilled developer who consistently delivers high-quality work and demonstrates a strong commitment to software development. He takes ownership of his responsibilities, approaches tasks with a positive attitude, and shows good initiative in solving technical challenges. He is also a dependable team member who collaborates well with others and is willing to take on new responsibilities when needed.',
    name: 'Prabhu',
    role: 'Senior Manager, INNOCAP',
  },
  {
    id: 2,
    quote:
      'Kaveen is a great team player and is passionate about software development. He consistently delivers high-quality work and takes ownership of his responsibilities with a proactive approach. His commitment, technical expertise, and strong knowledge of .NET and SQL have been valuable contributions to our projects. He is dependable, takes initiative, and works effectively with the team to achieve project goals.',
    name: 'Dinesh',
    role: 'Lead Software Developer, INNOCAP',
  }
]

// ── Courses & Completion Section ──────────────────────────────────
export const courses = [
  {
    id: 1,
    title: 'Complete .NET Developer Course',
    provider: 'Udemy',
    year: 2024,
    certificate: 'certs/dotnet-complete.pdf', // place file in /public/certs if using
    description: 'Comprehensive course covering C#, .NET Core, ASP.NET and related tooling.',
  },
  {
    id: 2,
    title: 'React - The Complete Guide',
    provider: 'Coursera',
    year: 2023,
    certificate: '',
    description: 'Practical React development including hooks, routing and state management.',
  },
]

// ── Achievements & Recognition Section ────────────────────────────
export const achievements = [
  {
    id: 1,
    title: 'The Endurance Excellence Award',
    issuer: 'INNOCAP',
    year: 2026,
    description: 'Recognized for outstanding delivery on reporting automation and performance improvements.',
    image: './Achievements/Excellence Award.jpg', // put a path under /public/certs or upload via the site
  },
  {
    id: 2,
    title: 'The Rising Star Award',
    issuer: 'INNOCAP',
    year: 2024,
    description: 'Awarded for consistent high-quality contributions and teamwork.',
    image: './Achievements/RisingStarAward.jpg', // put a path under /public/certs or upload via the site
  },
]

// ── Demos & GitHub Repos Section ──────────────────────────────────
export const demos = [
  {
    id: 1,
    title: 'Client Report Dashboard',
    description: 'Live demo and repository for the reporting dashboard project.',
    demoLink: '#',
    repoLink: 'https://github.com/ksite1/client-report-dashboard',
  },
  {
    id: 2,
    title: 'Workflow Automation',
    description: 'Automation pipeline using RabbitMQ and Hangfire.',
    demoLink: '#',
    repoLink: 'https://github.com/ksite1/workflow-automation',
  },
]

// ── Footer ───────────────────────────────────────────────────────
export const footer = {
  copyright: '© 2026 Kaveenkumar. All rights reserved.',
  // credit: 'Designed with ♥ using Figma',
}
