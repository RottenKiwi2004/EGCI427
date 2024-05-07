/*
In-Class 11 (ES6): Class Inheritances
Create 
class “Jedi” and 
Class Sith inherited from Class “Jedi” that can show the result as shown below.
*/
//---------Declare Objects--------/

class Jedi {
		constructor() {
				this.forceIsDark = false;
		}

		say() {
				console.log(this.forceIsDark ? "Yes, Master" : "Hello OB1");
		}

		force() {
				return this.forceIsDark ? "Join the dark side" : "Fear is the path to the dark side";
		}
}

class Sith extends Jedi {
		constructor() {
				super();
				this.forceIsDark = true;
		}

		say() {super.say();}
		force() {return super.force();}
}



let yoda = new Jedi();
let darth = new Sith();
yoda.say()
darth.say();
console.log(yoda.forceIsDark);
console.log(darth.forceIsDark);
console.log(yoda.force());
console.log(darth.force());


//---------Output--------//
/*
"Hello, OB1"
"Yes, Master"
false
true
Fear is the path to the dark side
Join the dark side
*/