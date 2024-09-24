import express from 'express'
import mongoose, { mongo } from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import config from './config/config.js';
import viewRouter from './routes/site/site.routes.js';
import sessionRouter from './routes/session/session.routes.js';
import __dirname from './utils.js';
import session from 'express-session';
import MongoStore from 'connect-mongo';

const app = express();
const database = mongoose.connect("mongodb+srv://gonzaloezemolina:gonzalo2013@cluster0.n8ds0sl.mongodb.net/crm?retryWrites=true&w=majority&appName=Cluster0")

app.use(session({
    store: MongoStore.create({
        mongoUrl:"mongodb+srv://gonzaloezemolina:gonzalo2013@cluster0.n8ds0sl.mongodb.net/crm?retryWrites=true&w=majority&appName=Cluster0"
    }),
    resave:false,
    saveUninitialized:false,
    secret:'wolf',
    cookie: {
        secure: true,            
        httpOnly: true,         
        sameSite: 'None',        
    }
}));

app.use(cors({
    origin: 'http://localhost:3000', 
    credentials: true 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/static`));

const port = config.app.PORT;

const server = app.listen(port, () => {
    console.log(`Server is listening on PORT ${server.address().port}`);
});

app.use('/', viewRouter);
app.use('/api/sessions/', sessionRouter);


