export const fetchWithPreload = async (selector, cb, ...params) => {
    const preload = document.createElement('div');
    preload.classList.add('preload')
    selector.append(preload);
    selector.style.position = 'relative'
    preload.style.display = 'flex'

    try {
        const result = await cb(...params);
        return result;

    } finally {
        preload.style.display = 'none';
        preload.remove()
        selector.style.position = ''
    }
}