/* EMPLEO DE ARRAY */

let prodId = 0;
class Producto{
    constructor(tipo, marca, precio, talle, año, color){
        this.tipo =  tipo;
        this.marca =  marca;
        this.precio =  precio;
        this.talle = talle;
        this.año =  año;
        this.color = color;
        this.id = prodId;
        }  
        showDetail(){
            return "Tipo de producto: " + this.tipo + ", Marca: " + this.marca +  ", Precio: " + this.precio + ", Talle: " + this.talle + ", Año: " + this.año + ", Color: " + this.color
        }
}

let productos = [];

for(let i = 0; i < productos.length; i++){
    console.log(productos[i].showDetail())
}

let productosContainer = document.getElementById("productos")
for (let producto of productos){ 
    let titulo = document.createElement("h1")
    titulo.textContent = producto.tipo
    productosContainer.append(titulo)
}
