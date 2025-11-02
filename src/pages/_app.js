import "@/styles/globals.css";
import { appWithTranslation } from 'next-i18next';
import i18n from "@/i18n";
import { useEffect } from "react";

function App({ Component, pageProps }) {
  useEffect(() => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, []);

  return <Component {...pageProps} />;
}

export default appWithTranslation(App);