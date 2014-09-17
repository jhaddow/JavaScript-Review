//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

var Animal = function(species, name, legs, color, food){
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
}

//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

var person = function(name, age, height, gender){
  return {
    name: name,
    age: age,
    height: height,
    gender: gender,
  }
}

//Create a animal array and a person array.

var animals = [];
var persons = [];



//Create two instances of Animal and push those into your animal array

animals.push(new Animal('dog', 'spike', 4, 'brown', ['rabbit', 'dog food', 'water']));
animals.push(new Animal('cat', 'tom', 4, 'black', ['fish', 'insects', 'mice', 'cat food']));


//Create two instances of person and push those into your person array.

persons.push(person('Jess', 30, '5\'9', 'Male'));
persons.push(person('Mark', 28, '6\'3', 'Male'));


//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

Animal.prototype.eat = function() {
  var num = Math.floor(Math.random() * (this.food.length - 0) + 0);
  alert(this.name + ' ate ' + this.food[num]);
}

animals[0].eat();
animals[1].eat();
//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?
  //no, because the object was not created via a contructor and therefore cannot delegate.



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  it inserts code into the constructor function to delegate and return an obj.
  2) What's a good way to describe the keyword 'this'
  this refers to the object that is left of the dot at the time the method or property is called.
  3) Can a normal function which creates an object and then returns that object use the prototype?
    No, you must use a constructor.
  4) What happens if you forget to use 'new' when calling a constructor?
  it does not delegate or return an object. 
*/