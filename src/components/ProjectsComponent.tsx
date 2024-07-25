import { WobbleCard } from "./ui/wobble-card";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { ArrowRightIcon } from 'lucide-react'
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BackgroundBeams } from "./ui/background-beams";




const ProjectsComponent = () => {

    
    const project1 = " The Real-Time Chat App enables users to engage in real-time messaging with friends, featuring user registration and login, friend request, media sharing ,dynamic notification ,and group chat ,management. Built with React.js and Redux on the frontend, and Express.js with MongoDB on the backend , it offers a responsive design optimized for mobile devices, ensuring a seamless and interactive user experience across various platforms."

    const project2 = "The Video-Tube Backend project is a backend solution for You-Tube like app built with Express.js, Node.js, and MongoDB using mongoose.It features user registration, login,profile uploads, authentication middleware, and file storage on cloudinary.It supports user info updates, video watch history,and uses JWT for authentication.The backend includes models for users, videos, subscriptions, and comments, and uses mongoose aggregation for data processing."

    const project3 = "The paytm clone project is a full-stack application that allows users to register,sign-in, and transfer money between accounts. The frontend is built with React,using React Router-Dom for routing,Recoil for state management,and React Hook Form for form handling. Notification are managed with React Hot Toast. The backend,development with Express.js and Node.js, utilizes MongoDB for data storage and Mongoose as the ORM. User authentication is handled with JWT and input validation with zod."

    return (
        <div className='w-full  mt-5 p-2' id="projects">
            <div className="flex flex-col px-10 justify-around">
                <div className="my-4">
                   <h1 className="text-6xl bg-clip-text text-transparent  bg-gradient-to-b from-neutral-400 to-neutral-600 z-10 font-sans font-bold dark:from-neutral-200 dark:to-neutral-400  p-4  text-center">Projects</h1>
                </div>
                <WobbleCard containerClassName="bg-slate-300 shadow-xl  dark:bg-slate-900 ">
                    <div className=" m-0">
                        <div className="text-center font-bold  flex justify-center items-center ">
                            <h2 className="text-4xl bg-clip-text text-transparent  bg-gradient-to-b from-neutral-400 to-neutral-600 z-10 font-sans font-bold dark:from-neutral-200 dark:to-neutral-400 my-1" >Real-Time Chat App</h2>
                        </div>
                        <div className=" text-center py-4 text-slate-500  font-bold">
                            <TextGenerateEffect words={project1} className="text-neutral-600 dark:text-neutral-400 my-2 text-xl text-center " />
                        </div>
                        <div className="flex  justify-center">
                            <a href="https://github.com/adityaIngawale5002/RealTimeChatApp">
                                <HoverBorderGradient
                                    containerClassName="rounded-full"
                                    as={"button"}
                                    className="dark:bg-black  bg-white text-black dark:text-white flex items-center space-x-2 "
                                    onClick={() => { }}
                                >
                                    <span className="m-1 font-bold text-lg">Github</span>
                                    <ArrowRightIcon />
                                </HoverBorderGradient>
                            </a>
                        </div>
                        <BackgroundBeams />
                    </div>
                </WobbleCard>

                <WobbleCard containerClassName="my-8 bg-slate-300 shadow-xl dark:bg-slate-900 ">
                    <div className=" m-0">
                        <div className="text-center font-bold ">

                            <h2 className="text-4xl bg-clip-text text-transparent  bg-gradient-to-b from-neutral-400 to-neutral-600 z-10 font-sans font-bold dark:from-neutral-200 dark:to-neutral-400 my-1">Video-Tube Backend</h2>

                        </div>
                        <div className=" text-center py-4 text-xl font-bold">
                            <TextGenerateEffect words={project2} className="text-neutral-600 dark:text-neutral-400 my-2 text-xl text-center " />
                        </div>
                        <div className="flex  justify-center">
                            <a href="https://github.com/adityaIngawale5002/VideoTube-Backend">
                                <HoverBorderGradient
                                    containerClassName="rounded-full"
                                    as={"button"}
                                    className="dark:bg-black  bg-white text-black dark:text-white flex items-center space-x-2 "
                                    onClick={() => { }}
                                >
                                    <span className="m-1 font-bold text-lg">Github</span>
                                    <ArrowRightIcon />
                                </HoverBorderGradient>
                            </a>
                        </div>
                        <BackgroundBeams />
                    </div>
                </WobbleCard>

                <WobbleCard containerClassName="bg-slate-300 shadow-xl dark:bg-slate-900  ">
                    <div className=" m-0">
                        <div className="text-center  font-bold ">

                            <h2 className="text-4xl bg-clip-text text-transparent  bg-gradient-to-b from-neutral-400 to-neutral-600 z-10 font-sans font-bold dark:from-neutral-200 dark:to-neutral-400 my-1 p-2">Paytm-Clone</h2>

                        </div>
                        <div className=" text-center py-4 text-xl font-bold">
                            <TextGenerateEffect words={project3} className="text-neutral-600 dark:text-neutral-400 my-2 text-xl text-center " />
                        </div>
                        <div className="flex  justify-center">
                            <a href="https://github.com/adityaIngawale5002/Paytm-FullStack">
                                <HoverBorderGradient
                                    containerClassName="rounded-full"
                                    as={"button"}
                                    className="dark:bg-black  bg-white text-black dark:text-white flex items-center space-x-2 "
                                    
                                >
                                    <span className="m-1 font-bold text-lg">Github</span>
                                    <ArrowRightIcon />
                                </HoverBorderGradient>
                            </a>
                        </div>
                        <BackgroundBeams />
                    </div>
                </WobbleCard>

            </div>
        </div>
    )
}

export default ProjectsComponent