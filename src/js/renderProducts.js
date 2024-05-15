import {ProductCard} from "@/js/ProductCard.jsx";
import {productStore} from "@/js/Store.js";

export const renderProducts = async () => {
    const catalogList = document.querySelector('.catalog__wrapper');
    const updateList = () => {
        const products = productStore.getProducts();
        catalogList.innerHTML = ""

        if(products.length === 0) {
            const messageItem = document.createElement('li');
            messageItem.textContent = 'Товары не найдены';
            messageItem.classList.add('catalog__no-items');
            catalogList.append(messageItem);
            return
        }
        products.forEach(product => {
            const productCard = ProductCard(product)
            catalogList.append(productCard)
        })
    }
    productStore.subscribe(updateList)
    updateList()
}