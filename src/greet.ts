let pression : string = 'hello';
let list : number[] = [1,2,3];
let list2 : Array<number> = [1,2,3];
let list3 : Array<any> = [1,'23',true];
let list4 : any[] = [1,'dfkl',false];

let input = [1,2];
let [first,last] = input;
[first,last] = [last,first];

let [f1,...rest] = [1,2,3,4];

let o = {
	a: 'liu',
	b: 29,
	c: 'dh'
}

let {a,b} = o;

let arr1 = [23,45];
let arr2 = [1,6];
let arr3 = [0,...arr1,...arr2,6];

class Stu {
	name= 'ldh';
	showName(){};
}

let stu1 = new Stu();
let clone = {...stu1};

function testFn() :void{
	console.log('testing....');
}




export function sayHello(name:string){
	return `${pression} from ${name}`;
}