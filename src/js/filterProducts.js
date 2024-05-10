import {fetchProducts} from "@/js/API.js";

const filterType = (type) => {
    fetchProducts({type:type.value})
}

export const filterProducts = () => {
    const filterForm = document.querySelector('.filter__form');

    filterType(filterForm.type);

    filterForm.addEventListener('input', (event) => {
        let target = event.target;
        if(target.name === 'type') {
            filterType(filterForm.type);
        }
    })
}