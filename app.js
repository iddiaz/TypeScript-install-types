"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jquery");
require("sweetalert");
console.log("Hola mundo");
$(document).ready(function () {
    console.log('pagina lista y cargada');
    $('h1').text('TypeScript demo de carda de typings');
    $('h1').css('background-color', 'red');
});
$('button').on('click', function () {
    // alert('HOla de nuevo');
    sweetAlert('Opss..', 'Something went wronG!!', 'error');
    // tambien
    // swal('Titulo', 'Mensaje')
});
