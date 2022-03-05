class UI{

    addUIElement(name, classname = '', textcontent = '', attributes = {}){
        const element = document.createElement('name');
        if(classname !== ''){
            element.className = classname
        }
        element.appendChild(document.createTextNode(textcontent));
        if(Object.keys(attributes).length > 0) {
            for(let key in attributes) {
                element.setAttribute(key, attributes[key])
            }
        }
        return element
    }

    addBook(book){
        const tr = this.addUIElement('tr');

        for(let name in book){
            let td = this.addUIElement('td', '', book[name]);
            tr.appendChild(td);
        }

        let td = this.addUIElement('td');
        const link = this.addUIElement('a', '', 'X', {'href':'#'});

        td.appendChild(link);
        tr.appendChild(td);

        const booksList = document.querySelector('#books-list');

        booksList.appendChild(tr);
    }

}