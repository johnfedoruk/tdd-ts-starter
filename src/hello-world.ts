export class HelloWorld {
	private name:string;
	constructor(name:string) {
		this.name = name;
	}
	public sayHello():string {
		const greeting:string = `Hello, ${this.name}!`;
		return greeting;
	}
}