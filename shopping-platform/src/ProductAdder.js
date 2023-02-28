import { useState } from "react";

const ProductAdder = ({products, handleAdder}) => {
    const [newProductName, setNewProductName] = useState('');
    const [newProductPrice, setNewProductPrice] = useState('');

    const handleNameChange = (event) => setNewProductName(event.target.value);
    const handlePriceChange = (event) => setNewProductPrice(event.target.value);
    const handleClick = () => {
        const newProduct = {productName: newProductName, price: newProductPrice};
        handleAdder(newProduct);

    }

    return (
        <div className="productAdder">
            <h2>Add Product</h2>
            <div className="adderInput">
                <input type="text" placeholder="Name" onChange={handleNameChange} />
                <input type="text" placeholder="Price"onChange={handlePriceChange}/>
                <button onClick={handleClick}> Add Product</button>
            </div>
            
        </div>
     );
}
 
export default ProductAdder;