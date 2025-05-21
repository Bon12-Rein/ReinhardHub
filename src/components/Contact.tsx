import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  businessType: string;
  serviceType: string;
  serviceCategory: string;
  projectDetails: string;
  budget: string;
  contactMethod: string;
  timeline: string;
  referralSource: string;
  newsletter: boolean;
  files: FileList | null;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    businessType: '',
    serviceType: '',
    serviceCategory: '',
    projectDetails: '',
    budget: '',
    contactMethod: 'email',
    timeline: '',
    referralSource: '',
    newsletter: false,
    files: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showServiceCategories, setShowServiceCategories] = useState(false);

  const serviceCategories = [
    'Branding & Strategy',
    'Marketing Strategy',
    'Web & ECommerce',
    'Creative Services',
    'AI & Automation',
    'Tech & Innovation'
  ];

  const budgetRanges = [
    'Under $500',
    '$500–$2,000',
    '$2,000–$5,000',
    '$5,000+'
  ];

  const timelines = [
    'Immediately',
    'Within 1–2 weeks',
    '1 month',
    '2–3 months'
  ];

  const referralSources = [
    'Google Search',
    'Instagram',
    'Facebook',
    'LinkedIn',
    'Twitter / X',
    'TikTok',
    'YouTube',
    'WhatsApp',
    'Email Newsletter',
    'Referral / Word of Mouth',
    'Blog / Article',
    'Podcast',
    'Webinar or Online Event',
    'Online Forum / Community',
    'Freelancer Marketplace',
    'Other'
  ];

  const handleServiceTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, serviceType: value }));
    setShowServiceCategories(value === 'Join Our Client Network');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({ ...prev, files: e.target.files }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        businessType: '',
        serviceType: '',
        serviceCategory: '',
        projectDetails: '',
        budget: '',
        contactMethod: 'email',
        timeline: '',
        referralSource: '',
        newsletter: false,
        files: null
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Start Your Project</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your digital presence? Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-2/5">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Our Location</h4>
                    <p className="text-gray-600">Kamiti Rd, Roysambu, Nairobi</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone Number</h4>
                    <p className="text-gray-600">+254 716 428 986</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email Address</h4>
                    <p className="text-gray-600">info@telispacdigital.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5">
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl p-8 text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                <p>Thank you for reaching out. We'll get back to you within 24-48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      required
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Your company name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="serviceType" className="block text-gray-700 font-medium mb-2">
                    Type of Service *
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleServiceTypeChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  >
                    <option value="">Select service type</option>
                    <option value="Join Our Client Network">Join Our Client Network</option>
                    <option value="Partnership Opportunities">Partnership Opportunities</option>
                    <option value="Careers at Telispac Digital">Careers at Telispac Digital</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                {showServiceCategories && (
                  <div className="mb-6">
                    <label htmlFor="serviceCategory" className="block text-gray-700 font-medium mb-2">
                      Service Category *
                    </label>
                    <select
                      id="serviceCategory"
                      name="serviceCategory"
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    >
                      <option value="">Select service category</option>
                      {serviceCategories.map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="mb-6">
                  <label htmlFor="projectDetails" className="block text-gray-700 font-medium mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    required
                    rows={5}
                    placeholder="Please describe your project, goals, and any specific requirements or challenges you'd like us to address..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  ></textarea>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="budget" className="block text-gray-700 font-medium mb-2">
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-gray-700 font-medium mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>{timeline}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {['Email', 'Phone Call', 'WhatsApp', 'Zoom / Google Meet'].map((method) => (
                      <label key={method} className="flex items-center">
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method.toLowerCase()}
                          checked={formData.contactMethod === method.toLowerCase()}
                          onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                          className="mr-2"
                        />
                        <span>{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="files" className="block text-gray-700 font-medium mb-2">
                    Upload Files (Optional)
                  </label>
                  <input
                    type="file"
                    id="files"
                    name="files"
                    onChange={handleFileChange}
                    multiple
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Accepted formats: PDF, DOC, JPG, PNG
                  </p>
                </div>

                <div className="mb-6">
                  <label htmlFor="referralSource" className="block text-gray-700 font-medium mb-2">
                    How Did You Hear About Us?
                  </label>
                  <select
                    id="referralSource"
                    name="referralSource"
                    value={formData.referralSource}
                    onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  >
                    <option value="">Select source</option>
                    {referralSources.map((source) => (
                      <option key={source} value={source}>{source}</option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      checked={formData.newsletter}
                      onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                      className="mt-1 mr-2"
                    />
                    <span className="text-gray-600 text-sm">
                      Subscribe to our newsletter for updates, insights, and exclusive offers
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-all duration-200 ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <Send className="mr-2" size={20} />
                  )}
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>

                <p className="text-sm text-gray-500 mt-4">
                  By submitting this form, you consent to Telispac Digital and partners contacting you via phone, text, or email using automated technology, including pre-recorded messages. This applies even if your number is on a Do Not Call list. This consent is not required to make a purchase.{' '}
                  <a href="/privacy-policy" className="text-primary hover:text-primary-dark underline">
                    View our Privacy Policy
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;