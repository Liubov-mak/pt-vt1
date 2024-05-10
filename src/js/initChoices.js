import {debounce} from "@/js/debounce.js";

export const initChoices = () => {
    function adjustElPosition(element, count = 0) {
        const rect = element.getBoundingClientRect();
        const width = window.innerWidth;

        if (rect.left < 0) {
            element.style.left = "0";
            element.style.right = "auto"
            element.style.transform = "translateX(0)";
        } else if (rect.right > width) {
            element.style.left = "auto";
            element.style.right = "0"
            element.style.transform = "translateX(0)";
        } else {
            element.style.left = "50%";
            element.style.right = "auto"
            element.style.transform = "translateX(-50%)";
        }

        const postRect = element.getBoundingClientRect();
        if ((postRect.left < 0 || postRect.right > width) && count < 3) {
            count++;
            adjustElPosition(element, count);
        }
    }

    const choices = document.querySelectorAll('.choices');
    choices.forEach(el => {
        const choicesBtn = el.querySelector('.choices__btn'),
            choicesFilter = el.querySelector('.choices__filter');

        choicesBtn.addEventListener('click', () => {
                choicesFilter.classList.toggle('active');
                adjustElPosition(choicesFilter);
                choices.forEach(item => {
                    if (item !== el) {
                        item.querySelector('.choices__filter').classList.remove('active')
                    }
                }) // удаляет активный класс у предыдущего элемента
            }
        )
        window.addEventListener('resize', debounce(() => adjustElPosition(choicesFilter), 100))
        window.addEventListener('load', debounce(() => adjustElPosition(choicesFilter), 100))
        document.addEventListener('click', ({target}) => {
            let clickInside = target.closest('.choices')

            if(!clickInside) {
                choices.forEach(el => {
                    el.querySelector('.choices__filter').classList.remove('active')
                })
            }
        })
    })
}