const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showProfesoresBtn = document.getElementById('show-profesores');
const sortBtn = document.getElementById('sort');
const calcularPuntajeBtn = document.getElementById('calcular-puntaje');

let data = [];
getRandomUser()
getRandomUser()
getRandomUser()

// fetch random user and add money
async function getRandomUser(){
    const res = await fetch('https://randomuser.me/api');
    const data  = await res.json();
    
    //console.log(data);   
    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last} `,
        money: Math.floor(Math.random() * 1000000)
    }

    //console.log(newUser);
    addData(newUser);
}

// Doble everyones Money
function duplicarPuntaje(){
    data = data.map((user) => {
        return {...user, money: user.money * 2};
    });

    updateDOM();
}; 

// Sort user by richest
function sortByRichest(){
    data.sort((a,b) => b.money -a.money);

    updateDOM();
}

// Filter only los que superan el millon
function showProfesores(){
    data = data.filter(user => user.money > 1000000 );

    updateDOM();
}

// Calculate the total wealth
function calculateWealth(){
    const wealth = data.reduce((acc, user) => (acc += user.money), 0);

    //console.log(formatPuntaje(wealth));
    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Puntaje:<stong>${formatPuntaje(wealth)}</stong></h3>`;
    main.appendChild(wealthEl);
}

// Add new obj to data arr
function addData(obj){
    data.push(obj);

    updateDOM();
}

//Update DOM
function updateDOM(provideData = data){
    //Clear main div
    main.innerHTML = '<h2><strong>Profesor</strong>Puntaje</h2>'

    provideData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong>${formatPuntaje(item.money)}`;
        main.appendChild(element);
    });
}

//Format Number 
function formatPuntaje(number){
    return  number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Event Listener
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', duplicarPuntaje);
sortBtn.addEventListener('click', sortByRichest);
showProfesoresBtn.addEventListener('click', showProfesores);
calcularPuntajeBtn.addEventListener('click', calculateWealth);


window.onload = function(){
    //animacion de carga
    var contenedor = document.getElementById('contenedor_carga');
    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity='0';
}

// =====================================================================
//       Método anónimo window onscroll
// =====================================================================
window.onscroll = function(){
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.go-top-container').classList.add('show');
    }else{
        document.querySelector('.go-top-container').classList.remove('show');
    }
}

document.querySelector('.go-top-container').addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behaivor: 'smooth',
    });
});