const Episode = require('../models/Episode');

module.exports = {
    create,
    index,
    show,
    update,
    delete: deleteOne,
};
    function create(req,res) {
        Episode.create(req.body)
        .then(episode => {res.json(episode)})
        .catch(err => res.status(422).json(err));
    };
    
    function index(req,res) {
        Episode.find({})
        .then(episodes => {res.json(episodes)})
        .catch(err => res.status(422).json(err));
    };

    function show(req,res) {
        Episode.findById(req.params.id)
        .then(episode => res.json(episode))
        .catch(err => res.status(422).json(err));
    };

    function update(req,res) {
        Episode.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        })
          .then(episode => res.json(episode))
          .catch(err => res.status(422).json(err));
    };

    function deleteOne(req,res) {
        Episode.findById({ _id: req.params.id })
        .then(episode => episode.remove())
        .then(episode => res.json(episode))
        .catch(err => res.status(422).json(err));
    }
