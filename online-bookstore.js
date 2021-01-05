class BookStore {
	constructor(users, books, paymentSystem, search) {
		this.users = users;
		this.books = books;
		this.paymentSystem = paymentSystem;
		this.search = search;
	}

	addUser() { }
	addBook() { }
	removeBook() { }
}

class User {
	id = null;
	storedCreditCard = null;
	shoppingCart = new Order()
	constructor(name, email, password, address) {
		this.name = name;
		this.email = email;
		this.password = password;
		this.address = address;
		this.generateId();
	}

	generateId() {
		this.id = `${this.name}-${this.email}`;
	}
	login(email, password) { }
	updateAddress(address) { }
	searchForBook(searchInput) { }
	checkout() { }
}

class Book {
	id = null;

	constructor(title, author, price, count, type) {
		this.title = title;
		this.author = author;
		this.price = price;
		this.count = count;
		this.type = type;

		this.generateId();
	}

	generateId() {
		this.id = `${this.title}-${this.author}`;
	}
	updatePrice() { }
	decrementCount() { }
	incrementCount() { }
	changeCount() { }
}

class Order {
	books = []
	paymentSystem = new PaymentSystem();

	addBook(book) {
		this.books.push(book);
	}
	removeBook({ title }) {
		this.books.filter((book) => book.title !== title);
	}
	pay(creditCard, user) {
		this.paymentSystem.processPayment
	}
}

class PaymentSystem {
	orders = [];
	permittedCreditCards = ['Visa'];

	processPayment(creditCard, user) { }
}

const user = new User('nick', 'nick.com', 'asdf', '435 club drive');
const book = new Book('The Godfather');
const paymentSystem = new PaymentSystem();

const bookstore = new BookStore([user], [book], paymentSystem)

console.log(bookstore)
bookstore.users[0].shoppingCart.addBook('test');
console.log(bookstore.users[0].shoppingCart.books)
