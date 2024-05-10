class Store {
    constructor() {
        this.observers = [];
        this.products = [];
        this.categories = new Set();
    }

    subscribe(observerFunction) {
        this.observers.push(observerFunction)
    } // метод для добавления новых наблюдателей

    notifyObservers() {
        this.observers.forEach(observer => observer());
    } // метод для уведомления наблюдателей об изменениях в хранилищах

    getProducts() {
        return this.products;
    }

    setProducts(newProducts) {
        this.products = newProducts;
        this.updateCategories(newProducts)
        this.notifyObservers()
    }

    getCategories() {
        return this.categories;
    }

    updateCategories(products) {
        this.categories.clear();

        products.forEach(product => {
            if(product.categories) {
                product.categories.forEach(category => {
                    this.categories.add(category)
                })
            }
        })
        this.notifyObservers()
    }
}

export const store = new Store()
