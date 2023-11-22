const router = require('express').Router();
const { index,create,show,update,deleteOne } = require('../controllers/episodes');

router.get('/', index);
router.post('/', create);
router.get('/:id', show);
router.put('/:id', update);
// router.delete('/:id', deleteOne);

module.exports = router;