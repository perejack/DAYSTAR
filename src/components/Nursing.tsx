import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stethoscope, Heart, ChevronRight, ChevronLeft, GraduationCap, Users, Building2, Baby, UserPlus, Clipboard } from 'lucide-react';

const heroImages = [
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1920&q=80'
];

const departments = [
  {
    icon: Building2,
    title: 'Medical-Surgical Nursing',
    description: 'Foundational courses for professional nursing and midwifery practice'
  },
  {
    icon: Baby,
    title: 'Midwifery & Reproductive Health',
    description: 'Advanced competency in midwifery and reproductive health nursing'
  },
  {
    icon: UserPlus,
    title: 'Community Health Nursing',
    description: 'Leadership in public health nursing and preventive care'
  },
  {
    icon: GraduationCap,
    title: 'Education & Research',
    description: 'Preparing future educators, leaders, and researchers'
  }
];

const nursingPrograms = [
  { name: 'BSc. Nursing', path: '/bsc-nursing' },
  { name: 'BSc. Nursing Upgrading', path: '/bsc-nursing-upgrading' },
  { name: 'MSc. Nursing Education', path: '/new-msc-nursing-education' }
];

const Nursing = () => {
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
              Welcome to<br />School of Nursing
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Providing Christ-focused and patient-centered nursing education since 2020
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

      {/* Departments Grid - Floating above */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-[#00BFFF]/10 p-3 rounded-lg">
                  <dept.icon className="w-6 h-6 text-[#00BFFF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{dept.title}</h3>
                  <p className="text-gray-600 text-sm">{dept.description}</p>
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
            onClick={() => setActiveTab('programs')}
            className={`px-6 py-3 text-lg font-medium transition-colors duration-300 ${
              activeTab === 'programs'
                ? 'text-[#00BFFF] border-b-2 border-[#00BFFF]'
                : 'text-gray-600 hover:text-[#00BFFF]'
            }`}
          >
            Our Programs
          </button>
          <button
            onClick={() => setActiveTab('dean')}
            className={`px-6 py-3 text-lg font-medium transition-colors duration-300 ${
              activeTab === 'dean'
                ? 'text-[#00BFFF] border-b-2 border-[#00BFFF]'
                : 'text-gray-600 hover:text-[#00BFFF]'
            }`}
          >
            Dean's Message
          </button>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">About Our School</h2>
                  <div className="prose max-w-none">
                    <p className="text-gray-600 mb-4">
                      The School of Nursing was established in 2020, and seeks to provide Christ-focused and patient-centered Nursing Education, to develop individuals to be competent Nurse Professionals for health systems and display excellence of servant leaders.
                    </p>
                    <p className="text-gray-600">
                      The student will learn through close interaction with qualified faculty who model Christian professional attitude and skills integrated into the teaching and learning experience. The students are required to have clinical teaching and learning from accredited public and private health institutions that link them to the industry.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
                  <p className="text-gray-600">
                    To be the School of Nursing of choice distinguished for its Christ-centered approach to teaching patient-centered care to meet the health needs of a global community.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-md p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Learning Experience</h2>
                  <p className="text-gray-600">
                    We provide a carefully organized real-world learning experience that is relevant to current best practice taking into account the rapid advancement in health care globally. This educational foundation prepares a culturally sensitive nurse who will effectively work with teams across diverse settings of health systems.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'programs' && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Programs</h2>
                <div className="grid gap-4">
                  {nursingPrograms.map((program, index) => (
                    <button
                      key={index}
                      onClick={() => navigate(program.path)}
                      className="flex items-center justify-between w-full p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                    >
                      <span className="text-gray-700">{program.name}</span>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'dean' && (
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-start space-x-6 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                      <Users className="w-16 h-16 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Dr. Susan Njuguna</h2>
                    <p className="text-gray-600">Dean, School of Nursing</p>
                  </div>
                </div>
                <div className="prose max-w-none text-gray-600">
                  <p className="mb-4">
                    The School of Nursing was established in 2020, and seeks to provide Christ-focused and patient-centered Nursing Education, to develop individuals to be competent Nurse Professionals for health systems and display excellence of servant leaders.
                  </p>
                  <p>
                    The student will learn through close interaction with qualified faculty who model Christian professional attitude and skills integrated into the teaching and learning experience. The students are required to have clinical teaching and learning from accredited public and private health institutions that link them to the industry.
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Side Content */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Heart className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Patient-Centered</h4>
                    <p className="text-sm text-gray-600">Focus on compassionate, quality care</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Stethoscope className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Clinical Excellence</h4>
                    <p className="text-sm text-gray-600">Hands-on training at leading institutions</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Clipboard className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Modern Facilities</h4>
                    <p className="text-sm text-gray-600">State-of-the-art learning environment</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#00BFFF] to-[#0099CC] rounded-xl shadow-md p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 text-white/90">Join our Christ-centered nursing program and make a difference in healthcare.</p>
              <button 
                onClick={() => navigate('/apply')}
                className="w-full bg-white text-[#00BFFF] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors duration-300"
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

export default Nursing;
