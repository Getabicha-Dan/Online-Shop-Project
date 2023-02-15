import { useState } from "react";
const ProductAdder = ({products,handleAdder,newProduct}) => {
   // const [newProduct,setNewProduct]=useState('');
   // const handleChange = (event)=>
    //setNewProduct(event.target.value);
    const [newProductName,setNewProductName]=useState('');
    const handleChange1 = (event)=>
    setNewProductName(event.target.value);
    const [newProductPrice,setNewProductPrice]=useState('');
    const handleChange2 = (event)=>
    setNewProductPrice(event.target.value);

    return (
        <div className="productAdder">
            <h2>Add Product</h2>
            <div className="adderInput">
                <input type="text" placeholder="Name" onChange={handleChange1} key={products.productName}/>
                <input type="text" placeholder="Price"onChange={handleChange2} key ={products.price}/>
                <button onClick={()=>handleAdder(newProduct)}> Add Product</button>
            </div>
            
        </div>
     );

        
        
}
 
export default ProductAdder;