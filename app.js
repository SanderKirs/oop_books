const ui = new UI()
const ls = new LS()

const form = document.querySelector('form');

form.addEventListener('submit', addBook);

function addBook(event){
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const isbnInput = document.querySelector('#isbn');

    let title = titleInput.value;
    let author = authorInput.value;
    let isbn = isbnInput.value;

    const book = new Book(title, author, isbn)

    ui.addBook(book)
    ls.addBook(book)

    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';
    event.preventDefault();
}