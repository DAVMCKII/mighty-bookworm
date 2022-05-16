const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// create our User model
class Book extends Model {}

Book.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subtitle: {
      type: DataTypes.STRING,
      allowNull: true,
      
      
    },

    genre:{
      type: DataTypes.STRING,
      allowNull: false

    },

    author: {
        type: DataTypes.STRING,
        allowNull: false,



    },
    page_count:{
        type: DataTypes.INTEGER,
        allowNull: false,


    },
    isbn:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true

    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id'
      }  
    },
 
},
 {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: 'book'
  }
);

module.exports = Book;