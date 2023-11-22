const router = require('express').Router();
const charactersCtrl = require('../controllers/characters');
const { index,create,show,update,deleteOne } = require('../controllers/episodes');


// router.get('/', charactersCtrl.index);
router.post('/', charactersCtrl.create);
// router.get('/:id', charactersCtrl.show);
// router.put('/:id', charactersCtrl.update);
// router.delete('/:id', charactersCtrl.delete);

module.exports = router;