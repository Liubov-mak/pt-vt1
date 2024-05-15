import {cartStore} from "@/js/Store.js";
import {CartElem} from "@/js/CartElem.jsx";

export const renderCart = () => {
    const cartPriceTotal = document.querySelector('.cart__price_total'),
        cartList = document.querySelector('.cart__list');

    const updateList = () => {
        const cart = cartStore.getCart();
        console.log(cart)
        cartList.textContent = "";

        if(!cart.length) {
            const messageItem = document.createElement('li')
            messageItem.textContent = 'Корзина пуста';
            messageItem.classList.add('catalog__no-items');
            cartList.append(messageItem);
            return;
        }

        const productCards = cart.map(CartElem);
        cartList.append(...productCards);

        const totalPriceValue = cart.reduce(
            (acc, product) => acc + product.price * product.quantity, 0);

        cartPriceTotal.innerHTML = `${totalPriceValue} ₽`;
    };
    updateList();
    cartStore.subscribe(updateList);
}