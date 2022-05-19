const router = require('express').Router();
const { User, Book } = require('../../models');


// SET UP POST ROUTE TO ADD BOOK TO DATABASE TO DATABASE

router.post('/', (req, res) => {
console.log(req.body)
    Book.create({
        title: req.body.title,
        subtitle: req.body.subtitle,
        genre: req.body.genre,
        author: req.body.author,
        page_count: req.body.page_count,
        description: req.body.description
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
     'title',
     'subtitle', 
     'genre',
     'author',
     'page_count',
      'description'],
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

     attributes: ['id', 'title', 'subtitle','genre', 'author', 'page_count', 'description'],

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


