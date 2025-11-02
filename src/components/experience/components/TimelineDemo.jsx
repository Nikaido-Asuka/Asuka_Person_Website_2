import Image from "next/image";
import React, { use } from "react";
import { Timeline } from "@/components/ui/timeline";
import { useTranslation } from "react-i18next";

export default function TimelineDemo() {
  const { t } = useTranslation();
  const data = [
    {
      title: "2021 - 2025",
      content: (
        <div>
          <div>
            <p
                className="text-neutral-800 dark:text-neutral-200 text-4xl md:text-4xl font-normal mb-8">
                {t("As_Journey_Youth_Collage")}
            </p>
            <p
                className="text-neutral-800 dark:text-neutral-200 font-normal mb-8">
                {t("As_Journey_Youth_Major")}
            </p>
          </div>
          <div className=" flex flex-col gap-2">
            <Image 
              src="https://pic.imgdb.cn/item/674c4b1ed0e0a243d4db9fe1.png"
              className="rounded-lg border-red-600 object-cover h-20 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              width={500}
              height={500}
              alt=""/>
          </div>
        </div>
      )
    },
    {
      title: "2024 Jul – 2024 Sep.",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-4xl md:text-4xl font-normal mb-8">
            {t("As_Journey_Youth_Smart_CQNU")}
          </p>
          <div className="mb-8 flex flex-col gap-2">
            {t("As_Journey_Youth_Smart_CQNU_Description")}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://pic1.imgdb.cn/item/6905f0723203f7be00bf9ad4.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
            <Image
              src="https://pic1.imgdb.cn/item/6905f0df3203f7be00bf9b3d.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      ),
    },
    {
      title: "2025 Sept.",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-4xl md:text-4xl font-normal mb-8">
            {t("As_Journey_Youth_YunNan")}
          </p>
          <div className="mb-8 flex flex-col gap-2">
            {t("As_Journey_Youth_YunNan_Description")}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://pic1.imgdb.cn/item/6905f94d3203f7be00bfa59a.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://pic1.imgdb.cn/item/6905f94f3203f7be00bfa59b.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://pic1.imgdb.cn/item/6905f9523203f7be00bfa59c.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://pic1.imgdb.cn/item/6905f9563203f7be00bfa59d.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      )
    },
    {
      title: "2024 Oct - 2025 Apr",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-4xl md:text-4xl font-normal mb-8">
            {t("As_Journey_Youth_Hikvision")}
          </p>
          <div className="mb-8 flex flex-col gap-2">
              {t("As_Journey_Youth_Hikvision_Description_1")}
              <br/>
              <br/>
              {t("As_Journey_Youth_Hikvision_Description_2")}
              <br/>
              <br/>
              {t("As_Journey_Youth_Hikvision_Description_3")}
              <br/>
              <br/>
              {t("As_Journey_Youth_Hikvision_Description_4")}
          </div>
          <div className="">
            <Image
              src="https://pic.imgdb.cn/item/674c49e0d0e0a243d4db9f9f.png"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg border-red-600 object-cover h-20 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]" />
          </div>
        </div>
      ),
    },
    {
      title: "2025 Jun.",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-4xl md:text-4xl font-normal mb-8">
            {t("As_Journey_Youth_Kangding")}
          </p>
          <div className="mb-8 flex flex-col gap-2">
            {t("As_Journey_Youth_Kangding_Description_1")}
            <br/>
            <br/>
            {t("As_Journey_Youth_Kangding_Description_2")}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://pic1.imgdb.cn/item/6905fe1f3203f7be00bfa748.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://pic1.imgdb.cn/item/6905fe203203f7be00bfa749.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://pic1.imgdb.cn/item/6905fe223203f7be00bfa74b.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://pic1.imgdb.cn/item/6905fe253203f7be00bfa74d.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      )
    },
    {
      title: "2025 June - Present",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-4xl md:text-4xl font-normal mb-8">
            {t("As_Journey_Youth_Leapmotor")}
          </p>
          <div className="mb-8 flex flex-col gap-2">
            {t("As_Journey_Youth_Leapmotor_Description")}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://pic1.imgdb.cn/item/6905ebef3203f7be00bf9782.png"
              width={500}
              height={500}
              className="rounded-lg bg-[#202020] object-contain h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://pic1.imgdb.cn/item/6905f5d83203f7be00bf9f01.png"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      )
    },
    {
      title: t("As_Journey_Youth_Future"),
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-4xl md:text-4xl font-normal mb-8">
            {t("As_Journey_Youth_Story_Future")}
          </p>
          <div className="mb-8 flex flex-col gap-2">
            {t("As_Journey_Youth_Story_Future_Description_1")}
            <br/><br/>
            {t("As_Journey_Youth_Story_Future_Description_2")}
            <br/><br/>
            <div className="flex items-center justify-start gap-5">
              📧 {t("As_Email")}: <span>nikaidoasuka03@gmail.com</span>
            </div>
            <div className="flex items-center justify-start gap-5">
              💬 {t("As_WeChat")}: <span>17729639582</span>
            </div>
           
          </div>
        </div>
      )
    }
  ];
  return (
    (<div className="w-full">
      <Timeline data={data} />
    </div>)
  );
}
