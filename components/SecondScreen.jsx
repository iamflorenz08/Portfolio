import { BiCodeAlt } from 'react-icons/bi'
import { MdOutlineDesignServices } from 'react-icons/md'
import { BsFillDatabaseFill } from 'react-icons/bs'
import { animate, delay, motion } from 'framer-motion'

const stackContainer = {
    hidden: {
        
    },
    show: {
        transition: {
            staggerChildren: 0.3,
            duration: 0.5   
        }
    }
}

const stackChildren = {
    hidden: {
        opacity: 0,
        x: -200
    },
    show: {
        opacity: 1,
        x: 0
    }
}


export default function SecondScreen() {
    return (
        <>
            <div id='about-me' className="h-full pb-[100px]  relative">
                <div
                    className="bg-primary pt-[45px] pb-[195px] text-center text-white overflow-x-hidden">
                    <motion.div
                        initial={{ x: -400, opacity: 0}}
                        whileInView={{ x: 0, opacity: 100}}
                        transition={{ type: "spring", duration: 0.5 }}
                    >
                        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-[35px]">Nice to meet you.</h1>
                        <p className="mx-10 text-lg md:text-xl md:w-3/4 md:mx-auto lg:w-2/4 ">
                            I am a third-year student at the University of Makati, pursuing a Bachelor of Science in Computer Science with a major in application development. My passion for software development lies in creating applications that solve real-world problems and improve the user experience. I enjoy exploring new programming languages, frameworks, and tools to keep up with the latest trends in application development and I am committed to honing my skills and knowledge in this exciting field.
                        </p>
                    </motion.div>

                </div>
                <motion.div
                    variants={stackContainer}
                    initial="hidden"
                    whileInView="show"
                    className="flex flex-wrap justify-center gap-5 -mt-32 w-full">
                    <motion.div
                        variants={stackChildren}
                        className="py-[60px] px-[100px] bg-white shadow-md rounded-[30px] flex items-center flex-col">
                        <div className="w-[90px] h-[90px] bg-primary rounded-full mb-[10px] flex justify-center items-center">
                            <BiCodeAlt size={40} className='text-white' />
                        </div>
                        <h1 className="text-xl font-bold mb-[20px]">Back-end Stacks</h1>
                        <h2 className='text-primary font-bold mb-[15px]'>Vanilla</h2>
                        <div className='text-center mb-[15px] font-medium'>
                            <p>php</p>
                            <p>node js</p>
                        </div>
                        <h2 className='text-primary font-bold mb-[15px]'>Frameworks</h2>
                        <div className='text-center mb-[15px] font-medium'>
                            <p>laravel</p>
                            <p>express js</p>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={stackChildren}
                        className="py-[60px] px-[100px] bg-white shadow-md rounded-[30px] flex items-center flex-col">
                        <div className="w-[90px] h-[90px] bg-primary rounded-full mb-[10px] flex justify-center items-center">
                            <MdOutlineDesignServices size={40} className='text-white' />
                        </div>
                        <h1 className="text-xl font-bold mb-[20px]">Front-end Stacks</h1>
                        <h2 className='text-primary font-bold mb-[15px]'>Vanilla</h2>
                        <div className='text-center mb-[15px] font-medium'>
                            <p>html</p>
                            <p>css</p>
                            <p>javascript</p>
                        </div>
                        <h2 className='text-primary font-bold mb-[15px]'>Frameworks</h2>
                        <div className='text-center mb-[15px] font-medium'>
                            <p>react js</p>
                            <p>next js</p>
                            <p>tailwind</p>
                            <p>bootstrap</p>
                            <p>javaFX</p>
                        </div>
                    </motion.div>
                    <motion.div
                        variants={stackChildren}
                        className="py-[60px] px-[100px] bg-white shadow-md rounded-[30px] flex items-center flex-col">
                        <div className="w-[90px] h-[90px] bg-primary rounded-full mb-[10px] flex justify-center items-center">
                            <BsFillDatabaseFill size={40} className='text-white' />
                        </div>
                        <h1 className="text-xl font-bold mb-[20px]">Database Stacks</h1>
                        <h2 className='text-primary font-bold mb-[15px]'>Relational</h2>
                        <div className='text-center mb-[15px] font-medium'>
                            <p>mysql</p>
                            <p>sqlite</p>
                        </div>
                        <h2 className='text-primary font-bold mb-[15px]'>Non-relational</h2>
                        <div className='text-center mb-[15px] font-medium'>
                            <p>mongodb</p>
                            <p>firebase</p>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </>
    )
}
