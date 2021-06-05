document.getElementById("demo").addEventListener('click', displayContent);

//normal function call with event listener
function displayContent(){
	document.getElementById("demo").innerHTML="test";

}

//invoking a function as a function
function myFunction(a, b) {
	return a*b;
}
myFunction(10, 2);

document.getElementById("invokingClick").addEventListener('click', functionIvoking);
function functionIvoking() {
	//console.log();
	document.getElementById("diameter").innerHTML = invokingFunction.fullName();
	var x = new myFunction1("John", "Doe");
	document.getElementById("createId").innerHTML = x.firstName + " " + x.lastName;
	console.log(x);
	return null;
}

//invoking function as a method
var invokingFunction = {
	firstName: "siva",
	lastName: "thirumal",
	fullName: function(){
			return this.firstName + " " + this.lastName;
	}
}
invokingFunction.fullName();

//invoking a function with a function constructor
function myFunction1(args1, args2){
	this.firstName = args1;
	this.lastName = args2;
	
}

//javascript call() method
var person = {
	fullName: function(){
		return this.firstName + " " + this.lastName;
	}
}

var person1 = {
	firstName: "John",
	lastName: "Doe"
}

var person2 = {
	firstName: "vikram",
	lastName: "sura"
}

person.fullName.call(person2);
console.log(person.fullName.call(person2));

// javascript call() method with param;
var personObj = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var personObj1 = {
  firstName:"John",
  lastName: "Doe"
}
personObj.fullName.call(person1, "Oslo", "Norway");

//javascript funxtion apply()
var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person1 = {
  firstName: "Mary",
  lastName: "Doe"
}
person.fullName.apply(person1);  // Will return "Mary Doe"
//The call() method takes arguments separately.

//The apply() method takes arguments as an array.
//The apply() Method with Arguments
var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
person.fullName.apply(person1, ["Oslo", "Norway"]);