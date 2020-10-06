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
    addData(newUser);
}
getRandomUser();

// Add new obj to data arr
function addData(obj) {
    data.push(obj);
    updateDOM();
}

// update DOM
function updateDOM(provideData = data){
    // clear main div
    main.innerHTML = '<h2><strong>Person</strong>Wealth</h2>';
    provideData.forEach(item=> {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
        main.appendChild(element);
    });
}

// Format number as money

function formatMoney(number){
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Double Money
function doubleMoney(){
    data = data.map((user) => {
        return { ...user , money:user.money * 2}
    });
    updateDOM();
}

// Event listeners

addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);