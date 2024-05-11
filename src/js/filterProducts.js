import {fetchProducts} from "@/js/API.js";
import {debounce} from "@/js/debounce.js";
import {fetchWithPreload} from "@/js/preload.js";

export const filterProducts = () => {
    const filterForm = document.querySelector('.filter__form'),
    catalogTitle = document.querySelector('.catalog .heading'),
    catalog = document.querySelector('.catalog');
   const applyFilters = () => {
       const formData = new FormData(filterForm);
       const type = formData.get('type');
       const minPrice = formData.get('minPrice');
       const maxPrice = formData.get('maxPrice');
       const params = {};

       if (type) params.type = type;
       if (minPrice) params.minPrice = minPrice;
       if (maxPrice) params.maxPrice = maxPrice;

       fetchWithPreload(catalog, fetchProducts, params)
   }
    applyFilters();

   const applyPriceFilter = debounce(applyFilters, 500)

    filterForm.addEventListener('input', (event) => {
        let target = event.target;
        if(target.name === 'type') {
            catalogTitle.textContent = target.labels[0].textContent;
            filterForm.minPrice.value = '';
            filterForm.maxPrice.value = '';
            applyFilters();
            return
        }

        if(target.name === 'minPrice' || target.name === 'maxPrice') {
            applyPriceFilter();
        }
    })
}