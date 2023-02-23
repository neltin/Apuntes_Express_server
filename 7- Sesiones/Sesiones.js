//npm i express-session
const session = require('express-session');

//Inicializacion
app.use(session({
  secret: 'Clave de la secion',
  resave: false, //Cuando esta en true si el usuario no esta conectado mantiene la sesion activa
  saveUninitialized: false, //Guarda sesiones cuando aun no estan activas. Una sesion vacia.
}));


/**
 * Si queremos guardar datos en la sesion 
 * req.session.dato = "";
 */ 

app.get('/login', (req, res) => {
  const { email } = req.query;
  req.session.email = email;
  req.session.isAdmin = email.split('@')[1].includes('admin') ?? false; //Si tienen @amin entonces es Admin
  res.redirect('/profile');
});

/**
 * Destruir una session
 * --------------------
 * 
 * req.session.destroy();
 */

app.get('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      res.send({ error });
    } else {
      res.send("Logout OK!");
    }
  });
});


//MiddleWare paraAutorizar que puede ingresar a las distintas secciones de Administrador, sino lo es niega el accesso
const auth = (req, res, next) => {
  if (req.session?.isAdmin) {   //El signo de pregunta (?) opcional channig si existe no mira si hay un objeto isAdmin
    return next();
  } else {
    res.status(401).send('<h1 style="color: red;">Unauthorized</h1>')
  }
};

//Si ingresamos a una seccion que necesita que se Administrador llamamos al MiddleWare auth
app.get('/admin', auth, (req, res) => {
  res.send('<h1 style="color: green;">Admin content SHHHH!</h1>')
});


