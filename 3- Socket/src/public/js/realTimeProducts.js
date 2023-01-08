//cliente
const socket = io(); //Conectar al servidor Socket => (connection)

//Tipo de mensajes - enviar
socket.emit("message", "Me estoy conectando de la vista Real Time Products");

//Recibidos
socket.on("individual", (data)=>{
    console.log("individual: ", data);
});
   
socket.on("todos_menos_este", (data)=>{
    console.log("todos_menos_este: ", data);
});

socket.on("todos", (data)=>{
    console.log("todos: ", data);
});


const input_text = document.getElementById("input_text")
const text_incrustrado = document.getElementById("text_incrustrado")



input_text.addEventListener("keyup", (e)=>{
    const key = e.key;
    e.target.value = "";

    socket.emit("chat", key);
})


socket.on("print_chat", (data)=>{
    text_incrustrado.innerHTML += data;       


})


