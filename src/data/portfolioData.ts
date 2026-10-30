import { Project, Skill, Certification, Achievement } from '../types';

export const PERSONAL_INFO = {
  name: 'Dillu Kumar Chaubey',
  shortName: 'Dillu Chaubey',
  role: 'Aspiring Software Engineer',
  tagline: 'Building logic, exploring intelligence, creating possibilities.',
  institution: 'Government Engineering College Madhubani',
  affiliation: 'Bihar Engineering University (BEU)',
  branch: 'Computer Science and Engineering (IoT)',
  batch: '2023–2027',
  location: 'Madhubani, Bihar, India',
  email: 'katayandillu@gmail.com',
  alternateEmail: 'chaubeyydillu123@gmail.com',
  phone: '+91 7004842811',
  github: 'https://github.com/dilluthecoder',
  linkedin: 'https://www.linkedin.com/in/dillu-kumar-chaubey-b829062b1/',
  instagram: 'https://www.instagram.com/dilluchaubey/',
  youtube: 'https://youtube.com/@gecm_wale',
  resumeFile: 'assets/dillu_resume.pdf',
  photoFile: 'assets/github_avatar.png',
  avatarUrl: 'https://avatars.githubusercontent.com/u/179100399?v=4',
};

export const PROJECTS: Project[] = [
  {
    id: 'musharwa',
    name: 'Musharwa Village Community Portal',
    category: 'mern',
    description: 'A full-stack MERN community portal developed for Musharwa Village to provide a digital platform for sharing village information, notices, gallery updates, and community feedback with a secured admin dashboard.',
    techStack: ['React 19', 'Vite', 'Node.js', 'Express.js 5', 'MongoDB Atlas', 'Render Cloud'],
    features: [
      'Public Village Landing Experience & Responsive UI',
      'Dynamic Notice Board with Instant Admin Broadcasts',
      'Village Cultural Photo Gallery with Cloud Storage',
      'Community Feedback Collection & Moderation Pipeline',
      'Protected Administrative Dashboard with Full CRUD'
    ],
    repoUrl: 'https://github.com/Dilluthecoder/musharwa-village',
    liveUrl: 'https://musharwa-village-frontend.onrender.com',
    backendUrl: 'https://musharwa-village.onrender.com',
    status: 'Production Live',
    screenshot: 'assets/musharwa_home.png',
    gallery: [
      'assets/musharwa_home.png',
      'assets/musharwa_notice.png',
      'assets/musharwa_about.png',
      'assets/musharwa_feedback.png',
      'assets/musharwa_gallery.png'
    ],
    verified: true,
  },
  {
    id: 'aiml-lab',
    name: 'AI & Machine Learning Exploratory Lab',
    category: 'ai' as any,
    description: 'Active hands-on exploration of Machine Learning algorithms, predictive regression models, classification pipelines, data cleaning with Pandas, and neural network foundations.',
    techStack: ['Python', 'NumPy', 'Pandas', 'Scikit-Learn', 'Neural Networks', 'Jupyter'],
    features: [
      'Supervised & Unsupervised Learning Algorithm Implementations',
      'Exploratory Data Analysis (EDA) and Feature Scaling with Pandas',
      'Foundations of Neural Networks and Activation Functions'
    ],
    repoUrl: 'https://github.com/dilluthecoder',
    status: 'Currently Learning',
    screenshot: 'assets/github_avatar.png',
    verified: true,
  },
  {
    id: 'dillu-portfolio',
    name: 'Personal Developer Portfolio (Foundation)',
    category: 'frontend',
    description: 'Dillu\'s initial developer portfolio showcasing technical skills, resume download, responsive CSS design, and interactive Typed.js dynamic text effects.',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Typed.js', 'GitHub Pages'],
    features: [
      'Mobile-Friendly Single Page Architecture',
      'Smooth Scroll Navigation and Dark Futuristic Theme',
      'Direct Resume Download and Contact Link Integration',
      'Automated Typed.js Dynamic Role Showcase'
    ],
    repoUrl: 'https://github.com/Dilluthecoder/dillu-portfolio',
    liveUrl: 'https://dilluthecoder.github.io/dillu-portfolio/',
    status: 'Deployed',
    screenshot: 'assets/github_avatar.png',
    verified: true,
  },
  {
    id: 'diwali-website',
    name: 'Diwali Website for Chaubey Family',
    category: 'frontend',
    description: 'A festive web celebration portal crafted for the Chaubey family featuring CSS animation keyframes, radiant typography glows, and celebratory visual effects.',
    techStack: ['HTML5', 'CSS3', 'Keyframe Animations', 'GitHub Pages'],
    features: [
      'Custom CSS Keyframe Fireworks & Glow Animations',
      'Festive Greeting Card Responsive Layout',
      'Pure CSS Performance with Zero External Dependencies'
    ],
    repoUrl: 'https://github.com/Dilluthecoder/Diwali-website-for-chaubey-family',
    liveUrl: 'https://dilluthecoder.github.io/Diwali-website-for-chaubey-family/',
    status: 'Deployed',
    screenshot: 'assets/musharwa_gallery.png',
    verified: true,
  },
  {
    id: 'cpp-dsa-lab',
    name: 'C++ & Data Structures Engineering Lab',
    category: 'cpp',
    description: 'Rigorous algorithmic suite developed in modern C++ covering linked lists, trees, graphs, sorting, and dynamic programming with complexity proofs.',
    techStack: ['C++', 'STL Containers', 'OOP', 'Algorithm Design'],
    features: [
      'High-performance STL Vector, Map, and Set implementations',
      'Graph Traversal Algorithms (BFS, DFS, Dijkstra)',
      'Asymptotic Time & Space Complexity Profiling'
    ],
    repoUrl: 'https://github.com/dilluthecoder',
    status: 'Core Engineering',
    screenshot: 'assets/musharwa_about.png',
    verified: true,
  },
  {
    id: 'iot-sensor-node',
    name: 'IoT Smart Environment Telemetry Node',
    category: 'iot',
    description: 'Embedded microcontroller architecture designed as part of the CSE-IoT specialization, sampling ambient sensors and transmitting telemetry data.',
    techStack: ['Embedded C', 'IoT Sensors', 'Microcontroller Architecture', 'Telemetry Protocols'],
    features: [
      'Continuous sensor polling and analog-to-digital sampling',
      'Packet aggregation and packet payload checksum verification',
      'Wireless sensor networking and low-power sleep cycles'
    ],
    repoUrl: 'https://github.com/dilluthecoder',
    status: 'Branch Specialization',
    screenshot: 'assets/musharwa_home.png',
    verified: true,
  }
];

export const SKILLS: Skill[] = [
  { name: 'AI & Machine Learning', category: 'tools', description: 'Supervised models, NumPy, Pandas, Scikit-Learn, and neural network foundations.', highlight: 'Currently Learning', icon: 'Sparkles' },
  { name: 'C++', category: 'programming', description: 'STL, OOP paradigms, memory pointers, and algorithmic logic.', highlight: 'Coursework & DSA', icon: 'Code2' },
  { name: 'Python', category: 'programming', description: 'Algorithmic scripting, ML pipelines, and automation.', highlight: 'Cisco Certified', icon: 'FileCode' },
  { name: 'Java', category: 'programming', description: 'Object-oriented programming, class design, and inheritance.', highlight: 'Academic & OOP', icon: 'Coffee' },
  { name: 'React.js', category: 'web', description: 'Modern hooks, React Router DOM, dynamic components, and state management.', highlight: 'MERN Frontend', icon: 'Atom' },
  { name: 'Node.js & Express', category: 'web', description: 'REST APIs, server routing, middleware, CORS, and Multer file pipelines.', highlight: 'Backend Architecture', icon: 'Server' },
  { name: 'MongoDB Atlas', category: 'web', description: 'NoSQL collections, document schemas, and cloud database cluster management.', highlight: 'Cloud Database', icon: 'Database' },
  { name: 'JavaScript (ES6+)', category: 'web', description: 'Asynchronous event loops, DOM manipulation, promises, and fetch APIs.', highlight: 'Web Standard', icon: 'Braces' },
  { name: 'HTML5 & CSS3', category: 'web', description: 'Semantic markup, Flexbox, CSS Grid, keyframes, and mobile responsiveness.', highlight: 'UI Standards', icon: 'Layout' },
  { name: 'DSA & OOP', category: 'cs', description: 'Trees, Graphs, Stacks, Queues, Sorting algorithms, and OOP patterns.', highlight: 'Core Foundation', icon: 'Network' },
  { name: 'DBMS, OS & Networks', category: 'cs', description: 'Relational schemas, process concurrency, and Cisco CCNA certified networking.', highlight: 'CCNA & Systems', icon: 'HardDrive' },
  { name: 'Git & GitHub', category: 'tools', description: 'Version control branching, pull requests, and open-source collaboration.', highlight: 'DevOps & VCS', icon: 'GitBranch' },
  { name: 'Internet of Things (IoT)', category: 'tools', description: 'Sensor integration, microcontroller hardware, and telemetry networks.', highlight: 'CSE-IoT Degree', icon: 'Radio' },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Cisco CCNA Certification',
    issuer: 'Cisco Systems',
    category: 'Networking',
    description: 'Comprehensive network fundamentals, IP connectivity, routing protocols, subnetting, and network security architectures.',
    verified: true
  },
  {
    title: 'Cisco Python Essentials 1 & 2',
    issuer: 'Cisco Networking Academy',
    category: 'Programming',
    description: 'Fundamental to advanced Python programming, OOP structures, error handling, modules, and data processing.',
    verified: true
  },
  {
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    category: 'Security',
    description: 'Cyber threats, cryptographic concepts, defensive safeguards, and enterprise data privacy protections.',
    verified: true
  },
  {
    title: 'NPTEL Soft Skills Certification',
    issuer: 'NPTEL / IIT',
    category: 'Professional Skills',
    description: 'Interpersonal communication, team leadership, conflict resolution, and workplace dynamics.',
    verified: true
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: 'Umang Volleyball Winner',
    event: 'Umang Annual Sports Tournament',
    year: '2024',
    role: 'Champion',
    description: 'Led the squad to repeat championship victory in the college annual athletic tournament.'
  },
  {
    title: 'Umang Volleyball Winner',
    event: 'Umang Annual Sports Tournament',
    year: '2023',
    role: 'Champion',
    description: 'Champion of the inter-branch tournament during the 2023 edition of the Umang athletic meet.'
  },
  {
    title: 'Techmantra Technical Event Organizer',
    event: 'Techmantra Technical Fest',
    year: '2024',
    role: 'Core Organizing Member',
    description: 'Coordinated competitions, participant logistics, and stage scheduling for the college tech festival.'
  },
  {
    title: 'College Treasure Hunt Coordinator',
    event: 'Campus Engagement Fest',
    year: '2023',
    role: 'Lead Coordinator',
    description: 'Engineered clues, monitored tracking checkpoints, and coordinated event logistics across campus grounds.'
  }
];
