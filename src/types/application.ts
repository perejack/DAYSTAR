export interface ApplicationFormData {
  // Personal Information
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  nationality: string;
  gender: string;
  religion: string;
  phoneNumber: string;
  hasDisability: boolean;

  // Programme Details
  programmeLevel: string;
  programmeName: string;
  campus: string;
  intake: string;
  modeOfStudy: string;

  // High School Details
  highSchoolSystem: string;
  examNumber: string;
  institutionName: string;
  fromYear: string;
  toYear: string;
  graduationYear: string;
  meanGrade: string;
  subjectGrades: SubjectGrade[];
  customSubjects: SubjectGrade[];

  // Family Details
  fatherStatus: string;
  fatherName: string;
  fatherPhone: string;
  motherStatus: string;
  motherName: string;
  motherPhone: string;
}

export const PROGRAMME_LEVELS = [
  'Certificate',
  'Diploma',
  'Undergraduate',
  'Postgraduate',
  'Masters',
  'PhD'
];

export const STUDY_MODES = [
  'Full Time',
  'Part Time',
  'Evening',
  'Weekend',
  'Online'
];

export const CAMPUSES = [
  'Main Campus',
  'City Campus',
  'Westlands Campus'
];

export const INTAKES = [
  'January',
  'May',
  'September'
];

export const HIGH_SCHOOL_SYSTEMS = [
  'KCSE',
  'IGCSE',
  'IB',
  'Other'
];

export const GRADES = [
  'A',
  'A-',
  'B+',
  'B',
  'B-',
  'C+',
  'C',
  'C-',
  'D+',
  'D',
  'D-',
  'E'
];

export const SUBJECTS = [
  'BIOLOGY',
  'BUSINESS',
  'CHEMISTRY',
  'COMPUTER STUDIES',
  'CRE',
  'ENGLISH',
  'FRENCH',
  'GEOGRAPHY',
  'HISTORY',
  'IRE',
  'KISWAHILI',
  'MATHEMATICS',
  'PHYSICS'
];

export const PROGRAMMES = [
  // Undergraduate Programs
  "Bachelor of Arts in Psychology",
  "Bachelor of Arts in Social Work",
  "Bachelor of Education (Arts)",
  "Bachelor of Education (Science)",
  "Bachelor of Science in Actuarial Science",
  "Bachelor of Science in Biomedical Science",
  "Bachelor of Science in Computer Science",
  "Bachelor of Science in Environmental Health",
  "Bachelor of Science in Nursing",
  "Bachelor of Laws",
  "Bachelor of Business Administration",
  "Bachelor of Business Logistics",
  "Bachelor of Arts in Monitoring and Evaluation",
  "Bachelor of Science in Economics",
  "Bachelor of Science in Management Information Systems",
  "Bachelor of Science in Marketing",
  "Bachelor of Science in Disability Studies",

  // Professional Programs
  "ACCA",
  "ATD",
  "Accounting",
  "CAMS",
  "CIFA",
  "CIM",
  "CIPS",
  "CPA",
  "CS",

  // Certificate Programs
  "Certificate in Business Management",
  "Certificate in Community Development",
  "Certificate in Counseling and Psychology",
  "Certificate in ICT",
  "Certificate in Media Studies",
  "Certificate in Music",
  "Certificate in Peace and International Relations",

  // Diploma Programs
  "Diploma in Agriculture",
  "Diploma in Community Development",
  "Diploma in Counselling",

  // Masters Programs
  "Master of Arts in Child Development",
  "Master of Arts in Christian Ministries",
  "Master of Arts in Clinical Psychology",
  "Master of Arts in Community Development",
  "Master of Arts in Counselling Psychology",
  "Master of Arts in Diplomacy",
  "Master of Arts in Monitoring and Evaluation",
  "Master of Business Administration",
  "Master of Science in Economics",
  "Master of Science in Nursing Education",

  // Postgraduate Programs
  "Postgraduate Diploma in Child Development",
  "Postgraduate Diploma in Education"
];

export interface SubjectGrade {
  subject: string;
  grade: string;
  isCustom?: boolean;
}
