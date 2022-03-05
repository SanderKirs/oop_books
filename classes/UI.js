class UI{
    addBook(book){
        const tr = document.createElement('tr');

        for(let name in book){
            let td = document.createElement('td');
            let text = document.createTextNode(book[name]);
            td.appendChild(text);
            tr.appendChild(td);
        }

        let td = document.createElement('td');
        const link = document.createElement('a');

        link.setAttribute('href', '#');
        link.appendChild(document.createTextNode('X'));

        td.appendChild(link);
        tr.appendChild(td);

        const booksList = document.querySelector('#books-list');

        booksList.appendChild(tr);
    }

}