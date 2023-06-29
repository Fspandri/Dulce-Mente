    const productos = [
       {id: "1", idCat: "tortas", nombre: "Torta Oreo", precio: 8000, img: "../img/tortaoreo.jpg"},
       {id: "2", idCat: "tortas", nombre: "Cheescake de Frutos Rojos", precio: 8500, img: "../img/cheesecake.jpg"},
       {id: "3", idCat: "tortas", nombre: "Torta de Coco", precio: 7000, img: "../img/coco.jpg"},
       {id: "4", idCat: "tortas", nombre: "Torta Havannet", precio: 9500, img: "../img/havannet.jpg"},
       {id: "5", idCat: "tortas", nombre: "Lemon Pie", precio: 7700, img: "../img/lemonpie.jpg"},
       {id: "6", idCat: "tortas", nombre: "Rogel", precio: 8900, img: "../img/rogel.jpg"},
       {id: "7", idCat: "fingerfood", nombre: "Alfajores de Maicena x 12 un", precio: 2800, img: "../img/alfajormaicena.jpg"},
       {id: "8", idCat: "fingerfood", nombre: "Alfajores de Nuez x 12 un", precio: 2800, img: "../img/alfajornuez.jpg"},
       {id: "9", idCat: "fingerfood", nombre: "Brownies x 12 un", precio: 2800, img: "../img/brownie.jpg"},
       {id: "10", idCat: "fingerfood", nombre: "Marquisse x 12 un", precio: 2800, img: "../img/marquisseff.jpg"},
   ]
          
export const getProductos = () => {
       return new Promise((res) => {
           setTimeout(() => {
               res(productos);
            }, 500)
       })
   }

export const getUnicoProducto = (id) => {
    return new Promise (resolve => {
     setTimeout(() => {
        const producto = productos.find(prod => prod.id === id);
        resolve (producto);
     }, 500)
     })
}

export const getCategoriaProducto = (cat) => {
    return new Promise (resolve => {
     setTimeout(() => {
        const producto = productos.filter(prod => prod.idCat === cat);
        resolve (producto);
     }, 500)
     })
}