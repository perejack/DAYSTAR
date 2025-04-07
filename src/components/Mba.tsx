import { Users, Target, GraduationCap, Globe2, BarChart, Award, BookOpen, Brain, Briefcase, LineChart, FileSpreadsheet, Network, Rocket, Scale, HandHeart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Specialization {
  icon: any;
  title: string;
  description: string;
}

const specializations: Specialization[] = [
  {
    icon: Rocket,
    title: "Strategic Management",
    description: "Lead organizational strategy and growth"
  },
  {
    icon: Users,
    title: "Human Resource Management",
    description: "Optimize talent and organizational development"
  },
  {
    icon: LineChart,
    title: "Finance",
    description: "Master financial strategy and management"
  },
  {
    icon: Network,
    title: "Marketing",
    description: "Drive market growth and innovation"
  },
  {
    icon: FileSpreadsheet,
    title: "Project Management",
    description: "Lead complex business initiatives"
  },
  {
    icon: Briefcase,
    title: "Supply Chain Management",
    description: "Optimize global supply networks"
  }
];

const programObjectives = [
  {
    icon: Brain,
    title: "Advanced Knowledge",
    description: "Master core business disciplines"
  },
  {
    icon: Globe2,
    title: "Global Perspective",
    description: "Navigate international business environments"
  },
  {
    icon: Scale,
    title: "Ethical Leadership",
    description: "Develop values-based management skills"
  },
  {
    icon: HandHeart,
    title: "Social Impact",
    description: "Drive positive organizational change"
  }
];

const keyFeatures = [
  {
    icon: Globe2,
    title: "International Focus",
    description: "Global business insights"
  },
  {
    icon: BarChart,
    title: "Executive Skills",
    description: "Advanced management tools"
  },
  {
    icon: Users,
    title: "Network Building",
    description: "Connect with global leaders"
  },
  {
    icon: GraduationCap,
    title: "Professional Growth",
    description: "Career advancement focus"
  }
];

const Mba = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1920&q=80"
            alt="MBA Program"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Master of Business Administration (MBA)
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-lg">
              Transform into a global business leader for the 21st century
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate('/apply')}
                className="bg-white text-[#00BFFF] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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
          {keyFeatures.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[#00BFFF]/10 p-3 rounded-lg">
                  <feature.icon className="w-6 h-6 text-[#00BFFF]" />
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Overview</h2>
              <div className="prose max-w-none text-gray-600">
                <p>
                  The Daystar MBA is a comprehensive, internationally-oriented program designed for the complex business environment of the 21st century. Our program equips leaders to navigate organizations through intricate frameworks of stakeholder expectations, from profit maximization to ethical responsibility.
                </p>
                <p className="mt-4">
                  Perfect for both working executives and recent graduates, the program provides advanced skills in key business disciplines with practical application in real-world contexts. Students gain deep insights into organizational dynamics while developing their ability to drive positive change and development.
                </p>
                <p className="mt-4">
                  Through a blend of theoretical knowledge and practical experience, graduates emerge ready to excel in finance, marketing, strategic management, and human resource management across private, public, and non-profit sectors.
                </p>
              </div>
            </div>

            {/* Specializations */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Specializations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {specializations.map((spec, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#00BFFF]/10 p-3 rounded-lg mt-1">
                      <spec.icon className="w-5 h-5 text-[#00BFFF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{spec.title}</h3>
                      <p className="text-sm text-gray-600">{spec.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Program Objectives */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Objectives</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {programObjectives.map((objective, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#00BFFF]/10 p-3 rounded-lg mt-1">
                      <objective.icon className="w-5 h-5 text-[#00BFFF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{objective.title}</h3>
                      <p className="text-sm text-gray-600">{objective.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Entry Requirements */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Entry Requirements</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-[#00BFFF] mt-1" />
                  <p className="text-gray-600">Bachelor's Degree from an accredited university with minimum GPA of 2.75 on a 4.00 scale or Upper Second Class Honours</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-[#00BFFF] mt-1" />
                  <p className="text-gray-600">Lower Second Class Honours with 2 years' relevant work experience may be considered</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Assessment */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Assessment Structure</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <FileSpreadsheet className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Course Assessment</h4>
                    <p className="text-sm text-gray-600">60% final exam, 40% continuous assessment</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <BookOpen className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Thesis/Projects</h4>
                    <p className="text-sm text-gray-600">90% final paper, 10% continuous assessment</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Target className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Minimum Grade</h4>
                    <p className="text-sm text-gray-600">Maintain 3.0 GPA for good standing</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Values */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Award className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <p className="text-sm text-gray-600">Excellence in education</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Users className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <p className="text-sm text-gray-600">Transformation through learning</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Target className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <p className="text-sm text-gray-600">Development of servant leaders</p>
                </li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="bg-[#00BFFF] rounded-xl shadow-md p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6">Begin your journey to business leadership at Daystar University.</p>
              <button 
                onClick={() => navigate('/apply')}
                className="w-full bg-white text-[#00BFFF] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
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

export default Mba;
