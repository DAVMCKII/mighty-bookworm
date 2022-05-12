const router = require('express').Router();
const { Book } = require('../../models');


// SET UP POST ROUTE TO ADD BOOK TO DATABASE TO DATABASE

router.post('/', (req, res) => {

    Book.create({
        title: req.body.title,
        subtitle: req.body.subtitle,
        author: req.body.author,
        page_count: req.body.page_count,
        isbn: req.body.isbn
        })
        .then(dbBookData => res.json(dbBookData))
        .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });

});

module.exports = router


