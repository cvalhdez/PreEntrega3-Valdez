const productosCarrito = JSON.parse(localStorage.getItem("productosCarrito"));
const carritoVacio = document.querySelector(".carritoVacio");
const carritoProductos = document.querySelector(".carritoProductos");
const carritoComprado = document.querySelector(".carritoComprado");

if (productosCarrito){
  carritoVacio.classList.add("desactivado");
  carritoProductos.classList.remove("desactivado");
  carritoComprado.classList.add("desactivado"); 

  carritoProductos.innerHTML = "";

  productosCarrito.forEach(producto =>{
    const div = document.createElement("div");
    div.classList.add("carritoProducto");
    div.innerHTML = `
    <img class="carritoProductoImagen" src="${producto.imagen}" alt="${producto.nombre}">
    <div class="carritoSeparador">
      <p>Producto</p>
      <h3 class="carritoProductoNombre">${producto.nombre}</h3>
    </div>
    <div class="carritoSeparador">
      <p>Cantidad</p>
      <p class="carritoProductoCantidad">${producto.cantidad}</p>
    </div>
    <div class="carritoSeparador">
      <p>Precio</p>
      <p class="carritoProductoPrecio">$${producto.precio}</p>
    </div>
    <div class="carritoSeparador">
      <p>Subtotal</p>
      <p class="carritoProductoSubtotal">$${producto.precio * producto.cantidad}</p>
    </div>
    <button class="carritoProductoBorrar" id="${producto.id}">Borrar</button>
    `;
    carritoProductos.append(div);
  })
}else{

}