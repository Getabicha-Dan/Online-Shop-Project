const ProductList = ({products, handleDetail}) => {
    return ( 
        <div className="listPreview">
            {products.map((product) =>(
                <div className="preview" key={product.productName}>
                    <h3>{product.productName}</h3>
                    <button onClick={()=>handleDetail(product)}>Detail</button>
                </div>
            ))}
           

        </div>
     );
}
 
export default ProductList;