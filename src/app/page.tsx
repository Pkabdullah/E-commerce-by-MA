
import Hero from "@/views/hero"
import ProductList from "@/views/productList"
import Middle from "@/views/middle"
import Promotion from "@/views/Promotions"
import Newsletter from "@/views/Newsletter"


export default function Home(){
  return(
    <div>
   <div>
    <Hero/>
    <Promotion/>
    <ProductList/>
    <Middle/>
    <Newsletter/>
    
    
  </div>
  
  

</div>
  )
  
}
