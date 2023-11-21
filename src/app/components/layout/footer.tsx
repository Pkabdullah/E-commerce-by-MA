
import Image from "next/image"
import logo from "/public/logo.webp"
import {Twitter} from "lucide-react"
import {Facebook} from "lucide-react"
import {Linkedin} from "lucide-react"



const footer = () => {
  return (
    <div className=" mt-48 grid grid-cols-4 gap-x-20 ml-10 ">
  
    <div>
      
      <Image src = {logo} alt ="logo" className="w-48 "></Image>
      <p className="mt-8">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
      <div className="flex  mt-8 gap-x-5  rounded h- w-">
      <Twitter className=" bg-gray-200"/>
      <Facebook className=" bg-gray-200"/>
      <Linkedin className=" bg-gray-200"/>
</div>
    </div>
    <div>
      <h1 className="mt-2 font-bold text-xl text-gray-500">Company</h1>
      <ul className="mt-4">
        <li>About</li> <br />
        <li>Terms of Use</li><br />
        <li>Privacy Policy</li><br />
        <li>How It Works</li><br />
        <li>Constat Us</li>
      </ul>
      
      </div>

      <div className="">
      <h1 className="mt-2 font-bold text-xl text-gray-500">Support</h1>
      <ul className="mt-4">
        <li>Support Career</li><br />
        <li>24 h Service</li><br />
        <li>Quick Chat</li><br />
      </ul>
      
      </div>

      <div className="">
      <h1 className="mt-2 font-bold text-xl text-gray-500">Contact</h1>
      <ul className="mt-4">
        <li>Whattsapp</li><br />
        <li>Support 24h</li><br />
      
      </ul>
      
      </div>

      <div>
        <p className="mt-24">___________________________________________________________________________________________________________________________________________________________________________________</p>
        <div className="grid grid-cols-3 gap-x-48 mt-10 border-2 border-white w-[1200px] h-18">
        <p>Copyright © 2022 Dine Market</p>
        <p>Design by. Weird Design Studio</p>
        <p>Code by. Muhammad Abdullah</p>
`       </div>
      </div>

</div>  
  )
}

export default footer