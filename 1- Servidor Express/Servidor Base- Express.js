const express = require('express');

const PORT = 8080;

//Parseo json.parse
app.use(express.json()); //Parse de los Objetos que van por Body
app.use(express.urlencoded({ extended: true })); //Parseo de los formularios

//Inicializacion
const app = express();

//Metodos



//Puesto en Marcha
app.listen(PORT, () => {
    console.log("El servidor esta levantado y corriendo por el puerto 8080");
});