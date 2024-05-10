export const API_URL = 'http://localhost:3000';

export const fetchProducts = async () => {
    try {
        const res = await fetch(`${API_URL}/api/products`);

        if(!res.ok) {
            throw new Error(`Http error! status: ${res.status}`)
        }
        const products = res.json()

        return products;
    } catch (error) {
        console.error('error')
        return []
    }
}
