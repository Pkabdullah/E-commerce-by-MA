import React from "react";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import heroImage from "/public/pic1.webp";
import Image from "next/image";
import BL1 from "public/BL1.webp";
import BL2 from "public/BL2.webp";
import BL3 from "public/BL3.webp";
import BL4 from "public/BL4.webp";
import { ShoppingCart } from "lucide-react";

export const hero = () => {
  return (
    
      <section className="flex flex-col  lg:flex-row   gap-y-10 py-6 ">
        {/* left div*/}
        <div className="flex-1">
          <Badge className="py-3 px-6 rounded-lg bg-blue-200 text-blue-700">
             Sale 70% 
          </Badge>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
            An Industrial Take on Streetwear
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Once upon a time, in a far-off land, there was a very lazy king who
            spent all day lounging on his throne. One day, his advisors came to
            him with a problem: the kingdom was running out of money.
          </p>
          <Button className="bg-black h-12 px-8 mt-4">
            <ShoppingCart />
            Start Shopping
          </Button>

          {/* left banner */}

          <div className="flex pt-10 gap-x-5">
            <Image src={BL1} alt="logo"></Image>
            <Image src={BL2} alt="logo"></Image>
            <Image src={BL3} alt="logo"></Image>
            <Image src={BL4} alt="logo"></Image>
          </div>
        </div>
        {/* right div*/}
        <div className="h-300 w-300 rounded-full bg-red-50">
         <div> <Image src={heroImage} alt="pic"  className="bg-pink-100 rounded-full "></Image></div>
        </div>

      </section>


  );
};
export default hero;
