//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category. 

var favoriteThings = {
    band: 'Weezer',
    food: 'pizza',
    person: 'Thomas Jefferson',
    book: 'Ender\'s Game',
    movie: 'The Matrix',
    holiday: 'Independence Day'
}

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

favoriteThings.car = 'Porsche 911';
favoriteThings.brand = 'Adidas';

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'. 

favoriteThings.food = 'Lettuce';
favoriteThings.book = '50 Shades of Grey';

//Now, alert your favorite person, then alert your favorite book.

alert(favoriteThings.person);
alert(favoriteThings.book);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.

for (var key in user) {
    if (!user[key]) {
        delete user[key];
    }
}

console.log(user);

//Once you get your truthy array, Change the remaining values in the array to be specific to you (name: 'your name', username: 'your username'), rather than my information.

var me = {
    name: 'Jess Haddow',
    email: 'jess.haddow@gmail.com',
    pwHash: 'U-eiosnafDsn',
    birthday: 'December 11, 1983',
    username: 'jhaddow',
    age: 30
}

for (key in user) {
    if (me.hasOwnProperty(key)) {
        user[key] = me[key];
    }
}
//Now console.log your object and make sure it looks right.

console.log(user);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection. 

var methodCollection = {};
//Now add two methods (functions that are properties on objects) to your methodCollection object. One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console. 

methodCollection.alertHello = function() {alert('Hello');}
methodCollection.logHello = function() {console.log('Hello');}

//Now call your alertHello and logHello methods. 

methodCollection.alertHello();
methodCollection.logHello();


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called voweler that accepts a string, and returns an object with the keys being all the vowels in that string, and the values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};

var voweler = function(str) {
  var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  var vowelObj = {};
  for(var i = 0; i < str.length; i++) {
    if(vowels.indexOf(str[i]) != -1){
      if(vowelObj.hasOwnProperty(str[i])){
        vowelObj[str[i]] += 1;
      }
      else {
        vowelObj[str[i]] = 1;
      }
    }
  }
  return vowelObj;
}

console.log(voweler('This is a test'));
