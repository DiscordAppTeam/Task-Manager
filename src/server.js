const express = require("express");
const path = require("path");
const pages = require("./pages");
require('dotenv/config');
const server = express();
const bodyParser = require("body-parser");

const Task = require("../public/models/Task");

server
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(express.static("public"))

  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  .get("/", (req,res) => { 
    return res.redirect("/main")
  })

  .get("/main", (req, res) => {
      Task.findAll().then((tasks) => {
          return res.render('main', {tasks})
      })
  });

server.post("/sendTodo", (req, res) => {
  Task.create({
    title: req.body.title,
    description: req.body.description,
    data: req.body.date,
    hour: req.body.hour,
    email: req.body.email,
    phone: req.body.phone,
  })
    .then(() => {
      return res.redirect("/main");
    })
    .catch((error) => {
      console.log("Erro: " + error);
    });
});

server.get('/remove/:id', (req, res) => {
    Task.destroy({
        where: {'id' : req.params.id}
    }).then(() => {
      return res.redirect("/main");
    })
    .catch((error) => {
        console.log("Erro: " + error);
      });
})

const port =  process.env.PORT
server.listen(port);
console.log("Servidor conectado na porta: " + port)