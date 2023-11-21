import { Button } from "@/app/components/ui/button";

import Image from "next/image"
import BR1 from "public/BR1.webp";
import BR2 from "public/BR2.webp";
import BR3 from "public/BR3.webp";
import BR4 from "public/BR4.webp";

const Promotion = () => {
  return (
    <section className="pb-10">     
    
        <h1 className="text-blue-700 text-md text-center font-bold">PROMOTION</h1>
        <br />
        <h2 className="text-3xl text-center font-bold">Our Promotion Events</h2>
        <br />

      <div className="grid lg:grid-cols-[1fr,1fr] grid-cols-[1fr] gap-8">
          <div className="grid grid-rows-[1fr,1fr]gap-4">      {/*left banner*/}
              <div className="flex bg-slate-300 bg-contain justify-between items-center">              {/*banner left 1 */}                  
                    <div>
                        <h1 className="font-bold text-3xl pl-6">GET UP TO</h1>
                        <h2 className="font-extrabold text-4xl pl-6">60%</h2>
                        <p className=" text-2xl pl-6">For the summer</p>
                        <p className=" text-2xl pl-6">season</p>            
                    </div>
                    <div>
                       <Image src={BR1} alt='promo' ></Image>
                    </div>
              </div>
            
              <div className=" flex flex-col h-52 w-full bg-gray-800 justify-center items-center ">                         {/*banner left 2 */}
                <h1 className="font-extrabold text-4xl text-white">GET 30% Off</h1>
                <br />
                <p className="font-bold text-lg text-white">USE PROMO CODE</p>
                <Button className="tracking-widest text-xl bg-gray-500">DINE WEEKEND SALE</Button>
              </div>

          </div>

          <div className="grid sm:grid-cols-[1fr,1fr] grid-cols-[1fr] gap-8" >   {/*right banner*/}
              <div className="flex flex-col justify-between items-center bg-rose-100 h-full" >          {/*banner right 1 */}
                  <div>
                  <h1 className="">Flex Sweatshirt</h1>
                  <span className="mx-5 line-through"> $100.00</span>
                  <span className="font-bold text-lg">$75</span>
                  </div>
                  <Image className="" src={BR2} alt='promo' ></Image>
              </div>
 
              <div className="flex flex-col justify-between items-center h-full bg-slate-300">                          {/*banner right 2 */}
                  <div>
                      <h1 className="">Flex Push Button Bomber</h1>
                      <span className="mx-5 line-through"> $225.00</span>
                      <span className="font-bold text-lg">$190</span>
                  </div>
                  <Image src={BR3} alt='promo' ></Image>
              </div>      
          </div>
      </div>
    </section>
  )
}

export default Promotion