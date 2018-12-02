const express = require('express');
const router = express.Router();

// Require Controller Modules
const book_controller = require('../controllers/bookController');
const author_controller = require('../controllers/authorController');
const genre_controller = require('../controllers/genreController');
const book_instance_controller = require('../controllers/bookinstanceController');


/// Book routes ///

// GET catalog home page
reouter.get('/', book_controller.index);

// GET request for creating a book
router.get('/book/create', book_controller.book_create_get)

// Post Request for creating book
router.post('/book/create', book_controller.book_create_post)

// GET request to delete book
router.get('/book/:id/delete', book_controller.book_delete_get)

// POST request to delete book
router.post('/book/:id/delete', book_controller.book_delete_post)

// GET request to update Book.
rputer.get('/book/:id/update', book_controller.book_update_get)


// POST request to update Book.
router.post('/book/:id/update', book_controller.book_update_post)

// GET request for one Book.
router.get('/book/:id', book_controller.book_detail)

// GET request for list of all Book items.
router.get('/books', book_controller.book_list)



/// Author Routes //

// GET request for creating Author

route.get('/author/create', author_controller.author_create_get);

// POST request for creating Author
router.post('/author/create', author_controller.author_create_post)

// GET request to delete author
router.get('/author/:id/delete', author_controller.author_delete_get)

// POST request to delete author
router.post('/author/:id/delete', author_controller.author_delete_post)

//GET request to update Author
router.get('/author/:id/update', author_controller.author_update_get)

//POST request to update Author
router.post('/author/:id/update', author_controller.author_update_post)

// GET request for one Author
router.get('author/:id', author_controller.author_detail)

// GET request for list of all authors
router.get('/authos', author_controller.author_list)

/// GENRE ROUTES ///

// GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
router.get('/genre/create', genre_controller.genre_create_get);

//POST request for creating Genre.
router.post('/genre/create', genre_controller.genre_create_post);

// GET request to delete Genre.
router.get('/genre/:id/delete', genre_controller.genre_delete_get);

// POST request to delete Genre.
router.post('/genre/:id/delete', genre_controller.genre_delete_post);

// GET request to update Genre.
router.get('/genre/:id/update', genre_controller.genre_update_get);

// POST request to update Genre.
router.post('/genre/:id/update', genre_controller.genre_update_post);

// GET request for one Genre.
router.get('/genre/:id', genre_controller.genre_detail);

// GET request for list of all Genre.
router.get('/genres', genre_controller.genre_list);
