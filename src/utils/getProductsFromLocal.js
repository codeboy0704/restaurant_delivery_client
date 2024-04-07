export default function getProductsFromLocalStorage() {
    const productsJSON = localStorage.getItem('products');
    if (productsJSON) {
        return JSON.parse(productsJSON);
    }
    return null;
}