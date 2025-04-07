import { useState, useEffect } from 'react';
import { Calendar, Book, Award, ChevronRight, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NewsItem {
  image: string;
  title: string;
  date: string;
}

const news: NewsItem[] = [
  {
    image: '1742207393_ps-1.jpg',
    title: 'Daystar University Hosts Annual Postgraduate Seminar 2025',
    date: 'March 17, 2025'
  },
  {
    image: '1741075262_adusc.jpg',
    title: '4th Annual Daystar University Scientific Conference (ADUSC-2025)',
    date: 'March 04, 2025'
  },
  {
    image: '1740650099_WhatsApp Image 2025-02-27 at 11.49.40 AM.jpeg',
    title: 'DRICE Announces the 2024 Daystar University Research and Innovation Grant Awardees!',
    date: 'February 27, 2025'
  },
  {
    image: '1740129871_The VC shows solidarity with Congolese Students amidst ongoing conflict in DRC.jpg',
    title: 'Vice Chancellor meets with Congolese students following conflict in DRC',
    date: 'February 21, 2025'
  }
];

const heroImages = [
  'https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1920&q=80'
];

const LawProgram = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
      {/* Hero Section with Image Carousel */}
      <div className="relative h-[500px] md:h-[600px]">
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
            <div className="absolute inset-0 bg-black bg-opacity-60" />
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
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Bachelor of Law (LL.B)</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Shape the future of justice with our comprehensive law program
            </p>
            <button
              onClick={() => navigate('/apply')}
              className="inline-block bg-[#00BFFF] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#0099CC] transition-colors duration-300"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white shadow-lg -mt-16 relative z-20 max-w-7xl mx-auto rounded-xl grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
        <div className="flex items-center space-x-4">
          <Calendar className="w-12 h-12 text-[#00BFFF]" />
          <div>
            <h3 className="font-semibold text-gray-900">Program Duration</h3>
            <p className="text-gray-600">4 Years Full-time</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Book className="w-12 h-12 text-[#00BFFF]" />
          <div>
            <h3 className="font-semibold text-gray-900">Study Mode</h3>
            <p className="text-gray-600">On Campus</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Award className="w-12 h-12 text-[#00BFFF]" />
          <div>
            <h3 className="font-semibold text-gray-900">Qualification</h3>
            <p className="text-gray-600">Bachelor's Degree</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Dean's Section */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-6 mb-6">
                  <img 
                    src="https://profiles.daystar.ac.ke/uploads/avatars/1676439313_dr-maurice-awour.jpg"
                    alt="Dr. Maurice Owuor"
                    className="h-48 w-48 object-cover rounded-lg mb-4 md:mb-0"
                  />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Dr. Maurice Owuor</h2>
                    <p className="text-[#00BFFF] mb-4">Dean, School of Law</p>
                    <div className="prose max-w-none">
                      <p className="text-gray-600 mb-4">
                        The School of Law was licensed to offer legal education on 30th July 2018 and opened her doors to the first batch of students in September of the same year.
                      </p>
                      <p className="text-gray-600">
                        The Daystar School of Law seeks to develop competent, well-trained and morally upright legal practitioners to serve as advocates, magistrates, judges and legal managers in various organizations with the unique ability to interpret legal issues.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Departments */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img 
                  src="https://www.daystar.ac.ke/school-of-law/assets/images/sol-side-ad.png"
                  alt="Department of Private Law"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Department of Private Law</h3>
                  <p className="text-gray-600">
                    The Department teaches and examines students through incorporates Problem-based learning and Blooms Taxonomy. All the assignments submitted to the department comply with the OSCOLA citation method.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvAQHwZG1J324eJgUcmGHh5_zEnmxtCJx7FWmc_jbb2-1uf7jvJoZmmK86kDHHnl49IZ0&usqp=CAU"
                  alt="Department of Public Law"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Department of Public Law</h3>
                  <p className="text-gray-600">
                    The Public law department is driven by the overall philosophy of Daystar University which requires students to integrate their faith with their fields of study.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* News & Updates */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">News & Updates</h3>
              <div className="space-y-4">
                {news.map((item, index) => (
                  <div key={index} className="group cursor-pointer">
                    <p className="text-sm text-[#00BFFF]">{item.date}</p>
                    <h4 className="text-gray-900 group-hover:text-[#00BFFF] transition-colors duration-300">
                      {item.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar Section */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Start your Career</h3>
              <p className="text-gray-600">
                Our programmes are tailored to provide holistic learning and a Christ-centred approach and contribute to the achievement of the vision and mission of Daystar University.
              </p>
              <button
                className="mt-4 w-full bg-[#00BFFF] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0099CC] transition-colors duration-300"
              >
                View Academic Calendar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawProgram;
