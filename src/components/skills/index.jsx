import SkillItem from "./components/SkillItem";

import React from '@/static/asstes/icons/skills/React.png'
import Next from '@/static/asstes/icons/skills/Next.png'
import Vue from '@/static/asstes/icons/skills/Vue.png'
import Ts from '@/static/asstes/icons/skills/Ts.png'
import Js from '@/static/asstes/icons/skills/Js.png'
import H5 from '@/static/asstes/icons/skills/HTML5.png'
import TailwindCSS from '@/static/asstes/icons/skills/Tailwindcss.png'

import Davinci from '@/static/asstes/icons/skills/Davinci.png'
import Jy from '@/static/asstes/icons/skills/Jy.png'
import Figma from '@/static/asstes/icons/skills/Figma.png'

import Springboot from '@/static/asstes/icons/skills/Spingboot.png'
import Node from '@/static/asstes/icons/skills/Node.png'

const skills = [
  {
    title: 'Web Development',
    item: [
      {
        icon: React,
        name: 'React'
      },
      {
        icon: Next,
        name: 'Next'
      },
      {
        icon: Vue,
        name: 'Vue'
      },
      {
        icon: Ts,
        name: 'TypeScript'
      },
      {
        icon: Js,
        name: 'JavaScript'
      },
      {
        icon: H5,
        name: 'HTML5'
      },
      {
        icon: TailwindCSS,
        name: 'TaliwindCSS'
      }
    ]
  },
  {
    title: 'Backend Development',
    item: [
      {
        icon: Springboot,
        name: 'Springboot'
      },
      {
        icon: Node,
        name: 'Node'
      }
    ]
  },
  {
    title: 'Vision & Design',
    item: [
      {
        icon: Davinci,
        name: 'Davinci'
      },
      {
        icon: Jy,
        name: '剪映'
      },
      {
        icon: Figma,
        name: 'Figma'
      }
    ]
  }
]
const Skills = () => {
    return (
        <>
          <div className=" md:mx-12 mx-10 flex flex-col justify-center items-center">
            <div className=" text-[30px] font-bold">My Skills</div>
            <div className=" flex w-full flex-col gap-5">
              {
                skills.map((item) => (
                  <SkillItem skill={item}/>
                ))
              }
            </div>
            
          </div>
        </>
    )
}
export default Skills;