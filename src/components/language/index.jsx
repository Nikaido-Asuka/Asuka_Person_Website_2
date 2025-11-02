import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Language = ({

}) => {
  const [index, setIndex] = useState(0);
  const { i18n } = useTranslation();
  const languageList = [
    { icon: '🇨🇳', type: 'zh' },
    { icon: '🇺🇸', type: 'en' },
    { icon: '🇯🇵', type: 'jp' },
    { icon: '🇰🇷', type: 'ko' },
  ];

  const handleChangeIcon = () => {
    let temp = index;
    if (index >= 3) {
      temp = 0
    } else {
      temp = index + 1;
    }
    setIndex(temp);
    const newLang = languageList[temp].type;
    i18n.changeLanguage(newLang);
    localStorage.setItem('lang', newLang);
  };

  useEffect(() => {
    let lang = localStorage.getItem('lang');
    if (!lang) {
      lang = 'zh';
      localStorage.setItem('lang', 'zh');
    }
    const temp = languageList.findIndex(item => item.type === lang);
    setIndex(temp);
  }, []);

  return (
    <>
      <div className=" z-[1000] relative">
          <div className=" fixed bottom-[100px] right-10">
              <div onClick={handleChangeIcon} className=" w-[45px] h-[45px] text-[25px] bg-black dark:bg-white rounded-full p-2 flex items-center justify-center">
                {languageList[index].icon}
              </div>
          </div>
        </div>
    </>
  )
};

export default Language;