import { ChevronRight, CheckCircle2, BookOpen, GraduationCap, TrendingUp, BarChart4, Calculator, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CourseLevel {
  level: string;
  courses: string[] | {
    core: string[];
    optional: string[];
  };
}

const courseStructure: CourseLevel[] = [
  {
    level: "Applied Knowledge Level",
    courses: [
      "Entry Accountant in Business",
      "Management Accounting",
      "Financial Accounting"
    ]
  },
  {
    level: "Applied Skills Level",
    courses: [
      "Corporate & Business Law",
      "Performance Management",
      "Taxation",
      "Financial Reporting",
      "Audit and Assurance",
      "Financial Management"
    ]
  },
  {
    level: "Strategic Professional Level",
    courses: {
      core: [
        "Strategic Business Leader",
        "Strategic Business Reporting"
      ],
      optional: [
        "Advanced Financial Management",
        "Advanced Performance Management",
        "Advanced Audit and Assurance",
        "Advanced Taxation"
      ]
    }
  }
];

const requirements = [
  "Kenya Certificate of Secondary Education (KCSE) mean grade of C+ as well as a C in both English and Mathematics",
  "At least 2 principal Passes at A level",
  "IGCSE 6 credits including English & Mathematics and GCE 3 B's Exemptions",
  "CPA Part 1 holders or Accounting Technician Diploma (ATD) Intermediate and Final",
  "Relevant Degree from a recognized university (Students holding University Degrees are exemptions)"
];

const values = [
  {
    title: 'Excellence',
    description: 'Commitment to high-quality accounting education'
  },
  {
    title: 'Transformation',
    description: 'Developing world-class finance professionals'
  },
  {
    title: 'Servant Leadership',
    description: 'Leading with integrity in financial services'
  }
];

const programHighlights = [
  {
    icon: Calculator,
    title: 'Technical Skills',
    description: 'Advanced accounting expertise'
  },
  {
    icon: TrendingUp,
    title: 'Strategic Thinking',
    description: 'Business analysis capabilities'
  },
  {
    icon: Building2,
    title: 'Global Recognition',
    description: 'Internationally respected qualification'
  }
];

const ACCA = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-[#00BFFF] to-[#0099CC]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50" />
          <img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1920&q=80"
            alt="ACCA Program"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Association of Chartered Certified Accountants (ACCA)
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Your pathway to a global career in finance and accounting
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate('/apply')}
                className="bg-white text-[#00BFFF] px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Apply Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Program Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programHighlights.map((highlight, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[#00BFFF]/10 p-3 rounded-lg">
                  <highlight.icon className="w-6 h-6 text-[#00BFFF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2">
            {/* About Section */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Course</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600">
                  A qualification in ACCA prepares you to serve in challenging yet rewarding roles in Finance and Accounting anywhere around the world. Employers around the world seek out ACCA-trained professionals because they know they have strategic thinking, technical skills and professional values to drive organizations forward amidst a fast-changing business environment.
                </p>
              </div>
            </div>

            {/* Entry Requirements */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Entry Requirements</h2>
              <div className="space-y-4">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00BFFF] mt-1" />
                    <p className="text-gray-600">{requirement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Structure */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Structure</h2>
              <div className="space-y-8">
                {courseStructure.map((level, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{level.level}</h3>
                    <div className="space-y-4">
                      {Array.isArray(level.courses) ? (
                        <ul className="space-y-2">
                          {level.courses.map((course, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <BookOpen className="w-5 h-5 text-[#00BFFF] mt-1" />
                              <span className="text-gray-600">{course}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="space-y-6">
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Core Courses:</h4>
                            <ul className="space-y-2">
                              {level.courses.core.map((course, idx) => (
                                <li key={idx} className="flex items-start space-x-3">
                                  <BookOpen className="w-5 h-5 text-[#00BFFF] mt-1" />
                                  <span className="text-gray-600">{course}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900 mb-2">Optional Courses (Choose Two):</h4>
                            <ul className="space-y-2">
                              {level.courses.optional.map((course, idx) => (
                                <li key={idx} className="flex items-start space-x-3">
                                  <BookOpen className="w-5 h-5 text-[#00BFFF] mt-1" />
                                  <span className="text-gray-600">{course}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Program Benefits */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Program Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <GraduationCap className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Global Recognition</h4>
                    <p className="text-sm text-gray-600">Internationally respected qualification</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <BarChart4 className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Career Growth</h4>
                    <p className="text-sm text-gray-600">Enhanced job prospects worldwide</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Building2 className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Professional Network</h4>
                    <p className="text-sm text-gray-600">Access to global ACCA community</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Our Values */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Values</h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#00BFFF]/10 p-2 rounded-lg">
                      <ChevronRight className="w-4 h-4 text-[#00BFFF]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{value.title}</h4>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-[#00BFFF] to-[#0099CC] rounded-xl shadow-md p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6">Begin your journey to becoming an ACCA professional at Daystar University.</p>
              <button 
                onClick={() => navigate('/apply')}
                className="w-full bg-white text-[#00BFFF] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
              >
                Start Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ACCA;
