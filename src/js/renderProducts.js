import {ProductCard} from "@/js/ProductCard.jsx";
import {store} from "@/js/Store.js";

export const renderProducts = async () => {
    const catalogList = document.querySelector('.catalog__wrapper');
    const updateList = () => {
        const products = store.getProducts();
        catalogList.innerHTML = ""
        products.forEach(product => {
            const productCard = ProductCard(product)
            catalogList.append(productCard)
        })
    }
    store.subscribe(updateList)
    updateList()
}