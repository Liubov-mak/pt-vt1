import '@/scss/index.scss'
import {headerFixed} from '@/js/headerFixed.js'
import {initChoices} from "@/js/initChoices.js";
import {initCart} from "@/js/cart.js";
import {renderProducts} from "@/js/renderProducts.js";



const init = () => {
    headerFixed()
    initChoices()
    initCart()
    renderProducts()
}

document.addEventListener('DOMContentLoaded', init)