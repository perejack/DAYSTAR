import { ChevronRight, Brain, CheckCircle2, Sparkles, HandHeart, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const assessmentDetails = [
  {
    type: 'Skill-based Courses',
    breakdown: [
      { name: 'Practical Work', percentage: 75 },
      { name: 'Theoretical Assignments', percentage: 25 }
    ]
  },
  {
    type: 'Conceptual & Skills Courses',
    breakdown: [
      { name: 'Continuous Assessment', percentage: 60 },
      { name: 'Final Examination', percentage: 40 }
    ]
  }
];

const values = [
  {
    title: 'Excellence',
    description: 'Commitment to high-quality education in counseling psychology'
  },
  {
    title: 'Transformation',
    description: 'Fostering positive change in individuals and communities'
  },
  {
    title: 'Servant Leadership',
    description: 'Developing compassionate and skilled counseling professionals'
  }
];

const programHighlights = [
  {
    icon: Brain,
    title: 'Psychological Foundations',
    description: 'Understanding human behavior and mental processes'
  },
  {
    icon: HandHeart,
    title: 'Counseling Skills',
    description: 'Practical training in counseling techniques'
  },
  {
    icon: Sparkles,
    title: 'Personal Growth',
    description: 'Development of self-awareness and empathy'
  }
];

const CertificateCounseling = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-[#00BFFF] to-[#0099CC]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50" />
          <img
            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1920&q=80"
            alt="Counseling and Psychology"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Certificate in Counseling and Psychology
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Empowering you to make a difference in people's lives
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
                <p className="text-gray-600 mb-4">
                  Certificate in counseling psychology course is designed to meet the needs of the students pursuing counselling psychology or those who wish to gain basic counseling skills. The course is intended to equip the students with knowledge, skills and attitudes that will enable him/her to familiarize with the basic skills and techniques in counseling.
                </p>
              </div>
            </div>

            {/* Entry Requirements */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Admission Requirements</h2>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#00BFFF] mt-1" />
                <p className="text-gray-600">
                  In addition to the University requirements for admission, the applicant must fulfil the minimum entry requirement for this program which is a D+ (Plus) in KCSE or its equivalent.
                </p>
              </div>
            </div>

            {/* Assessment */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Assessment Structure</h2>
              <div className="space-y-6">
                {assessmentDetails.map((detail, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h3 className="font-semibold text-gray-900 mb-4">{detail.type}</h3>
                    <div className="space-y-3">
                      {detail.breakdown.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <span className="text-gray-600">{item.name}</span>
                          <div className="flex items-center">
                            <div className="w-32 h-2 bg-gray-200 rounded-full mr-3">
                              <div
                                className="h-2 bg-[#00BFFF] rounded-full"
                                style={{ width: `${item.percentage}%` }}
                              />
                            </div>
                            <span className="text-[#00BFFF] font-semibold">{item.percentage}%</span>
                          </div>
                        </div>
                      ))}
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
                    <Brain className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Professional Skills</h4>
                    <p className="text-sm text-gray-600">Develop essential counseling techniques</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <HandHeart className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Practical Experience</h4>
                    <p className="text-sm text-gray-600">Hands-on counseling practice</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <GraduationCap className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Career Growth</h4>
                    <p className="text-sm text-gray-600">Foundation for advanced studies</p>
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
              <p className="mb-6">Begin your journey in Counseling and Psychology at Daystar University.</p>
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

export default CertificateCounseling;
