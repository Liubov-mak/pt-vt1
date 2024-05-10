export const initCart = () => {
    const cartClose = document.querySelector('.cart__close'),
        cart = document.querySelector('.cart'),
        headerCart = document.querySelector('.header__cart');
    cartClose.addEventListener('click', () => {
        cart.classList.remove('open')
    })

    const toggleCart = () => {
        cart.classList.toggle('open')

        if(cart.classList.contains('open') && window.innerWidth > 1199) {
            cart.scrollIntoView({
                behavior: "smooth"
            })
        }
    }
    headerCart.addEventListener('click', toggleCart)
}