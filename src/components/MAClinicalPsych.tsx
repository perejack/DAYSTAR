import { Users, Award, Brain, Target, BookOpen, Globe, Heart, GraduationCap, Building, Sparkles, Stethoscope } from 'lucide-react';

const programFeatures = [
  {
    icon: Brain,
    title: "Practical Learning",
    description: "Experiential training"
  },
  {
    icon: Stethoscope,
    title: "Clinical Skills",
    description: "Professional assessment"
  },
  {
    icon: Heart,
    title: "Holistic Approach",
    description: "Bio-psycho-social care"
  },
  {
    icon: Globe,
    title: "Cultural Integration",
    description: "Diverse perspectives"
  }
];

const careerPaths = [
  {
    title: "Educational Institutions",
    description: "School psychology services"
  },
  {
    title: "Health Institutions",
    description: "Mental health care"
  },
  {
    title: "Humanitarian Organizations",
    description: "Crisis intervention"
  },
  {
    title: "NGOs & Agencies",
    description: "Community support"
  },
  {
    title: "Faith-based Organizations",
    description: "Spiritual integration"
  },
  {
    title: "Correctional Institutions",
    description: "Rehabilitation services"
  }
];

const MAClinicalPsych = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://www.daystar.ac.ke/academic-affairs/assets/images/slider-2.jpg"
            alt="Clinical Psychology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Master of Arts in Clinical Psychology
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-lg">
              Advanced training in mental health assessment and intervention
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
                  The Masters in Clinical Psychology programme provides comprehensive training through practical and experiential learning, incorporating psychometric assessments to develop professional skills, attitudes, and habits.
                </p>
                <p className="mt-4">
                  Our graduates are equipped with in-depth knowledge and mastery of:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-2">
                  <li>Biological factors in mental health</li>
                  <li>Psychological assessment and intervention</li>
                  <li>Social and cultural influences</li>
                  <li>Spiritual aspects of mental health</li>
                  <li>Lifespan development and mental illness</li>
                </ul>
                <p className="mt-4">
                  The program emphasizes a holistic approach to mental health care, integrating evidence-based practices with cultural sensitivity and spiritual awareness.
                </p>
              </div>
            </div>

            {/* Career Opportunities */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Opportunities</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {careerPaths.map((path, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#00BFFF]/10 p-3 rounded-lg mt-1">
                      <Building className="w-5 h-5 text-[#00BFFF]" />
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
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <BookOpen className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Non-Psychology graduates require zero credit hours in Counselling Psychology</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Program Outcomes */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Program Outcomes</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Brain className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <p className="text-sm text-gray-600">Advanced clinical assessment skills</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Heart className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <p className="text-sm text-gray-600">Mental health intervention expertise</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Globe className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <p className="text-sm text-gray-600">Capacity building in mental health</p>
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
              <p className="mb-6">Join our community of mental health professionals.</p>
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

export default MAClinicalPsych;
