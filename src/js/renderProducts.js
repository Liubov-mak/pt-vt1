import {fetchProducts} from "@/js/API.js";
import {ProductCard} from "@/js/ProductCard.jsx";

export const renderProducts = async () => {
    const catalogList = document.querySelector('.catalog__wrapper')
    const products = await fetchProducts()
    catalogList.innerHTML = ""
    products.forEach(product => {
        const productCard = ProductCard(product)
        catalogList.append(productCard)
    })
}