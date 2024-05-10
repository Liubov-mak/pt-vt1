import {API_URL} from "@/js/API.js";

export const ProductCard = (product) => (
    <li class="catalog__item">
        <article class="catalog__card card">
            <img class="card__image" alt={product.name} src={`${API_URL}${product.photoUrl}`}/>
            <div class="card__content">
                <h3 class="card__title">{product.name}</h3>
                <div class="card__footer">
                    <p class="card__date">
                        сегодня в 14:00
                    </p>
                    <button class="card__button">
                        <span class="card__price">{product.price}&nbsp;₽</span>
                        <span class="card__btn-text">В корзину</span>
                    </button>
                </div>
            </div>
        </article>
    </li>
)