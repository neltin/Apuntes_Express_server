// Mongo db
//Lineas de comandos

show dbs // Para ver las coleciones

use users //Para moverme entre BD o collection

db.createCollection("users") //Crear colecciones

db.users.find() //Traer coleccion

db.users.find({name:"Martin"}) //Traer los registros que contengan...

db.users.findOne({name:"Martin"}) //Busca el primer registro

//Cuenta los documentos que cumplan con el criterio definido.
db.users.countDocuments() //2
db.users.countDocuments({name:"Martin"}) //1

db.users.insertOne({nombre:"Martin", apellido: "Gauto"}) //Insertar datos en coleccion

db.users.insertMany([{nombre:"Martin", apellido: "Gauto"}, {nombre:"Nelson", apellido: "Gauto"} , {nombre:"Silvi", apellido: "C"}]) ////Insertar varios documentos en una collection


//Eliminar Index de una coleccion 
db.collection.dropIndex()