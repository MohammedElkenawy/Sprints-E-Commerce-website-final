const Sequelize = require("sequelize");

const sequelize = require("../database");

const Cart = sequelize.define('cart', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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

module.exports = Cart;