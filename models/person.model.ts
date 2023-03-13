import { Sequelize, DataTypes } from 'sequelize'

const personModelCreator = (sequelize: Sequelize) => {
    const Person = sequelize.define("person", {
        name: DataTypes.STRING,
        hash: DataTypes.STRING
    })
    return Person;
}

export default personModelCreator;


    
