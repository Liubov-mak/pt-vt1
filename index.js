import '@/scss/index.scss'


const header = document.querySelector('header'),
    body = document.body;

let headerHeight = header.offsetHeight;

window.addEventListener('resize', () => {
    headerHeight = header.offsetHeight;
})
window.addEventListener('scroll', () => {
    const scrollDistance = window.scrollY;
    if (scrollDistance > 100) {
        header.classList.add('fixed');
        body.style.paddingTop = `${headerHeight}px`
    } else {
        header.classList.remove('fixed');
        body.style.paddingTop = "0"
    }
})

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
    window.addEventListener('resize', () => {
        adjustElPosition(choicesFilter);
    })
    window.addEventListener('load', () => {
        adjustElPosition(choicesFilter);
    })
})

const cartClose = document.querySelector('.cart__close'),
    cart = document.querySelector('.cart'),
headerCart = document.querySelector('.header__cart');
cartClose.addEventListener('click', () => {
    cart.classList.remove('open')
})
headerCart.addEventListener('click', () => {
    cart.classList.toggle('open')
})