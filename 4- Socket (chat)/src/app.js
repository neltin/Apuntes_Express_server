const express = require('express');
//Socket
const { Server } = require('socket.io');
const AppRouters = require('./routers/app.routers');
const ViewsRouters = require('./routers/views.routers');

const PORT = 8080;
//Inicializacion Express
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
const httpServer = app.listen(PORT, () => {
    console.log("El servidor esta levantado y corriendo por el puerto", PORT);
});

//Inicializamos Socket
const socketServer = new Server(httpServer);

//emmit => enviar evento
//on => Escucha evento

socketServer.on("connection", (socket) =>{

    console.log("Cliente conectado")
    //console.log("Socket", socket); //Data recibido de la coneccion
    //console.log("Socket", socket.id); //Id del Cliente conectado
    //RealTimeProduct
    //Mensaje recibido del Socket client
    socket.on("message", (data)=>{
        console.log("evento message:", data);

    });

    //Ejemplo: Bienvenido Martin al chat
    socket.emit("individual", "Este msj lo recibe un cliente - un socket");
 
    //Ejemplo: Martin se conecto al chat
    socket.broadcast.emit("todos_menos_este", "Este msj lo todos los cliente menos el actual - todos los sockets menos uno");

    //Ejemplo: Mensaje del chat de Martin
    socketServer.emit("todos", "Este msj lo todos los cliente - todos los sockets");

    //Ejemplo chat
    socket.on("chat", (data)=>{
        socketServer.emit("print_chat", data);
    })

    //chat
    socket.on('login', (user) => {
        socket.emit('message-logs', messages);
        socket.emit('welcome', user);
        socket.broadcast.emit('new-user', user);
    });


})