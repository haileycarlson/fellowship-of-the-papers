const User = require('./User')
const Paper = require('./Paper')
const Comment = require('./Comment')

User.hasMany(Paper, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})

Paper.belongsTo(User, {
  foreignKey: 'user_id',
})

Paper.hasMany(Comment, {
  foreignKey: 'paper_id',
  onDelete: 'CASCADE',
})

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})

module.exports = { User, Paper, Comment }
