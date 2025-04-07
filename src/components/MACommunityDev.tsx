import { Users, Award, Target, BookOpen, Globe, Heart, GraduationCap, Handshake, Sparkles, Building2, TreePine, Scale } from 'lucide-react';

const programFeatures = [
  {
    icon: Handshake,
    title: "Community Mobilization",
    description: "Social transformation"
  },
  {
    icon: TreePine,
    title: "Sustainable Development",
    description: "Practical approaches"
  },
  {
    icon: Scale,
    title: "Justice & Empowerment",
    description: "People-centered values"
  },
  {
    icon: Globe,
    title: "Cultural Integration",
    description: "Diverse communities"
  }
];

const approaches = [
  {
    title: "Participatory Rural Appraisal",
    description: "Community assessment"
  },
  {
    title: "Participatory Learning",
    description: "Action-based learning"
  },
  {
    title: "People Empowerment",
    description: "Capacity building"
  },
  {
    title: "Project Management",
    description: "Implementation skills"
  },
  {
    title: "Monitoring & Evaluation",
    description: "Impact assessment"
  },
  {
    title: "Research Methods",
    description: "Evidence-based strategies"
  }
];

const MACommunityDev = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://www.daystar.ac.ke/academic-affairs/assets/images/slider-3.jpg"
            alt="Community Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Master of Arts in Community Development
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-lg">
              Transforming communities through sustainable development and empowerment
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
          {programFeatures.map((feature, index) => (
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
                  The M.A. in Community Development has been developed to train skilled professionals who will work in diverse communities to bring about social transformation. This unique program integrates Christian principles with practical development approaches.
                </p>
                <p className="mt-4">
                  The program focuses on equipping students with skills in:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>Community mobilization and needs assessment</li>
                  <li>Project design and implementation</li>
                  <li>Monitoring and evaluation of community-based projects</li>
                  <li>Poverty alleviation strategies</li>
                  <li>Cultural integration and diversity management</li>
                </ul>
                <p className="mt-4">
                  Our approach emphasizes people-centered development, upholding key principles such as justice, empowerment, capacity building, advocacy, and sustainability, all founded on Christian values.
                </p>
              </div>
            </div>

            {/* Approaches */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Development Approaches</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {approaches.map((approach, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#00BFFF]/10 p-3 rounded-lg mt-1">
                      <Building2 className="w-5 h-5 text-[#00BFFF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{approach.title}</h3>
                      <p className="text-sm text-gray-600">{approach.description}</p>
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
                    <GraduationCap className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Bachelor's Degree with minimum GPA of 3.0/4.0 or Upper Second Class Honours</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Award className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Non-Development Studies graduates require zero credit hours in foundational courses</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Heart className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Demonstrated commitment to community-oriented service</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Program Features */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Program Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Globe className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <p className="text-sm text-gray-600">Aligned with Millennium Development Goals</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <BookOpen className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <p className="text-sm text-gray-600">Practical and research-based learning</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Target className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <p className="text-sm text-gray-600">Holistic Christian approach</p>
                </li>
              </ul>
            </div>

            {/* Values */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Sparkles className="w-4 h-4 text-[#00BFFF]" />
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
              <p className="mb-6">Be part of transformative community development.</p>
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

export default MACommunityDev;
