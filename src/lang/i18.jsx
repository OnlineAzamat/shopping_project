import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            en: {
                translation: {
                "yourcity": "Your city:"
                }
            },
            ru: {
                translation: {
                "yourcity": "Ваш город:"
                }
            },
            kk: {
                translation: {
                "yourcity": "Siziń qalańız:"
                }
            }
        },
        lng: "en",
        fallbackLng: "en",

        interpolation: {
        escapeValue: false
        }
    });

// function App() {
//   const { t } = useTranslation();

//   return <h2>{t('Welcome to React')}</h2>;
// }

// // append app to dom
// const root = createRoot(document.getElementById('root'));
// root.render(
//   <App />
// );