const mongoose = require('mongoose');
const moment = require('moment');

const Schema = mongoose.Schema;

const BookInstanceSchema = new Schema(
    {
        book: { type: Schema.Types.ObjectId, ref: 'Book', required: true }, // reference to the associated book
        imprint: { type: String, required: true },
        status: { type: String, required: true, enum: [ 'Available', 'Maintenance', 'Loaned', 'Reserved' ], default: 'Maintenance' },
        due_back: { type: Date, default: Date.now }
    }
);

// Virtual for BOOK Instance's URL
BookInstanceSchema
.virtual('url')
.get(function () {
    return moment(this.due_back).format('MMMM Do, YYYY')
    return '/catalog/bookinstance' + this._id;
});

// Export Model
module.exports = mongoose.model('BookInstance', BookInstanceSchema);
