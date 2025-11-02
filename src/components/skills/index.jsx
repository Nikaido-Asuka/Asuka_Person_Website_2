import SkillItem from "./components/SkillItem";
import { useTranslation } from "react-i18next";

import ReactIcon from '@/static/asstes/icons/skills/React.png'
import NextIcon from '@/static/asstes/icons/skills/Next.png'
import VueIcon from '@/static/asstes/icons/skills/Vue.png'
import TsIcon from '@/static/asstes/icons/skills/Ts.png'
import JsIcon from '@/static/asstes/icons/skills/Js.png'
import H5Icon from '@/static/asstes/icons/skills/HTML5.png'
import TailwindCSSIcon from '@/static/asstes/icons/skills/Tailwindcss.png'

import DavinciIcon from '@/static/asstes/icons/skills/Davinci.png'
import JyIcon from '@/static/asstes/icons/skills/Jy.png'
import FigmaIcon from '@/static/asstes/icons/skills/Figma.png'

import SpringbootIcon from '@/static/asstes/icons/skills/Spingboot.png'
import NodeIcon from '@/static/asstes/icons/skills/Node.png'

const Skills = () => {
  const { t } = useTranslation();

  const skills = [
    {
      title: t("As_My_Skills_Web"),
      item: [
        { icon: ReactIcon, name: 'React' },
        { icon: NextIcon, name: 'Next' },
        { icon: VueIcon, name: 'Vue' },
        { icon: TsIcon, name: 'TypeScript' },
        { icon: JsIcon, name: 'JavaScript' },
        { icon: H5Icon, name: 'HTML5' },
        { icon: TailwindCSSIcon, name: 'TailwindCSS' }
      ]
    },
    {
      title: t("As_My_Skills_Backend"),  // ✅ 如果你在语言包里加了对应 key
      item: [
        { icon: SpringbootIcon, name: 'Springboot' },
        { icon: NodeIcon, name: 'Node' }
      ]
    },
    {
      title: t("As_My_Skills_Design"),
      item: [
        { icon: DavinciIcon, name: 'Davinci' },
        { icon: JyIcon, name: '剪映' },
        { icon: FigmaIcon, name: 'Figma' }
      ]
    }
  ];

  return (
    <div className="md:mx-12 mx-10 flex flex-col justify-center items-center">
      <div className="text-[30px] font-bold">{t("As_My_Skills")}</div>
      <div className="flex w-full flex-col gap-5">
        {skills.map((item, index) => (
          <SkillItem key={index} skill={item} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
