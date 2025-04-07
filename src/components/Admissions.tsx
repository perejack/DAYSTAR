import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  UserPlus,
  FileText,
  CreditCard,
  CheckCircle,
  ChevronRight,
  Phone,
  Mail,
  Clock,
  Camera,
  FileCheck,
  GraduationCap
} from 'lucide-react';

const Admissions = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'requirements', label: 'Requirements' },
    { id: 'team', label: 'Team' },
    { id: 'payment', label: 'Payment Options' },
    { id: 'aid', label: 'Financial Aid' },
  ];

  const applicationSteps = [
    {
      icon: UserPlus,
      title: 'Create an Account',
      description: 'Create an account on our application portal or simply login if you already have an account',
      color: 'bg-blue-500',
    },
    {
      icon: FileText,
      title: 'Fill Application Form',
      description: 'Once you are logged in, start by filling the form with the required details',
      color: 'bg-green-500',
    },
    {
      icon: CreditCard,
      title: 'Make Payment',
      description: 'Once you are done with filling the form, you will be required to pay application fee of KES 2,050',
      color: 'bg-purple-500',
    },
    {
      icon: CheckCircle,
      title: 'Review',
      description: 'Your application will be reviewed within 7 working days and send you an email notification regarding your application',
      color: 'bg-orange-500',
    },
  ];

  const requiredDocuments = [
    {
      icon: Camera,
      title: 'Passport Photo',
      description: 'A clear passport sized photo is required (accepted types: jpg, jpeg, png)',
    },
    {
      icon: FileCheck,
      title: 'Identification Documents',
      description: 'National ID (Kenyan, 18+), Birth Certificate (Kenyan, <18), or Valid Passport (Non-Kenyan)',
    },
    {
      icon: GraduationCap,
      title: 'Academic Certificates',
      description: 'At least 1 Academic Certificate depending on the Programme Category',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div className="absolute inset-0">
          <img
            src="https://www.daystar.ac.ke/blog/uploads/1700734574_graduationceremony.jpg"
            alt="Admissions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The Admission & Records Department
            </h1>
            <p className="text-xl text-white mb-8">
              We are happy that you are looking closely at the exciting opportunities available here at Daystar University.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 inline-flex items-center border-b-2 ${
                  activeTab === tab.id
                    ? 'border-[#00BFFF] text-[#00BFFF]'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } font-medium text-sm sm:text-base transition-colors duration-200`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {activeTab === 'about' && (
          <div className="space-y-12">
            {/* How to Apply Section */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Apply</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {applicationSteps.map((step, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center mb-4`}>
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                    <button className="text-[#00BFFF] font-medium inline-flex items-center hover:text-[#0099CC] transition-colors">
                      Learn More <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Required Documents Section */}
            <section className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Required Documents</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {requiredDocuments.map((doc, index) => (
                  <div key={index} className="space-y-4">
                    <div className="w-12 h-12 rounded-full bg-[#00BFFF]/10 flex items-center justify-center">
                      <doc.icon className="w-6 h-6 text-[#00BFFF]" />
                    </div>
                    <h3 className="text-xl font-semibold">{doc.title}</h3>
                    <p className="text-gray-600">{doc.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section className="bg-[#00BFFF] rounded-xl shadow-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-8">Let's Talk</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <p className="text-lg">
                    For more information, kindly contact us. You can also visit our offices in either
                    Nairobi Campus or Athi-River Campus between Monday and Friday from 9 am - 4 pm.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5" />
                      <span>+254 709 972 000 | +254 716 170 313</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5" />
                      <span>admissions@daystar.ac.ke</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5" />
                      <span>Monday - Friday, 9:00 AM - 4:00 PM</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">International Students</h3>
                    <p>
                      For international student inquiries, please email admissions@daystar.ac.ke for
                      detailed information about the application process and requirements.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'requirements' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Do I Qualify?</h2>
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-6">
                To join Daystar University, you will be required first to decide on the programme that
                you want to pursue and ensure you meet the programme qualifications stated in "Our
                Academic Programmes page"
              </p>
              <Link
                to="/programs"
                className="inline-flex items-center px-6 py-3 bg-[#00BFFF] text-white rounded-lg hover:bg-[#0099CC] transition-colors"
              >
                View Academic Programs <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'team' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team content will be added here */}
          </div>
        )}

        {activeTab === 'payment' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Payment Options</h2>
            {/* Payment options content will be added here */}
          </div>
        )}

        {activeTab === 'aid' && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Financial Aid</h2>
            {/* Financial aid content will be added here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admissions;
