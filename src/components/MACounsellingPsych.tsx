import { Users, Award, Brain, Target, Heart, Book, Sparkles, Globe, HandHeart, Lightbulb, GraduationCap, Clock, BookOpen } from 'lucide-react';

const programObjectives = [
  {
    icon: HandHeart,
    title: "Professional Practice",
    description: "Ethical counseling"
  },
  {
    icon: Brain,
    title: "Research Skills",
    description: "Advanced analysis"
  },
  {
    icon: Globe,
    title: "Cultural Integration",
    description: "African perspectives"
  },
  {
    icon: Heart,
    title: "Holistic Growth",
    description: "Personal development"
  }
];

const learningOutcomes = [
  {
    title: "Clinical Practice",
    description: "Advanced counseling methods"
  },
  {
    title: "Research Expertise",
    description: "Data analysis & design"
  },
  {
    title: "Cultural Competence",
    description: "Multi-cultural integration"
  },
  {
    title: "Leadership Skills",
    description: "Professional development"
  },
  {
    title: "Communication",
    description: "Professional writing"
  },
  {
    title: "Critical Thinking",
    description: "Problem analysis"
  }
];

const MACounsellingPsych = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1920&q=80"
            alt="Counselling Psychology"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Master of Arts in Counselling Psychology
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-lg">
              Integrating Christian spirituality with psychological principles
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

      {/* Program Objectives Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {programObjectives.map((objective, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[#00BFFF]/10 p-3 rounded-lg">
                  <objective.icon className="w-6 h-6 text-[#00BFFF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{objective.title}</h3>
                  <p className="text-sm text-gray-600">{objective.description}</p>
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
                  The MA in Counselling Psychology is a comprehensive two-year, 48-credit hour program designed to equip Christian professional counselors. Our unique approach integrates Christian spirituality, psychological principles, and African cultural perspectives.
                </p>
                <p className="mt-4">
                  The program goes beyond sincere intentions and humanitarian concern, focusing on understanding and addressing human psycho-social-spiritual needs through a holistic lens. Students develop expertise in handling clients as whole persons: spiritually, emotionally, socially, intellectually, and physically.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Program Objectives</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Prepare students for effective and ethical counseling</li>
                  <li>Provide advanced training in research methodology</li>
                  <li>Develop expertise in counseling methods</li>
                  <li>Integrate psychology with Christianity and multi-cultural issues</li>
                  <li>Foster critical thinking about human problems</li>
                  <li>Prepare leaders for reducing human suffering</li>
                  <li>Enhance professional communication skills</li>
                </ul>
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Outcomes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#00BFFF]/10 p-3 rounded-lg mt-1">
                      <Lightbulb className="w-5 h-5 text-[#00BFFF]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{outcome.title}</h3>
                      <p className="text-sm text-gray-600">{outcome.description}</p>
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
                    <Book className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Background in Psychology recommended</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Program Details */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Program Details</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Clock className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <p className="text-sm text-gray-600">2 years duration</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <BookOpen className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <p className="text-sm text-gray-600">48 credit hours</p>
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
              <p className="mb-6">Begin your journey in counselling psychology at Daystar University.</p>
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

export default MACounsellingPsych;
