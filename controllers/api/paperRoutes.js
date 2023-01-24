const router = require('express').Router()
const { Paper } = require('../../models')
const withAuth = require('../../utils/auth')
const upload = require('../../utils/multer')

router.post('/', withAuth, upload.single('paperfile'), async (req, res) => {
  try {
    console.log(req.file.path)
    const newpaper = await Paper.create({
      name: req.body.name,
      description: req.body.description,
      paper_url: req.file.path,
      user_id: req.session.user_id,
    })

    res.status(200).json(newpaper)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
})

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const paperData = await paper.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    })

    if (!paperData) {
      res.status(404).json({ message: 'No paper found with this id!' })
      return
    }

    res.status(200).json(paperData)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
