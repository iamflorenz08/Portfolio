import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
export default function Navbar() {
    const [menu, setMenu] = useState(false)
    return (
        <>
            <nav className="absolute w-full left-0 ">
                <div className='flex justify-between container mx-auto p-5'>
                    <div>
                        <img src="/images/ic_logo.png" alt="ic_logo" width={55} height={55} />
                    </div>
                    <div className="md:flex items-center gap-7 hidden">
                        <a href='#home' className="text-lg hover:text-primary duration-300">Home</a>
                        <a href='#about-me' className="text-lg hover:text-primary duration-300">About Me</a>
                        <a href='#projects' className="text-lg hover:text-primary duration-300">Projects</a>
                    </div>
                    <div className='hidden md:flex  items-center'>
                        <a
                            href='mailto:dejesusflorenz8@gmail.com'
                            className="py-[10px] px-[34px] border-2 border-primary text-primary rounded-[20px] hover:bg-primary hover:text-white transition">Say Hello</a>
                    </div>
                    <button
                        onClick={() => setMenu(true)}
                        className='md:hidden'>
                        <GiHamburgerMenu size={30} />
                    </button>
                </div>

                <AnimatePresence>
                    {menu && (
                        <motion.div
                            initial={{ y: -400, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -400, opacity: 0 }}
                            className='bg-secondary w-screen h-screen fixed top-0 md:hidden z-50 '>
                            <button className='absolute right-0 m-6' onClick={() => setMenu(false)}>
                                <RxCross2 size={30} />
                            </button>

                            <div className="flex flex-col justify-center items-center h-full gap-8">
                                <a href='#first_screen' className="text-xl text-white hover:text-primary duration-300">Home</a>
                                <a href='#second_screen' className="text-xl text-white hover:text-primary duration-300">About Me</a>
                                <a href='#third_screen' className="text-xl text-white hover:text-primary duration-300">Projects</a>
                                <button className="py-[10px] px-[34px] border-2 border-primary text-primary rounded-[20px] hover:bg-primary hover:text-white transition">Say Hello</button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>


            </nav>


        </>
    )
}
