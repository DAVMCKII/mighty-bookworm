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
    bookTitle: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bookSubtitle: {
      type: DataTypes.STRING,
      allowNull: true,
      
      
    },

    bookGenre:{
      type: DataTypes.STRING,
      allowNull: true

    },

    bookAuthor: {
        type: DataTypes.STRING,
        allowNull: true,



    },
    page_count:{
        type: DataTypes.INTEGER,
        allowNull: false,


    },
    bookDescription:{
        type: DataTypes.STRING(10000),
        allowNull: false,
        

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