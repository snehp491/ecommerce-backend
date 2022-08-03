const router = require('express').Router();
const {Category, Product} = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    // find all categories
    // be sure to include its associated Products
    Category.findAll({
        include: [Product],

    }).then(categories => res.json(categories))
        .catch(err => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    Category.findOne({
        where: {
            id: req.params.id
        }, include: [Product],
    }).then(singleCategory => res.json(singleCategory))
        .catch(err => res.status(500).json(err))
});

router.post('/', (req, res) => {
    // create a new category
    Category.create(req.body)
        .then(createdCategory => res.json(createdCategory))
        .catch(err => res.status(500).json(err))
});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
    Category.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(updatedCategory => res.json(updatedCategory))
        .catch(err => res.status(500).json(err))
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    Category.destroy({
        where: {
            id: req.params.id
        }
    }).then(deletedCategory => res.json(deletedCategory))
        .catch(err => res.status(500).json(err))
});

module.exports = router;
