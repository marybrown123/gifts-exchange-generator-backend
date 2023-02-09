import { Sequelize, DataTypes } from "sequelize"

const lobbyModelCreator = (sequelize: Sequelize) => {
    const Lobby = sequelize.define("lobby", {
        name: DataTypes.STRING
    })
    return Lobby;
}

export default lobbyModelCreator;
    
