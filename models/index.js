const User = require('./User')
const Paper = require('./Paper')

User.hasMany(Paper, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
})

Paper.belongsTo(User, {
  foreignKey: 'user_id',
})

module.exports = { User, Paper }
