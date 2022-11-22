

const productos = [
  {
   id: "Pale",
   nombre: "Pale Ale",
   imagen: "../images/pale.jpg",
   tipo: "Cerveza Clara",
   resumen: "Esta cerveza clara combina el amargor característico de los lúpulos con la frescura de las cervezas Ale. Ideal para acompañar con tus ensaladas, comidas picosas y mariscos.",
   smr: "17",
   cuerpo: "Ligero",
   ibus: "33",
   precio: "45"
  },
  {
    id: "Sweet",
    nombre: "Sweet Stout",
    imagen: "../images/sweet.jpg",
    tipo: "Cerveza Oscura",
    resumen: "Las maltas tostadas en su elaboración le dan su característico color negro, además de olor y aroma a café.",
    smr: "36",
    cuerpo: "Medio y cremoso",
    ibus: "30",
    precio: "50"
   },
   {
    id: "Porter",
    nombre: "Porter",
    imagen: "../images/porter.jpg",
    tipo: "Cerveza Clara",
    resumen: "Nuestra porter guarda un especial balance entre amargor y frescura, ideal para disfrutar con alimentos.",
    smr: "33",
    cuerpo: "Pleno",
    ibus: "38",
    precio: "55"
   }
];

const containerProductos = document.querySelector(".containerProductos");
const menuToggle = document.querySelector(".menuToggle");
const navMenu = document.querySelector(".navMenu");
const gridContainer = document.querySelector(".gridContainer");
let comprar = document.querySelectorAll(".comprar");
const numero = document.querySelector(".numero");

menuToggle.addEventListener("click", () =>{
  navMenu.classList.toggle("navMenu_visible")
  gridContainer.classList.toggle("noScrollBody")
});

function cargarProductos(){
  productos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("containerCard");
    div.innerHTML = `
            <img class="productoImagen" src="${producto.imagen}" alt="${producto.nombre}">
            <div class="containerInfo">
              <h3 class="productoNombre">${producto.nombre}</h3>
              <h3 class="productoTipo">${producto.tipo}</h2>
              <p class="productoResumen">
                ${producto.resumen}
              </p>
              <ul>
                <li class="productoSMR">SMR:${producto.smr}</li>
                <li class="productoCuerpo">Cuerpo: ${producto.cuerpo}</li>
                <li class="productoIBUS">IBUS:${producto.ibus}</li>
                <li class="productoPrecio">$${producto.precio}</li>
              </ul>
              <button id="${producto.id}" class="comprar">COMPRAR</button>
            </div>
    `;
    containerProductos.append(div);
  })
};

cargarProductos();

function actualizarBotonCompra () {
  comprar = document.querySelectorAll(".comprar");
  comprar.forEach(boton => {
    boton.addEventListener("click",agregarAlCarrito);
  });
};

actualizarBotonCompra ();

let productosCarrito;
let productosCarritoLS = localStorage.getItem("productosCarrito");

if (productosCarritoLS){
  productosCarrito = JSON.parse(productosCarritoLS);
  actualizarNumero();
} else {
  productosCarrito = [];
}


function agregarAlCarrito (e) {
  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(producto => producto.id === idBoton);
  if(productosCarrito.some(producto => producto.id === idBoton)){
    const index = productosCarrito.findIndex(producto => producto.id === idBoton);
    productosCarrito[index].cantidad++;
  }else{
    productoAgregado.cantidad = 1;
    productosCarrito.push(productoAgregado);
  }
  actualizarNumero();
  localStorage.setItem("productosCarrito", JSON.stringify(productosCarrito));
};

function actualizarNumero(){
  let nuevoNumero = productosCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  numero.innerText = nuevoNumero;
};


