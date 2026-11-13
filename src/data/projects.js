// Project facts from Juliana_Orbista_CV.pdf and Juliana's confirmed updates.
// Asset paths point into public/, e.g. screenshot: '/projects/itechs.webp'.
export const projects = [
  {
    id: 'itechs', name: 'iTECHS', subtitle: 'Gamified Web & Mobile Learning Management System', format: 'browser',
    images: [
      { src: '/projects/itechs-login.png', alt: 'iTECHS account login over a pixel-art technology campus background', caption: 'Account login', width: 1918, height: 1003 },
      { src: '/projects/itechs-games-blurred.png', alt: 'iTECHS student game dashboard showing educational games and progress with student and teacher names blurred', caption: 'Games & student progress', width: 862, height: 451 },
      { src: '/projects/itechs-teacher-blurred.png', alt: 'iTECHS teacher dashboard showing student progress, performance bands, and activity summaries with student names blurred', caption: 'Teacher dashboard', width: 1743, height: 902 },
      { src: '/projects/itechs-admin.png', alt: 'iTECHS system administration dashboard with user management navigation and section performance overview', caption: 'Admin dashboard', width: 1918, height: 996 },
    ],
    dates: 'January 2026 – Present', role: 'Programmer',
    description: 'A gamified web and mobile learning platform for students, teachers, and administrators.',
    technologies: [],
    features: ['Educational games and quizzes', 'Progress tracking and leaderboards', 'User, learning content, and student performance management'],
    contribution: 'Developed the web and mobile learning platform, implemented games, quizzes, progress tracking, and leaderboards, and built teacher and administrator management features. Conducted functional testing and debugging to identify issues and verify features.',
    screenshot: null, githubUrl: null, demoUrl: null,
  },
  {
    id: 'morrow', name: 'Morrow', subtitle: 'Task Management System', format: 'board',
    images: [
      { src: '/projects/morrow-login.png', alt: 'Morrow login screen with username or email and password fields', caption: 'Account login', width: 1918, height: 991 },
      { src: '/projects/morrow-dashboard.png', alt: 'Morrow dashboard showing task totals, completion trends, and completed versus overdue tasks', caption: 'Task dashboard', width: 1918, height: 1002 },
      { src: '/projects/morrow-board.png', alt: 'Morrow shared task board with To Do, In Progress, and Done columns', caption: 'Shared task board', width: 1918, height: 999 },
    ],
    dates: 'October 2026 – Present', role: 'Programmer',
    description: 'A task management system for organizing personal tasks and sharing tasks with a team.',
    technologies: [],
    features: ['Task creation, editing, and deletion', 'Task sharing for team collaboration', 'Private tasks separate from shared tasks'],
    contribution: 'Developed the task management system and implemented task sharing, private task management, and task creation, editing, and deletion.',
    screenshot: null, githubUrl: null, demoUrl: null,
  },
  {
    id: 'petadopt', name: 'PetAdopt', subtitle: 'Mobile Application', format: 'mobile',
    images: [
      { src: '/projects/petadopt-welcome.png', alt: 'PetAdopt welcome screen with Pet Society branding and a Start Journey button', caption: 'Welcome screen', width: 370, height: 790 },
      { src: '/projects/petadopt-login.png', alt: 'PetAdopt login screen with username and password fields', caption: 'Account login', width: 388, height: 793 },
      { src: '/projects/petadopt-pets.png', alt: 'PetAdopt pet browsing screen displaying Cooper and dog and cat filters', caption: 'Find a pet', width: 387, height: 787 },
    ],
    dates: 'February 2025 – March 2025', role: 'Programmer',
    description: 'A mobile application built with Kotlin in Android Studio for pet adoption and donations to support pets.',
    technologies: ['Kotlin', 'Android Studio'], features: ['Pet adoption', 'Donations to support pets', 'Interactive application screens', 'In-app navigation for pet adoption services'],
    contribution: 'Developed the application using Kotlin and Android Studio, collaborating with a two-member team on application features. Built interactive screens and navigation to improve the user experience.',
    screenshot: null, githubUrl: 'https://github.com/julsorbista/petAdopt', demoUrl: null,
  },
  {
    id: 'hospital', name: 'Hospital Queuing', subtitle: 'Hospital Queuing Management System', format: 'desktop',
    images: [
      { src: '/projects/hospital-welcome.png', alt: 'Hiraya Medical Haven welcome screen with administrator and customer access', caption: 'Welcome & access selection', width: 1249, height: 622 },
      { src: '/projects/hospital-services.png', alt: 'Hiraya Medical Haven screen showing six medical service categories', caption: 'Medical services', width: 1248, height: 618 },
      { src: '/projects/hospital-queue.png', alt: 'Hospital queue management screen with Next and Token controls and a list of service tokens', caption: 'Queue management', width: 1246, height: 616 },
      { src: '/projects/hospital-counters.png', alt: 'Hospital token display showing queued medical service tokens assigned to Counter 1 and Counter 2', caption: 'Token & counter display', width: 1243, height: 630 },
    ],
    dates: 'October 2024 – November 2024', role: 'Programmer',
    description: 'A hospital queuing management system for managing patient queues, waiting lists, and patient records.',
    technologies: ['Java', 'MySQL', 'Apache NetBeans'], features: ['Patient queue and waiting list management', 'Patient records', 'Patient information storage, retrieval, and updates'],
    contribution: 'Developed the system in Apache NetBeans using Java and MySQL and integrated database operations for storing, retrieving, and updating patient information.',
    screenshot: null, githubUrl: null, demoUrl: null,
  },
  {
    id: 'library', name: 'Library Management', subtitle: 'Library Management System', format: 'compact',
    images: [
      { src: '/projects/library-login.png', alt: 'Night Academy library login screen with a fantasy castle and academy crest', caption: 'Night Academy login', width: 1074, height: 672 },
      { src: '/projects/library-books.png', alt: 'Library book selection screen with Academic, Science Fiction, and Historical categories', caption: 'Book selection & borrowing', width: 1069, height: 676 },
    ],
    dates: 'May 2024 – June 2024', role: 'Programmer',
    description: 'A Java-based library management system for book records, borrowing, returns, and penalty tracking.',
    technologies: ['Java'], features: ['Book record management', 'Borrowing and returns', 'Penalty tracking', 'Book availability and transaction records'],
    contribution: 'Developed the Java-based system and implemented database operations for book availability, borrowing transactions, and return records.',
    screenshot: null, githubUrl: null, demoUrl: null,
  },
];
// Technical skills confirmed by Juliana. Edit these groups to update the section.
export const skillGroups = [
  { name: 'Frontend', code: '01', symbol: '</>', items: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'] },
  { name: 'Programming Languages', code: '02', symbol: '{ }', items: ['Java', 'Kotlin', 'JavaScript', 'Python'] },
  { name: 'Database', code: '03', symbol: 'SQL', items: ['MySQL'] },
  { name: 'Development Tools', code: '04', symbol: '⌘', items: ['VS Code', 'Android Studio'] },
];

