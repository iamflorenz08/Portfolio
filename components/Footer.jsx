
import { BsFacebook, BsGithub, BsInstagram } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import { SiMinutemailer } from 'react-icons/si'
export default function Footer() {
    return (
        <>
            <div className='bg-primary flex flex-col gap-3 items-center justify-center py-8'>
                <div className='flex gap-10'>
                    <a href="https://www.facebook.com/Iamflorenz08/" target='_blank'><BsFacebook className='text-white hover:-translate-y-1 hover:text-secondary duration-300' size={35} /></a>
                    <a href="https://www.instagram.com/iamflorenz08/" target='_blank'><BsInstagram className='text-white hover:-translate-y-1 hover:text-secondary duration-300' size={35} /></a>
                    <a href="https://github.com/iamflorenz08" target='_blank'><BsGithub className='text-white hover:-translate-y-1 hover:text-secondary duration-300' size={35} /></a>
                </div>
                <div className='flex flex-col gap-1 md:flex-row md:gap-10 mt-6 justify-center items-center flex-wrap'>
                    <div className='flex items-center text-white gap-2'>
                        <FaUser size={25} />
                        <h1 className='text-lg font-medium'>+93477672732</h1>
                    </div>
                    <div className='flex items-center text-white gap-2'>
                        <SiMinutemailer size={25} />
                        <h1 className='text-lg font-medium'>dejesusflorenz8@gmail.com</h1>
                    </div>
                </div>
                <h1 className='text-white '>Made with &lt;/&gt; by Florenz De Jesus</h1>
            </div>


        </>
    )
}
