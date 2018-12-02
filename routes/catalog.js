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