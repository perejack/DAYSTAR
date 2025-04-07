import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator, TrendingUp, Building2, ChevronRight, ChevronLeft, Users, Award, Heart, LineChart, BriefcaseIcon, GraduationCap, BookOpen } from 'lucide-react';

const heroImages = [
  'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80'
];

const careerPaths = [
  {
    icon: Calculator,
    title: 'Insurance Companies',
    description: 'Value financial contracts and manage investment funds'
  },
  {
    icon: TrendingUp,
    title: 'Financial Consultancy',
    description: 'Advise on pension funds and employee benefits'
  },
  {
    icon: Building2,
    title: 'Government Service',
    description: 'Supervise insurance companies and national insurance'
  },
  {
    icon: LineChart,
    title: 'Stock Exchange',
    description: 'Analyze market trends and financial risks'
  }
];

const programFeatures = [
  {
    icon: GraduationCap,
    title: 'Professional Development',
    description: 'Preparation for International Society of Actuaries examinations'
  },
  {
    icon: BookOpen,
    title: 'Advanced Studies',
    description: 'Foundation for postgraduate studies and research'
  },
  {
    icon: BriefcaseIcon,
    title: 'Industry Ready',
    description: 'Practical skills for immediate employment'
  }
];

const relatedCourses = [
  { name: 'Diploma in Information Communication Technology', path: '/ict-diploma' },
  { name: 'Bachelor of Science in Applied Computer Science', path: '/computer-science' },
  { name: 'Bachelor of Science in Biomedical Science', path: '/biomedical-science' },
  { name: 'Bachelor of Science in Environmental Health', path: '/environmental-health' }
];

const ActuarialScience = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

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
      {/* Hero Section */}
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
              Bachelor of Science in<br />Actuarial Science
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Master the art of risk assessment and financial analysis
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

      {/* Career Paths Grid - Floating above */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careerPaths.map((career, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-[#00BFFF]/10 p-3 rounded-lg">
                  <career.icon className="w-6 h-6 text-[#00BFFF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{career.title}</h3>
                  <p className="text-gray-600 text-sm">{career.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
            onClick={() => setActiveTab('features')}
            className={`px-6 py-3 text-lg font-medium transition-colors duration-300 ${
              activeTab === 'features'
                ? 'text-[#00BFFF] border-b-2 border-[#00BFFF]'
                : 'text-gray-600 hover:text-[#00BFFF]'
            }`}
          >
            Program Features
          </button>
          <button
            onClick={() => setActiveTab('related')}
            className={`px-6 py-3 text-lg font-medium transition-colors duration-300 ${
              activeTab === 'related'
                ? 'text-[#00BFFF] border-b-2 border-[#00BFFF]'
                : 'text-gray-600 hover:text-[#00BFFF]'
            }`}
          >
            Related Courses
          </button>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Program Overview</h2>
                  <div className="prose max-w-none">
                    <p className="text-gray-600 mb-4">
                      The Bachelor of Science in Actuarial Science program prepares students for careers in risk assessment, financial analysis, and insurance. Our graduates excel in various sectors including insurance companies, consultancy firms, government service, and financial markets.
                    </p>
                    <p className="text-gray-600">
                      The program provides a strong foundation for professional examinations and postgraduate studies while emphasizing practical applications in the field.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Entry Requirements</h2>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>A mean grade of C+ (plus) and above in KCSE</li>
                    <li>5 credits in IGCSE with 2 credits passes in A level</li>
                    <li>Division 2 in GCE</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Features</h2>
                <div className="grid grid-cols-1 gap-6">
                  {programFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="bg-[#00BFFF]/10 p-3 rounded-lg">
                        <feature.icon className="w-6 h-6 text-[#00BFFF]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'related' && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Courses</h2>
                <div className="grid gap-4">
                  {relatedCourses.map((course, index) => (
                    <button
                      key={index}
                      onClick={() => navigate(course.path)}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span className="text-gray-700">{course.name}</span>
                      <ChevronRight className="w-5 h-5 text-[#00BFFF]" />
                    </button>
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

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#00BFFF] to-[#0099CC] rounded-xl shadow-md p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Ready to Get Started?</h3>
              <p className="mb-6">
                Take the first step towards a rewarding career in Actuarial Science. Join our program today.
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

export default ActuarialScience;
