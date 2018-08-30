var myName = 'Cory';
const numOfStates = 50;
let add = 5 + 4;

// Loops through array of names. If bigining letter == 'L' then
// console logs "Back of the line!" else it logs "Next!"
for(var i = 0; i < name.length; i++) {
  if(name[i].charAt(0) == 'L') {
  console.log("Back of the line!");
  } else {
  console.log("Next!");
  };
};

function sayHello() {
  console.log('Hello World!')
};

sayHello();

function checkAge(kidName, kidAge) {
  if (kidAge < 21) {
    alert(`Sorry ${kidName}, you aren't old enough to view this page!`);
  };
};

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("Mark", 17);

let favVeggies = ['Brussle Sprouts', 'Green Beans', 'Peppers', 'Cauliflour', 'Onions'];

for (var i = 0; i < favVeggies.length; i++) {
  console.log(favVeggies[i]);
};

let movieTime = [['Heather', 21], ['Steve', 14], ['Mary', 17], ['Andy', 29], ['Gramps', 65]];

for (var i = 0; i < movieTime.length; i++) {
  checkAge(movieTime[i][0], movieTime[i][1]);
};

function getLength(word) {
  console.log(word.length);
};

var hiThere = ('Hello World');
getLength(hiThere);

function oddOrEven(wordLength) {
  if (wordLength.length % 2 === 0) {
    console.log('The world is nice and even!');
  } else {
    console.log('The world is an odd place');
  };
};

oddOrEven(hiThere);
