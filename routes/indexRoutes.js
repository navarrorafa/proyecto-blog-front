const express = require("express");
const router = express.Router()

const { todasNews,login,logear} = require('../controllers/indexController')



//pagina de intex
router.get("/", todasNews);

//login
router.get("/login",login);

//logear 
router.post("/logeado",logear )



module.exports = router