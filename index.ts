import express from 'express';
import { db } from './models/sequelize'


const app = express();

app.use(express.json());

db.sequelize.sync({force: true})
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });



app.listen(3001, () => {
    console.log("Server started");
});