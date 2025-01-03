
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
                 

                card.addEventListener("click", inFields);
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

//-----------------------------------------put it in field-------------------------------------------------//
const playerCards = document.querySelectorAll(".player-card");
const cardFields = document.querySelectorAll(".card-fields");

function inFields(event) {
    alert("added");
    const playerCard = event.currentTarget;
    const playerName = playerCard.querySelector("h3").innerText;
    const playerPosition = playerCard.querySelector("p").innerText;
    const playerImageSrc = playerCard.querySelector("img").src;
    const playerRating = playerCard.querySelector("p:nth-of-type(3)").innerText;

    //--------------------target have same position---------------------------//
    const targetFields = Array.from(cardFields).filter(field =>
        field.querySelector(".position").innerText === playerPosition
    );

    for (let field of targetFields) {
        const existingPlayer = field.querySelector(".player-info");

        if (existingPlayer) {
           
            field.removeChild(existingPlayer);
        }

    //--------------- new player in field----------------------//
        const playerInfo = document.createElement("div");
        playerInfo.classList.add("player-info");

        const img = document.createElement("img");
        img.src = playerImageSrc;
        img.alt = playerName;
        img.classList.add("player-img");

        const name = document.createElement("h1");
        name.innerText = playerName;
        name.classList.add("player-name");

        const position = document.createElement("p");
        position.innerText = playerPosition;
        position.classList.add("player-position");

        const rating = document.createElement("p");
        rating.innerText = playerRating;
        rating.classList.add("player-rating");

        playerInfo.appendChild(img);
        playerInfo.appendChild(name);
        playerInfo.appendChild(position);
        playerInfo.appendChild(rating);

        field.appendChild(playerInfo);

        break;
    }
}
