export const debounce = (fn, wait) => {
    let idTimeOut;

    return (...args) => {
        clearInterval(idTimeOut);
        idTimeOut = setTimeout(() => {
            fn(...args);
        }, wait)
    }
} // сброс функции