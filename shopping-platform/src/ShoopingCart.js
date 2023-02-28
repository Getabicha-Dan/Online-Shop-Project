const ShoopingCart = ({products, handleRemove}) => {
    return (
        <div className="cart">
            <h2> My Shooping Cart</h2>
            <div className="cartList">
                {products.map((product)=>(
                    <div className="cartListpreview">
                        <h3>{product.productName}</h3>
                        <h3>{product.price}</h3>
                        <button onClick={()=>handleRemove(product)}>Remove</button>
                    </div>

                ))}

                
            </div>
        </div>
    );
}
 
export default ShoopingCart;