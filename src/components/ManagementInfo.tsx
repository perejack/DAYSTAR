import { Users, Target, GraduationCap, Building2, Globe2, BarChart, Award, Database, Code, Network, Laptop, Server, Lock, Brain } from 'lucide-react';

interface ProgramGoal {
  icon: any;
  title: string;
  description: string;
}

const programGoals: ProgramGoal[] = [
  {
    icon: Database,
    title: "Systems Development",
    description: "Design and implement business information systems"
  },
  {
    icon: Network,
    title: "Technology Integration",
    description: "Master modern computer technology and networking"
  },
  {
    icon: Brain,
    title: "Business Understanding",
    description: "Integrate IT with business administration processes"
  },
  {
    icon: Lock,
    title: "Information Security",
    description: "Ensure data privacy, integrity, and availability"
  },
  {
    icon: Award,
    title: "Ethical Practice",
    description: "Apply Christian principles in IT management"
  }
];

const careerOpportunities = [
  {
    icon: Server,
    title: "Systems Analyst",
    description: "Design and optimize business systems"
  },
  {
    icon: Database,
    title: "Database Administrator",
    description: "Manage organizational databases"
  },
  {
    icon: Code,
    title: "IT Manager",
    description: "Lead technology initiatives"
  },
  {
    icon: Laptop,
    title: "Business Analyst",
    description: "Bridge business and technology"
  }
];

const keyFeatures = [
  {
    icon: Globe2,
    title: "Modern Technology",
    description: "Latest IT systems and tools"
  },
  {
    icon: BarChart,
    title: "Business Integration",
    description: "IT and management fusion"
  },
  {
    icon: Users,
    title: "Industry Network",
    description: "Connect with IT professionals"
  },
  {
    icon: GraduationCap,
    title: "Career Ready",
    description: "Practical IT management skills"
  }
];

const ManagementInfo = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
            alt="Management Information Systems"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Bachelor of Arts in Management Information Systems
            </h1>
            <p className="text-xl text-white/90 mb-8 drop-shadow-lg">
              Shape the future of business through innovative information technology
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
                  In today's rapidly evolving digital landscape, the world is becoming an electronic global village. This transformation brings challenges in privacy, confidentiality, availability, and integrity of organizational information systems.
                </p>
                <p className="mt-4">
                  Our Management Information Systems program addresses the growing need for professionals who can effectively manage and optimize information technology in business environments. We prepare students to bridge the gap between technology and business needs, ensuring organizations can make data-driven decisions efficiently.
                </p>
                <p className="mt-4">
                  The program combines strong technical foundations with business acumen, preparing graduates to lead digital transformation initiatives while maintaining the highest standards of data security and ethical practice.
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
                    <Building2 className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Industry-Aligned</h4>
                    <p className="text-sm text-gray-600">Modern IT and business curriculum</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Globe2 className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Global Perspective</h4>
                    <p className="text-sm text-gray-600">International IT standards</p>
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
              <p className="mb-6">Begin your journey in IT management at Daystar University.</p>
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

export default ManagementInfo;
