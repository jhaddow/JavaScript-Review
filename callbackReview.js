/* Declare and Define the functions here that will make the function calls below work properly */
var first = function(arr, callback){
  callback(arr[0]);
}

var last = function(arr, callback){
  callback(arr[arr.length -1]);
}

var contains = function(arr, item, callback){
  callback(arr.indexOf(item) !== -1);
}
var map = function(arr, callback){
  for (var i=0; i < arr.length; i++){
    arr[i] = callback(arr[i]);
  }
}

var uniq = function(arr, callback){
  for(var i=0; i<arr.length; i++){
    if(arr.indexOf(arr[i], i+1) !== -1){
      arr.splice(arr.indexOf(arr[i]), 1);
      i--;
    }
  }
  callback(arr);
}

var each = function (arr, callback){
  for(var i = 0; i < arr.length; i++){
    callback(arr[i], i);
  }
}

var getUserById = function (arr, id, callback){
  for(var i=0; i < arr.length; i++){
    if(arr[i]['id'] === id){
      callback(arr[i]);
      break;
    }
  }
}

var find = function(arr, callback){
  for(var i=0; i < arr.length; i++){
    if(callback(arr[i])){
      return arr[i];
    }
  }
}
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];


first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains(names, 'Colt', function(yes){
  if(yes){
    'Colt is in the array';
  } else {
    'Colt is not in the list';
  }
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var numbers = [1,2,3,4,5];
//Produces a new array of values by mapping each value in list through a transformation function
map(numbers, function(num){
  return num * 2; //returns an array of [2,4,6,8,10]
});
console.log(numbers);




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + 'position is ' + item)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];
getUserById(users, '16t', function(user){
  console.log('The user with the id 16t has the email of ' + user.email + 'the name of ' + user.name + ' and the address of ' + user.address); 
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */




//Looks through each value in the list, returning the first one that passes a truth test 
var numbers  = [1, 2, 3, 4, 5, 6];
console.log(find(numbers, function(num){ 
  return num % 2 == 0; //should return 2
}));
