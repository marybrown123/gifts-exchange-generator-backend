import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { db } from './models/sequelize'
import routerLobby from './routes/lobby.routes'
import cors from 'cors';
const app = express();

app.use(express.json());

app.use(cors({
    credentials: true,
    preflightContinue: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH' , 'DELETE', 'OPTIONS'],
    origin: true
}))

db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

app.use('/lobby', routerLobby)

app.listen(3001, () => {
    console.log("Server started");
});
