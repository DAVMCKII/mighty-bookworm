const User = require('./User');

const Book = require('./Book');


User.hasMany(Book, {
  foreignKey: 'user_id'
});

Book.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete:'SET NULL'
});



module.exports = { User, Book  }; 