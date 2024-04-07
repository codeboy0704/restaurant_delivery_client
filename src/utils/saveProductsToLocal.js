function saveProductsToLocalStorage(products) {
    localStorage.setItem('products', JSON.stringify(products));
}

export default saveProductsToLocalStorage