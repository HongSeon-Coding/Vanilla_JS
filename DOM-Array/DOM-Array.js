const main = document.getElementById('main');
const addUserBtn= document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillonairesBtn = document.getElementById('show-millonaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

// name and money array
let data = [];


// fetch random user and money
async function getRandomUser(){
    const res =  await fetch('https://randomuser.me/api');
    const data = await res.json();

    const user = data.results[0];
    const newUser = {
        name:`${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    };
    console.log(newUser)
}
getRandomUser();

// Add new obj to data arr
function addData(obj) {
    data.push(obj);
}