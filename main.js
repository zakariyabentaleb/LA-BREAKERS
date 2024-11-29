
// // ----------------------------------------------------------------------//
    fetch('../data.json')
        .then(response => response.json())
        .then(data => {
            const players = data.players;
            
            
            const grid = document.querySelector('.players-grid1');
            const grid2 = document.querySelector('.players-grid');
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
    alert("added")
    const playerCard = event.currentTarget;
    const playerName = playerCard.querySelector("h3").innerText;
    const playerPosition = playerCard.querySelector("p").innerText; 
    const playerImageSrc = playerCard.querySelector("img").src;

    // Find all the target fields with the same position
    const targetFields = Array.from(cardFields).filter(field => 
        field.querySelector(".position").innerText === playerPosition
    );
  
    // Loop through the fields and append to the first empty one
    for (let field of targetFields) {
        // Check if the field already has a player assigned (by checking if it has a child with class "player-info")
        if (!field.querySelector(".player-info")) {
            // Create a container for player info
            const playerInfo = document.createElement("div");
            playerInfo.classList.add("player-info");

            // Add player image
            const img = document.createElement("img");
            img.src = playerImageSrc;
            img.alt = playerName;
            img.classList.add("player-img");

            // Add player name
            const name = document.createElement("h1");
            name.innerText = playerName;
            name.classList.add("player-name");

            // Add player position
            const position = document.createElement("p");
            position.innerText = playerPosition;
            position.classList.add("player-position");

          

            // Append player info to the field
            playerInfo.appendChild(img);
            playerInfo.appendChild(name);
            playerInfo.appendChild(position);
            field.appendChild(playerInfo);

            // Break the loop after adding the player to the first empty field
            break;
        }
    }
}