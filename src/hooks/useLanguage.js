import { useTranslation } from 'react-i18next'

export const useLanguage = () => {
    const { i18n } = useTranslation();

    const changeLanguage = () => {
        const nextLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(nextLang);
    }

    return {
        language: i18n.language,
        changeLanguage,
    };
};
