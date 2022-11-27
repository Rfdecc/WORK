const express = require('express');
const AuthController = require("./controllers/AuthController");
const AdminController = require("./controllers/AdminController");
const authentiateMiddleware = require("./middlewares/authenticate");
const indexTeste = require("./controllers/index");

const app = express();

app.use(express.json());

app.use("/auth", AuthController)
app.use("/", indexTeste)
app.use("/admin", authentiateMiddleware, AdminController);

app.listen(3001, ()=>{
    console.log('Server is running');

});