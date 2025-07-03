import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Navigation
          'Home': 'Home',
          'About': 'About',
          'Services': 'Services',
          'Our Work': 'Our Work',
          'Resources': 'Resources',
          'Careers': 'Careers',
          'Academy': 'Academy',
          'Contact Us': 'Contact Us',
          'Work With Us': 'Work With Us',
          'Log In': 'Log In',
          
          // Services
          'Branding & Strategy': 'Branding & Strategy',
          'Marketing': 'Marketing',
          'Web & ECommerce': 'Web & ECommerce',
          'AI & Automation': 'AI & Automation',
          'Tech & Innovation': 'Tech & Innovation',
          
          // Footer
          'Empowering your brand with smart digital solutions.': 'Empowering your brand with smart digital solutions.',
          'Follow Us': 'Follow Us',
          'Copyright © 2025 Telispac Digital. All Rights Reserved.': 'Copyright © 2025 Telispac Digital. All Rights Reserved.',
          
          // Modal
          'Start Your Digital Journey': 'Start Your Digital Journey',
          'Transform your brand with innovative digital solutions': 'Transform your brand with innovative digital solutions',
          'Full Name': 'Full Name',
          'Email Address': 'Email Address',
          'Business Type': 'Business Type',
          'Service of Interest': 'Service of Interest',
          'Select business type': 'Select business type',
          'Select a service': 'Select a service',
          'Startup': 'Startup',
          'Small Business': 'Small Business',
          'Medium Enterprise': 'Medium Enterprise',
          'Large Corporation': 'Large Corporation',
          'Individual/Freelancer': 'Individual/Freelancer',
          'Branding': 'Branding',
          'Web Design': 'Web Design',
          'AI Tools': 'AI Tools',
          'Digital Marketing': 'Digital Marketing',
          'Other': 'Other',
          'Get Started': 'Get Started',
          'FREE Brand Strategy Starter Kit': 'FREE Brand Strategy Starter Kit',
          'Sign up now and get our comprehensive brand strategy guide!': 'Sign up now and get our comprehensive brand strategy guide!',
          'By signing up, you agree to our Terms of Service and Privacy Policy': 'By signing up, you agree to our Terms of Service and Privacy Policy',
          
          // Login Modal
          'Log In to Your Account': 'Log In to Your Account',
          'Email': 'Email',
          'Password': 'Password',
          'Remember Me': 'Remember Me',
          'Forgot Password?': 'Forgot Password?',
          "Don't have an account?": "Don't have an account?",
          'Sign Up': 'Sign Up'
        }
      },
      fr: {
        translation: {
          // Navigation
          'Home': 'Accueil',
          'About': 'À Propos',
          'Services': 'Services',
          'Our Work': 'Nos Réalisations',
          'Resources': 'Ressources',
          'Careers': 'Carrières',
          'Academy': 'Académie',
          'Contact Us': 'Contactez-Nous',
          'Work With Us': 'Travaillez Avec Nous',
          'Log In': 'Se Connecter',
          
          // Services
          'Branding & Strategy': 'Image de Marque & Stratégie',
          'Marketing': 'Marketing',
          'Web & ECommerce': 'Web & E-Commerce',
          'AI & Automation': 'IA & Automatisation',
          'Tech & Innovation': 'Tech & Innovation'
        }
      },
      sw: {
        translation: {
          // Navigation
          'Home': 'Nyumbani',
          'About': 'Kuhusu',
          'Services': 'Huduma',
          'Our Work': 'Kazi Zetu',
          'Resources': 'Rasilimali',
          'Careers': 'Kazi',
          'Academy': 'Chuo',
          'Contact Us': 'Wasiliana Nasi',
          'Work With Us': 'Fanya Kazi Nasi',
          'Log In': 'Ingia',
          
          // Services
          'Branding & Strategy': 'Uongozi wa Chapa & Mkakati',
          'Marketing': 'Uuzaji',
          'Web & ECommerce': 'Tovuti & Biashara ya Mtandaoni',
          'AI & Automation': 'Akili Bandia & Otomatiki',
          'Tech & Innovation': 'Teknolojia & Uvumbuzi'
        }
      },
      ar: {
        translation: {
          // Navigation
          'Home': 'الرئيسية',
          'About': 'من نحن',
          'Services': 'خدماتنا',
          'Our Work': 'أعمالنا',
          'Resources': 'الموارد',
          'Careers': 'الوظائف',
          'Academy': 'الأكاديمية',
          'Contact Us': 'اتصل بنا',
          'Work With Us': 'اعمل معنا',
          'Log In': 'تسجيل الدخول',
          
          // Services
          'Branding & Strategy': 'العلامة التجارية والاستراتيجية',
          'Marketing': 'التسويق',
          'Web & ECommerce': 'الويب والتجارة الإلكترونية',
          'AI & Automation': 'الذكاء الاصطناعي والأتمتة',
          'Tech & Innovation': 'التكنولوجيا والابتكار'
        }
      },
      pt: {
        translation: {
          // Navigation
          'Home': 'Início',
          'About': 'Sobre',
          'Services': 'Serviços',
          'Our Work': 'Nosso Trabalho',
          'Resources': 'Recursos',
          'Careers': 'Carreiras',
          'Academy': 'Academia',
          'Contact Us': 'Contacte-Nos',
          'Work With Us': 'Trabalhe Conosco',
          'Log In': 'Entrar',
          
          // Services
          'Branding & Strategy': 'Marca & Estratégia',
          'Marketing': 'Marketing',
          'Web & ECommerce': 'Web & E-Commerce',
          'AI & Automation': 'IA & Automação',
          'Tech & Innovation': 'Tech & Inovação'
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;