
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Contact: React.FC = () => {
  const { t, isRTL } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for reaching out! We will contact you soon.');
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-black mb-4 ${isRTL ? 'font-ar' : 'font-en'}`}>
            {t.contact_us}
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <h4 className={`text-xl font-black mb-2 ${isRTL ? 'font-ar' : 'font-en'}`}>Visit Us</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  123 Industrial Zone, New Capital City,<br />Cairo, Egypt
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <h4 className={`text-xl font-black mb-2 ${isRTL ? 'font-ar' : 'font-en'}`}>Call Us</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  +20 123 456 7890<br />+20 987 654 3210
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-8 h-8" />
              </div>
              <div>
                <h4 className={`text-xl font-black mb-2 ${isRTL ? 'font-ar' : 'font-en'}`}>Email Us</h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  info@fawzy-industries.com<br />support@fawzy-industries.com
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-2xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className={`block text-sm font-bold opacity-70 ${isRTL ? 'font-ar' : 'font-en'}`}>{t.form.name}</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-700 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className={`block text-sm font-bold opacity-70 ${isRTL ? 'font-ar' : 'font-en'}`}>{t.form.email}</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-700 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className={`block text-sm font-bold opacity-70 ${isRTL ? 'font-ar' : 'font-en'}`}>{t.form.subject}</label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-700 outline-none transition-all"
                placeholder="Inquiry about services"
              />
            </div>
            <div className="space-y-2">
              <label className={`block text-sm font-bold opacity-70 ${isRTL ? 'font-ar' : 'font-en'}`}>{t.form.message}</label>
              <textarea 
                rows={4} 
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-gray-700 outline-none transition-all resize-none"
                placeholder="Tell us more about your project..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black text-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              {t.form.send}
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
