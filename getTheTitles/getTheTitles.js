const getTheTitles = function(books) {
    let arrayOfBooks=[];
    books.forEach(book => {
        arrayOfBooks.push(book.title);
    })
    return arrayOfBooks;

}

module.exports = getTheTitles;
