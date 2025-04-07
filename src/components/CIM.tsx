import { BookOpen, Users, BarChart4, Clock, Award, Globe2, Brain, Target, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CourseLevel {
  level: string;
  title: string;
  description: string;
  duration: string;
  requirements: string[];
  assessment: string;
  modules: {
    mandatory: string[];
    electives?: {
      group: string;
      options: string[];
    }[];
  };
}

const courseLevels: CourseLevel[] = [
  {
    level: "Level 3",
    title: "Foundation in Professional & Digital Marketing",
    description: "The ideal gateway to a professional marketing career, perfect for new or junior marketers.",
    duration: "6 months, ~3 hours per week",
    requirements: ["No specific entry requirements"],
    assessment: "Online multiple-choice question test (50 questions, 90 minutes)",
    modules: {
      mandatory: ["Marketing Essentials"],
      electives: [
        {
          group: "Choose one or both for Extended Certificate",
          options: ["Content and Channels", "Marketing Insights"]
        }
      ]
    }
  },
  {
    level: "Level 4",
    title: "Certificate in Professional & Digital Marketing",
    description: "Builds on tactical marketing skills for operational level performance.",
    duration: "6-9 months, ~3 hours per week",
    requirements: [
      "CIM Level 3 Foundation Certificate",
      "Any relevant Level 3 qualification",
      "Any UK degree or international equivalent",
      "One year marketing role experience plus assessment"
    ],
    assessment: "Mandatory module: 75 MCQs (120 mins), Other modules: 50 MCQs (90 mins)",
    modules: {
      mandatory: ["Marketing Impact"],
      electives: [
        {
          group: "Group 1 (Choose one)",
          options: ["Planning Integrated Campaigns", "Responsible Marketing"]
        },
        {
          group: "Group 2 (Choose one)",
          options: ["Content Marketing", "Search Engine Optimisation", "MarTech", "Social Media Marketing"]
        }
      ]
    }
  },
  {
    level: "Level 6",
    title: "Diploma in Professional & Digital Marketing",
    description: "Management level qualification for operational and supervisory marketing roles.",
    duration: "170 hours per module",
    requirements: [
      "CIM Level 4 Certificate",
      "Relevant Level 4 qualification",
      "Business degree with marketing (120 credits)",
      "Two years marketing experience plus assessment"
    ],
    assessment: "Mandatory: Online plan and extended answers (120 mins), Others: 50 MCQs (90 mins)",
    modules: {
      mandatory: ["Strategy and Planning"],
      electives: [
        {
          group: "Group 1 (Choose one)",
          options: ["Commercial Intelligence", "Societal Impact"]
        },
        {
          group: "Group 2 (Choose one)",
          options: ["Customer Journey Optimisation", "Brand Proposition", "Content Strategy"]
        },
        {
          group: "Group 3",
          options: ["AI Marketing", "Ecommerce", "SEO & Paid Search Management", "Social Media Management"]
        }
      ]
    }
  }
];

const benefits = [
  {
    icon: Brain,
    title: "Practical Knowledge",
    description: "Gain skills beyond on-the-job learning"
  },
  {
    icon: Target,
    title: "Career Advancement",
    description: "Position yourself for the next career step"
  },
  {
    icon: Star,
    title: "Professional Excellence",
    description: "Demonstrate commitment to high performance"
  }
];

const features = [
  {
    icon: Globe2,
    title: "Flexible Learning",
    description: "Comprehensive online system that fits your schedule"
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Interactive sessions with industry professionals"
  },
  {
    icon: BookOpen,
    title: "Exam Preparation",
    description: "Live revision seminars and study support"
  },
  {
    icon: BarChart4,
    title: "Industry Recognition",
    description: "Gold standard marketing qualifications"
  }
];

const CIM = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-[#003262]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#003262]/80" />
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80"
            alt="CIM Program"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Chartered Institute of Marketing (CIM)
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Achieve marketing excellence with globally recognized qualifications
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate('/apply')}
                className="bg-white text-[#003262] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[#003262]/10 p-3 rounded-lg">
                  <feature.icon className="w-6 h-6 text-[#003262]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About CIM Qualifications</h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  The CIM is synonymous with marketing excellence and employers recognise these prestigious qualifications as the gold standard for marketing professionals. By achieving a CIM certification, you'll gain a competitive edge in the job market and elevate your career.
                </p>
                <p className="mt-4">
                  As a Strategic Partner and Accredited Training Provider with CIM, we deliver an unparalleled learning experience tailored to your professional journey. With over 20 years of experience, we have a deep understanding of how to help marketing professionals succeed.
                </p>
              </div>
            </div>

            {/* Course Levels */}
            <div className="space-y-8">
              {courseLevels.map((level, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{level.level}: {level.title}</h3>
                  <div className="space-y-6">
                    <p className="text-gray-600">{level.description}</p>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-[#003262]" />
                      <span className="text-gray-700">{level.duration}</span>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900">Entry Requirements</h4>
                      <ul className="space-y-2">
                        {level.requirements.map((req, rIndex) => (
                          <li key={rIndex} className="flex items-start space-x-3">
                            <Award className="w-5 h-5 text-[#003262] mt-1" />
                            <span className="text-gray-600">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900">Assessment</h4>
                      <p className="text-gray-600">{level.assessment}</p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900">Module Structure</h4>
                      <div className="bg-gray-50 rounded-lg p-6">
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium text-gray-900">Mandatory Module</h5>
                            <ul className="mt-2 space-y-2">
                              {level.modules.mandatory.map((module, mIndex) => (
                                <li key={mIndex} className="flex items-start space-x-3">
                                  <BookOpen className="w-5 h-5 text-[#003262] mt-1" />
                                  <span className="text-gray-600">{module}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          {level.modules.electives && (
                            <div className="space-y-4">
                              {level.modules.electives.map((group, gIndex) => (
                                <div key={gIndex}>
                                  <h5 className="font-medium text-gray-900">{group.group}</h5>
                                  <ul className="mt-2 space-y-2">
                                    {group.options.map((option, oIndex) => (
                                      <li key={oIndex} className="flex items-start space-x-3">
                                        <BookOpen className="w-5 h-5 text-[#003262] mt-1" />
                                        <span className="text-gray-600">{option}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Benefits */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">How You Benefit</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="bg-[#003262]/10 p-2 rounded-lg mt-1">
                      <benefit.icon className="w-4 h-4 text-[#003262]" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Study Support */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Study Support</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-[#003262]/10 p-2 rounded-lg mt-1">
                    <Globe2 className="w-4 h-4 text-[#003262]" />
                  </div>
                  <p className="text-sm text-gray-600">Comprehensive online learning system</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#003262]/10 p-2 rounded-lg mt-1">
                    <Users className="w-4 h-4 text-[#003262]" />
                  </div>
                  <p className="text-sm text-gray-600">Monthly online drop-in sessions</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#003262]/10 p-2 rounded-lg mt-1">
                    <BookOpen className="w-4 h-4 text-[#003262]" />
                  </div>
                  <p className="text-sm text-gray-600">Live revision seminars</p>
                </li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="bg-[#003262] rounded-xl shadow-md p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6">Begin your journey to marketing excellence with CIM qualifications at Daystar University.</p>
              <button 
                onClick={() => navigate('/apply')}
                className="w-full bg-white text-[#003262] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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

export default CIM;
