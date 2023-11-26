// 1. Select element h4 which holds text of "Red" by using getElementsByTagName
const h4 = document.getElementsByTagName('h4')
console.log(h4)

// 2. Select div with the class of "green" which holds text (Green) by using getElementsByTagName
const divSelect =  document.getElementsByClassName('green')

console.log(divSelect)
// 3. Select div with the ID of blue which holds the text "Blue" by using getElementsByClassName
const getId =  document.getElementById('blue')
console.log(getId)
// 4. Select div which has the class & Id of "yello" by using querySelector()
const getQuery =  document.querySelector('.yellow')
console.log(getQuery)
// 5. Select all the elements which has the class of "teal" by using querySelectorAll
const getAll =  document.querySelectorAll('.teal')
console.log(getAll)

// const h4 = document.getElementsByTagName("h4");
// const green = document.getElementsByClassName("green");
// const blue = document.getElementById("blue");
// const yellow = document.querySelector(".yellow");
// const allTeals = document.querySelectorAll(".teal");

// console.log(h4);
// console.log(green);
// console.log(blue);
// console.log(yellow);
// console.log(allTeals);
