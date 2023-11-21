
import { Input } from "@/shadcn_component/input"


const Newsletter = () => {
  return (
    <div className="flex flex-col flex-wrap gap-5 justify-center items-center px-40 py-32">
       <div className="absolute text-9xl font-bold tracking-wide opacity-5">Newsletter</div>
       <div> <h1 className="font-bold text-4xl sm:text-3xl">Subscribe Our Newsletter</h1>  </div>
       <div> <h2>Get the latest information and promo offers directly</h2> </div>
       <div className="flex">
        <Input type="search" placeholder="Input email address"></Input>
       <button className="bg-black text-white h-10 w-40">Get Started</button></div>

    </div>
  )
}

export default Newsletter