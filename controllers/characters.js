const Character = require('../models/Character');

module.exports = {
    create,
    index,
    show,
    update,
    delete: deleteOne,
};
    function create(req,res) {
        Character.create(req.body)
        .then(character => {res.json(character)})
        .catch(err => res.status(422).json(err));
    };
    
    function index(req,res) {
        Character.find({})
        .then(characters => {res.json(characters)})
        .catch(err => res.status(422).json(err));
    };

    function show(req,res) {
        Character.findById(req.params.id)
        .then(character => res.json(character))
        .catch(err => res.status(422).json(err));
    };

    function update(req,res) {
        Character.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        })
          .then(character => res.json(character))
          .catch(err => res.status(422).json(err));
    };

    function deleteOne(req,res) {
        Character.findById({ _id: req.params.id })
        .then(character => character.remove())
        .then(character => res.json(character))
        .catch(err => res.status(422).json(err));
    };
