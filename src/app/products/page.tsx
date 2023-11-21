import { StaticImageData } from "next/image"
import { Products } from "../../../utils/mocks"
import ProductCart from "@/app/components/ProductCart"

 const Allproducts =()=> {
return(
<div className="flex justify-evenly mt-16 py-10 flex-wrap"> 

{Products.map((product)=>(
 <ProductCart 
 key={product.id} 
 title={product.name} 
 price={product.price}
 img ={product.image as StaticImageData}
 category={product.category}
 id ={product.id}
 />
 ))}


</div>
);

}
export default Allproducts