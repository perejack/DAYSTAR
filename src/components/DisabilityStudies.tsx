import { CheckCircle2, BookOpen, GraduationCap, Users, Heart, Globe2, School, Presentation, MessageCircle } from 'lucide-react';

interface CreditRequirement {
  category: string;
  credits: number;
}

const creditRequirements: CreditRequirement[] = [
  { category: "General Education Courses", credits: 9 },
  { category: "Required Courses", credits: 48 },
  { category: "Elective Courses", credits: 3 }
];

const learningOutcomes = [
  "Elucidate the concept of disabilities, theories and practices of disability while embracing biblical and Christian principals",
  "Engage in an interdisciplinary inquiry on applying research-appropriate design, methodologies, and ethics",
  "Demonstrate understanding of disability rights, laws, ethics, policies and practices",
  "Champion the rights, ethics, and practices of disability inclusivity, equitable environments",
  "Undertake community and professional practice for and with PwDs",
  "Research disabilities",
  "Support Disability mainstreaming and affirmative action"
];

const programGoals = [
  {
    icon: Users,
    title: "Diverse Expert Community",
    description: "Engage in interdisciplinary inquiry about disability and support research"
  },
  {
    icon: GraduationCap,
    title: "Leadership Development",
    description: "Prepare new generation of leaders in disability support agencies"
  },
  {
    icon: Heart,
    title: "Career Advancement",
    description: "Provide skills for careers working with people with disabilities"
  }
];

const DisabilityStudies = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] bg-gradient-to-r from-[#00BFFF] to-[#0099CC]">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/50" />
          <img
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=1920&q=80"
            alt="Disability Studies"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Diploma in Disability Studies
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Empowering advocates for disability rights and inclusive environments
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

      {/* Program Goals */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programGoals.map((goal, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[#00BFFF]/10 p-3 rounded-lg">
                  <goal.icon className="w-6 h-6 text-[#00BFFF]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                  <p className="text-gray-600">{goal.description}</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Description</h2>
              <div className="prose max-w-none text-gray-600 space-y-4">
                <p>
                  A diploma in interdisciplinary disability studies will lead to knowledge, skills and competencies to launch a new career, or to add to an unrelated degree or certificate. The purpose is to meet national or state qualifications to venture into disability studies.
                </p>
                <p>
                  The diploma program is a progressive curriculum with 60-credit-hour programs in which individuals from varied disciplines and professional backgrounds study together to gain knowledge and skills in disability theory, policy, service and research and practice.
                </p>
                <p>
                  The disability studies program will introduce learners to critical frameworks that will enhance their understanding of disadvantages and exclusions experiences arising from personal and societal responses to impairment.
                </p>
              </div>
            </div>

            {/* Learning Outcomes */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Learning Outcomes</h2>
              <div className="space-y-4">
                {learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00BFFF] mt-1" />
                    <p className="text-gray-600">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Credit Requirements */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Credit Requirements</h2>
              <div className="space-y-4">
                {creditRequirements.map((req, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <BookOpen className="w-5 h-5 text-[#00BFFF]" />
                      <span className="text-gray-900 font-medium">{req.category}</span>
                    </div>
                    <span className="text-[#00BFFF] font-semibold">{req.credits} Credits</span>
                  </div>
                ))}
                <div className="flex items-center justify-between p-4 bg-[#00BFFF]/10 rounded-lg">
                  <span className="text-gray-900 font-bold">Total Required Credits</span>
                  <span className="text-[#00BFFF] font-bold">60 Credits</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Admission Requirements */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Admission Requirements</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BFFF] mt-1" />
                  <p className="text-gray-600">At least a C in KCSE or its equivalent qualification</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BFFF] mt-1" />
                  <p className="text-gray-600">Current bachelor's program students can apply for disability mainstreaming support</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00BFFF] mt-1" />
                  <p className="text-gray-600">Professionals seeking career progression or change</p>
                </div>
              </div>
            </div>

            {/* Mode of Learning */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Mode of Learning</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <School className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">In-Class Learning</h4>
                    <p className="text-sm text-gray-600">Traditional classroom setting</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Globe2 className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Online Learning</h4>
                    <p className="text-sm text-gray-600">E-Learning platform with various tools</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg mt-1">
                    <Presentation className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Teaching Methods</h4>
                    <p className="text-sm text-gray-600">Problem-based learning, seminars, field trips</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-[#00BFFF]/10 p-2 rounded-lg">
                    <MessageCircle className="w-4 h-4 text-[#00BFFF]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email: ids@daystar.ac.ke</p>
                    <p className="text-sm text-gray-600">Tel: +254 709 972 000</p>
                    <p className="text-sm text-gray-600">WhatsApp: +254 716 170 3131</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-br from-[#00BFFF] to-[#0099CC] rounded-xl shadow-md p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6">Begin your journey in disability studies at Daystar University.</p>
              <button className="w-full bg-white text-[#00BFFF] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors">
                Start Application
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisabilityStudies;
