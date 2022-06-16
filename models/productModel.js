const Sequelize = require("sequelize");

const sequelize = require("../database");

const Product = sequelize.define('product', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      imageUrl: {
        type: Sequelize.STRING
      },
      price : {
          type: Sequelize.INTEGER,
          allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      coupon: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
});

module.exports = Product;