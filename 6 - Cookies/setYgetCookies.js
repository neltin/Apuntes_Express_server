/**
 * COOKIE-PARSER
 * -------------
 * npm i cookie-parser
 * 
 * Llamado de la Libreria COOKIES-PARSER
 */
const cookieParser = require('cookie-parser');

//Middlewares de COOKIES-PARSE
app.use(cookieParser());

/**
 * Firmas de Cookies para evitar uso de pluggins para editarlos
 * La firma permite que que solo el server tenga comunicacion con las Cookies.
 * Se lo pasa por parametro un string
*/

app.use(cookieParser("Clave-server"));

//Crear varia claves
app.use(cookieParser(["Clave-server", "Clave2-server"]));



//Setear COOKIE
app.get('/SetCookie', (req,res) => {
  res.cookie("NombreCookies", "valor").send("Mando algun valor a la pagina");


  //Cuando Cookie tiene firma se asigna la firma asi.
  res.cookie("CookieFirmada", "Valor",{
  	httpOnly: true, //Solo Modificable por protocolo HTTP
    signed: true, //COOKIE firmada
  })

});

//MaxAge: tiempo de expiracion 10
 res.cookie('server2', 'express2', {
    maxAge: 10000,
	httpOnly: true, //Solo se permite modificar la COOKIE desde PETICIONES del protocolo HTTP - No desde navegador
 }).send("Cookie Set!");



//Traer Cookies
app.get('/GetCookie', (req,res) => {
	req.cookies; //Trae todas las cookies

	req.signedCookies; //Cuando las COOKIES estan FIRMADAS la formade pedirlo


  res.send(req.cookies.NombreCookies); //Aparece el valor guardado
});


//Borrar Cookies
app.get("/DeleteCookies", (req, res) => {
  res.clearCookie('NombreCookies').send("Cookie Borrada");
});