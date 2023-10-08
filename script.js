function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function () {
    let infoString = `${title} by ${author}, ${pages} pages, `;
    infoString += read ? "already read" : "not read yet";
    return infoString;
  };
}

const book1 = new Book("Malazan", "Erikson", 600, true);
const book2 = new Book("Dune", "Herbert", 700, false);
console.log(book1.info());
console.log(book2.info());
