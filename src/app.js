import config from "./config/config.js";
import express from 'express';
import viewRouter from "./router/views.router.js";
import contactRouter from "./router/contact.router.js";
import Handlebars from "handlebars";
import { allowInsecurePrototypeAccess } from "@handlebars/allow-prototype-access";
import ExpressHandlebars  from "express-handlebars";
import __dirname from "./utils.js";
import mongoose from "mongoose";


export const app = express();

const PORT = config.app.PORT;

const server = app.listen(PORT, () =>{
    console.log(`Server HTTP is listening on PORT ${server.address().port}`);
})

server.on("Error", error => console.log(`Error en el servidor ${error}`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`))


//Handlebars
  app.engine('handlebars',ExpressHandlebars.engine({handlebars: allowInsecurePrototypeAccess(Handlebars),}));
  app.set("view engine", "handlebars" );
  app.set("views", __dirname+ "/views");


app.use("/", viewRouter);
app.use("/api/contacts", contactRouter);

//Mongo
mongoose.set('strictQuery', false)
const conexion = mongoose.connect(config.mongo.URL)