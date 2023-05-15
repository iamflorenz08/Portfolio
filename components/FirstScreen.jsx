
import { motion } from 'framer-motion'
export default function FirstScreen() {
    return (
        <>
            <div id='home' className='flex flex-col justify-center items-center h-screen gap-8 '>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className='flex items-center gap-5'>
                    <img src="/images/ic_me.png" alt="me" width={60} height={60} />
                    <div
                        className="rounded-[20px] bg-primary px-[26px] py-[13px] text-white text-lg ">
                        Hi, I am Florenz!
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: -300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    className="text-center">
                    <h1 className="text-2xl text-primary font-bold md:text-4xl lg:text-6xl">Frontend & Backend Developer</h1>
                    <h2 className="text-lg mx-20 md:text-xl lg:text-3xl">Creating innovative and user-friendly apps is my passion!</h2>
                </motion.div>
            </div>

            <div className="absolute bottom-0">
                <img src="/images/ic_text_left.png" alt="ic" className="w-32 lg:w-40 xl:w-full" />
            </div>
        </>
    )
}
