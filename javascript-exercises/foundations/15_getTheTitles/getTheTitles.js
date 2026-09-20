const getTheTitles = function(books) {
    // return books.forEach(book => book.title);
    return books.map((book) => `${book.title}`);
};

// Do not edit below this line
module.exports = getTheTitles;
