import {store} from "@/js/Store.js";

export const initChoicesType = () => {
    const typeChoices = document.querySelector('.filter__type');

    const updateTypeChoicesVisibility = () => {
        const category = store.getCategories();

        if(category.size) {
            typeChoices.style.display = '';
        } else {
            typeChoices.style.display = 'none';
        }
    };
    store.subscribe(updateTypeChoicesVisibility)
    updateTypeChoicesVisibility();
}