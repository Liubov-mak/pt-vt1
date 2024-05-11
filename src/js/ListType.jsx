export const ListType = (categories) => (
    <ul class="choices__box">
        {categories.map(category =>
            <li class="choices__option">{category}</li>)
        }
    </ul>
)
