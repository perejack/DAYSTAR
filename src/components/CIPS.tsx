import { ChevronRight, CheckCircle2, BookOpen, GraduationCap, TrendingUp, BarChart4, ShoppingCart, Building2, Globe2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface EntryLevel {
  level: string;
  name: string;
}

const entryLevels: EntryLevel[] = [
  {
    level: "Level 2",
    name: "Certificate in Procurement and Supply Operations"
  },
  {
    level: "Level 3",
    name: "Advanced Certificate in Procurement and Supply Operations"
  },
  {
    level: "Level 4",
    name: "Diploma in Procurement and Supply"
  }
];

const diplomaRequirements = [
  "At least two A levels or equivalent",
  "At least two years' experience in a relevant business environment"
];

const values = [
  {
    title: 'Excellence',
    description: 'Commitment to professional procurement standards'
  },
  {
    title: 'Transformation',
    description: 'Developing world-class procurement professionals'
  },
  {
    title: 'Servant Leadership',
    description: 'Leading with integrity in supply chain management'
  }
];

const programHighlights = [
  {
    icon: ShoppingCart,
    title: 'Professional Recognition',
    description: 'Globally recognized qualification'
  },
  {
    icon: TrendingUp,
    title: 'Career Advancement',
    description: 'Enhanced job prospects'
  },
  {
    icon: Building2,
    title: 'Industry Standard',
    description: 'Leading procurement qualification'
  }
];

const CIPS = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-[#00BFFF] to-[#0099CC]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50" />
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80"
            alt="CIPS Program"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Chartered Institute of Procurement & Supply (CIPS)
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Become a chartered procurement professional
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => navigate('/apply')}
                className="bg-white text-[#00BFFF] px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
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

      {/* Program Highlights */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programHighlights.map((highlight, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[#00BFFF]/10 p-3 rounded-lg">
                  <highlight.icon className="w-6 h-6 text-[#00BFFF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{highlight.title}</h3>
                  <p className="text-gray-600">{highlight.description}</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Course</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600">
                  Throughout the world CIPS qualifications are recognised as driving leading-edge thinking and professionalism in procurement. CIPS is the only independently regulated professional body with an honours degree level qualification. MCIPS chartered professional is recognised worldwide as the standard for procurement professionals.
                </p>
              </div>
            </div>

            {/* Entry Levels */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Entry Level Qualifications</h2>
              <div className="space-y-6">
                {entryLevels.map((level, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-start space-x-3">
                      <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                        <BookOpen className="w-5 h-5 text-[#00BFFF]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{level.level}</h3>
                        <p className="text-gray-600">{level.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Diploma Requirements */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Diploma Entry Requirements</h2>
              <div className="space-y-4">
                <p className="text-gray-600 mb-4">To enter at the Diploma qualification you will need to provide evidence of:</p>
                {diplomaRequirements.map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00BFFF] mt-1" />
                    <p className="text-gray-600">{requirement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Program Benefits */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Program Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <GraduationCap className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Professional Status</h4>
                    <p className="text-sm text-gray-600">Achieve MCIPS chartered status</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Globe2 className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Global Recognition</h4>
                    <p className="text-sm text-gray-600">Internationally respected qualification</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <BarChart4 className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Career Growth</h4>
                    <p className="text-sm text-gray-600">Enhanced procurement career prospects</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Our Values */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Values</h3>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-[#00BFFF]/10 p-2 rounded-lg">
                      <ChevronRight className="w-4 h-4 text-[#00BFFF]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{value.title}</h4>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-[#00BFFF] to-[#0099CC] rounded-xl shadow-md p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6">Begin your journey to becoming a CIPS professional at Daystar University.</p>
              <button 
                onClick={() => navigate('/apply')}
                className="w-full bg-white text-[#00BFFF] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
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

export default CIPS;
