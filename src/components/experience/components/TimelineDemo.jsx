import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  const data = [
    {
      title: "2021 - 2025",
      content: (
        <div>
          <div>
            <p
                className="text-neutral-800 dark:text-neutral-200 text-4xl md:text-4xl font-normal mb-8">
                Studying at Chongqing Normal University
            </p>
            <p
                className="text-neutral-800 dark:text-neutral-200 font-normal mb-8">
                Computer Science and Technology Major
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
              Smart CQNU — WeChat Mini Program
          </p>
          <div className="mb-8 flex flex-col gap-2">
            This is a WeChat Mini Program — a comprehensive campus portal and entertainment platform — that I developed together with two like-minded college classmates and successfully deployed online. I felt very happy when my friends and classmates around me started using the Mini Program I created.
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
            Journey to Shangri-La, Yunnan
          </p>
          <div className="mb-8 flex flex-col gap-2">
            Ever since I fell in love with photography and became overwhelmed by the fast pace of city life, I no longer long for big cities. Instead, I yearn to get closer to nature — to feel it, to embrace it. The Tibetan region has become my favorite place, with its fascinating Tibetan culture and distinctive traditional architecture. There, the sky is crystal clear, and the clouds seem close enough to touch. Even the air carries a sense of tranquility and purity. Every time I set foot on that land, I feel a deep sense of peace and strength within. Perhaps this is the rhythm of life I have been searching for — free from the noise, returning to the truest version of myself.
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
            Hangzhou Hikvision Digital Technology Co., Ltd
          </p>
          <div className="mb-8 flex flex-col gap-2">
              It is mainly aimed at participating in the development of international projects and the customization of project personalization. It uses micro-front-end architecture combined with Vue2 to realize the sub-application development of different functional modules, and modifies or develops the sub-applications of the corresponding projects on the basis of the baseline according to the different personalization and other needs of projects in various countries.
              <br/>
              <br/>
              Use Hikvision to develop the internal component library to quickly build the page and provide the events, attributes, apis, etc. of modified related components to improve the overall development efficiency.
              <br/>
              <br/>
              Actively cooperate and coordinate with other group members, communicate requirements and access interfaces, follow the standard development specifications and development processes, and improve development efficiency and team coordination.
              <br/>
              <br/>
              Regular group meetings to report the complete progress of recent development projects, such as development, development joint adjustment, test cases, project completion, etc., have a perfect team building and development specifications, and have team management experience based on the above.
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
            Journey to Kangding, Western Sichuan
          </p>
          <div className="mb-8 flex flex-col gap-2">
            It was my first time setting foot in Western Sichuan, my first trip with friends, and also my first time truly learning to let go after a major upheaval in my family. The journey came so suddenly that we were almost completely unprepared — none of us expected to challenge the steep mountain trails of the highlands. Along the way, though we were breathless and exhausted, there was far more laughter and emotion than fatigue.
            <br/>
            <br/>
            On that vast plateau, the wind was cold, yet the sky was strikingly blue. The sunlight shimmered on the snow-capped peaks, and even the air seemed filled with healing power. Just a month before, I had been suffocated by pain and confusion, but this journey helped me rediscover peace and courage. Perhaps that’s what life is about — only by stepping beyond the familiar can we truly see into our own hearts.
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
            Leapmotor Technologies Co., Ltd.
          </p>
          <div className="mb-8 flex flex-col gap-2">
            I joined the company as a campus recruit in June 2025. I work in the Platform Software Department at Leapmotor Technologies Co., Ltd., where I am responsible for the web development of the company’s internal comprehensive vehicle management platform. Since joining, I have participated in the platform’s refactoring from Vue to React, developed reusable business components for the React version, and built the documentation website for the component library. In the future, I will continue to create more meaningful and valuable contributions.
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
      title: "Future",
      content: (
        <div>
          <p
            className="text-neutral-800 dark:text-neutral-200 text-4xl md:text-4xl font-normal mb-8">
            The story of the future......
          </p>
          <div className="mb-8 flex flex-col gap-2">
            My story is still unfolding. Although life can sometimes be filled with pain and uncertainty, I still choose to move forward. The road ahead may not always be smooth, but I will carry my past experiences and growth with me as I continue to seek my own light. The moments that once broke me have now turned into the strength that supports me. No matter how far or difficult the journey ahead may be, I will keep walking with a smile — because I know that only by moving forward can life reveal new and beautiful horizons.
            <br/><br/>
            If you’d like to learn more about my story, feel free to follow me or contact me:
            <br/><br/>
            <div className="flex items-center justify-start gap-5">
              📧 Email: <span>nikaidoasuka03@gmail.com</span>
            </div>
            <div className="flex items-center justify-start gap-5">
              💬 WeChat: <span>17729639582</span>
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
