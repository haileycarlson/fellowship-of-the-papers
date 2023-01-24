const router = require('express').Router();
const { paper } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newpaper = await paper.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newpaper);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const paperData = await paper.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!paperData) {
      res.status(404).json({ message: 'No paper found with this id!' });
      return;
    }

    res.status(200).json(paperData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
