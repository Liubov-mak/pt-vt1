import '@/scss/index.scss'
import {headerFixed} from '@/js/headerFixed.js'
import {initChoices} from "@/js/initChoices.js";
import {initCart} from "@/js/cart.js";
import {renderProducts} from "@/js/renderProducts.js";
import {fetchProducts} from "@/js/API.js";
import {initChoicesType} from "@/js/choicesType.js";
import {filterProducts} from "@/js/filterProducts.js";
import {initSearchProducts} from "@/js/searchProducts.js";

const init = () => {
    headerFixed()
    initChoices()
    initChoicesType()
    initCart()
    initSearchProducts()
    fetchProducts()
    renderProducts()
    filterProducts()
}

document.addEventListener('DOMContentLoaded', init)