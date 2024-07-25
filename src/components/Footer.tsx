
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import { Button } from "./ui/moving-border";

const words = [
    {
        text: "Connect",
        className: " bg-clip-text text-transparent  bg-gradient-to-b from-neutral-400 to-neutral-600 font-sans font-bold dark:from-neutral-200 dark:to-neutral-400  text-center"
    },
    {
        text: "With",
        className: " bg-clip-text text-transparent  bg-gradient-to-b from-neutral-400 to-neutral-600 font-sans font-bold dark:from-neutral-200 dark:to-neutral-400  text-center"
    },
    {
        text: "Me",
        className: "text-blue-500 dark:text-blue-500"
    },

];

const Footer = () => {

    return (
        <div className=' w-full py-5 shadow-lg' id='Connect'>
            <div className='text-center  flex justify-center'>
                <TypewriterEffectSmooth words={words} className='' />
            </div>
            <div className=' w-full flex md:flex-row flex-col  justify-center items-center p-4 my-1'>
                <div className="">
                    <a href="mailto:adityaingawale5002@gmail.com">
                        <Button
                            borderRadius="1.5rem"
                            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-md font-semibold p-2" 
                            duration={1500}
                        >
                            Write A Mail
                        </Button>
                    </a>
                </div>
                <div className="md:mx-10 my-10">
                    <a href="https://www.instagram.com/adityaingawale03">
                        <Button
                            borderRadius="1.5rem"
                            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-md font-semibold p-2" 
                            duration={2500}
                        >
                           Instagram
                        </Button>
                    </a>
                </div>
                <div className=" ">
                    <a href="https://www.linkedin.com/in/aditya-ingawale-11b62b261">
                        <Button
                            borderRadius="1.5rem"
                            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-md font-semibold p-2" 
                            duration={2000}
                        >
                            LinkedIn
                        </Button>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Footer