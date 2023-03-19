module.exports = (sequelize, Sequelize) => {
    const Photos = sequelize.define("photos", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        business_id: {
            type: Sequelize.INTEGER,
            references: {
                model: Business,

                key: id,
            }
        },
        caption: {
            type: Sequelize.STRING,
        },
        label: {
            type: Sequelize.STRING,
        }
    });

    return Photos;
};



// NOTE FOR TODO APP CHECK IF I CAN USE USESTATE TO RELOAD