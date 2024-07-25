import { Spotlight } from "./ui/Spotlight"
import { HoverBorderGradient } from "./ui/hover-border-gradient"
import { XIcon,MoveRight } from "lucide-react"
import { MultiStepLoader as Loader } from "./ui/multi-step-loader";
import { useState } from "react";
import { useTheme } from "./theme-provider";


const loadingStates = [
    {
        text: "HTML, CSS, Javascript",
    },
    {
        text: "Typescript",
    },
    {
        text: "React.js",
    },
    {
        text: "Bootstrap, Tailwind and Mui",
    },
    {
        text: "Next.js",
    },
    {
        text: "Express.js and Hono.js",
    },
    {
        text: "Node.js",
    },
   
    {
        text: "Mongoose and Prisma",
    },
    {
        text: "MongoDB and PostgreSQL",
    },
    {
        text: "Docker and GitHub",
    },
    {
        text: "Many more...",
    },
];


const SkillsSection = () => {
    const {theme}=useTheme();
    const fillColor = theme=="dark" ? "white" : "gray";
    const [loading, setLoading] = useState(false);

    return (
        <div className="h-[25rem] w-full border my-5  rounded-md  flex md:items-center md:justify-center bg-white/[0.05] dark:bg-slate-900   antialiased bg-grid-black/[0.1] dark:bg-grid-white/[0.02] relative overflow-hidden py-10" id="Skills">

            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill={fillColor}
            />

            <div className="  max-w-7xl  mx-auto relative z-8  w-full pt-20 md:pt-0 flex justify-center items-center flex-col my-8 ">

                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50  py-4 mt-10">
                    Let's Discover <br /> My Skills.
                </h1>

                <div className="w-full h-[30vh] flex items-center justify-center ">
                    <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
                  
                    <HoverBorderGradient
                        containerClassName="rounded-full"
                        as={"button"}
                        className="dark:bg-black   bg-white text-black dark:text-white flex items-center space-x-2 "
                        onClick={() => setLoading(true)}
                    >
                        <span className="m-1 font-bold">Check Out</span>
                        <MoveRight />
                    </HoverBorderGradient>

                    {loading && (
                        <button
                            className="fixed top-4 right-4 text-black dark:text-white z-[120]"
                            onClick={() => setLoading(false)}
                        >
                            <XIcon className="h-10 w-10" />
                        </button>
                    )}
                </div>

            </div>
        </div>
    )
}

export default SkillsSection