const Detail = ({product, handleClose, handleAddCart}) => {
    return ( 
        <div className="detailPreview">
            <h3> Detail</h3>

            <div className="detailList" key={product.productName}>
                <h4>{product.productName}</h4>
                <h4>{product.price}</h4>
            </div>

            <button onClick={()=>handleAddCart(product)} > Add to Cart </button>
            <button onClick={()=>handleClose(product)} > Close </button>
        </div>
    );
}
 
export default Detail;