// images
import Github from '@/static/asstes/icons/github.png'
import Github_White from '@/static/asstes/icons/github_white.png'
import Resume from '@/static/asstes/icons/resume.png'
import DownLoad from '@/static/asstes/icons/download.png'
import DownLoad_White from '@/static/asstes/icons/download_white.png'
import TikTok from '@/static/asstes/icons/tiktok.png'
import TikTok_White from '@/static/asstes/icons/tiktok_white.png'
//components
import Image from 'next/image'
import FilpWordsDemo from '@/components/about/components/FilpWordsDemo'
import Info from '@/components/about/components/Info'
import useWow from '@/hooks/useWow'
import { Trans, useTranslation } from 'react-i18next'

export default function Greet({ mode }) {
  useWow();
  const { t, i18n } = useTranslation();
  return (
    <div className="md:mx-12 mx-10 pt-[100px] flex items-center justify-center">
      <div className="info flex flex-col items-center gap-2 px-4 py-4 font-bold">
        <img
          className="w-[200px] h-[200px] rounded-full shadow-lg"
          src="https://pic1.imgdb.cn/item/6905f2c43203f7be00bf9ca2.jpg"
          alt=""
        />
        <div className="flex items-center flex-col text-[30px] font-bold">
          <div>{t("As_Hello")} </div>
          <FilpWordsDemo />
          <div
            className="wow animate__fadeInUp text-23 md:px-32 text-center">
            <Trans
                i18nKey="As_Description"
                components={{
                  1: <br />,
                  2: <a className="text-[#82c3da]" />,
                  3: <a className="text-[#73b785]" />,
                  4: <a className="text-[#73bbf6]" />
                }}
              />
          </div>
        </div>

        <div className="btns flex flex-col md:flex-row justify-evenly items-center gap-5 mt-4">
          <button 
            className=" wow animate__fadeInUp border-white bg-black text-white dark:bg-white dark:text-black px-5 h-[40px] rounded-full flex items-center justify-center gap-1"
            data-wow-delay="0.1s"
            >
            {t("As_DownLoad_CV")}
            <Image className="w-[20px] h-[20px]" src={mode !== 'light' ? DownLoad : DownLoad_White} alt="" />
          </button>
          <div className="flex items-center gap-5">
            <button 
              className="wow animate__fadeInUp dark:bg-white bg-black px-5 h-[40px] rounded-full flex items-center justify-center gap-1"
              data-wow-delay="0.2s"
              >
              <a href="https://github.com/Nikaido-Asuka?tab=repositories" target="blank">
                <Image className="w-[20px] h-[20px]" src={mode !== 'light' ? Github : Github_White} alt="" />
              </a>
            </button>
            <button 
              className="wow animate__fadeInUp dark:bg-white bg-black px-5 h-[40px] rounded-full flex items-center justify-center gap-1"
              data-wow-delay="0.3s"
              >
              <a href="https://www.douyin.com/user/self?from_tab_name=main" target="blank">
                <Image className="w-[20px] h-[20px]" src={mode !== 'light' ? TikTok : TikTok_White} alt="" />
              </a>
            </button>
          </div>
        </div>

        <div className="py-[100px]">
          <Info />
        </div>
      </div>
    </div>
  );
}
