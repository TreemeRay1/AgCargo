document.addEventListener('DOMContentLoaded', function() {
    const languageSelector = document.getElementById('language-selector');
    const defaultLanguage = localStorage.getItem('language') || 'en';
    languageSelector.value = defaultLanguage; // Set the dropdown to the default language
    loadLanguage(defaultLanguage);

    languageSelector.addEventListener('change', function() {
        const selectedLanguage = this.value;
        localStorage.setItem('language', selectedLanguage);
        loadLanguage(selectedLanguage);
    });
});

const translations = {
    en: {
        navbar: {
            home: "Home",
            aboutUs: "About Us",
            services: "Services",
            contactUs: "Contact Us",
            phone: 'Call any time'
        }
    },
    md: {
        navbar: {
            home: "Acasă",
            aboutUs: "Despre Noi",
            services: "Servicii",
            contactUs: "Contactați-ne",
            phone: 'Sună oricând'
        }
    },
    rus: {
        navbar: {
            home: "Домой",
            aboutUs: "О Нас",
            services: "Услуги",
            contactUs: "Свяжитесь с нами",
            phone: "Звоните в любое время"
        }
    }
};

function loadLanguage(language) {
    const languageTranslations = translations[language] || translations['en'];
    document.querySelectorAll('[data-translate]').forEach(element => {
        const keys = element.getAttribute('data-translate').split('.');
        let translation = languageTranslations;
        keys.forEach(key => {
            translation = translation[key];
        });
        element.innerHTML = translation;
    });
}