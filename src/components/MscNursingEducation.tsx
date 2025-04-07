import { GraduationCap, Users, ChevronRight, Calendar, Clock, CheckCircle2 } from 'lucide-react';

const programHighlights = [
  {
    icon: Clock,
    title: 'Duration',
    description: 'Two calendar years'
  },
  {
    icon: Users,
    title: 'Mode of Study',
    description: 'Blended learning approach'
  },
  {
    icon: GraduationCap,
    title: 'Qualification',
    description: 'Master of Science'
  }
];

const deliveryFormat = [
  {
    percentage: 40,
    type: 'Face to Face',
    description: 'Direct classroom interaction'
  },
  {
    percentage: 40,
    type: 'Online',
    description: 'Virtual learning environment'
  },
  {
    percentage: 20,
    type: 'Clinical & Research',
    description: 'Practical experience and research work'
  }
];

const admissionRequirements = [
  'BSc Nursing, BSc Midwifery, BSc Psychiatry/Mental Health Nursing, BSc Community Health/Public Health Nursing, or BSc Health Systems Management (with Nursing Background)',
  'Current practice license',
  'GPA of 2.75 (on 4.00 system) or equivalent from an accredited University',
  'Holders of Master\'s degree in Nursing specialty, MPH, MSc Health Systems Management, or MSc Health Informatics (with BSc Nursing) are also eligible'
];

const values = [
  {
    title: 'Excellence',
    description: 'Commitment to the highest standards in nursing education'
  },
  {
    title: 'Transformation',
    description: 'Fostering positive change in healthcare education'
  },
  {
    title: 'Servant Leadership',
    description: 'Developing compassionate and effective healthcare leaders'
  }
];

const MscNursingEducation = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-[#00BFFF] to-[#0099CC]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50" />
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80"
            alt="Nursing Education"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              MSc. Nursing Education
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Empowering nurse educators to strengthen the global nursing workforce
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-[#00BFFF] px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Programme</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-6">
                  Are you keen in strengthening the global nursing workforce? Whether your goal is to teach in an academic nursing program or facilitate learning of health professionals in your clinical setting where your expertise is demonstrated, Daystar's MSc. in Nursing Education program empowers you to engage and inspire professionals in healthcare.
                </p>
              </div>
            </div>

            {/* Mode of Study */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Mode of Study</h2>
              <p className="text-gray-600 mb-6">
                MSc. Nursing Education program is designed to be completed in two calendar years in a blended approach to delivery of content.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {deliveryFormat.map((format, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-[#00BFFF] mb-2">
                      {format.percentage}%
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{format.type}</h3>
                    <p className="text-sm text-gray-600">{format.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Admission Requirements */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Admission Requirements</h2>
              <ul className="space-y-4">
                {admissionRequirements.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00BFFF] mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
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

            {/* Key Dates */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Key Dates</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-[#00BFFF]" />
                  <div>
                    <h4 className="font-medium text-gray-900">Application Deadline</h4>
                    <p className="text-sm text-gray-600">Rolling admissions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-[#00BFFF]" />
                  <div>
                    <h4 className="font-medium text-gray-900">Program Start</h4>
                    <p className="text-sm text-gray-600">January & September intakes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-[#00BFFF] to-[#0099CC] rounded-xl shadow-md p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6">Take the next step in your nursing education journey with Daystar University.</p>
              <button className="w-full bg-white text-[#00BFFF] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                Begin Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MscNursingEducation;
