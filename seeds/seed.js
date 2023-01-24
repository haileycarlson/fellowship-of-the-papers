const sequelize = require('../config/connection')
const { User, Paper } = require('../models')

const userData = require('./userData.json')
const paperData = require('./paperData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true })

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  })

  for (const paper of paperData) {
    await Paper.create({
      ...paper,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    })
  }

  process.exit(0)
}

seedDatabase()
