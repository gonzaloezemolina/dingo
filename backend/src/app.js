import dotenv from 'dotenv'
dotenv.config();
import express from 'express'
import mongoose, { mongo } from 'mongoose'
import multer from 'multer';
import morgan from 'morgan'
import cors from 'cors'
import config from './config/config.js';
import viewRouter from './routes/site/site.routes.js';
import sessionRouter from './routes/session/session.routes.js';
import userRouter from './routes/software/user.routes.js'
import contactsRouter from './routes/software/contacts.routes.js'
import taskRouter from './routes/software/task.routes.js'
import paymentRouter from './routes/payment/payment.routes.js'
import budgetRouter from './routes/software/budget.routes.js'
import __dirname from './utils.js';
import session from 'express-session';
import MongoStore from 'connect-mongo';

const app = express();
const database = mongoose.connect(config.mongo.URI)


app.use(session({
    store: MongoStore.create({
        mongoUrl:config.mongo.URI
    }),
    resave:false,
    saveUninitialized:false,
    secret:'wolf',
     sameSite: 'none'
}));

app.use(cors({
    origin: config.front.FRONT, 
    credentials: true 
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/static`));

const port = config.app.PORT;

const server = app.listen(port, () => {
    console.log(`Server is listening on PORT ${server.address().port}`);
});

app.use(morgan('dev'));
app.use('/', viewRouter);
app.use('/api/sessions/', sessionRouter);
app.use('/api/users/', userRouter);
app.use('/api/contacts/', contactsRouter);
app.use('/api/tasks/', taskRouter);
app.use('/api/mercadopago/', paymentRouter);
app.use('/api/budgets/', budgetRouter)


