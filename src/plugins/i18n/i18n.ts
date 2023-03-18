import { createI18n } from 'vue-i18n';
import { en_EN, fr_FR } from './locales';

export type MessageSchema = typeof en_EN | typeof fr_FR;

const i18n = createI18n<[MessageSchema], 'en-EN' | 'fr-FR'>({
    legacy: false,
    locale: 'en-EN',
    fallbackLocale: 'en-EN',
    messages: {
        'en-EN': en_EN,
        'fr-FR': fr_FR
    }
});

export default i18n;
