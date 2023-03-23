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
       // check if product exist in cartProducts
    
       //if it exists then increament product.quantity
       //if it doesn't then do product.quantity =1
        if (cartProducts.find((prod) => product.productName === prod.productName)){
           const newarray = cartProducts.map(prod=>{
                if (prod.productName === product.productName){
                    prod.quantity = prod.quantity + 1;
                }  

                return prod;
            });

            setCartProducts(newarray);
        } else {         
           // product.quantity = 1;   
            //const newCart = [...cartProducts, product];
            const newCart = [...cartProducts, {...product, quantity:1}];
            setCartProducts(newCart);
                    
         }
    }

    const handleDecreament =(product)=>{
        const newarray2 = cartProducts.map(prod=>{
            if(prod.quantity > 1 && prod.productName === product.productName){
                prod.quantity = prod.quantity -1;
            }
            return prod;
        });
        setCartProducts(newarray2);
    }
    
    const handleRemove = (productToRemove) => {
        setCartProducts(cartProducts.filter((product) => productToRemove !== product));
    }

   

   
    return ( 
        <div className="content">
            <ProductAdder products ={products} handleAdder={handleAdder} />        
            <ProductList products ={products} handleDetail={handleDetail}/>
            { selectedProduct && (<Detail product={selectedProduct} handleAddCart={handleAddCart} handleClose={handleClose}/>)}
            { cartProducts && (<ShoopingCart products={cartProducts} handleRemove={handleRemove} handleDecreament={handleDecreament}/>)}
        </div>
        );
    }
 
export default Home;

