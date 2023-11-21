import { StaticImageData } from "next/image";
import { Products } from "../../../../utils/mocks"
import ProductCart from "@/app/components/ProductCart";

const getProductsByCategory = (category:string) =>{
   return Products.filter((product)=> product.category === category)
      
};

export default function Page({params}:{params:{slug:string}}) {
    console.log(params.slug)
   
    const result = getProductsByCategory (params.slug); 
    console.log(result)
    return(
        <div className="flex justify-evenly mt-16 py-10"> 
    {
    result.map((product)=>(
     <ProductCart
     key={product.id} 
     title={product.name} 
     price={product.price}
     img ={product.image as StaticImageData}
     category={product.category}
     id={product.id}/>
     
     
     ))}

  
  </div>
    )
    
}






 {/* {result.map((product)=>(
         <ProductCart 
         key={product.id} 
         title={product.name} 
         price={product.price}
         img ={product.image as StaticImageData}
         category={product.category}
         id ={product.id}
         />
         ))}
        
         */}
