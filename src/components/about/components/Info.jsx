import { useEffect } from 'react';
import useWow from '@/hooks/useWow'
import Image from 'next/image';

import { AnimatedTestimonialsDemo } from './AnimatedTestimonialsDemo';
import { useTranslation } from 'react-i18next';

const Info = () => {
    useWow();
    const { t, i18n } = useTranslation();
    
    const infoText = [
      <>{t("As_About_Text_1")}</>,
      <>
        {t("As_About_Text_2")}
        <br/><br/>
        {t("As_About_Text_3")}
      </>,
      <>{t("As_About_Text_4")}</>
    ]
    return (
        <>
          <div className="flex md:flex-row md:justify-between md:items-center flex-col gap-5  items-center">
            <div className=" flex md:w-2/3 flex-col gap-5 items-center text-[18px] md:text-left text-center">
              <h2 className="text-[30px] wow animate__fadeInUp">{t("As_About_Me")}</h2>
              {
                infoText.map((item, index) => (
                  <p 
                    key={index}
                    className="wow w-full animate__fadeInUp"
                  >{item}</p>
                ))
              }
            </div>
            <div className="md:w-1/3 justify-center items-center">
              <AnimatedTestimonialsDemo />
            </div>
            {/* <img
              className=" wow animate__fadeInRight w-72 h-full rounded-lg transform transition duration-300 ease-in-out hover:rotate-[5deg]"
              src="https://pic.imgdb.cn/item/66c2e1ded9c307b7e9a71652.jpg"
              alt=""
            /> */}
          </div>
          
        </>
    )
}

export default Info;
