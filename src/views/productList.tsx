/*evenly add same space, no space add at left and right*/
import { Products } from "../../utils/mocks"
import { StaticImageData } from "next/image";
import ProductCart from "@/app/components/ProductCart";

const productList = () => {
  const  productChunks=  Products.slice(0, 3);
  return (
    <div className="flex justify-evenly mt-16 py-10"> 
    {
    productChunks.map((product)=>(
     <ProductCart
     key={product.id} 
     title={product.name} 
     price={product.price}
     img ={product.image as StaticImageData}
     category={product.category}
     id={product.id}/>
     
     
     ))}

  
  </div>
  );
};

export default productList