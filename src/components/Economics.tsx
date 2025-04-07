import { Users, Target, GraduationCap, Globe2, BarChart, Award, TrendingUp, BookOpen, HandHeart, Brain, LineChart, FileSpreadsheet, PieChart, DollarSign, BarChart2 } from 'lucide-react';

interface ProgramGoal {
  icon: any;
  title: string;
  description: string;
}

const programGoals: ProgramGoal[] = [
  {
    icon: HandHeart,
    title: "Economic Service",
    description: "Economics as a means to serve God and society"
  },
  {
    icon: Brain,
    title: "Economic Analysis",
    description: "Master tools for economic decision-making"
  },
  {
    icon: LineChart,
    title: "Global Perspective",
    description: "Understanding international economic trends"
  },
  {
    icon: TrendingUp,
    title: "Policy Development",
    description: "Shape economic policies and solutions"
  },
  {
    icon: Award,
    title: "Ethical Practice",
    description: "Apply Christian principles in economics"
  }
];

const careerOpportunities = [
  {
    icon: DollarSign,
    title: "Economic Analyst",
    description: "Research and forecast trends"
  },
  {
    icon: BarChart2,
    title: "Policy Advisor",
    description: "Guide economic decision-making"
  },
  {
    icon: PieChart,
    title: "Financial Economist",
    description: "Analyze financial markets"
  },
  {
    icon: FileSpreadsheet,
    title: "Development Economist",
    description: "Plan economic programs"
  }
];

const keyFeatures = [
  {
    icon: Globe2,
    title: "Global Economics",
    description: "International economic insight"
  },
  {
    icon: BarChart,
    title: "Research Methods",
    description: "Advanced analytical tools"
  },
  {
    icon: Users,
    title: "Multi-disciplinary",
    description: "Integrated business approach"
  },
  {
    icon: GraduationCap,
    title: "Career Ready",
    description: "Professional economic skills"
  }
];

const Economics = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1920&q=80"
            alt="Economics"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Bachelor of Science in Economics
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-lg">
              Shape economic policies and drive global development through innovative solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-[#00BFFF] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
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
                  Our BSc Economics program is a globally-oriented curriculum designed to provide students with comprehensive knowledge of economic disciplines and analytical tools essential for effective decision-making in today's dynamic global economy.
                </p>
                <p className="mt-4">
                  The program emphasizes research and conceptual analytical methods, sharpening students' understanding of real economic environments. Through a multi-disciplinary approach, students learn to address complex economic challenges, particularly in development planning and economic management.
                </p>
                <p className="mt-4">
                  Students gain expertise in economic planning, research methodology, project evaluation, and policy design. The program synthesizes theoretical knowledge with practical applications, preparing graduates for impactful roles in public, private, and non-profit sectors.
                </p>
              </div>
            </div>

            {/* Program Goals */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Goals</h2>
              <div className="grid grid-cols-1 gap-6">
                {programGoals.map((goal, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#00BFFF]/10 p-3 rounded-lg mt-1">
                      <goal.icon className="w-5 h-5 text-[#00BFFF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                      <p className="text-sm text-gray-600">{goal.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Entry Requirements */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Entry Requirements</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-[#00BFFF] mt-1" />
                  <p className="text-gray-600">Overall minimum grade of C+ in KCSE or equivalent</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-[#00BFFF] mt-1" />
                  <p className="text-gray-600">At least a Grade C (plain) in Mathematics</p>
                </div>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Opportunities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {careerOpportunities.map((career, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#00BFFF]/10 p-3 rounded-lg mt-1">
                      <career.icon className="w-5 h-5 text-[#00BFFF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{career.title}</h3>
                      <p className="text-sm text-gray-600">{career.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Why Choose Us */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Why Choose Our Program</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <BookOpen className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Global Perspective</h4>
                    <p className="text-sm text-gray-600">International economic insights</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Globe2 className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Research Focus</h4>
                    <p className="text-sm text-gray-600">Advanced analytical methods</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <GraduationCap className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Career Growth</h4>
                    <p className="text-sm text-gray-600">Advanced degree preparation</p>
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
              <p className="mb-6">Begin your journey in economics at Daystar University.</p>
              <button className="w-full bg-white text-[#00BFFF] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Economics;
