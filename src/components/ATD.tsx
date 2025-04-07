import { ChevronRight, CheckCircle2, BookOpen, GraduationCap, Calculator, Building2, Users, BarChart4, ScrollText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CourseLevel {
  level: string;
  papers: Array<{
    code: string;
    title: string;
  }>;
}

const courseStructure: CourseLevel[] = [
  {
    level: "Level I",
    papers: [
      { code: "AD11", title: "Introduction to Financial Accounting" },
      { code: "AD12", title: "Principles of Business Law" },
      { code: "AD13", title: "Entrepreneurship and Communication" },
      { code: "AD14", title: "Information Communication Technology" }
    ]
  },
  {
    level: "Level II",
    papers: [
      { code: "AD21", title: "Financial Accounting" },
      { code: "AD22", title: "Principles of Management" },
      { code: "AD23", title: "Business Mathematics and Statistics" },
      { code: "AD24", title: "Fundamentals of Finance" }
    ]
  },
  {
    level: "Level III",
    papers: [
      { code: "AD31", title: "Principles of Economics" },
      { code: "AD32", title: "Fundamentals of Management Accounting" },
      { code: "AD33", title: "Principles of Public Finance and Taxation" },
      { code: "AD34", title: "Auditing" }
    ]
  }
];

const values = [
  {
    title: 'Excellence',
    description: 'Commitment to quality accounting education'
  },
  {
    title: 'Transformation',
    description: 'Developing skilled accounting professionals'
  },
  {
    title: 'Service',
    description: 'Dedication to professional service'
  }
];

const programHighlights = [
  {
    icon: Calculator,
    title: 'Technical Skills',
    description: 'Advanced accounting expertise'
  },
  {
    icon: Users,
    title: 'Professional Growth',
    description: 'Career advancement'
  },
  {
    icon: ScrollText,
    title: 'Comprehensive Learning',
    description: 'Well-rounded curriculum'
  }
];

const ATD = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-[#00BFFF] to-[#0099CC]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50" />
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80"
            alt="ATD Program"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Accounting Technicians Diploma (ATD)
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Become a skilled middle-level accountant with comprehensive technical expertise
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
                  The Accounting Technicians Diploma qualification equips candidates with skills and competencies to work as middle level accountants providing technical support in accounting, auditing and taxation in both the public and private sectors.
                </p>
              </div>
            </div>

            {/* Entry Requirements */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Entry Requirements</h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BFFF] mt-1" />
                  <p className="text-gray-600">
                    Kenya Certificate of Secondary Education (KCSE) examination with a mean grade of at least C- (C Minus) or equivalent qualifications
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BFFF] mt-1" />
                  <p className="text-gray-600">
                    International General Certificate of Secondary Education (IGCSE) examination grade D
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BFFF] mt-1" />
                  <p className="text-gray-600">
                    Certificate in Accounting and Management Skills (CAMS)
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BFFF] mt-1" />
                  <p className="text-gray-600">
                    Any other KASNEB technician or Diploma examination certificate
                  </p>
                </div>
              </div>
            </div>

            {/* Course Structure */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Structure</h2>
              <div className="space-y-8">
                {courseStructure.map((level, index) => (
                  <div key={index} className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">{level.level}</h3>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="space-y-3">
                        {level.papers.map((paper, pIndex) => (
                          <div key={pIndex} className="flex items-start space-x-3">
                            <BookOpen className="w-5 h-5 text-[#00BFFF] mt-1" />
                            <div>
                              <span className="font-medium text-gray-900">{paper.code}:</span>
                              <span className="text-gray-600 ml-2">{paper.title}</span>
                            </div>
                          </div>
                        ))}
                      </div>
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
                    <h4 className="font-medium text-gray-900">Technical Expertise</h4>
                    <p className="text-sm text-gray-600">Advanced accounting skills</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <BarChart4 className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Career Growth</h4>
                    <p className="text-sm text-gray-600">Middle-level positions</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Building2 className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Industry Ready</h4>
                    <p className="text-sm text-gray-600">Public & private sectors</p>
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
              <p className="mb-6">Begin your journey to becoming an Accounting Technician at Daystar University.</p>
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

export default ATD;
