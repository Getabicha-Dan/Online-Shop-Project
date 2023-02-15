const ProductList = ({products}) => {
    return ( 
        <div className="listPreview">
            {products.map((product) =>(
                <div className="preview" key={product.productName}>
                    <h3>{product.productName}</h3>
                    <button>Detail</button>
                </div>
            ))}
           

        </div>
     );
}
 
export default ProductList;