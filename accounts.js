function findAccountById(accounts, id) {
  return accounts.find((account)=> account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB)=> nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1)
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
  
}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
