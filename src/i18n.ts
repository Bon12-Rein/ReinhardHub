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
          'About Us': 'About Us',
          'Services': 'Services',
          'Blog': 'Blog',
          'Digital Products': 'Digital Products',
          'Case Studies': 'Case Studies',
          'Contact Us': 'Contact Us',
          'Get Started': 'Get Started',
          
          // Footer
          'Empowering your brand with smart digital solutions.': 'Empowering your brand with smart digital solutions.',
          'Follow Us': 'Follow Us',
          'Copyright © 2025 Telispac Digital. All Rights Reserved.': 'Copyright © 2025 Telispac Digital. All Rights Reserved.',
          
          // Modal
          'Get Started with Telispac Digital': 'Get Started with Telispac Digital',
          'Sign up to explore our services and transform your digital presence.': 'Sign up to explore our services and transform your digital presence.',
          'Name': 'Name',
          'Email': 'Email',
          'Business Type': 'Business Type',
          'Select business type': 'Select business type',
          'Startup': 'Startup',
          'Small Business': 'Small Business',
          'Medium Enterprise': 'Medium Enterprise',
          'Large Corporation': 'Large Corporation',
          'Individual/Freelancer': 'Individual/Freelancer',
          'Sign Up': 'Sign Up'
        }
      },
      fr: {
        translation: {
          // Add French translations
          'Home': 'Accueil',
          'About Us': 'À Propos',
          'Services': 'Services',
          'Blog': 'Blog',
          'Digital Products': 'Produits Numériques',
          'Case Studies': 'Études de Cas',
          'Contact Us': 'Contactez-Nous',
          'Get Started': 'Commencer'
          // Add more translations as needed
        }
      },
      sw: {
        translation: {
          // Add Swahili translations
          'Home': 'Nyumbani',
          'About Us': 'Kuhusu Sisi',
          'Services': 'Huduma',
          'Blog': 'Blogu',
          'Digital Products': 'Bidhaa za Dijitali',
          'Case Studies': 'Tafiti',
          'Contact Us': 'Wasiliana Nasi',
          'Get Started': 'Anza'
          // Add more translations as needed
        }
      },
      ar: {
        translation: {
          // Add Arabic translations
          'Home': 'الرئيسية',
          'About Us': 'من نحن',
          'Services': 'خدماتنا',
          'Blog': 'المدونة',
          'Digital Products': 'المنتجات الرقمية',
          'Case Studies': 'دراسات الحالة',
          'Contact Us': 'اتصل بنا',
          'Get Started': 'ابدأ الآن'
          // Add more translations as needed
        }
      },
      pt: {
        translation: {
          // Add Portuguese translations
          'Home': 'Início',
          'About Us': 'Sobre Nós',
          'Services': 'Serviços',
          'Blog': 'Blog',
          'Digital Products': 'Produtos Digitais',
          'Case Studies': 'Casos de Estudo',
          'Contact Us': 'Contacte-Nos',
          'Get Started': 'Começar'
          // Add more translations as needed
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;