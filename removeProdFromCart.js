import {
    getCartProductFromLS
} from "./getCartProducts.js";
import {
    showToast
} from "./showToast.js";
import {
    updateCartProductTotal
} from "./updateCartProductTotal.js";
import {
    updateCartValue
} from "./updateCartValue.js";

export const removeProdFromCart = (id) => {
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

    // To remove the div onclick
    let removeDiv = document.getElementById(`card${id}`);
    if (removeDiv) {
        removeDiv.remove();

        //show toast when product added to the cart
        showToast("delete", id);
    }

    updateCartProductTotal();

    updateCartValue(cartProducts);

};