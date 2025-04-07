import { Users, Award, Globe, Shield, Briefcase, Target, Building2 } from 'lucide-react';

const keyFeatures = [
  {
    icon: Globe,
    title: "International Relations",
    description: "Global diplomacy skills"
  },
  {
    icon: Shield,
    title: "Security Studies",
    description: "International security"
  },
  {
    icon: Building2,
    title: "Development",
    description: "Sustainable development"
  },
  {
    icon: Briefcase,
    title: "Professional Growth",
    description: "Career advancement"
  }
];

const careerPaths = [
  {
    title: "Diplomatic Service",
    description: "Foreign service and embassies"
  },
  {
    title: "International Organizations",
    description: "UN agencies and NGOs"
  },
  {
    title: "Security Analysis",
    description: "Policy and risk assessment"
  },
  {
    title: "Development Sector",
    description: "International development"
  },
  {
    title: "Government Relations",
    description: "Public sector leadership"
  },
  {
    title: "Research & Policy",
    description: "Think tanks and consulting"
  }
];

const MADiplomacy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1526470498-9ae73c665de8?auto=format&fit=crop&w=1920&q=80"
            alt="Diplomacy and International Security"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              MA in Diplomacy, Development and International Security
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-lg">
              Shape global policy and international development
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
                  The MA in Diplomacy, Development and International Security is a comprehensive program that prepares students for careers in international relations, security studies, and development. Our curriculum combines theoretical knowledge with practical skills needed in today's global landscape.
                </p>
                <p className="mt-4">
                  Students gain expertise in diplomatic practice, international security challenges, sustainable development, and policy analysis. The program emphasizes critical thinking, research skills, and practical application through case studies and real-world scenarios.
                </p>
              </div>
            </div>

            {/* Career Paths */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Opportunities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {careerPaths.map((path, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#00BFFF]/10 p-3 rounded-lg mt-1">
                      <Globe className="w-5 h-5 text-[#00BFFF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{path.title}</h3>
                      <p className="text-sm text-gray-600">{path.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Entry Requirements */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Entry Requirements</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Award className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Bachelors Degree from an accredited university</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Award className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Minimum GPA of 2.75 on a 4.00 scale or Upper Second Class Honours</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Users className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Lower Second Class with 2 years' relevant work experience may be considered</p>
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
                    <Target className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <p className="text-sm text-gray-600">Transformation through learning</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Users className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <p className="text-sm text-gray-600">Servant Leadership development</p>
                </li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="bg-[#00BFFF] rounded-xl shadow-md p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6">Begin your journey in international diplomacy at Daystar University.</p>
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

export default MADiplomacy;
