import {productStore} from "@/js/Store.js";
import {ListType} from "@/js/ListType.jsx";

export const initChoicesType = () => {
    const typeChoices = document.querySelector('.filter__type'),
        choicesBox = typeChoices.querySelector('.choices__box');

    const updateTypeChoicesVisibility = () => {
        const categories = productStore.getCategories();

        if(categories.size) {
            typeChoices.style.display = '';
            choicesBox.innerHTML = "";
            const listType = ListType([...categories]);
            choicesBox.append(listType)
        } else {
            typeChoices.style.display = 'none';
        }
    };
    productStore.subscribe(updateTypeChoicesVisibility)
    updateTypeChoicesVisibility();
}