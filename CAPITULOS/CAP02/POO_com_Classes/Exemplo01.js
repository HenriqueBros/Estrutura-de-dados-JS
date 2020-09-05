class Book {
    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }
    printIsbn() {
        console.log(this.isbn);
    }
}

let book = new Book('title', 'pages', 'isbn');
console.log(book.title);
book.title = 'new title';
console.log(book.title);