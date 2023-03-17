import { createI18n } from "vue-i18n";
import { enEN, frFR } from "../locales";
// import frFR from "../locales/fr-FR/translation.json";
// import enEN from "../locales/en-EN/translation.json";

export type MessageSchema = typeof enEN | typeof frFR;

const i18n = createI18n<[MessageSchema], "en-EN" | "fr-FR">({
	legacy: false,
	locale: "en-EN",
	messages: {
		"en-EN": enEN,
		"fr-FR": frFR,
	},
});

export default i18n;
