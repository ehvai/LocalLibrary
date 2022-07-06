function findAccountById(accounts, id) {
  return accounts.find((account)=> account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB)=> nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  books.forEach(book=> book.borrows.forEach(borrower => account.id === borrower.id ? total++ : null));
  return total;
}

function getBooksPossessedByAccount(account, books, authors) {
  let possessedBooks = []
  const findAuthor = (authors, id) => authors.find(author => author.id === id);
  possessedBooks = books.filter(book => book.borrows[0].id === account.id && !book.borrows[0].returned);
  possessedBooks = possessedBooks.map(book=> {
    const authorInfo = findAuthor(authors, book.authorId);
    const possessedBook = {...book, author: authorInfo};
    return possessedBook;
  })
  return possessedBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
