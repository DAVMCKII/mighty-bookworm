// const router = require('express').Router();
// const { Genre } = require('../../models');


// // SET UP POST ROUTE TO ADD BOOK TO DATABASE TO DATABASE

// router.post('/', (req, res) => {

//     Genre.create({
//         category: req.body.category
//         })
//         .then(dbGenreData => res.json(dbGenreData))
//         .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });

// });

// // GET ROUT TO FIND ALL BOOKS IN LIBRARY
// router.get('/', (req, res) => {
  
//   Genre.findAll({
  
// })
//     .then(dbGenreData => res.json(dbGenreData))
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });
// //  GET ROUTES FOR FINDING SPECIFIC ENTRY
// router.get('/:id', (req, res) => {
//   Genre.findOne({

//       where: {
//       id: req.params.id
//     }
//   })
//     .then(dbGenreData=> {
//       if (!dbGenreData) {
//         res.status(404).json({ message: 'No user found with this id' });
//         return;
//       }
//       res.json(dbGenreData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.get('/:id', (req, res) => {
//   Genre.findOne({

//       where: {
//       id: req.params.id
//     }
//   })
//     .then(dbGenreData=> {
//       if (!dbGenreData) {
//         res.status(404).json({ message: 'No user found with this id' });
//         return;
//       }
//       res.json(dbGenreData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// // DELETE ROUTE TO REMOVE BOOK FROM LIBRARY

// router.delete('/:id', (req, res) => {
//   Genre.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//     .then(dbGenreData => {
//       if (!dbGenreData) {
//         res.status(404).json({ message: 'No user found with this id' });
//         return;
//       }
//       res.json(dbGenreData);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// module.exports = router