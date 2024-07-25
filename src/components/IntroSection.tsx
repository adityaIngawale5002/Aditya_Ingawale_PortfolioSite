import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import { FlipWords } from "./ui/flip-words";
import { DownloadIcon } from "lucide-react"
import { HoverBorderGradient } from "./ui/hover-border-gradient";


const IntroSection = () => {
    const words = ["Computer_Science_Student.", "Frontend_Developer.", "Backend_Developer.", "MERN_Stack_Developer.", "Next.js_Developer.", "Web3_Enthusiast."];


    return (
        <div className="w-full   py-5 mt-5 flex justify-center">
 
            <div className=" overflow-hidden w-11/12 rounded-xl h-fit shadow-lg">
                <AuroraBackground className=" h-fit p-10">
                    <motion.div
                        initial={{ opacity: 0.0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 0.8,
                            ease: "easeInOut",
                        }}
                        className=" h-full rounded-xl relative flex flex-col gap-4 items-center justify-center px-4 "
                    >
                        <div className=" w-full flex flex-col items-center">
                            <h1 className="text-center leading-relaxed w-full mb-5 text-2xl text-slate-600 font-extrabold dark:text-gray-400">
                                Hello folks I Am Aditya Ingawale,
                                <br />
                                A
                                <FlipWords words={words} />

                            </h1>
                           <a href="/Aditya_ingawale_resume.pdf" download={"Aditya_ingawale_resume.pdf"}>
                            <HoverBorderGradient
                                containerClassName="rounded-full"
                                as={"button"}
                                className="dark:bg-black  bg-white text-black dark:text-white flex items-center space-x-2"
                               
                            >
                                <span className="m-1 font-bold">Download Resume</span>
                                <DownloadIcon />
                            </HoverBorderGradient>
                            </a>
                        </div>

                        <div className="mb-2">

                            <p className=" text-center mt-5  text-slate-600 font-bold text-lg dark:text-gray-400">
                                I'm passionate computer science student with diverse skills sets in frontend and backend development.I
                                thrive on creating intutive and responsive user interface as frontend developer,while my backend development skills ensure robust and efficient server-side solutions. My enthusiasm for web3 technologies drives me to explore the latest advancements in decentralized applications.Welcome to my portfolio,where you can explore the projects that showcase my journey and skills in the ever-evolving world of technology.


                            </p>
                        </div>



                    </motion.div>
                </AuroraBackground>
            </div>

        </div>
    )
}

export default IntroSection