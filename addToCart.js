import {
    getCartProductFromLS
} from "./getCartProducts.js";


import {
    showToast
} from "./showToast.js";
import {
    updateCartValue
} from "./updateCartValue.js";

// -----------------------------------------------------
// to get the cart data from localStorage
// to update the cart value and also to get the data always ready from localStorage
// --------------------------------------------------------
getCartProductFromLS();

export const addToCart = (event, id, stock) => {

    let arrLocalStorageProduct = getCartProductFromLS();

    const currentProdElem = document.querySelector(`#card${id}`);
    // console.log(currentProductElem);
    let quantity = currentProdElem.querySelector('.productQuantity').innerText;
    let price = currentProdElem.querySelector('.productPrice').innerText;
    // console.log(quantity, price);
    price = price.replace("$", "");

    let existingProd = arrLocalStorageProduct.find(
        (curProd) => curProd.id === id
    );

    console.log(existingProd);

    if (existingProd && quantity > 1) {
        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(price * quantity);

        // price = price + quantity;

        let updatedCart = {
            id,
            quantity,
            price
        };

        updatedCart = arrLocalStorageProduct.map((curProd) => {
            return curProd.id === id ? updatedCart : curProd;
        });
        console.log(updatedCart);

        localStorage.setItem('cartProductLS', JSON.stringify(updatedCart));
        showToast("add", id);
    }

    if (existingProd) {
        return false;
    }

    price = Number(price * quantity);
    quantity = Number(quantity);

    arrLocalStorageProduct.push({
        id,
        quantity,
        price
    });
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

    //update the cart button value
    updateCartValue(arrLocalStorageProduct);

    //show toast when product added to the cart
    showToast("add", id);

};