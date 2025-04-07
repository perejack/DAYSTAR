import { Users, Award, Brain, Target, Heart, Book, Sparkles, Globe, HandHeart, Lightbulb } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const programGoals = [
  {
    icon: Brain,
    title: "Human Behavior",
    description: "Understanding behavioral principles"
  },
  {
    icon: Heart,
    title: "Personal Growth",
    description: "Self-development and maturity"
  },
  {
    icon: HandHeart,
    title: "Christian Integration",
    description: "Faith and psychology"
  },
  {
    icon: Globe,
    title: "Cultural Integration",
    description: "African traditional perspectives"
  }
];

const learningOutcomes = [
  {
    title: "Psychological Analysis",
    description: "Tools for behavior evaluation"
  },
  {
    title: "Professional Development",
    description: "Graduate-level preparation"
  },
  {
    title: "Spiritual Integration",
    description: "Christian psychology practice"
  },
  {
    title: "Cultural Competence",
    description: "African context integration"
  },
  {
    title: "Research Skills",
    description: "Data collection and analysis"
  },
  {
    title: "Clinical Practice",
    description: "Counseling techniques"
  }
];

const BAPsychology = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1920&q=80"
            alt="Psychology Program"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Bachelor of Arts in Psychology and Counselling
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-lg">
              Transform lives through understanding human behavior and promoting growth
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

      {/* Program Goals Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {programGoals.map((goal, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[#00BFFF]/10 p-3 rounded-lg">
                  <goal.icon className="w-6 h-6 text-[#00BFFF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                  <p className="text-sm text-gray-600">{goal.description}</p>
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
                  The Bachelor of Arts in Psychology and Counselling is designed to equip students with skills for understanding and facilitating human behavior change, promoting growth, and developing communities. Our program uniquely integrates psychological principles with spiritual maturity and cultural understanding.
                </p>
                <p className="mt-4">
                  Students gain comprehensive knowledge in human behavior, mental processes, rehabilitation, restoration, and reconciliation, all viewed through the lens of God's word. The program prepares graduates to become effective agents of change in their communities.
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Program Goals</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Provide clear understanding of human behavior principles</li>
                  <li>Develop self-acceptance and positive self-image</li>
                  <li>Foster human relationships and objective life outlook</li>
                  <li>Enhance psychological analysis and evaluation skills</li>
                  <li>Promote holistic personal growth and maturity</li>
                  <li>Integrate psychology with Christianity and African culture</li>
                  <li>Prepare for graduate-level studies</li>
                  <li>Develop Christian professionals as agents of change</li>
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
                    <Award className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Overall minimum grade of C+ in KCSE</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Award className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">At least 4 credits in IGCSE with 2 credit passes at 'A' level/GCE</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Book className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Grade C+ (plus) in English</p>
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
              <p className="mb-6">Begin your journey in psychology at Daystar University.</p>
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

export default BAPsychology;
