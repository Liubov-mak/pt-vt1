import {debounce} from "@/js/debounce";

export const headerFixed = () => {
    const header = document.querySelector('header'),
        body = document.body;
    let headerHeight = header.offsetHeight;

    const updateHeaderHeight = () => {
        headerHeight = header.offsetHeight;
    }

    const handleScroll = () => {
        const scrollDistance = window.scrollY;
        if (scrollDistance > 100) {
            header.classList.add('fixed');
            body.style.paddingTop = `${headerHeight}px`
        } else {
            header.classList.remove('fixed');
            body.style.paddingTop = "0"
        }
    }

    window.addEventListener('resize', debounce(updateHeaderHeight, 100))
    window.addEventListener('scroll', debounce(handleScroll, 100))
}