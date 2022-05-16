const User = require('./User');

const Book = require('./Book');


User.hasMany(Book, {
  foreignKey: 'user_id',
  constraints:'FALSE'
});

Book.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete:'SET NULL',
  constraints:'FALSE'
});



module.exports = { User, Book  }; 