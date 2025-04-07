import { ChevronRight, CheckCircle2, BookOpen, GraduationCap, TrendingUp, BarChart4, Calculator, Building2, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CourseSection {
  section: string;
  papers: Array<{
    code: string;
    title: string;
  }>;
}

interface CoursePart {
  part: string;
  sections: CourseSection[];
}

const courseStructure: CoursePart[] = [
  {
    part: "PART I",
    sections: [
      {
        section: "Section 1",
        papers: [
          { code: "CA11", title: "Financial Accounting" },
          { code: "CA12", title: "Business Law" },
          { code: "CA13", title: "Entrepreneurship and Communication" }
        ]
      },
      {
        section: "Section 2",
        papers: [
          { code: "CA21", title: "Economics" },
          { code: "CA22", title: "Management Accounting" },
          { code: "CA23", title: "Public Finance and Taxation" }
        ]
      }
    ]
  },
  {
    part: "PART II",
    sections: [
      {
        section: "Section 3",
        papers: [
          { code: "CA31", title: "Company Law" },
          { code: "CA32", title: "Financial Management" },
          { code: "CA33", title: "Financial Reporting" }
        ]
      },
      {
        section: "Section 4",
        papers: [
          { code: "CA41", title: "Auditing and Assurance" },
          { code: "CA42", title: "Management Information Systems" },
          { code: "CA43", title: "Quantitative Analysis" }
        ]
      }
    ]
  }
];

const requirements = [
  "Kenya Certificate of Secondary Education (KCSE) examination with a mean grade of C+ (C Plus)",
  "Kenya Advanced Certificate of Education (KACE) with at least TWO principal passes provided that the applicant has credits in Mathematics and English at Kenya Certificate of Education (KCE) level or equivalent qualifications",
  "KASNEB Technician, Diploma or Professional Examination Certificate",
  "A degree from a recognized University",
  "International General Certificate of Secondary Education (IGCSE) examination grade C in 6 papers",
  "Such other Certificates or Diplomas as may be approved by KASNEB"
];

const values = [
  {
    title: 'Excellence',
    description: 'Commitment to high-quality accounting education'
  },
  {
    title: 'Transformation',
    description: 'Developing skilled accounting professionals'
  },
  {
    title: 'Servant Leadership',
    description: 'Leading with integrity in financial services'
  }
];

const programHighlights = [
  {
    icon: Calculator,
    title: 'Professional Qualification',
    description: 'Nationally recognized certification'
  },
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'Enhanced job opportunities'
  },
  {
    icon: Briefcase,
    title: 'Industry Expertise',
    description: 'Comprehensive accounting skills'
  }
];

const CPA = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-[#00BFFF] to-[#0099CC]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50" />
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80"
            alt="CPA Program"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Certified Public Accountants (CPA)
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Your pathway to becoming a certified accounting professional
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
                  Both the public and private sectors are in need of individuals who direct the accounting function. To individuals who would love to serve in managing such critical function, CPA is the right cut for you.
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
                {courseStructure.map((part, index) => (
                  <div key={index} className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900">{part.part}</h3>
                    {part.sections.map((section, sIndex) => (
                      <div key={sIndex} className="bg-gray-50 rounded-lg p-6">
                        <h4 className="font-medium text-gray-900 mb-4">{section.section}</h4>
                        <div className="space-y-3">
                          {section.papers.map((paper, pIndex) => (
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
                    ))}
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
                    <h4 className="font-medium text-gray-900">Professional Recognition</h4>
                    <p className="text-sm text-gray-600">Nationally recognized qualification</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <BarChart4 className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Career Advancement</h4>
                    <p className="text-sm text-gray-600">Enhanced job prospects</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Building2 className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Industry Network</h4>
                    <p className="text-sm text-gray-600">Connect with accounting professionals</p>
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
              <p className="mb-6">Begin your journey to becoming a CPA at Daystar University.</p>
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

export default CPA;
