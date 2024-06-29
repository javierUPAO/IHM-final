export function getCarrito() {
    return JSON.parse(localStorage.getItem('carrito') ?? '[]');
}

export function setCarrito(option) {
    localStorage.setItem('carrito', JSON.stringify(option));
}

export function cleanCarrito() {
    localStorage.removeItem('carrito');
}