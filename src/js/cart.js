import {cartStore} from "@/js/Store.js";
import {renderCart} from "@/js/renderCart.js";

const cartClose = document.querySelector('.cart__close'),
    cart = document.querySelector('.cart'),
    headerCart = document.querySelector('.header__cart');

const toggleCart = () => {
    cart.classList.toggle('open')

    if(cart.classList.contains('open') && window.innerWidth > 1199) {
        cart.scrollIntoView({
            behavior: "smooth"
        })
    }
}

export const initCart = async () => {
    await cartStore.init();
    cartClose.addEventListener('click', () => {
        cart.classList.remove('open')
    })
    headerCart.textContent = cartStore.getCart().length;
    headerCart.addEventListener('click', toggleCart)
    renderCart();

    cartStore.subscribe(() => {
        headerCart.textContent = cartStore.getCart().length;
    })
}