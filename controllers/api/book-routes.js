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

// GET ROUT TO FIND ALL BOOKS IN LIBRARY
router.get('/', (req, res) => {
  
  Book.findAll({
  
})
    .then(dbBookData => res.json(dbBookData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
//  GET ROUTES FOR FINDING SPECIFIC ENTRY
router.get('/:id', (req, res) => {
  Book.findOne({

      where: {
      id: req.params.id
    }
  })
    .then(dbBookData=> {
      if (!dbBookData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbBookData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
  Book.findOne({

      where: {
      id: req.params.id
    }
  })
    .then(dbBookData=> {
      if (!dbBookData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbBookData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE ROUTE TO REMOVE BOOK FROM LIBRARY

router.delete('/:id', (req, res) => {
  Book.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbBookData => {
      if (!dbBookData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbBookData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router


