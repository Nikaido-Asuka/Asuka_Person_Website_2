import Image from "next/image";
import useWow from '@/hooks/useWow'

const SkillItem = ({ skill }) => {
    useWow();
    return (
        <>
          <div className=" w-full p-5 mt-5 text-center">
            <p className=" font-bold wow animate__fadeInUp">{skill.title}</p>
            <div className="content mt-5 flex flex-wrap justify-center gap-5">
               {
                skill.item.map((item, index) => (
                    <div 
                      key={index}
                      className="wow animate__fadeInUp flex flex-col gap-1 items-center w-[calc(100%/3-1.25rem)] md:w-[calc(100%/7-1.25rem)]" 
                      data-wow-delay={`${index * 0.1}s`}  // 每个图标延迟 0.1 秒
                    >
                        <Image 
                            className="w-[40px] h-[40px]" 
                            src={item.icon} 
                            alt={item.name} 
                            width={50} 
                            height={50}
                        />
                        <p className=" font-bold">{item.name}</p>
                    </div>
                ))
               }
            </div>
          </div>
        </>
    )
}

export default SkillItem;
