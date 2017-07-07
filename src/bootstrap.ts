import { HelloWorld } from "./hello-world";

declare const document:any;

const hw = new HelloWorld("world");

try {
	document.querySelector("main").innerHTML = hw.sayHello();
}catch(e){console.warn(e)};