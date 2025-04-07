import { Users, Award, Target, BookOpen, Globe, GraduationCap, Sparkles, Building2, Scale, Shield, Heart, Clock } from 'lucide-react';

const specializations = [
  {
    icon: Globe,
    title: "Development Studies",
    description: "Global development"
  },
  {
    icon: Scale,
    title: "Leadership & Governance",
    description: "Policy and administration"
  },
  {
    icon: Shield,
    title: "Disaster Management",
    description: "Sustainable development"
  },
  {
    icon: Heart,
    title: "Gender & Development",
    description: "Inclusive growth"
  },
  {
    icon: Building2,
    title: "Peace Building",
    description: "Conflict management"
  }
];

const creditStructure = [
  {
    title: "University Core",
    credits: "8 credits",
    description: "General courses"
  },
  {
    title: "Development Studies",
    credits: "15 credits",
    description: "Common courses"
  },
  {
    title: "Specialization",
    credits: "18 credits",
    description: "Focus area"
  },
  {
    title: "Research",
    credits: "21 credits",
    description: "Dissertation"
  }
];

const PhDDevStudies = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://www.daystar.ac.ke/academic-affairs/assets/images/slider-3.jpg"
            alt="Development Studies"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              PhD in Development Studies
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-lg">
              Transform communities through innovation, research, and capacity development
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

      {/* Specializations Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {specializations.map((spec, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="bg-[#00BFFF]/10 p-3 rounded-lg">
                  <spec.icon className="w-6 h-6 text-[#00BFFF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{spec.title}</h3>
                  <p className="text-sm text-gray-600">{spec.description}</p>
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
                  The PhD in Development Studies at Daystar University is designed to prepare researchers, academicians, and practitioners to tackle complex global development issues. Our program emphasizes innovative approaches to transform communities through rigorous research and capacity development.
                </p>
                <p className="mt-4">
                  Key program features:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>Five specialized concentrations</li>
                  <li>Comprehensive research training</li>
                  <li>Practical community engagement</li>
                  <li>Global development perspective</li>
                  <li>Christian values integration</li>
                </ul>
              </div>
            </div>

            {/* Credit Structure */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Structure</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {creditStructure.map((structure, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#00BFFF]/10 p-3 rounded-lg mt-1">
                      <BookOpen className="w-5 h-5 text-[#00BFFF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{structure.title}</h3>
                      <p className="text-sm font-medium text-[#00BFFF]">{structure.credits}</p>
                      <p className="text-sm text-gray-600">{structure.description}</p>
                    </div>
                  </div>
                ))}
                <div className="md:col-span-2 mt-4 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900">Total Credits Required:</span>
                    <span className="font-bold text-[#00BFFF]">68 credits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Entry Requirements */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Admission Requirements</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <GraduationCap className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Master's degree in Development Studies or related field</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Award className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Minimum GPA of 3.00 on a 4.00 scale (B grade)</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Duration */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Mode of Study</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Clock className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Full-time</p>
                    <p className="text-sm text-gray-600">3 years duration</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Clock className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Part-time</p>
                    <p className="text-sm text-gray-600">Up to 7 years duration</p>
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
              <p className="mb-6">Join our community of development scholars.</p>
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

export default PhDDevStudies;
