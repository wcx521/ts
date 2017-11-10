interface Person {
	name: string
}

function showName(p1: Person){
	console.log(p1.name);
}

let p1 = {
	name: 'ldh',
	age: 39,
	sex: 'male',
    job: 'IT'
}

showName(p1)


interface Flower{
	color?: string,
	price?: number
}

function sell(f1: Flower) : {color: string}{
	var f2 = {color: 'blue', height: 25};
	if(f1.color){
		f2.color = f1.color;
	}
	return f2;
}

let s1 = sell({color:'red',price:34});
