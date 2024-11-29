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
    const regexName = /^[a-zA-Z\s]{1,15}$/;

    const playerInput = document.getElementById("playerName");
    const playerText1 = playerInput.value.trim();

    const positionInput = document.getElementById("playerPosition");
    const playerText2 = positionInput.value.trim();

    const ratingInput = document.getElementById("playerRating");
    if(!regexName.test(playerText1)){
        alert("wesh a said")
        return
    }
    if (ratingInput.value<0 || ratingInput.value>100 ){
       alert("veuillez slp entre un rating entre 0 et 99") 
       return
    }
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
