import dbConfig from "../config/db.config"
import { Sequelize } from "sequelize"
import lobbyModelCreator from "./lobby.model";
import personModelCreator from "./person.model";
import pairModelCreator from "./pair.model";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
});

const Lobby = lobbyModelCreator(sequelize);
const Person = personModelCreator(sequelize);
const Pair = pairModelCreator(sequelize);

Lobby.hasMany(Person);
Person.belongsTo(Lobby);
Lobby.hasOne(Pair);
Pair.belongsTo(Lobby);
Person.belongsToMany(Person, { through: Pair, as: 'parent', foreignKey: 'personGivingId'})
Person.belongsToMany(Person, { through: Pair, as: 'sibling', foreignKey: 'personReceivingId'})

export const db = {
    sequelize,
    Lobby: Lobby,
    Person: Person,
    Pair: Pair
}



