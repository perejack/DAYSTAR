import { Users, Target, GraduationCap, Globe2, Heart, Award, BookOpen, Handshake, Scale, FileText, Network, HandHeart, MessageCircle } from 'lucide-react';

const keyFeatures = [
  {
    icon: Globe2,
    title: "Global Perspective",
    description: "International relations focus"
  },
  {
    icon: Handshake,
    title: "Diplomatic Skills",
    description: "Cross-cultural communication"
  },
  {
    icon: Heart,
    title: "Peace Building",
    description: "Conflict resolution expertise"
  },
  {
    icon: Network,
    title: "Professional Network",
    description: "Industry connections"
  }
];

const careerPaths = [
  {
    icon: Scale,
    title: "Peace Mediator",
    description: "Facilitate conflict resolution"
  },
  {
    icon: Globe2,
    title: "NGO Professional",
    description: "International development"
  },
  {
    icon: MessageCircle,
    title: "Diplomatic Service",
    description: "International relations"
  },
  {
    icon: HandHeart,
    title: "Community Advocate",
    description: "Social transformation"
  }
];

const programHighlights = [
  {
    icon: BookOpen,
    title: "Cultural Understanding",
    description: "Deep cross-cultural insights"
  },
  {
    icon: Target,
    title: "Practical Skills",
    description: "Real-world application"
  },
  {
    icon: Users,
    title: "Professional Development",
    description: "Career-focused training"
  },
  {
    icon: FileText,
    title: "Research Methods",
    description: "Analytical approaches"
  }
];

const PeaceConflict = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1920&q=80"
            alt="Peace and Conflict Transformation"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Diploma in Peace and Conflict Transformation
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-lg">
              Transform conflicts into opportunities for peace and growth
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
                  The Diploma in Peace and Conflict Transformation is an interdisciplinary program that equips students with essential skills in diplomacy and international relations. Our program provides a deep understanding of cultural differences and their impact on global interactions.
                </p>
                <p className="mt-4">
                  This program is specifically designed for individuals pursuing careers in international relations, non-profit organizations, and corporate diplomacy. Students gain practical skills in conflict resolution, cross-cultural communication, and peace-building strategies.
                </p>
                <p className="mt-4">
                  Through a combination of theoretical knowledge and practical application, graduates emerge prepared to make meaningful contributions to peace and conflict transformation initiatives worldwide.
                </p>
              </div>
            </div>

            {/* Program Highlights */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {programHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#00BFFF]/10 p-3 rounded-lg mt-1">
                      <highlight.icon className="w-5 h-5 text-[#00BFFF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{highlight.title}</h3>
                      <p className="text-sm text-gray-600">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Paths */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Opportunities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {careerPaths.map((career, index) => (
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
            {/* Entry Requirements */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Entry Requirements</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Award className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">KCSE mean grade of C-(minus) or C(plain)</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <BookOpen className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">One Principal pass in 'A' levels</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <GraduationCap className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">4 credits or better in IGCSE or a graded certificate</p>
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
              <p className="mb-6">Begin your journey in peace and conflict transformation at Daystar University.</p>
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

export default PeaceConflict;
