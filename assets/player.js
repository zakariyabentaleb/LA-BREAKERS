// --------------------------fetch JSON file----------------------------------------//
document.addEventListener("DOMContentLoaded", () => {
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
        .catch(error => console.error("Erreur lors du chargement des joueurs :", error)); 
});

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

