import { useI18n } from 'vue-i18n';
import { en_EN, fr_FR } from '../plugins/i18n/locales';
import { MessageSchema } from '../plugins/i18n/i18n';

export const useTranslation = () => {
    const { t } = useI18n<{ message: MessageSchema }, 'en-EN' | 'fr-FR'>({
        inheritLocale: true,
        messages: {
            'en-EN': en_EN,
            'fr-FR': fr_FR
        }
    });
    return { t };
};
