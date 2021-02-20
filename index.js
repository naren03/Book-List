const title = document.querySelector('#title');
const author = document.querySelector('#author');
const isbn = document.querySelector('#isbn');
const list = document.querySelector('#list');

//event listner
document.querySelector('button').addEventListener('click', addBook);
document.addEventListener('click', deleteBook);

//Book constructor
class Book {
	constructor(title, author, isbn) {
		this.title = title;
		this.author = author;
		this.isbn = isbn;
	}
}

//UI constructor
class UI {
	constructor() {}
	//add method
	add(book) {
		let tr = document.createElement('tr');
		tr.innerHTML = `<td>${book.title}</td>
						<td>${book.author}</td>
						<td>${book.isbn}</td>
						<td>
							<i class="delete fa fa-trash"></i>
						</td>`;

		list.appendChild(tr);
	}
	delete(e) {
		if (e.target.classList.contains('delete')) {
			const deleteBook = e.target.parentElement.parentElement;
			deleteBook.remove();
		}
	}
}

//addBook
function addBook() {
	if (title.value === '' || author.value === '' || isbn.value === '') {
		//error msg
		showAlert('Enter Valid Value', 'failure');
	} else {
		//instanciating book constructor
		const book = new Book(title.value, author.value, isbn.value);

		//instanciating ui constructor
		const ui = new UI();

		//using ui method add book into ui
		ui.add(book);

		//succes msg
		showAlert('Book Entered Successfully', 'success');

		//clear fields
		clearField();
	}
}
//deleteBook
function deleteBook(e) {
	const ui = new UI();
	ui.delete(e);
}
//clear fields
function clearField() {
	(title.value = ''), (author.value = ''), (isbn.value = '');
}

//show alert message
function showAlert(msg, option) {
	const message = document.createElement('p');
	message.classList.add(option);
	let text = document.createTextNode(msg);
	message.appendChild(text);

	document
		.querySelector('.container')
		.insertBefore(message, document.querySelector('h3'));

	setTimeout(function () {
		document.querySelector('p').remove();
	}, 2000);
}
