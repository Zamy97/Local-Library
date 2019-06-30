const Author = require('../models/author');

// Display list of all the Authors
exports.author_list = function(req, res, next) {

    Author.find()
        .sort([['family_name', 'ascending']])
        .exec(function (err, list_authors) {
            if (err) { return next(err); }
        //successfull, so render the view
        res.render('author_list', { title: 'Author List', author_list: list_authors });
    });
};

// Display detail page for a specific author
exports.author_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Author Details: '+ req.params.id);
};

// Display Author create form on GET
exports.author_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create GET');
};

// Handle Author Create on POST
exports.author_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create POST');
};

// Display Author delete form on GET
exports.author_delete_get = function(req, res) {
    res.send("NOT IMPLEMENTED: Author delete GET");
};

// Handle Author delete on POST
exports.author_delete_post = function(req, res) {
    res.send("NOT IMPLEMENTED: Author delete POST");
};

// Display Author Update form on GET
exports.author_update_get = function(req, res) {
    res.send("NOT IMPLEMENTED: Author update GET");
};

// Handle Author update on POST
exports.author_update_post = function(req, res) {
    res.send("NOT IMPLEMENTED: Author update Post");
};
