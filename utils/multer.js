const multer = require('multer')
const { storage } = require('./cloudinary')
// Multer config
module.exports = multer({
  storage: storage,
})
