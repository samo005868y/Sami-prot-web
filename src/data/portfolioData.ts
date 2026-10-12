import {
  PersonalInfo,
  WorkExperience,
  Education,
  SkillCategory,
  Certification,
  Project,
  Activity,
  Membership,
  LanguageSkill,
  Reference,
  GalleryItem
} from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Mohaiminul Haque Sami',
  primaryTitle: 'Civil Engineering Student | Aspiring Structural Engineer',
  dateOfBirth: '12 December 2005',
  nationality: 'Bangladeshi',
  gender: 'Male',
  phone: '+880 1625775868',
  email: 'mohaiminulhaquesami@gmail.com',
  linkedIn: 'linkedin.com/in/mohaiminul-haque-sami',
  linkedInUrl: 'https://www.linkedin.com/in/mohaiminul-haque-sami',
  location: 'H-54, Uttara 1230, Dhaka, Bangladesh',
  summary:
    'Civil Engineering student with practical experience in construction supervision, surveying, structural work, quantity estimation, and engineering software. Passionate about structural engineering, construction management, surveying, and practical field applications.',
  academicFields: [
    'Structural Engineering',
    'Geotechnical Engineering',
    'Transportation Engineering',
    'Environmental Engineering',
    'Water Resources Engineering',
    'Surveying and Leveling',
    'Construction Management',
    'Concrete Technology'
  ],
  practicalHighlights: [
    'Construction supervision & site inspection',
    'Field surveying & leveling verification',
    'Structural layout & centerline verification',
    'Concrete casting & slump compliance',
    'Material quantity estimation & BOQ',
    'Quality control & standard specifications compliance'
  ],
  avatarUrl: '/assets/images/Profile.jpeg'
};

export const workExperience: WorkExperience[] = [
  {
    id: 'pwd-internship',
    organization: 'Public Works Department (PWD), Bangladesh',
    department: 'Building Construction Division',
    role: 'Six Months Internship on Building Construction',
    duration: '6 Months',
    period: 'June 2024 – November 2024',
    website: 'https://pwd.gov.bd',
    location: 'Bangladesh',
    tag: 'Industrial Training',
    description:
      'Completed industrial training focused on structural construction supervision, field surveying, material testing, and earthwork estimation.',
    practicalExperience: [
      'Understanding engineering drawings',
      'Site management',
      'Structural construction supervision',
      'Field surveying',
      'Material testing',
      'Earthwork estimation',
      'Monitoring quality control',
      'Following PWD standard specifications'
    ]
  }
];

export const educationList: Education[] = [
  {
    id: 'iubat-bsc',
    degree: 'Bachelor of Science in Civil Engineering',
    institution: 'International University of Business Agriculture and Technology (IUBAT)',
    location: 'Uttara, Dhaka, Bangladesh',
    duration: 'June 2025 – April 2029',
    fieldsOfStudy: [
      'Structural Engineering',
      'Geotechnical Engineering',
      'Transportation Engineering',
      'Environmental Engineering',
      'Water Resources Engineering',
      'Surveying and Leveling',
      'Construction Management',
      'Concrete Technology'
    ],
    eqfLevel: 6,
    educationLevel: 'Higher Education',
    credits: '157 Bangladesh Credit System',
    website: 'https://iubat.edu',
    isCurrent: true
  },
  {
    id: 'mpi-diploma',
    degree: 'Diploma in Civil Engineering',
    institution: 'Mymensingh Polytechnic Institute (MPI)',
    location: 'Mymensingh, Bangladesh',
    duration: 'July 2020 – November 2024',
    fieldsOfStudy: [
      'Surveying',
      'Estimating & Costing',
      'Civil Engineering Drawing',
      'Construction Process',
      'Theory of Structures',
      'Hydraulics',
      'Geotechnical Engineering'
    ],
    cgpa: '3.56 / 4.00',
    eqfLevel: 5,
    educationLevel: 'Higher Education',
    credits: '145 BTEB Credit System',
    website: 'https://mpi.gov.bd',
    isCurrent: false
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Engineering Analysis & Field Skills',
    description: 'Practical site execution, precision measurement, and engineering calculation',
    skills: [
      { name: 'Total Station Surveying', iconName: 'Compass' },
      { name: 'Leveling', iconName: 'Target' },
      { name: 'Structural Analysis', iconName: 'Grid' },
      { name: 'Earthwork Volume Calculation', iconName: 'Calculator' },
      { name: 'Concrete Mix Design', iconName: 'Layers' },
      { name: 'Building Structural Design', iconName: 'Building2' },
      { name: 'Building Estimation & Quantity Surveying', iconName: 'FileSpreadsheet' }
    ]
  },
  {
    title: 'Engineering & Design Software',
    description: 'Industry-standard CADD, structural modeling, BIM, and spatial tools',
    skills: [
      { name: 'AutoCAD', iconName: 'DraftingCompass' },
      { name: 'SketchUp', iconName: 'Box' },
      { name: 'Lumion', iconName: 'Eye' },
      { name: 'ETABS', iconName: 'Cpu' },
      { name: 'ArcGIS (GIS)', iconName: 'Map' }
    ]
  },
  {
    title: 'General Digital Skills',
    description: 'Professional documentation, data management, and productivity tools',
    skills: [
      { name: 'Microsoft Excel', iconName: 'Table' },
      { name: 'Microsoft Word', iconName: 'FileText' },
      { name: 'Microsoft PowerPoint', iconName: 'Presentation' },
      { name: 'Google Workspace', iconName: 'FolderCheck' },
      { name: 'Canva Pro', iconName: 'Palette' },
      { name: 'Google Tools', iconName: 'Globe' }
    ]
  }
];

export const certifications: Certification[] = [
  {
    id: 'cert-gis',
    title: 'GIS (Geographic Information System)',
    issuingOrg: 'International University of Business Agriculture and Technology (IUBAT)',
    website: 'https://iubat.edu',
    category: 'Spatial & Surveying Technology'
  },
  {
    id: 'cert-masonry-plumbing',
    title: 'Masonry / Plumbing',
    levels: 'Level 1 & Level 2',
    issuingOrg: 'National Skill Development Authority (NSDA)',
    website: 'https://skillsportal.gov.bd',
    category: 'Technical Trade Certification'
  },
  {
    id: 'cert-bteb-cad',
    title: 'Aminship / Computer Office Application / Computer Aided Design & Drafting',
    issuingOrg: 'Bangladesh Technical Education Board (BTEB)',
    website: 'https://bteb.gov.bd',
    items: [
      'Aminship (Land Surveying & Demarcation)',
      'Computer Office Application',
      'Computer Aided Design & Drafting (AutoCAD)'
    ],
    category: 'Board Certified Technical Diploma Module'
  },
  {
    id: 'cert-ttc-technical',
    title: 'Motorcycle & Car Driving / Welding / Electrical House Wiring',
    issuingOrg: 'Technical Training Center (TTC)',
    website: 'https://bmet.gov.bd',
    items: [
      'Motorcycle & Car Driving',
      'Welding Technology',
      'Electrical House Wiring'
    ],
    category: 'Vocational & Practical Trade Competency'
  }
];

export const projects: Project[] = [
  {
    id: 'maskanda-residential',
    title: '5-Storey Residential Building Construction Project',
    duration: 'December 2023 – July 2024',
    role: 'Assistant Site Engineer (Practical Field Training)',
    location: 'Maskanda, Mymensingh, Bangladesh',
    responsibilities: [
      'Assisted in site supervision',
      'Structural layout verification',
      'Concrete casting',
      'Material quantity estimation',
      'Quality compliance according to structural drawings'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb18f15f8?auto=format&fit=crop&w=1200&q=80',
    placeholderCategory: 'Construction Site & Structural Execution',
    detailsNote:
      'This project page supports future uploads of actual construction photographs, structural drawings, site plans, surveying images, and field test documentation.'
  }
];

export const activities: Activity[] = [
  {
    id: 'isec-member',
    role: 'Member',
    organization: 'IUBAT Structural Engineering Club (ISEC)',
    period: '2025',
    description:
      'Collaborated with peers on hands-on structural analysis activities and department-level engineering events.'
  },
  {
    id: 'mpi-vp',
    role: 'Vice President',
    organization: 'Mymensingh Polytechnic Institute (MPI) Cultural & Technical Club',
    period: '2023',
    description:
      'Organized technical seminars and workshops that broadened practical exposure for diploma engineering students.'
  },
  {
    id: 'ttc-leader',
    role: 'Course Team Leader',
    organization: 'Technical Training Center (TTC) – Technical & Vocational Training Program',
    period: '2023',
    description:
      'Actively led and represented trainee teams during technical training modules, facilitating communication between instructors and peers.'
  }
];

export const memberships: Membership[] = [
  {
    id: 'ideb',
    organization: 'Institution of Diploma Engineers, Bangladesh (IDEB)',
    membershipType: 'Member',
    memberId: '79363',
    website: 'https://ideb.org.bd'
  },
  {
    id: 'asce',
    organization: 'American Society of Civil Engineers (ASCE)',
    membershipType: 'Student Member',
    memberId: '000012558087',
    website: 'https://asce.org'
  },
  {
    id: 'aci',
    organization: 'American Concrete Institute (ACI)',
    membershipType: 'Student Member',
    memberId: '2345460',
    website: 'https://concrete.org'
  }
];

export const languages: LanguageSkill[] = [
  {
    language: 'Bengali',
    type: 'Mother tongue'
  },
  {
    language: 'English',
    type: 'Second Language',
    understanding: 'C1/B2',
    speaking: 'B2',
    writing: 'B2'
  }
];

export const references: Reference[] = [
  {
    id: 'ref-1',
    name: 'Engr. Md. Jamshedul Alom',
    position: 'Chief Instructor, Department of Civil Engineering',
    organization: 'Mymensingh Polytechnic Institute',
    phone: '+8801712991323',
    email: 'jamsad.duet12@gmail.com'
  },
  {
    id: 'ref-2',
    name: 'Engr. Md. Mustaq Ahmed',
    position: 'Assistant Engineer (Civil)',
    organization: 'Public Works Department (PWD)',
    subOrganization: 'Mymensingh PWD Sub-Division',
    phone: '+8801983126444, +8801718622516',
    email: 'mustaque.sopnil@gmail.com'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-profile',
    title: 'Professional Engineering Profile',
    category: 'Profile',
    caption: 'Official professional portrait of Mohaiminul Haque Sami, Civil Engineering Student and aspiring Structural Engineer based in Dhaka, Bangladesh.',
    imageUrl: '/sami-profile.jpg',
    technicalNote: 'Mohaiminul Haque Sami - Verified Profile Portrait'
  },
  {
    id: 'gal-site-1',
    title: 'Building Construction & Reinforced Concrete Works',
    category: 'Construction Site',
    caption: 'Structural frame supervision, formwork alignment, and rebar reinforcement inspection on site.',
    imageUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
    technicalNote: 'Reinforced concrete construction site supervision'
  },
  {
    id: 'gal-site-2',
    title: 'Concrete Pouring & Quality Assurance',
    category: 'Construction Site',
    caption: 'On-site concrete casting verification, compaction monitoring, and slump compliance testing.',
    imageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb18f15f8?auto=format&fit=crop&w=1000&q=80',
    technicalNote: 'Fresh concrete quality verification & casting'
  },
  {
    id: 'gal-survey-1',
    title: 'Total Station Field Surveying',
    category: 'Surveying',
    caption: 'High-precision coordinate recording, optical angle measurement, and topographic boundary surveys.',
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    technicalNote: 'Total Station and optical instrument positioning'
  },
  {
    id: 'gal-survey-2',
    title: 'Benchmark Leveling & Elevation Traverse',
    category: 'Surveying',
    caption: 'Auto-level instrument setup, staff reading, earthwork elevation profiling, and datum verification.',
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80',
    technicalNote: 'Differential leveling & elevation control'
  },
  {
    id: 'gal-struct-1',
    title: 'Beam & Column Structural Reinforcement',
    category: 'Structural Work',
    caption: 'Detailed rebar spacing, stirrups tie verification, and lap length confirmation according to structural codes.',
    imageUrl: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=80',
    technicalNote: 'Rebar fabrication & structural cage positioning'
  },
  {
    id: 'gal-draw-1',
    title: 'AutoCAD Structural Drawings & Detailing',
    category: 'Engineering Drawings',
    caption: 'Structural layout plan, beam cross-sections, and footing reinforcement schedules modeled in AutoCAD.',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
    technicalNote: 'CADD layout plan, centerline grid & dimensioning'
  },
  {
    id: 'gal-doc-1',
    title: 'Field Verification & Project Documentation',
    category: 'Project Documentation',
    caption: 'Site inspection logs, earthwork estimation sheets, and PWD standard specifications compliance records.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80',
    technicalNote: 'Field measurement verification & QA logs'
  }
];
