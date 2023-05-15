import FirstScreen from "@/components/FirstScreen"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import SecondScreen from "@/components/SecondScreen"
import ThirdScreen from "@/components/ThirdScreen"
import { useEffect } from "react"
import { BsFacebook, BsGithub, BsInstagram } from 'react-icons/bs'

export default function Home() {
  return (
    <>
      <Navbar />
      <FirstScreen />
      <SecondScreen />
      <ThirdScreen />
      <Footer />

      <div className="fixed bottom-0 w-screen flex justify-center md:right-0 md:justify-end md:items-center md:h-full md:w-0">
        <div className="flex md:flex-col gap-5 bg-secondary px-5 py-3 rounded-tl-[20px] rounded-tr-[20px] md:rounded-tr-none md:rounded-bl-[20px]">
          <a href="https://www.facebook.com/Iamflorenz08/" className="hover:scale-110 duration-300" target="_blank"><BsFacebook className="text-primary" size={35} /></a>
          <a href="https://www.instagram.com/iamflorenz08/" className="hover:scale-110 duration-300" target="_blank"><BsInstagram className="text-primary" size={35} /></a>
          <a href="https://github.com/iamflorenz08" className="hover:scale-110 duration-300" target="_blank"><BsGithub className="text-primary" size={35} /></a>
        </div>
      </div>

    </>
  )
}
