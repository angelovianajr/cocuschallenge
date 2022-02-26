const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../../config/sequelize');

const Triangle = sequelize.define('triangles', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true
		},
		type: {
            type: DataTypes.STRING,
            allowNull: false
        },
		size_a: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		size_b: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		size_c: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
  	});

module.exports = Triangle;