import { useState } from "react";
import ProductAdder from "./ProductAdder";
import ProductList from "./ProductList";

const Home = () => {
   const [products,setProducts]= useState([{productName:'Face mask', price:'4.99€'},{productName:'Microwave oven', price:'89.99€'},{productName:'Vacum cleaner', price:'98.99€'},{productName:'ESpresso Machine', price:'229.99€'}]);
    
  let newProduct= [{productName: '',price:''}];
   const handleAdder = (newProduct)=>{
        setProducts([...products,newProduct]);
    }
   
   return ( 
        <div className="content">
            <ProductAdder products ={products} handleAdder={handleAdder} newProduct={newProduct}/>
            <ProductList products ={products}/>
        </div>
       


     );
}
 
export default Home;