import { useEffect } from 'react';
import useWow from '@/hooks/useWow'
import Image from 'next/image';

import { AnimatedTestimonialsDemo } from './AnimatedTestimonialsDemo';

const Info = () => {
    useWow();
    const infoText = [
      "Hello, I'm Asuka and my Chinese name is 高梓竣(Gao Zi jun)",
      <>
        In 2022, I took a compulsory course called HTML and JavaScript, and that’s when I fell in love with front-end development. I really enjoy the process of building web pages. During college, I collaborated with my friends on several projects and gained a strong sense of accomplishment. I graduated from Chongqing Normal University (CQNU) in 2025, and I am now working as a full-stack development engineer, mainly focusing on front-end development.
        <br/><br/>
        I am proficient in technologies such as <a className="text-[#82c3da]">React</a> & <a className="text-[#73b785]">Vue</a>, and I have a solid understanding of TypeScript and HTML/CSS.
      </>,
      'In my spare time, I will learn new technologies. I also love travel, photography and editing. I want to develop my own self-media account. I will see you soon. Please look forward to it.'
    ]
    return (
        <>
          <div className="flex md:flex-row md:justify-between md:items-center flex-col gap-5  items-center">
            <div className=" flex md:w-2/3 flex-col gap-5 items-center text-[18px] md:text-left text-center">
              <h2 className="text-[30px] wow animate__fadeInUp">About Me</h2>
              {
                infoText.map((item, index) => (
                  <p 
                    key={index}
                    className="wow w-full animate__fadeInUp"
                  >{item}</p>
                ))
              }
            </div>
            <div className=" md:w-1/3 justify-center items-center">
              <AnimatedTestimonialsDemo/>
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
