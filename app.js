const express=require("express")
require("dotenv").config
const app = express();
const path = require('path');
const cors = require('cors')



// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// parse application/json
app.use(express.json())


const port = process.env.PORT||8000

// CARPETA ESTÁTICA
app.use(express.static(__dirname + '/public'));

// CONFIGURAR INGENIERIA DE PLANTILLAS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('views', path.join(__dirname, 'views')); 

// 404

// LLAMAR RUTAS FRONT

//INDEX
app.use("/", require("./routes/indexRoutes"));

// //EDITOR
// app.use("/editor", require("./routes/editorRoutes"));

// //ADMIN
// app.use("/admin", require("./routes/adminRoutes"));





// PUERTO EN LA ESCUHA 
app.listen(port, () => {
    console.log(`servidor front a la escucha del puerto ${port}`);
});
