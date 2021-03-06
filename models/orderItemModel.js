const Sequelize = require("sequelize");

const sequelize = require("../database");

const OrderItem = sequelize.define('orderItem', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: Sequelize.INTEGER
});

module.exports = OrderItem;