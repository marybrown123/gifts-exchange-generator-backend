import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { db } from './models/sequelize'
import routerLobby from './routes/lobby.routes'
import cors from 'cors';
const app = express();

app.use(cors())

app.use(express.json());

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
