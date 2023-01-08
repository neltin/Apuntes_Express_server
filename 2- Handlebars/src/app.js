const express = require('express');
const AppRouters = require('./routers/app.routers');
const ViewsRouters = require('./routers/views.routers');

const PORT = 8080;
//Inicializacion
const app = express();

//handlebars
const handlebars = require('express-handlebars');
app.engine('handlebars', handlebars.engine(
    {
   //     extname: "hbs", es para cambiar la extension .handlebars a .hbs 
    }
));

app.set('views', __dirname + '/views'); //Donde se encuentra las plantillas
app.set('view engine', 'handlebars'); //cual es el motor de la plantilla



//Parseo json.parse
app.use(express.json()); //Parse de los Objetos que van por Body
app.use(express.urlencoded({ extended: true })); //Parseo de los formularios

//Router
//Views
app.use(ViewsRouters);
//app
app.use( "api", AppRouters);

//Incorporar con express
app.use(express.static(__dirname + '/public'));

//Middleware Error
app.use((error, req, res, next)=>{


})

//Puesto en Marcha
app.listen(PORT, () => {
    console.log("El servidor esta levantado y corriendo por el puerto", PORT);
});