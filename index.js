import ProductManager from "./Managers/ProductManager.js";

// Se creará una instancia de la clase “ProductManager”
const manager = new ProductManager();

(async () => {
// Se llamará “getProducts” recién creada la instancia, debe devolver un arreglo vacío []
await manager.getProducts();
// Se llamará al método “addProduct” con los campos:
await manager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
await manager.addProduct("producto gordo", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
// El objeto debe agregarse satisfactoriamente con un id generado automáticamente SIN REPETIRSE
//
// Se llamará el método “getProducts” nuevamente, esta vez debe aparecer el producto recién agregado
await manager.getProducts();
// Se llamará al método “getProductById” y se corroborará que devuelva el producto con el id especificado
await manager.getProductyId(1);
// En caso de no existir, debe arrojar un error.
await manager.getProductyId(3);




})();











