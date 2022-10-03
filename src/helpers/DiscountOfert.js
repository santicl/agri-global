function DiscountOfert(price, specialPrice) {
    let discount = 0;
    discount = ((parseInt(price) - parseInt(specialPrice)) / parseInt(price)) * 100;
    return discount.toFixed(0) + "%";
}

export default DiscountOfert;