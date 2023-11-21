import p1 from "/public/p1.webp";
import Image from "next/image";


const Middle = () => {
  return (
    <section className="mt-16 px-10 ">
        <div className="flex justify-end p-12 tracking-widest ">
            <h1 className="font-bold text-5xl lg:w-[50%]">Unique and Authentic Vintage Designer Jewellery</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 tracking-wider gap-10  ">

            <div className="grid grid-cols-2 gap-8 items-center">  
            <h1 className="absolute font-bold text-8xl opacity-10 lg:w-[40%] tracking-wider">Different from others</h1> 
            
            <div className="lg:w-[70%]"> 
                <h1 className="font-bold text-">Using Good Quality Materials</h1>
                <br />
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>           
            </div>

         <div className="  ">   
                <h1 className="font-bold text-lg ">100% Handmade Products</h1>
                <br />
                <p className="">Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>         
            </div>

        <div className="">    
               <h1 className="font-bold text-lg scroll-m-20">Modern Fashion Design</h1>
               <br />
               <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>       
            </div>

        <div className="">   
              <h1 className="font-bold text-lg scroll-m-20">Discount for Bulk Orders</h1>
               <br />
               <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>    
            </div>

            </div>

            <div className="grid sm:grid-cols-[1fr,1fr] grid-rows-[1fr] gap-5  justify-items-center">
            
           <div> <Image src={p1} alt="bottom" height={550} width={300}/></div>
            
            <div className="flex flex-col justify-center gap-4" >   
                <p className=" tracking-wide leading-7 text-justify">This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.</p>
                <button className="h-auto w-40 bg-black text-white m-2 p-2">See All Products</button>

            </div>

            </div>

          
        </div> 
      </section>
    
  );
};

export default Middle;
