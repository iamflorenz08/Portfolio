
import { motion } from 'framer-motion'

const projectContainer = {
  hidden: {
    
  },
  show: {
    
    transition: {
      staggerChildren: 0.2,
      duration: 0.2
    }
  }
}

const projectChildren = {
  hidden: {
    opacity: 0,
    x: -100
  },
  show: {
    opacity: 1,
    x: 0
  }
}

export default function ThirdScreen() {
  return (
    <>
      <div id='projects' className='h-full pb-40 text-center container mx-auto'>
        <motion.div
          initial={{ x: -400, opacity: 0}}
          whileInView={{ x: 0, opacity: 100}}
          transition={{ type: "spring", duration: 0.5 }}
        >
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold'>My Recent Projects</h1>
          <h2 className='mt-8 text-lg md:text-xl'>Here are a few past projects I&apos;ve worked on.</h2>
        </motion.div>

        <motion.div
          variants={projectContainer}
          initial="hidden"
          whileInView="show"
          className='flex justify-center flex-wrap gap-5 mt-10'>

          <motion.div
            variants={projectChildren}
            className='group w-[395px] h-[300px] bg-gradient-to-b from-blue-200  to-blue-900 rounded-[20px] overflow-hidden relative'>

            <div className="w-full h-full flex flex-col justify-center items-center gap-4">
              <img className="group-hover:scale-110 duration-500" src="/images/ic_supply_management.png" alt="supply management" width={60} height={60} />
              <div className="text-white group-hover:scale-110 duration-500">
                <h1 className="text-xl font-bold">Supply Management System</h1>
                <h2 className=" font-semibold">Web Application</h2>
              </div>
            </div>

            <div className="w-full h-full backdrop-blur-3xl bg-primary/30 absolute top-0 opacity-0 group-hover:opacity-100 duration-700 flex flex-col justify-center items-center gap-3">
              <p className="text-lg text-white font-semibold px-5 cursor-default">This application streamlines the process of the school supply management by automating inventory tracking, report generatiion, requesting and borrowing of supplies.</p>
              <button className="w-48 py-1 border-[1px] text-white border-white rounded-full hover:bg-primary duration-200">Repository</button>
            </div>

          </motion.div>

          <motion.div
            variants={projectChildren}
            className='group w-[395px] h-[300px] bg-gradient-to-b from-blue-200  to-blue-900 rounded-[20px] overflow-hidden relative'>

            <div className="w-full h-full flex flex-col justify-center items-center gap-4">
              <img className="group-hover:scale-110 duration-500" src="/images/ic_supply_management.png" alt="supply management" width={60} height={60} />
              <div className="text-white group-hover:scale-110 duration-500">
                <h1 className="text-xl font-bold">Supply Management System</h1>
                <h2 className=" font-semibold">Mobile Application</h2>
              </div>
            </div>

            <div className="w-full h-full backdrop-blur-3xl bg-primary/30 absolute top-0 opacity-0 group-hover:opacity-100 duration-700 flex flex-col justify-center items-center gap-3">
              <p className="text-lg text-white font-semibold px-5 cursor-default">This application streamlines the process of the school supply management by automating requesting and borrowing  of the teachers and employees.</p>
              <button className="w-48 py-1 border-[1px] text-white border-white rounded-full hover:bg-primary duration-200">Repository</button>
            </div>

          </motion.div>



          <motion.div
            variants={projectChildren}
            className='w-[395px] h-[300px] bg-gray-200 rounded-[20px]'>

          </motion.div>
          <motion.div
            variants={projectChildren}
            className='w-[395px] h-[300px] bg-gray-200 rounded-[20px]'>

          </motion.div>
          <motion.div
            variants={projectChildren}
            className='w-[395px] h-[300px] bg-gray-200 rounded-[20px]'>

          </motion.div>
          <motion.div
            variants={projectChildren}
            className='w-[395px] h-[300px] bg-gray-200 rounded-[20px]'>

          </motion.div>
        </motion.div>
      </div >
    </>
  )
}
