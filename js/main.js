if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
} else {
    carrito = [];
};
const container = document.getElementById("container");