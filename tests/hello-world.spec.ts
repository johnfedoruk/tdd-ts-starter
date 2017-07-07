import { HelloWorld } from "../src/hello-world";
import { expect } from "chai";

describe('Hello function', () => {
	it('should return a greeting', () => {
		const hw = new HelloWorld("world");
		const result = hw.sayHello();
		expect(result).to.equal('Hello, world!');
	});
});