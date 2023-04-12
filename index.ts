import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { db } from './models/sequelize'
import routerLobby from './routes/lobby.routes'
import cors from 'cors';
const app = express();

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

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
