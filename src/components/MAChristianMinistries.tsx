import { BookOpen, GraduationCap, Users, Award, Church, Heart, Globe, Brain, Target, Scroll } from 'lucide-react';

const keyFeatures = [
  {
    icon: Church,
    title: "Church Leadership",
    description: "Advanced ministry training"
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Cross-cultural ministry"
  },
  {
    icon: Brain,
    title: "Academic Excellence",
    description: "Rigorous theological study"
  },
  {
    icon: Heart,
    title: "Spiritual Formation",
    description: "Personal growth"
  }
];

const careerPaths = [
  {
    title: "University Leadership",
    description: "Serve as Deans and Academic Leaders"
  },
  {
    title: "NGO Management",
    description: "Direct charitable organizations"
  },
  {
    title: "Community Development",
    description: "Lead social impact initiatives"
  },
  {
    title: "Education",
    description: "Train future leaders"
  },
  {
    title: "Counseling",
    description: "Provide spiritual guidance"
  },
  {
    title: "Church Ministry",
    description: "Lead congregations"
  }
];

const MAChristianMinistries = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1920&q=80"
            alt="Christian Ministries"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Master of Arts in Christian Ministries
            </h1>
            <p className="text-xl text-white mb-8 drop-shadow-lg">
              Equipping leaders for transformative ministry
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
                  The MA in Christian Ministries is a comprehensive two-year, 48-credit-hour program designed to train and equip Christian leaders for ministries both within and beyond the church. Our diverse student body includes full-time pastors, lay leaders, and professionals from business, media, and administrative backgrounds.
                </p>
                <p className="mt-4">
                  Our program advances the Kingdom of God through training effective leaders for church outreach ministries. Building on students' prior training and experience in Bible, theology, and practical ministry, we prepare them for impactful service as Christian leaders in church, para-church organizations, and society at large.
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
                      <Scroll className="w-5 h-5 text-[#00BFFF]" />
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
            {/* Program Details */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Program Details</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <BookOpen className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">48 Credit Hours</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <GraduationCap className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">2 Year Program Duration</p>
                  </div>
                </li>
              </ul>
            </div>

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
              <p className="mb-6">Begin your journey in Christian ministry at Daystar University.</p>
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

export default MAChristianMinistries;
