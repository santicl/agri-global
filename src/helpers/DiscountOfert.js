function DiscountOfert(price, specialPrice) {
    let discount = 0;
    console.log(price);
    price = parseInt(price);
    specialPrice = parseInt(specialPrice);
    discount = price - specialPrice;
    discount = (discount / price) * 100;
    return discount.toFixed(0) + "%";
}

export default DiscountOfert;