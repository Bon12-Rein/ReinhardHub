import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    businessType: '',
    serviceInterest: ''
  });

  const services = [
    { value: 'branding', label: 'Branding' },
    { value: 'webDesign', label: 'Web Design' },
    { value: 'aiTools', label: 'AI Tools' },
    { value: 'digitalMarketing', label: 'Digital Marketing' },
    { value: 'other', label: 'Other' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {t('Start Your Digital Journey')}
            </h2>
            <p className="text-gray-600">
              {t('Transform your brand with innovative digital solutions')}
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                {t('Full Name')}
              </label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                {t('Email Address')}
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>
            
            <div>
              <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
                {t('Business Type')}
              </label>
              <select
                id="businessType"
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                required
              >
                <option value="">{t('Select business type')}</option>
                <option value="startup">{t('Startup')}</option>
                <option value="small">{t('Small Business')}</option>
                <option value="medium">{t('Medium Enterprise')}</option>
                <option value="large">{t('Large Corporation')}</option>
                <option value="individual">{t('Individual/Freelancer')}</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-700 mb-1">
                {t('Service of Interest')}
              </label>
              <select
                id="serviceInterest"
                value={formData.serviceInterest}
                onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                required
              >
                <option value="">{t('Select a service')}</option>
                {services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {t(service.label)}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="bg-primary/5 p-4 rounded-lg">
              <p className="text-sm text-primary font-medium mb-2">
                {t('FREE Brand Strategy Starter Kit')}
              </p>
              <p className="text-sm text-gray-600">
                {t('Sign up now and get our comprehensive brand strategy guide!')}
              </p>
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-medium transition-all duration-200"
            >
              {t('Get Started')}
            </button>
            
            <p className="text-xs text-gray-500 text-center">
              {t('By signing up, you agree to our Terms of Service and Privacy Policy')}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;