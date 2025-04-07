import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, ChevronRight, ChevronLeft, Users, Award, Heart, Microscope, Building, Wind, Activity, Droplets } from 'lucide-react';

const heroImages = [
  'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80'
];

const corePillars = [
  { icon: Droplets, title: 'Water Sanitation & Hygiene', description: 'WASH programs and implementation' },
  { icon: Shield, title: 'Port Health', description: 'Border health control and management' },
  { icon: Activity, title: 'Disease Prevention', description: 'Control and intervention strategies' },
  { icon: Building, title: 'Built Environment', description: 'Planning and environmental impact' },
  { icon: Wind, title: 'Pollution Control', description: 'Environmental protection measures' },
  { icon: Shield, title: 'Food Safety', description: 'Quality control and regulations' }
];

const careerPaths = [
  'Public Health Officer',
  'Environmental Health Specialist',
  'Epidemiologist',
  'Port Health Officer',
  'Water and Sanitation Manager',
  'Health Project Manager',
  'Disaster Management Specialist',
  'EIA/EA Expert',
  'Health and Safety Officer',
  'Public Health Prosecutor'
];

const relatedCourses = [
  { name: 'Diploma in Information Communication Technology', path: '/ict-diploma' },
  { name: 'Bachelor of Science in Applied Computer Science', path: '/computer-science' },
  { name: 'Bachelor of Science in Acturial Science', path: '/acturial-science' },
  { name: 'Bachelor of Science in Biomedical Science', path: '/biomedical-science' }
];

const EnvironmentalHealth = () => {
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
              Bachelor of Science in<br />Environmental Health
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Protecting and promoting population health through prevention and intervention
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

      {/* Core Pillars Grid - Floating above */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {corePillars.map((pillar, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-[#00BFFF]/10 p-3 rounded-lg">
                  <pillar.icon className="w-6 h-6 text-[#00BFFF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{pillar.title}</h3>
                  <p className="text-gray-600 text-sm">{pillar.description}</p>
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
            onClick={() => setActiveTab('careers')}
            className={`px-6 py-3 text-lg font-medium transition-colors duration-300 ${
              activeTab === 'careers'
                ? 'text-[#00BFFF] border-b-2 border-[#00BFFF]'
                : 'text-gray-600 hover:text-[#00BFFF]'
            }`}
          >
            Career Paths
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
                      BSc. (Environmental Health) is a preventive medicine - and intervention- focused major that aims to protect, prolong and promote health among the populations. Disease etiology, individual factors, environmental factors, cultural influences, and strategies for addressing and understanding vulnerable groups are studied in this major.
                    </p>
                    <p className="text-gray-600">
                      It is a complementary field to medical training; indeed where public health programs are effective, prevalence of disease goes down and the population is much healthier.
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

            {activeTab === 'careers' && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Career Opportunities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {careerPaths.map((career, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                      <div className="bg-[#00BFFF]/10 p-2 rounded-full">
                        <Microscope className="w-5 h-5 text-[#00BFFF]" />
                      </div>
                      <span className="text-gray-700">{career}</span>
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
                Take the first step towards a career in Environmental Health. Join our program and make a difference in public health.
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

export default EnvironmentalHealth;
