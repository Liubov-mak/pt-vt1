import {API_URL} from "@/js/API.js";

export const ProductCard = (product) => {
    const text = `${product.price} ₽`
    return (
        <li class="catalog__item">
            <article class="catalog__card card">
                <img class="card__image" alt={product.name} src={`${API_URL}${product.photoUrl}`}/>
                <div class="card__content">
                    <h3 class="card__title">{product.name}</h3>
                    <div class="card__footer">
                        <p class="card__date">
                            сегодня в 14:00
                        </p>
                        <button class="card__button"
                                onMouseEnter={(e) => {
                                    e.target.textContent = "В корзину"
                                }}
                                onMouseLeave={(e) => {
                                    e.target.textContent = text
                                }}
                        >
                            {text}
                        </button>
                    </div>
                </div>
            </article>
        </li>
    )
}