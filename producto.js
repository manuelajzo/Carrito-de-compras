'use strict';

function Producto(id = 0, nombre = "", descripcion = "", precio = 0, imagen = "") {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.imagen = imagen;
    let cantidad;

    this.setCantidad = function(cantidad) {
        this.cantidad = cantidad;
    }

    this.getCantidad = function(cantidad) {
        return this.cantidad;
    }
}