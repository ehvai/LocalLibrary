function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
return books.reduce((counter, book) => {
  !book.borrows[0].returned ? counter++ : null;
  return counter;
}, 0);
}


function _sortingBooks(toBeSorted){
  toBeSorted.sort((objA, objB)=> objB.count - objA.count)
  toBeSorted.splice(5)
  return toBeSorted;
}


function getMostCommonGenres(books) {
const mostCommonGenres = books.reduce((genres,book)=> {
  const genreObj = genres.find(currGenre => currGenre.name === book.genre);
  !genreObj ? genres.push({
    name: book.genre,
    count: 1,
  }) : genreObj.count++;
  return genres;
}, []);
_sortingBooks(mostCommonGenres)
return mostCommonGenres;
}

function getMostPopularBooks(books) {
  const popularBooks = books.map(book => {
    return {
      name: book.title,
      count: book.borrows.length
    }
  })
  _sortingBooks(popularBooks);
  return popularBooks;
}

function getMostPopularAuthors(books, authors) {
  const popularAuthors = authors.map(author => {
    const booksBy = books.filter(book => book.authorId === author.id);
    const borrows = booksBy.reduce((acc, book) => acc + book.borrows.length, 0);
    const authorInfo = {
      name: `${author.name.first} ${author.name.last}`,
      count: borrows,
    };
    return authorInfo;
  })
  _sortingBooks(popularAuthors);
  return popularAuthors;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
