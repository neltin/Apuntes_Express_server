//cliente
const socket = io(); //Conectar al servidor Socket => (connection)

//Nombre de usuario
let user;

//Inicializacion de Sweet alert
 Swal.fire({
    title: 'ingrese su usuario',
    input: 'text',
    inputValidator: (value)=>{
      if(!value){
        return "Debe ingresar su nombre usuario";
      }
    },
    allowOutsideClick: false, //bloquea salir del modal con click
    allowEscapeKey: false, //bloquea salir del modal con enter
    padding: '16px'
   }).then((result) => {
    user = result.value;
    socket.emit('login', user);
  });








//Tipo de mensajes - enviar
// socket.emit("message", "Me estoy conectando de la vista Real Time Products");

// //Recibidos
// socket.on("individual", (data)=>{
//     console.log("individual: ", data);
// });
   
// socket.on("todos_menos_este", (data)=>{
//     console.log("todos_menos_este: ", data);
// });

// socket.on("todos", (data)=>{
//     console.log("todos: ", data);
// });


// const input_text = document.getElementById("input_text")
// const text_incrustrado = document.getElementById("text_incrustrado")



// input_text.addEventListener("keyup", (e)=>{
//     const key = e.key;
//     e.target.value = "";

//     socket.emit("chat", key);
// })


socket.on("print_chat", (data)=>{
    text_incrustrado.innerHTML += data;       


})


