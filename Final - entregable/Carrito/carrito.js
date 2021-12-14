
let botonCompra = document.querySelectorAll(".botonCompra");
let carrito = [];
let productos = JSON.parse(localStorage.getItem("botonCompra"));
mostrarCarrito(productos)

console.log(botonCompra);

for (let boton of botonCompra) {
  boton.addEventListener("click", agregarCarrito);
}

function agregarCarrito(e) {
  let hijo = e.target;
  let padre = hijo.parentNode.parentNode;

  let nombreProducto = padre.querySelector("h5").textContent;
  let img = padre.querySelector("img").src;
  let precio = padre.querySelector("span").textContent;
  let parrafo = padre.querySelector("p").textContent;

  const producto = {
    nombre: nombreProducto,
    img: img,
    precio: precio,
    desc: parrafo,
    cantidad: 1,
  };

  carrito.push(producto);
  localStorage.setItem("botonCompra", JSON.stringify(carrito));
  let productos = JSON.parse(localStorage.getItem("botonCompra"));
  mostrarCarrito(productos);
}

function mostrarCarrito(productos) {
    if(productos){
        let tbody = document.getElementById("tbody");
        tbody.innerHTML = ""
        for (let producto of productos) {
          let fila = document.createElement("tr");
      
          fila.innerHTML = `<td><img src="${producto.img} "></td>
                            <td>${producto.nombre}</td>
                            <td>${producto.precio}</td>
                            <td><button class="btn btn-danger">Eliminar</button></td>
                          `;
      
      
      
          tbody.appendChild(fila);
        }
    }
}





/* uso de animación */
$("#carrito").hide();

$(".botonCompra").click(function(){
    $("#carrito").show();
})




        $(document).ready(function () {
            $(".btnFinalizar").click(function () {
                $("#myModal").modal('show');
            });
        });

        $(document).ready(function () {
            $(".close").click(function () {
                $("#myModal").modal('hide');
            });
        });
