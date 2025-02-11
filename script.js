//your JS code here. If required.
const asyncFun = async ()=>{
	const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
	const data = response.json();
	console.log(data);
}
asyncFun();