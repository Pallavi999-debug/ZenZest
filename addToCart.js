export const addToCart = (event, id, stock) => {

    let arrLocalStorageProduct = getCartProductFromLS();

    const currentProductElem = document.querySelector(`#card${id}`);
    // console.log(currentProductElem);
    let quantity = currentProductElem.querySelector('.productQuantity').innerText;
    let price = currentProductElem.querySelector('.productPrice').innerText;
    // console.log(quantity, price);
    price = price.replace("$", "");

    let existingProd = arrLocalStorageProduct.find(
        (curProd) => curProd.id === id
    );

    if (existingProd && quantity > 1) {
        quantity = Number(existingProd.quantity) + quantity;
        price = Number(price * quantity);

        // price = price + quantity;

        let updatedCart = {
            id,
            quantity,
            price
        };

        updatedCart = arrLocalStorageProduct.map((curProd) => {
            return curProd.id === id ? updatedcart : curProd;
        });
        localStorage.setItem('cartProductLS', JSON.stringify(updatedCart));
    }

    arrLocalStorageProduct.push({
        id,
        quantity,
        price
    });

};