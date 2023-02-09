import { Sequelize, DataTypes } from "sequelize"

const pairModelCreator = (sequelize: Sequelize) => {
    const Pair = sequelize.define("pair", {
        
    })
    return Pair;
}

export default pairModelCreator;
    
