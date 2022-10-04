function PriceVerify(props) {
    if (props.promo === true) {
        return (
            <div className='Carts_cart_price'>
                <span className='Carts_cart_price-new'>$ {props.specialPrice.toFixed(2)} USD</span>
                <span className='Carts_cart_price-old'>$ {props.productPrice.toFixed(2)} USD</span>
            </div>
        );
    } else {
        return (
            <div className='Carts_cart_price'>
                <span className="Only-price">$ {props.productPrice == null ? "0.00": props.productPrice} USD</span>
            </div>
        );
    }
}

export default PriceVerify;