import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Server, Database, Globe, ChevronRight, ChevronLeft, Laptop, Brain, Shield, Users, Rocket, Terminal, Award, Heart, CheckCircle } from 'lucide-react';

const heroImages = [
  'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1623479322729-28b25c16b011?auto=format&fit=crop&w=1920&q=80'
];

const careerPaths = [
  { icon: Code, title: 'Software Development', description: 'Build robust applications and systems' },
  { icon: Globe, title: 'Web Development', description: 'Create modern web applications' },
  { icon: Terminal, title: 'DevOps', description: 'Manage deployment and operations' },
  { icon: Shield, title: 'Cybersecurity', description: 'Protect systems and data' },
  { icon: Database, title: 'Database Administration', description: 'Manage and optimize databases' },
  { icon: Brain, title: 'AI & Machine Learning', description: 'Develop intelligent systems' },
  { icon: Server, title: 'Cloud Engineering', description: 'Build cloud infrastructure' },
  { icon: Laptop, title: 'UI/UX Design', description: 'Create intuitive interfaces' }
];

const ComputerScience = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Image Carousel */}
      <div className="relative h-[600px] md:h-[700px]">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
          </div>
        ))}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 rounded-full z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center text-white px-4 max-w-5xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Bachelor of Science in<br />Applied Computer Science
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Shape the future through technology and innovation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate('/apply')}
                className="inline-block bg-[#00BFFF] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#0099CC] transition-colors duration-300"
              >
                Apply Now
              </button>
              <a
                href="#learn-more"
                className="inline-block bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/20 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white shadow-lg -mt-20 relative z-20 max-w-7xl mx-auto rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
        <div className="flex items-center space-x-4">
          <div className="bg-[#00BFFF]/10 p-3 rounded-lg">
            <Code className="w-8 h-8 text-[#00BFFF]" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Duration</h3>
            <p className="text-[#00BFFF]">4 Years</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-[#00BFFF]/10 p-3 rounded-lg">
            <Users className="w-8 h-8 text-[#00BFFF]" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Industry Partners</h3>
            <p className="text-[#00BFFF]">Huawei, Oracle</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-[#00BFFF]/10 p-3 rounded-lg">
            <Terminal className="w-8 h-8 text-[#00BFFF]" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Practical Focus</h3>
            <p className="text-[#00BFFF]">Hands-on Learning</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="bg-[#00BFFF]/10 p-3 rounded-lg">
            <Rocket className="w-8 h-8 text-[#00BFFF]" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">Student Club</h3>
            <p className="text-[#00BFFF]">DITA</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8 border-b">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 text-lg font-medium transition-colors duration-300 ${
              activeTab === 'overview'
                ? 'text-[#00BFFF] border-b-2 border-[#00BFFF]'
                : 'text-gray-600 hover:text-[#00BFFF]'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('requirements')}
            className={`px-6 py-3 text-lg font-medium transition-colors duration-300 ${
              activeTab === 'requirements'
                ? 'text-[#00BFFF] border-b-2 border-[#00BFFF]'
                : 'text-gray-600 hover:text-[#00BFFF]'
            }`}
          >
            Requirements
          </button>
          <button
            onClick={() => setActiveTab('careers')}
            className={`px-6 py-3 text-lg font-medium transition-colors duration-300 ${
              activeTab === 'careers'
                ? 'text-[#00BFFF] border-b-2 border-[#00BFFF]'
                : 'text-gray-600 hover:text-[#00BFFF]'
            }`}
          >
            Career Paths
          </button>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {activeTab === 'overview' && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Program Overview</h2>
                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-4">
                    B.Sc. in Applied Computer Science is a four-year program tailored to equip students with competency skills and knowledge to solve real life problems using computing technology. This program is intended for students who desire to learn Computer Science to apply it to scientific, research, engineering, or industrial applications.
                  </p>
                  <p className="text-gray-600 mb-4">
                    The program is highly practical oriented and appeals to students who like to solve problems and seek to improve their problem-solving skills and who expressly desire to use computers to solve those problems. To strengthen the quality of our graduates the University has partnered with various key Industry players like Huawei, Oracle etc.
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-4">Key Focus Areas</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Programming and Data Structures</li>
                    <li>Web Development and Mobile Programming</li>
                    <li>Artificial Intelligence and Machine Learning</li>
                    <li>Database Systems and Computer Networks</li>
                    <li>Systems Security and Computer Graphics</li>
                    <li>Internet of Things and Embedded Systems</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'requirements' && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Entry Requirements</h2>
                <div className="prose max-w-none">
                  <p className="text-gray-600 mb-6">
                    To join our program, candidates must meet one of the following criteria:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-3">
                    <li>A mean grade of C+ (plus) and above in KCSE</li>
                    <li>5 credits in IGCSE with 2 credits passes in A level</li>
                    <li>Division 2 in GCE</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'careers' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Career Opportunities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {careerPaths.map((career, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                      <career.icon className="w-8 h-8 text-[#00BFFF] mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{career.title}</h3>
                      <p className="text-gray-600">{career.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg">
                    <Award className="w-5 h-5 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Excellence</h4>
                    <p className="text-sm text-gray-600">Commitment to academic excellence</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg">
                    <Users className="w-5 h-5 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Transformation</h4>
                    <p className="text-sm text-gray-600">Holistic student development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg">
                    <Heart className="w-5 h-5 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Servant Leadership</h4>
                    <p className="text-sm text-gray-600">Ethical and service-oriented approach</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Student Club */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">DITA Club</h3>
              <p className="text-gray-600 mb-4">
                Join Daystar Information Technology Association (DITA) to enhance your skills through:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#00BFFF] mr-2" />
                  Innovation projects
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#00BFFF] mr-2" />
                  Mentorship programs
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#00BFFF] mr-2" />
                  Networking events
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#00BFFF] to-[#0099CC] rounded-xl shadow-md p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
              <p className="mb-6">
                Take the first step towards your future in technology. Apply now to join our program.
              </p>
              <button 
                onClick={() => navigate('/apply')}
                className="w-full bg-white text-[#00BFFF] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
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

export default ComputerScience;
