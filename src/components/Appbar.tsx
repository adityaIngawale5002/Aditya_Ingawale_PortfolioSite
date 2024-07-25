import { ReactNode } from 'react';
import Logo from '../assets/logoPicture.jpg';
import { Button } from './ui/button';
import { Brain, FileCode,  Send, ChevronDown } from 'lucide-react';
import { ModeToggle } from './Mode-toggle';
import { DropdownMenu } from '@radix-ui/react-dropdown-menu';
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';


const Appbar = () => {
    return (
        <div className=" w-full  flex justify-center  sticky top-0 z-10">
            <div className='w-full md:w-10/12 flex  dark:bg-gray-900 bg-white rounded-full  shadow-lg mt-2 '>
              
              <div className="w-full flex items-center ">
                        <div className=" w-2/12 ">
                            <a href="/">
                                <img src={Logo} alt="Logo" className=' w-16 h-16 rounded-full' />
                            </a>
                        </div>
                        <div className='sm:flex sm:w-8/12 hidden '>

                                <nav className='flex justify-around w-full'>
                                  
                                      <ButtonContent text={"About Me"} icon={<Brain/>} link={"/"} />
                                  
                                      <ButtonContent text={"Projects"} icon={<FileCode/>} link={"#projects"} />
                                   
                                      <ButtonContent text={"Let's Connect"} icon={<Send/>} link={"#Connect"} />
                                    
                                </nav>

                        </div>  
                        <div className='sm:hidden   flex justify-center  w-8/12'>
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <button className='flex justify-center items-center text-lg font-bold'>Menu<ChevronDown/></button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem>
                                      <ButtonContent text={"About Me"} icon={<Brain/>} link={"/"} />
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <ButtonContent text={"Projects"} icon={<FileCode/>} link={"#projects"} />
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                      <ButtonContent text={"Let's Connect"} icon={<Send/>} link= {"#Connect"} />
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div className='sm:w-2/12 sm:ml-10 w-2/12 mx-2'>
                            <ModeToggle/>
                        </div>    
              </div>


            </div>
        </div>
    )
}

interface ButtonContent{
    text:string,
    icon:ReactNode,
    link:string,
    props?:string
}

const ButtonContent = ({text,icon,link,props}:ButtonContent) => {

    return (
        <>
            <a href={link} className='w-fit mx-2'>
                <Button variant={'default'}  className={`w-fit sm:text-sm   md:text-md ${props}`}>
                    {text}
                    <span className='text-sm sm:text-md mx-1 '>
                        {icon}
                    </span>
                </Button>
            </a>
        </>
    )
}

export default Appbar