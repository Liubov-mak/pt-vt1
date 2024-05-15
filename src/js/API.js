import {productStore} from "@/js/Store.js";

const formatQueryString = params => {
    if(Object.keys(params).length === 0) {
        return '';
    }
    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
        searchParams.append(key, value);
    })

    return  `?${searchParams.toString()}`;
}
export const API_URL = 'http://localhost:3000';

export const fetchProducts = async (params={}) => {
    try {
        const res = await fetch(`${API_URL}/api/products${formatQueryString(params)}`);

        if(!res.ok) {
            throw new Error(`Http error! status: ${res.status}`)
        }
        const products = await res.json()

        productStore.setProducts(products);
    } catch (error) {
        console.error('error')
        return []
    }
}