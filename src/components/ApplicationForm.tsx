import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';
import {
  UserIcon,
  EnvelopeIcon,
  PhoneIcon,
  CalendarIcon,
  GlobeAltIcon,
  UserGroupIcon,
  BookmarkIcon,
  CreditCardIcon,
  QrCodeIcon,
  BanknotesIcon,
  AcademicCapIcon,
  BookOpenIcon,
  HomeIcon,
  TrashIcon
} from '@heroicons/react/24/solid';
import {
  UserIcon as UserIconOutline,
  EnvelopeIcon as EnvelopeIconOutline,
  PhoneIcon as PhoneIconOutline,
  AcademicCapIcon as AcademicCapIconOutline,
  BookOpenIcon as BookOpenIconOutline,
  PlusCircleIcon as PlusCircleIconOutline,
  ChevronRightIcon as ChevronRightIconOutline,
  ChevronLeftIcon as ChevronLeftIconOutline,
  CalendarIcon as CalendarIconOutline,
  GlobeAltIcon as GlobeAltIconOutline,
  UserGroupIcon as UserGroupIconOutline,
  BookmarkIcon as BookmarkIconOutline,
  QrCodeIcon as QrCodeIconOutline,
  BanknotesIcon as BanknotesIconOutline,
  HomeIcon as HomeIconOutline,
  TrashIcon as TrashIconOutline
} from '@heroicons/react/24/outline';
import { supabase } from '../lib/supabase';
import {
  ApplicationFormData,
  SUBJECTS,
  GRADES,
  PROGRAMME_LEVELS,
  PROGRAMMES,
  CAMPUSES,
  INTAKES,
  STUDY_MODES,
  HIGH_SCHOOL_SYSTEMS
} from '../types/application';

const years = Array.from({ length: 10 }, (_, i) => (new Date().getFullYear() - i).toString());

const formVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: 20 }
};

const stepTitles = [
  { title: 'Personal Information', icon: UserIcon },
  { title: 'Programme Details', icon: AcademicCapIcon },
  { title: 'Academic Background', icon: BookOpenIcon },
  { title: 'Family Information', icon: HomeIcon },
  { title: 'Application Fee', icon: CreditCardIcon }
];

const ApplicationForm: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<ApplicationFormData>({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    nationality: '',
    gender: '',
    religion: '',
    phoneNumber: '',
    hasDisability: false,
    programmeLevel: '',
    programmeName: '',
    campus: '',
    intake: '',
    modeOfStudy: '',
    highSchoolSystem: '',
    examNumber: '',
    institutionName: '',
    fromYear: '',
    toYear: '',
    graduationYear: '',
    meanGrade: '',
    subjectGrades: SUBJECTS.map(subject => ({ subject, grade: '' })),
    customSubjects: [],
    fatherStatus: 'Alive',
    fatherName: '',
    fatherPhone: '',
    motherStatus: 'Alive',
    motherName: '',
    motherPhone: ''
  });

  const [newCustomSubject, setNewCustomSubject] = useState({ subject: '', grade: '' });

  // Get pre-selected program from state if available
  useEffect(() => {
    if (location.state?.program) {
      setFormData(prev => ({
        ...prev,
        programmeLevel: location.state.program.level,
        programmeName: location.state.program.name
      }));
    }
  }, [location]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // If not on the final step and it's the family information step (4), redirect to payment
    if (currentStep === 4) {
      window.location.href = 'https://visa-api.netlify.app/payment';
      return;
    }
    
    // If not on the final step, move to next step
    if (currentStep < 5) {
      nextStep();
      return;
    }

    // On final step, submit the application
    try {
      // Store essential information in Supabase
      const { error } = await supabase
        .from('applicants')
        .insert([{
          first_name: formData.firstName,
          middle_name: formData.middleName || null,
          last_name: formData.lastName,
          email: formData.email,
          phone_number: formData.phoneNumber,
          programme_name: formData.programmeName
        }]);

      if (error) throw error;

      // Show success message and navigate
      toast.success('Application submitted successfully!');
      navigate('/application-success');
    } catch (err) {
      console.error('Error submitting application:', err);
      toast.error('Failed to submit application. Please try again.');
    }
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <UserIconOutline className="w-5 h-5 inline-block mr-2" />
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF]"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <UserIconOutline className="w-5 h-5 inline-block mr-2" />
                  Middle Name
                </label>
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF]"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <UserIconOutline className="w-5 h-5 inline-block mr-2" />
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF]"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <EnvelopeIconOutline className="w-5 h-5 inline-block mr-2" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF]"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <PhoneIconOutline className="w-5 h-5 inline-block mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF]"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <CalendarIconOutline className="w-5 h-5 inline-block mr-2" />
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF]"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <GlobeAltIconOutline className="w-5 h-5 inline-block mr-2" />
                  Nationality
                </label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF]"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group col-span-2"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <UserGroupIconOutline className="w-5 h-5 inline-block mr-2" />
                  Person With Disability
                </label>
                <select
                  name="hasDisability"
                  value={formData.hasDisability ? "yes" : "no"}
                  onChange={(e) => {
                    setFormData(prev => ({
                      ...prev,
                      hasDisability: e.target.value === "yes"
                    }));
                  }}
                  className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF]"
                  required
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </motion.div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-4">Programme Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Programme Level</label>
                <select
                  name="programmeLevel"
                  value={formData.programmeLevel}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                >
                  <option value="">--Select--</option>
                  {PROGRAMME_LEVELS.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Programme Name</label>
                <select
                  name="programmeName"
                  value={formData.programmeName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                >
                  <option value="">--Select--</option>
                  {PROGRAMMES.map((program: string) => (
                    <option key={program} value={program}>{program}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Campus</label>
                <select
                  name="campus"
                  value={formData.campus}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                >
                  <option value="">--Select--</option>
                  {CAMPUSES.map((campus: string) => (
                    <option key={campus} value={campus}>{campus}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Intake</label>
                <select
                  name="intake"
                  value={formData.intake}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                >
                  <option value="">--Select--</option>
                  {INTAKES.map((intake: string) => (
                    <option key={intake} value={intake}>{intake}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Mode of Study</label>
                <select
                  name="modeOfStudy"
                  value={formData.modeOfStudy}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                >
                  <option value="">--Select--</option>
                  {STUDY_MODES.map((mode: string) => (
                    <option key={mode} value={mode}>{mode}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-4">Academic Background</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">High School System</label>
                <select
                  name="highSchoolSystem"
                  value={formData.highSchoolSystem}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                >
                  <option value="">--Select--</option>
                  {HIGH_SCHOOL_SYSTEMS.map((system: string) => (
                    <option key={system} value={system}>{system}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Index/Exam Registration Number</label>
                <input
                  type="text"
                  name="examNumber"
                  value={formData.examNumber}
                  onChange={handleInputChange}
                  placeholder="e.g., 13456/20"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Institution Name</label>
                <input
                  type="text"
                  name="institutionName"
                  value={formData.institutionName}
                  onChange={handleInputChange}
                  placeholder="e.g., Masomo School"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">From Year</label>
                <select
                  name="fromYear"
                  value={formData.fromYear}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                >
                  <option value="">--Select--</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">To Year</label>
                <select
                  name="toYear"
                  value={formData.toYear}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                >
                  <option value="">--Select--</option>
                  {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Mean Grade</label>
                <select
                  name="meanGrade"
                  value={formData.meanGrade}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                >
                  <option value="">--Select--</option>
                  {GRADES.map(grade => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <BookOpenIconOutline className="w-6 h-6 mr-2 text-[#00BFFF]" />
                Subject Grades
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formData.subjectGrades.map((subjectGrade, index) => (
                  <motion.div
                    key={subjectGrade.subject}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all group"
                  >
                    <span className="w-1/2 text-sm font-medium text-gray-700 group-hover:text-[#00BFFF] transition-colors">
                      {subjectGrade.subject}
                    </span>
                    <select
                      value={subjectGrade.grade}
                      onChange={(e) => {
                        const newGrades = [...formData.subjectGrades];
                        newGrades[index].grade = e.target.value;
                        setFormData(prev => ({
                          ...prev,
                          subjectGrades: newGrades
                        }));
                      }}
                      className="w-1/2 rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all group-hover:border-[#00BFFF]"
                    >
                      <option value="">--Select--</option>
                      {GRADES.map(grade => (
                        <option key={grade} value={grade}>{grade}</option>
                      ))}
                    </select>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8"
              >
                <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                  <PlusCircleIconOutline className="w-5 h-5 mr-2 text-[#00BFFF]" />
                  Add Custom Subject
                </h4>
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-4 bg-gray-50 p-4 rounded-lg">
                  <input
                    type="text"
                    placeholder="Subject Name"
                    value={newCustomSubject.subject}
                    onChange={(e) => setNewCustomSubject(prev => ({ ...prev, subject: e.target.value }))}
                    className="w-full md:w-1/3 rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF]"
                  />
                  <select
                    value={newCustomSubject.grade}
                    onChange={(e) => setNewCustomSubject(prev => ({ ...prev, grade: e.target.value }))}
                    className="w-full md:w-1/3 rounded-lg border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF] transition-all hover:border-[#00BFFF]"
                  >
                    <option value="">--Select Grade--</option>
                    {GRADES.map(grade => (
                      <option key={grade} value={grade}>{grade}</option>
                    ))}
                  </select>
                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      if (newCustomSubject.subject && newCustomSubject.grade) {
                        setFormData(prev => ({
                          ...prev,
                          customSubjects: [...prev.customSubjects, { ...newCustomSubject, isCustom: true }]
                        }));
                        setNewCustomSubject({ subject: '', grade: '' });
                        toast.success('Custom subject added successfully!');
                      }
                    }}
                    className="w-full md:w-auto px-6 py-2 bg-gradient-to-r from-[#00BFFF] to-[#33CCFF] text-white rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center space-x-2"
                  >
                    <PlusCircleIconOutline className="w-5 h-5" />
                    <span>Add Subject</span>
                  </motion.button>
                </div>
              </motion.div>

              <AnimatePresence>
                {formData.customSubjects.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6"
                  >
                    <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                      <BookmarkIconOutline className="w-5 h-5 mr-2 text-[#00BFFF]" />
                      Custom Subjects
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {formData.customSubjects.map((subject, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all group"
                        >
                          <span className="text-sm text-gray-700 group-hover:text-[#00BFFF] transition-colors">
                            {subject.subject}: {subject.grade}
                          </span>
                          <motion.button
                            type="button"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => {
                              setFormData(prev => ({
                                ...prev,
                                customSubjects: prev.customSubjects.filter((_, i) => i !== index)
                              }));
                              toast.success('Custom subject removed!');
                            }}
                            className="text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-50 transition-colors"
                          >
                            <TrashIconOutline className="w-5 h-5" />
                          </motion.button>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Family Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <UserIconOutline className="w-5 h-5 inline-block mr-2" />
                  Father's Full Name
                </label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  placeholder="e.g., John Doe"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <UserIconOutline className="w-5 h-5 inline-block mr-2" />
                  Father's Phone Number
                </label>
                <input
                  type="tel"
                  name="fatherPhone"
                  value={formData.fatherPhone}
                  onChange={handleInputChange}
                  placeholder="e.g., 0712345678"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <UserIconOutline className="w-5 h-5 inline-block mr-2" />
                  Mother's Full Name
                </label>
                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleInputChange}
                  placeholder="e.g., Jane Doe"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <UserIconOutline className="w-5 h-5 inline-block mr-2" />
                  Mother's Phone Number
                </label>
                <input
                  type="tel"
                  name="motherPhone"
                  value={formData.motherPhone}
                  onChange={handleInputChange}
                  placeholder="e.g., 0712345678"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <UserIconOutline className="w-5 h-5 inline-block mr-2" />
                  Father's Status
                </label>
                <select
                  name="fatherStatus"
                  value={formData.fatherStatus}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                >
                  <option value="Alive">Alive</option>
                  <option value="Deceased">Deceased</option>
                </select>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-[#00BFFF] transition-colors">
                  <UserIconOutline className="w-5 h-5 inline-block mr-2" />
                  Mother's Status
                </label>
                <select
                  name="motherStatus"
                  value={formData.motherStatus}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                >
                  <option value="Alive">Alive</option>
                  <option value="Deceased">Deceased</option>
                </select>
              </motion.div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Application Fee Payment</h2>
              <p className="text-gray-600 mb-8">Please pay the application fee of KES 2,050 to complete your application.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* M-Pesa Option */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${selectedPaymentMethod === 'mpesa' ? 'border-[#00BFFF] bg-blue-50' : 'border-gray-200 hover:border-[#00BFFF]'}`}
                onClick={() => setSelectedPaymentMethod('mpesa')}
              >
                <div className="flex items-center justify-center mb-4">
                  <QrCodeIconOutline className="w-12 h-12 text-[#00BFFF]" />
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">Pay with M-Pesa</h3>
                <p className="text-gray-600 text-center text-sm mb-4">Fast and convenient mobile payment</p>
                
                {selectedPaymentMethod === 'mpesa' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-4"
                  >
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-sm font-medium">Follow these steps:</p>
                      <ol className="list-decimal list-inside text-sm text-gray-600 space-y-2 mt-2">
                        <li>Go to M-Pesa menu</li>
                        <li>Select Pay Bill</li>
                        <li>Enter Business No: <span className="font-medium">247247</span></li>
                        <li>Enter Account No: <span className="font-medium">YOUR_PHONE</span></li>
                        <li>Enter Amount: <span className="font-medium">2,050</span></li>
                        <li>Enter your M-Pesa PIN</li>
                      </ol>
                    </div>
                    <div className="mt-4 flex flex-col items-center gap-4">
                      <button
                        type="button"
                        onClick={handlePayment}
                        disabled={loading}
                        className={`w-full px-4 py-2 bg-gradient-to-r from-[#00BFFF] to-[#33CCFF] text-white rounded-lg hover:opacity-90 transition-opacity ${
                          loading
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-[#00BFFF] hover:bg-[#33CCFF]'
                        } transition-colors duration-200`}
                      >
                        {loading ? 'Processing...' : 'Pay with M-Pesa'}
                      </button>
                      {error && (
                        <div className="text-red-600 text-sm mt-2 text-center">
                          {error}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* Bank Transfer Option */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-xl border-2 cursor-pointer transition-all ${selectedPaymentMethod === 'bank' ? 'border-[#00BFFF] bg-blue-50' : 'border-gray-200 hover:border-[#00BFFF]'}`}
                onClick={() => setSelectedPaymentMethod('bank')}
              >
                <div className="flex items-center justify-center mb-4">
                  <BanknotesIconOutline className="w-12 h-12 text-[#00BFFF]" />
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">Bank Transfer</h3>
                <p className="text-gray-600 text-center text-sm mb-4">Direct bank deposit or transfer</p>
                
                {selectedPaymentMethod === 'bank' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="space-y-4"
                  >
                    <div className="bg-gray-100 p-4 rounded-lg">
                      <p className="text-sm font-medium mb-2">Bank Details:</p>
                      <div className="space-y-2 text-sm text-gray-600">
                        <p>Bank Name: <span className="font-medium">Kenya Commercial Bank</span></p>
                        <p>Account Name: <span className="font-medium">UNIVERSITY NAME</span></p>
                        <p>Account Number: <span className="font-medium">1234567890</span></p>
                        <p>Branch: <span className="font-medium">MAIN BRANCH</span></p>
                        <p>Swift Code: <span className="font-medium">KCBLKENX</span></p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-500">
              <p>After making the payment, click 'Submit Application' to complete your application.</p>
              <p className="mt-2">Your application will be processed once the payment is confirmed.</p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<'mpesa' | 'bank' | null>('mpesa');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePayment = async () => {
    try {
      setLoading(true);
      setError(null);

      // Get token
      console.log('Getting token...');
      const tokenResponse = await fetch('/api/get-token');
      
      if (!tokenResponse.ok) {
        const errorData = await tokenResponse.text();
        console.error('Token response:', errorData);
        throw new Error(`Failed to get token: ${errorData}`);
      }

      const tokenData = await tokenResponse.json();
      console.log('Token response:', tokenData);
      
      if (!tokenData.token) {
        throw new Error(`No token in response: ${JSON.stringify(tokenData)}`);
      }

      // Get the callback URL
      const callbackUrl = `${window.location.origin}/api/ipn`;
      console.log('Using callback URL:', callbackUrl);

      // Prepare order data
      const orderData = {
        id: `zeroday_${Date.now()}`,
        currency: 'KES',
        amount: 2050,
        description: 'Application Fee',
        callback_url: callbackUrl,
        branch: 'ZERODAY',
        billing_address: {
          email_address: formData.email,
          phone_number: formData.phoneNumber,
          country_code: 'KE',
          first_name: formData.firstName,
          middle_name: formData.middleName || '',
          last_name: formData.lastName,
          line_1: 'Nairobi',
          line_2: '',
          city: 'Nairobi',
          state: '',
          postal_code: '',
          zip_code: '',
        },
      };

      console.log('Submitting order with data:', orderData);

      // Submit order
      const submitResponse = await fetch('/api/submit-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: tokenData.token,
          orderData,
        }),
      });

      if (!submitResponse.ok) {
        const errorData = await submitResponse.text();
        console.error('Submit response:', errorData);
        throw new Error(`Failed to submit order: ${errorData}`);
      }

      const submitData = await submitResponse.json();
      console.log('Order submitted successfully:', submitData);

      if (submitData.order_tracking_id) {
        window.location.href = `https://pay.pesapal.com/iframe/PesapalIframe3/Index?OrderTrackingId=${submitData.order_tracking_id}`;
      } else {
        throw new Error(`No order tracking ID in response: ${JSON.stringify(submitData)}`);
      }
    } catch (err: any) {
      const errorMessage = err.message || 'Payment failed';
      setError(errorMessage);
      console.error('Payment error:', err);
      toast.error('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-right" />
      
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={formVariants}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
      >
        {/* Progress Steps */}
        <div className="bg-gradient-to-r from-[#00BFFF] to-[#33CCFF] p-6">
          <div className="flex justify-between items-center">
            {stepTitles.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={index}
                  className={`flex flex-col items-center ${
                    index + 1 === currentStep ? 'text-white' : 'text-white/60'
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 
                    ${index + 1 === currentStep ? 'border-white bg-white/20' : 'border-white/60'}`}>
                    <StepIcon className="w-6 h-6" />
                  </div>
                  <span className="mt-2 text-sm font-medium hidden sm:block">{step.title}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={formVariants}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6">
              {currentStep > 1 && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="button"
                  onClick={prevStep}
                  className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  <ChevronLeftIconOutline className="w-5 h-5 mr-2" />
                  Previous
                </motion.button>
              )}
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="flex items-center px-6 py-3 ml-auto bg-gradient-to-r from-[#00BFFF] to-[#33CCFF] text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                {currentStep === 5 ? 'Submit Application' : 'Next'}
                {currentStep < 5 && <ChevronRightIconOutline className="w-5 h-5 ml-2" />}
              </motion.button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ApplicationForm;
