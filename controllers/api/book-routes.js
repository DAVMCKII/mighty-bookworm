const router = require('express').Router();
const { User, Book } = require('../../models');


// SET UP POST ROUTE TO ADD BOOK TO DATABASE TO DATABASE

router.post('/', (req, res) => {
console.log(req.body)
    Book.create({
        bookTitle: req.body.bookTitle,
        bookSubtitle: req.body.bookSubtitle,
        bookGenre: req.body.bookGenre,
        bookAuthor: req.body.bookAuthor,
        page_count: req.body.page_count,
        bookDescription: req.body.bookDescription
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
     attributes: ['id', 
     'bookTitle',
     'bookSubtitle', 
     'bookGenre',
     'bookAuthor',
     'page_count',
      'bookDescription'],
 include: [
      {
        model: User,
        attributes: ['username'],
      
        }
    ]  
})
    .then(dbBookData => res.json(dbBookData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/:id', (req, res) => {
  Book.findOne({

     attributes: ['id', 
     'bookTitle',
     'bookSubtitle', 
     'bookGenre',
     'bookAuthor',
     'page_count',
      'bookDescription'],

      where: {
      id: req.params.id
    },
        include: [
      {
        model: User,
        attributes: ['username'],
      },
     
        
    ]  
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

module.exports = router;


