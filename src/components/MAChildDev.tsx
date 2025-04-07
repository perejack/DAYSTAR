import { Users, Award, Heart, Target, BookOpen, Globe, Lightbulb, GraduationCap, Baby, Home, Sparkles } from 'lucide-react';

const concentrations = [
  {
    icon: Globe,
    title: "Integrated Studies",
    description: "Comprehensive approach"
  },
  {
    icon: Home,
    title: "Family Studies",
    description: "Family-centered focus"
  },
  {
    icon: Heart,
    title: "Child Therapy",
    description: "Therapeutic intervention"
  }
];

const coreValues = [
  {
    title: "Child Participation",
    description: "Active engagement in decisions"
  },
  {
    title: "Child Protection",
    description: "Safety and security"
  },
  {
    title: "Holistic Services",
    description: "Comprehensive care"
  },
  {
    title: "Professional Development",
    description: "Continuous learning"
  },
  {
    title: "Research Skills",
    description: "Needs assessment"
  },
  {
    title: "Leadership",
    description: "Program administration"
  }
];

const MAChildDev = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://www.daystar.ac.ke/academic-affairs/assets/images/slider-1.jpg"
            alt="Child Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Master of Arts in Child Development
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-lg">
              Empowering professionals to make a positive impact in children's lives
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

      {/* Concentrations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {concentrations.map((concentration, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[#00BFFF]/10 p-3 rounded-lg">
                  <concentration.icon className="w-6 h-6 text-[#00BFFF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{concentration.title}</h3>
                  <p className="text-sm text-gray-600">{concentration.description}</p>
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
                  The Child Development Programme is designed to equip professionals in child ministry with the necessary knowledge and skills to make a positive impact in children's lives. Our curriculum is specially crafted to enhance the competence of professionals responding to the needs of children, particularly those at risk.
                </p>
                <p className="mt-4">
                  The program offers three distinct concentrations:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>Integrated Studies - Comprehensive approach to child development</li>
                  <li>Family Studies - Focus on family dynamics and support systems</li>
                  <li>Child Therapy - Specialized therapeutic interventions</li>
                </ul>
                <p className="mt-4">
                  Our curriculum includes comprehensive courses that provide clear guidance in community mobilization, research methodology, needs assessment, programming interventions, and leadership skills.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Values & Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#00BFFF]/10 p-3 rounded-lg mt-1">
                      <Sparkles className="w-5 h-5 text-[#00BFFF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{value.title}</h3>
                      <p className="text-sm text-gray-600">{value.description}</p>
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
                    <p className="text-sm text-gray-600">Bachelor's Degree with minimum GPA of 2.75/4.00 or Upper Second Class Honours</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Award className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Lower Second Class with 2 years' relevant experience considered</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Program Features */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Program Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Baby className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <p className="text-sm text-gray-600">Child-centered approach</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <BookOpen className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <p className="text-sm text-gray-600">Research-based curriculum</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Globe className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <p className="text-sm text-gray-600">Community engagement focus</p>
                </li>
              </ul>
            </div>

            {/* Values */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Values</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Lightbulb className="w-4 h-4 text-[#00BFFF]" />
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
              <p className="mb-6">Make a difference in children's lives through professional development.</p>
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

export default MAChildDev;
