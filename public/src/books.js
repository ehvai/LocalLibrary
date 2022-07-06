function findAuthorById(authors, id) {
  return authors.find((author)=> author.id === id)
}

function findBookById(books, id) {
  return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {

  const borrowed = books.filter(book => book.borrows.some(trans => !trans.returned));
  const returned = books.filter(book => book.borrows.every(trans => trans.returned));
  return allBooks = [borrowed,returned];
  
/*  Alternative Way of Doing it
  const borrowedOrReturned = [[],[]];
  books.forEach(book => book.borrows[0].returned ? borrowedOrReturned[1].push(book) : borrowedOrReturned[0].push(book));
  return borrowedOrReturned;
  */
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map(trans => {
    const account = accounts.find(account => account.id === trans.id);
    return {...trans, ...account};
  }).slice(0,10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
