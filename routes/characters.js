const router = require('express').Router();
const { index,create,show,update,deleteOne } = require('../controllers/characters');


router.get('/', index);
router.post('/', create);
router.get('/:id', show);
router.put('/:id', update);
// router.delete('/:id', delete);

module.exports = router;