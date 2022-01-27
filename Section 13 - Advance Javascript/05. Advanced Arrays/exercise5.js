// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newArray = [];

array.forEach(obj => {
  const copy = Object.assign({}, obj);
  copy.username += '!';
  newArray.push(copy);
});

//Create an array using map that has all the usernames with a "? to each of the usernames

let newArray = array.map(obj => {
  let copy = Object.assign({}, obj);

  copy.username += '?';
  return copy;
});

//Filter the array to only include users who are on team: red

let newArray = array.filter(obj => obj.team == 'red');

//Find out the total score of all users using reduce

let scoreTotal = array.reduce((acc, obj) => acc + +obj.score, 0);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	alert(num);
	return num * 2;
})

// answer
const newArrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.


let users = [
  {
    id: 1,
    name: "Heru",
    age: 30
  },
  {
    id: 2,
    name: "Jose",
    age: 20
  },
  {
    id: 3,
    name: "Geo",
    age: 16
  }
];

let newUsers = users.map(obj => {
  let copy = Object.assign({}, obj);
  copy.id += '!';
  copy.name += '!';
  copy.age += '!';

  return copy;
});