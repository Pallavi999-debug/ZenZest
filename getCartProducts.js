export const getCartProdctFromLS = () => {
    let cartProducts = localStorage.getItem('cartProductLS');
    if (cartProducts) {
        return [];
    }
    cartProducts = JSON.parse(cartPr)
}