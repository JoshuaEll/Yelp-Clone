module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        favourites: {
            type: Sequelize.BIGINT,
            references: {
                model: Business,

                key: id,
            },
            allowNull: false
        },
        is_admin: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });

    return User;
};



// NOTE FOR TODO APP CHECK IF I CAN USE USESTATE TO RELOAD