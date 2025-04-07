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
