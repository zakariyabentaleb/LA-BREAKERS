// ------------------SHOW POPUP AND HIDE IT  ------------------------//

const addButton = document.getElementById("add1"); 
const cancelButton = document.getElementById("cancelPlayer");
function togglePopup() {
    const pop = document.getElementById("footballPopupform");
    pop.classList.toggle("hidden");
}
addButton.addEventListener("click", togglePopup);
cancelButton.addEventListener("click", togglePopup);
// // ----------------------------------------------------------------------//
document.addEventListener("DOMContentLoaded", () => {
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
        .catch(error => console.error("Erreur lors du chargement des joueurs :", error)); 
});
// -----------------------------show modul----------------------------------//
const cardfields = document.querySelectorAll(".card-fields");

function showmodul() {
    console.log("hiiiii");
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

