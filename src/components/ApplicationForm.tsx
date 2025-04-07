import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import {
  ApplicationFormData,
  PROGRAMME_LEVELS,
  STUDY_MODES,
  CAMPUSES,
  INTAKES,
  HIGH_SCHOOL_SYSTEMS,
  GRADES
} from '../types/application';

const years = Array.from({ length: 10 }, (_, i) => (new Date().getFullYear() - i).toString());

// List of all available programs
const PROGRAMMES = [
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
    fatherStatus: 'Alive',
    fatherName: '',
    fatherPhone: '',
    motherStatus: 'Alive',
    motherName: '',
    motherPhone: ''
  });

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
    try {
      // Store essential information in Supabase
      const { error } = await supabase
        .from('applicants')
        .insert([
          {
            first_name: formData.firstName,
            middle_name: formData.middleName || null,
            last_name: formData.lastName,
            email: formData.email,
            phone_number: formData.phoneNumber,
            programme_name: formData.programmeName
          }
        ]);

      if (error) throw error;

      // Navigate to success page
      navigate('/application-success');
    } catch (err) {
      console.error('Error submitting application:', err);
      alert('Failed to submit application. Please try again.');
    }
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Middle Name</label>
                <input
                  type="text"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Nationality</label>
                <input
                  type="text"
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                >
                  <option value="">--Select--</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Religion</label>
                <input
                  type="text"
                  name="religion"
                  value={formData.religion}
                  onChange={handleInputChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="e.g., 0712345678"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Person With Disability</label>
                <select
                  name="hasDisability"
                  value={formData.hasDisability ? "yes" : "no"}
                  onChange={(e) => {
                    setFormData(prev => ({
                      ...prev,
                      hasDisability: e.target.value === "yes"
                    }));
                  }}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
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
                  {PROGRAMMES.map(program => (
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
                  {CAMPUSES.map(campus => (
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
                  {INTAKES.map(intake => (
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
                  {STUDY_MODES.map(mode => (
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
            <h2 className="text-xl font-semibold mb-4">High School Qualifications</h2>
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
                  {HIGH_SCHOOL_SYSTEMS.map(system => (
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
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-4">Family Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Father's Status</label>
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
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Father's Full Name</label>
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleInputChange}
                  placeholder="e.g., John Doe"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Father's Phone Number</label>
                <input
                  type="tel"
                  name="fatherPhone"
                  value={formData.fatherPhone}
                  onChange={handleInputChange}
                  placeholder="e.g., 0712345678"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Mother's Status</label>
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
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Mother's Full Name</label>
                <input
                  type="text"
                  name="motherName"
                  value={formData.motherName}
                  onChange={handleInputChange}
                  placeholder="e.g., Jane Doe"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Mother's Phone Number</label>
                <input
                  type="tel"
                  name="motherPhone"
                  value={formData.motherPhone}
                  onChange={handleInputChange}
                  placeholder="e.g., 0712345678"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#00BFFF] focus:ring-[#00BFFF]"
                  required
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="bg-white shadow-sm rounded-lg p-6">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep === step ? 'bg-[#00BFFF] text-white' : currentStep > step ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}
                  >
                    {currentStep > step ? '✓' : step}
                  </div>
                  <span className="text-xs mt-2">
                    {step === 1 ? 'Personal' : step === 2 ? 'Programme' : step === 3 ? 'Education' : 'Family'}
                  </span>
                </div>
              ))}
            </div>
            <div className="relative mt-2">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-0.5 bg-gray-200" />
              <div
                className="absolute left-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-[#00BFFF] transition-all duration-300"
                style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
              />
            </div>
          </div>

          {/* Form Content */}
          {renderStepContent()}

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between items-center">
            <button
              type="button"
              onClick={prevStep}
              className={`px-4 py-2 rounded-md text-sm font-medium ${currentStep === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              disabled={currentStep === 1}
            >
              Previous
            </button>
            <button
              type={currentStep === 4 ? 'submit' : 'button'}
              onClick={currentStep === 4 ? undefined : nextStep}
              className="px-4 py-2 bg-[#00BFFF] text-white rounded-md text-sm font-medium hover:bg-[#33CCFF]"
            >
              {currentStep === 4 ? 'Submit Application' : 'Next'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
