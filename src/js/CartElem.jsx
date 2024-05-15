import {API_URL} from "@/js/API.js";
import {cartStore} from "@/js/Store.js";

export const CartElem = (product) => (
    <li class="cart__item">
        <img class="cart__image" width="54" height="54" src={`${API_URL}${product.photoUrl}`}
             alt={product.name}/>
        <div class="cart__info">
            <p class="cart__descr">{product.name}</p>
            <div class="cart__total">
                <div class="cart__counter">
                    <button class="cart__counter-btn" onClick={() => {
                        cartStore.postCart({id: product.id, quantity: product.quantity - 1})
                    }}>-</button>
                    <input type="number" class="cart__counter-input" value={product.quantity} max="99" min="0"/>
                    <button class="cart__counter-btn" onClick={() => {
                        cartStore.postCart({id: product.id, quantity: product.quantity + 1})
                    }}>+</button>
                </div>
                <p class="cart__price">{product.price * product.quantity}&nbsp;₽</p>
            </div>
        </div>
    </li>
)