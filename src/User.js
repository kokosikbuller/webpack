export default class User {
	constructor(name) {
		this.name = name;
	}

	get fullName() {
		console.log(this.name);
	}

	async getUser() {
		const response = await fetch(
			'https://jsonplaceholder.typicode.com/todos/1'
		);
		console.log(response);
	}
}
