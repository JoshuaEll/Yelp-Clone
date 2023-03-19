module.exports = (sequelize, Sequelize) => {
    const Reviews = sequelize.define("reviews", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: Sequelize.INTEGER,
            references: {
                model: User,

                key: id,
            }
        },
        business_id: {
            type: Sequelize.BIGINT,
            references: {
                model: Business,

                key: id,
            }
        },
        review: {
            type: Sequelize.TEXT,
            allowNull: true
        }
    });

    return Reviews;
};
