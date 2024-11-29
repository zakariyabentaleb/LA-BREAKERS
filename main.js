
// // ----------------------------------------------------------------------//
    fetch('../data.json')
        .then(response => response.json())
        .then(data => {
            const players = data.players;
            
            
            const grid = document.querySelector('.players-grid1');
            
            players.forEach((player) => {
                const card = document.createElement('div');
                card.classList.add('player-card');
                card.innerHTML = `
                    <img src="${player.photo}" alt="${player.name}">
                    <h3>${player.name}</h3>
                    <p>${player.position}</p>
                    <p>${player.club}</p>
                    <p>${player.rating}</p>
                `;
                
                grid.appendChild(card);
            });
        })
// -----------------------------show modul----------------------------------//
const cardfields = document.querySelectorAll(".card-fields");

function showmodul() {
    const pop = document.getElementById("playersModal");
    pop.classList.add("visible");
}

cardfields.forEach((cardfield) => {
    cardfield.addEventListener("click", showmodul);
});

// ------------------ HIDE IT ------------------------//

const closeModal= document.getElementById("closeModal"); 
function removemodul() {
    const pop = document.getElementById("playersModal");
    pop.classList.remove("visible");
}
closeModal.addEventListener("click", removemodul);
// //------------------------------(+)button------------------------------------------------//
// const addButton1 = document.getElementById("add-player-modul"); 
// const cancelButton1 = document.getElementById("cancelPlayer");
// function togglePopup1() {
//     console.log("hiii");
    
//     const pop = document.getElementById("footballPopupform");
//     pop.classList.toggle("hidden");
// }
// addButton1.addEventListener("click", togglePopup1);
// cancelButton1.addEventListener("click", togglePopup1);

//-----------------------------------------put it in field-------------------------------------------------//
// const playerCards = document.querySelectorAll(".player-card"); 

// function inFields() {
//     console.log("hiiii");
// }

// playerCards.forEach(card => {
//     card.addEventListener("click",inFields);
// });