import {fetchProducts} from "@/js/API.js";
import {fetchWithPreload} from "@/js/preload.js";

export const initSearchProducts = () => {
    const headerForm = document.querySelector('.header__form'),
        catalogTitle = document.querySelector('.catalog .heading'),
        catalog = document.querySelector('.catalog');
    headerForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const formData = new FormData(headerForm);
        const searchQuery = formData.get('search').trim();

        if(searchQuery) {
            catalogTitle.textContent = 'Результат поиска'
            fetchWithPreload(catalog, fetchProducts, {search: searchQuery})
        }
    })

}