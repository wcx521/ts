

class Animal{
	constructor(private name:string){
		this.name = name;
	}
	move(meter=0){
		console.log(`${this.name} moved ${meter}`)
	}
}

class Snake extends Animal {
	constructor(name:string){
		super(name);
	}
	move(meter=3){
		console.log('i am small, and i love you !');
		super.move(meter);
	}
}

class Horse extends Animal{
	constructor(name:string){
		super(name);
	}
	move(meter=100){
		console.log('i am a horse, i am big');
		super.move(meter);
	}
}

let sss1 = new Snake('snake1');
let h1 = new Horse('horse2');

sss1.move(200);
h1.move(2000);






















