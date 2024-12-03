"use client";
import CountUp from "react-countup";
const stats = [
    {
        num: 12,
        text: "Years of experience" ,
    },
    {
        num: 26,
        text: "Projects completed" ,
    },
    {
        num: 8,
        text: "Technologies mastered" ,
    },
    {
        num: 500,
        text: "Code commits" ,
    }
]
function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:mb-0">
        <div className="container mx-auto">
            <div className="md:flex md:flex-wrap grid grid-cols-2 md:gap-6 gap-x-16 gap-y-6 max-w-[60vw] mx-auto xl:max-w-none">
                {stats.map((item, index) => {
                    return <div key={index} className="flex flex-1 md:gap-4 gap-2 justify-center items-center xl:justify-start">
                        <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold"/>
                        <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                    </div>
                })}
            </div>
        </div>
    </section>
  )
}

export default Stats