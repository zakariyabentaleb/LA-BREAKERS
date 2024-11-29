// --------------------------fetch JSON file----------------------------------------//

    fetch('../data.json')
        .then(response => response.json())
        .then(data => {
            const players = data.players;
            const grid = document.querySelector('.players-grid');
            
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
       

// // ------------------------------add button----------------------------------------//
const ConfimButton = document.getElementById("addPlayer"); 
ConfimButton.addEventListener("click", addplayer);
function addplayer() {
    const playerInput = document.getElementById("playerName");
    const playerText1 = playerInput.value.trim();

    const positionInput = document.getElementById("playerPosition");
    const playerText2 = positionInput.value.trim();

    const ratingInput = document.getElementById("playerRating");
    const playerText3 = ratingInput.value.trim();

     const playerList = document.querySelector(".players-grid");;

    if (playerText1 && playerText2 && playerText3) {

        const playerContent = document.createElement("div");
        playerContent.className = "player-card";

        const playerImg = document.createElement("img"); 
         playerImg.src = `../images/P6.png`; ;     
        
        const playerName = document.createElement("h3");
        playerName.innerText = playerText1;
        
        const playerposition = document.createElement("p");
        playerposition.innerText = playerText2;
        
        
        const playerrating = document.createElement("p");
        playerrating.innerText = playerText3;
       
        
        playerContent.appendChild(playerImg);
        playerContent.appendChild(playerName);
        playerContent.appendChild(playerposition);
        playerContent.appendChild(playerrating);
       
       
        playerList.appendChild(playerContent);

        // -------------------------------------remove button---------------------------------------------//
        const removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.className = "button1";
        removeButton.onclick = function () {
            playerList.removeChild(playerContent);
        };

         // -------------------------------------edit button ---------------------------------------------// 
         const editButton = document.createElement("button");
         editButton.innerText = "Edit";
         editButton.className = "button2";
         editButton.onclick = function () {
             document.getElementById("playerName").value = playerText1;
             document.getElementById("playerPosition").value = playerText2;
             document.getElementById("playerRating").value = playerText3;
             togglePopup();
             playerList.removeChild(playerContent);
         };
        
        playerContent.appendChild(playerImg);
        playerContent.appendChild(playerName);
        playerContent.appendChild(playerposition);
        playerContent.appendChild(playerrating);
       
        playerContent.appendChild(removeButton);
        playerContent.appendChild(editButton);


        playerInput.value = "";
        positionInput.value = "";
        ratingInput.value = "";
        togglePopup()
    }}

// ------------------SHOW POPUP AND HIDE IT  ------------------------//

const addButton = document.getElementById("add1"); 
const cancelButton = document.getElementById("cancelPlayer");
function togglePopup() {
    const pop = document.getElementById("footballPopupform");
    pop.classList.toggle("hidden");
}
addButton.addEventListener("click", togglePopup);
cancelButton.addEventListener("click", togglePopup);
// ----------------------------------add player in fields-------------------------------/
const playerCards = document.querySelectorAll(".player-card"); 
const cardFields = document.querySelectorAll(".card-fields"); 

function inFields(event) {
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

// Add event listeners to each player card
playerCards.forEach(card => {
    card.addEventListener("click", inFields);
});






// // -------------------------- Fetch JSON file ----------------------------------------
// fetch('../data.json')
//     .then(response => response.json())
//     .then(data => {
//         const players = data.players;
//         const grid = document.querySelector('.players-grid');
     
         
//         players.forEach((player) => {
//             const card = document.createElement('div');
//             card.classList.add('player-card');
//             card.innerHTML = `
//                 <img src="${player.photo}" alt="${player.name}">
//                 <h3>${player.name}</h3>
//                 <p>${player.position}</p>
//                 <p>${player.club}</p>
//                 <p>${player.rating}</p>
//             `;
//             grid.appendChild(card);
//         });
//     });  27  

// // ------------------ Load players from localStorage ---------------------------------
// function loadPlayersFromLocalStorage() {
//     const storedPlayers = JSON.parse(localStorage.getItem("allPlayers")) || [];
//     const grid = document.querySelector(".players-grid");

//     storedPlayers.forEach((player) => {
//         const card = document.createElement("div");
//         card.classList.add("player-card");
//         card.innerHTML = `
//             <img src="${player.photo}" alt="${player.name}">
//             <h3>${player.name}</h3>
//             <p>${player.position}</p>
//             <p>${player.club}</p>
//             <p>${player.rating}</p>
//         `;
//         grid.appendChild(card);
//     });
// }

// // ------------------------------ Add player function -------------------------------
// const ConfimButton = document.getElementById("addPlayer"); 
// ConfimButton.addEventListener("click", addplayer);

// function addplayer() {
//     const playerInput = document.getElementById("playerName");
//     const playerText1 = playerInput.value.trim();

//     const positionInput = document.getElementById("playerPosition");
//     const playerText2 = positionInput.value.trim();

//     const ratingInput = document.getElementById("playerRating");
//     const playerText3 = ratingInput.value.trim();

//     const playerList = document.querySelector(".players-grid");

//     if (playerText1 && playerText2 && playerText3) {
//         const playerContent = document.createElement("div");
//         playerContent.className = "player-card";

//         const playerImg = document.createElement("img"); 
//         playerImg.src = `../images/P6.png`;     

//         const playerName = document.createElement("h3");
//         playerName.innerText = playerText1;

//         const playerPosition = document.createElement("p");
//         playerPosition.innerText = playerText2;

//         const playerRating = document.createElement("p");
//         playerRating.innerText = playerText3;

//         playerContent.appendChild(playerImg);
//         playerContent.appendChild(playerName);
//         playerContent.appendChild(playerPosition);
//         playerContent.appendChild(playerRating);

//         // Add player to the UI
//         playerList.appendChild(playerContent);

//         // Create a remove button
//         const removeButton = document.createElement("button");
//         removeButton.innerText = "Remove";
//         removeButton.className = "button1";
//         removeButton.onclick = function () {
//             playerList.removeChild(playerContent);
//             updateLocalStorage();  // Update localStorage after removal
//         };

//         // Create an edit button
//         const editButton = document.createElement("button");
//         editButton.innerText = "Edit";
//         editButton.className = "button2";
//         editButton.onclick = function () {
//             document.getElementById("playerName").value = playerText1;
//             document.getElementById("playerPosition").value = playerText2;
//             document.getElementById("playerRating").value = playerText3;
//             togglePopup();
//             playerList.removeChild(playerContent);
//             updateLocalStorage();  // Update localStorage after editing
//         };

//         playerContent.appendChild(removeButton);
//         playerContent.appendChild(editButton);

//         // Add player to localStorage
//         const newPlayer = {
//             name: playerText1,
//             position: playerText2,
//             rating: playerText3,
//             photo: "../images/P6.png", // Example photo, you can modify this
//         };

//         // Get current players from localStorage and add new player
//         const currentPlayers = JSON.parse(localStorage.getItem("allPlayers")) || [];
//         currentPlayers.push(newPlayer);

//         // Update localStorage with the new player
//         localStorage.setItem("allPlayers", JSON.stringify(currentPlayers));

//         // Clear input fields and close the popup
//         playerInput.value = "";
//         positionInput.value = "";
//         ratingInput.value = "";
//         togglePopup();
//     }
// }

// // ------------------ Update localStorage -----------------------------------------
// function updateLocalStorage() {
//     const playersGrid = document.querySelectorAll(".player-card");
//     const allPlayers = [];

//     playersGrid.forEach(card => {
//         const name = card.querySelector('h3').innerText;
//         const position = card.querySelector('p:nth-child(2)').innerText;
//         const rating = card.querySelector('p:nth-child(3)').innerText;

//         allPlayers.push({
//             name: name,
//             position: position,
//             rating: rating,
//             photo: "../images/P6.png", // Use same photo or dynamic photo logic
//         });
//     });

//     localStorage.setItem("allPlayers", JSON.stringify(allPlayers));
// }

// // ------------------ Show and Hide Popup ---------------------------------------
// const addButton = document.getElementById("add1"); 
// const cancelButton = document.getElementById("cancelPlayer");

// function togglePopup() {
//     const pop = document.getElementById("footballPopupform");
//     pop.classList.toggle("hidden");
// }

// addButton.addEventListener("click", togglePopup);
// cancelButton.addEventListener("click", togglePopup);

// // ------------------ Load players on page load ---------------------------------
// document.addEventListener("DOMContentLoaded", function () {
//     loadPlayersFromLocalStorage(); // Load players from localStorage when the page is loaded
// });
