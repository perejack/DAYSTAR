import { BookOpen, GraduationCap, Users, Award, Heart, Church, Scroll, PenTool } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const keyFeatures = [
  {
    icon: BookOpen,
    title: "Biblical Studies",
    description: "In-depth study of scripture"
  },
  {
    icon: Church,
    title: "Christian Thought",
    description: "Historical perspectives"
  },
  {
    icon: PenTool,
    title: "Practical Ministry",
    description: "Hands-on experience"
  },
  {
    icon: Scroll,
    title: "Theological Research",
    description: "Academic excellence"
  }
];

const programHighlights = [
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "Biblical and theological studies"
  },
  {
    icon: Users,
    title: "Ministry Experience",
    description: "Practical application"
  },
  {
    icon: Heart,
    title: "Spiritual Formation",
    description: "Personal growth"
  }
];

const Theology = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1548625149-fc4a29cf7092?auto=format&fit=crop&w=1920&q=80"
            alt="Theology Program"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Diploma in Theology
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-lg">
              Deepen your understanding of Biblical Studies and Christian Thought
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
                  The Diploma in Theology introduces students to the key theological disciplines of Biblical Studies and Christian Thought and History. This comprehensive program provides a strong foundation in theological education and spiritual formation.
                </p>
                <p className="mt-4">
                  Students have the opportunity to extend their studies through electives in practical ministry studies and may undertake study in a ministry setting as part of the course. This hands-on experience helps bridge the gap between academic learning and practical application.
                </p>
                <p className="mt-4">
                  Our program is designed to equip students with the knowledge, skills, and spiritual formation necessary for effective ministry and leadership in various Christian contexts.
                </p>
              </div>
            </div>

            {/* Program Highlights */}
            <div className="bg-white rounded-xl shadow-md p-8">
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
                    <GraduationCap className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">One Principal pass in 'A' levels</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Award className="w-4 h-4 text-[#00BFFF]" />
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
                  <p className="text-sm text-gray-600">Excellence in theological education</p>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Heart className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <p className="text-sm text-gray-600">Transformation through spiritual growth</p>
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
              <p className="mb-6">Begin your theological journey at Daystar University.</p>
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

export default Theology;
