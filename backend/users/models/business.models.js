module.exports = (sequelize, Sequelize) => {
    const Business = sequelize.define("business", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        },
        city: {
            type: Sequelize.STRING,
            allowNull: false
        },
        state: {
            type: Sequelize.STRING,
            allowNull: false
        },
        stars: {
            type: Sequelize.DOUBLE,
            allowNull: false,
            defaultValue: 0.0
        },
        hours: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        categories: {
            type: Sequelize.ARRAY,
            allowNull: false
        }
    });

    return Business;
};
