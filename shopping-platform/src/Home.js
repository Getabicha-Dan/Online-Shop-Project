import { useState } from "react";
import ProductAdder from "./ProductAdder";
import ProductList from "./ProductList";
import Detail from "./Detail";
import ShoopingCart from "./ShoopingCart";

const Home = () => {
    const [products, setProducts] = useState([{productName:'Face mask', price:'4.99€'},{productName:'Microwave oven', price:'89.99€'},{productName:'Vacum cleaner', price:'98.99€'},{productName:'ESpresso Machine', price:'229.99€'}]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cartProducts, setCartProducts] = useState([]);

    const handleAdder = (newProduct)=>{
        setProducts([...products, newProduct]);     
    }

    const handleDetail = (product) => {
        setSelectedProduct(product);  
    }

    const handleClose = (product) => {
        setSelectedProduct(null);  
    }

    const handleAddCart = (product) => {
        const newCart = [...cartProducts, product];
        setCartProducts(newCart);
    }

    const handleRemove = (productToRemove) => {
        setCartProducts(cartProducts.filter((product) => productToRemove !== product));
    }

   
    return ( 
        <div className="content">
            <ProductAdder products ={products} handleAdder={handleAdder} />        
            <ProductList products ={products} handleDetail={handleDetail} />
            { selectedProduct && (<Detail product={selectedProduct} handleAddCart={handleAddCart} handleClose={handleClose}/>)}
            { cartProducts && (<ShoopingCart products={cartProducts} handleRemove={handleRemove}/>)}
        </div>
        );
    }
 
export default Home;

