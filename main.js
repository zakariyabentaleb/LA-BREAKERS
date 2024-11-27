// ------------------SHOW POPUP AND HIDE IT  ------------------------//
const addButton = document.getElementById("add"); 
const cancelButton = document.getElementById("cancelPlayer");

function togglePopup() {
    const pop = document.getElementById("footballPopupform");
    pop.classList.toggle("hidden");
}
addButton.addEventListener("click", togglePopup);
cancelButton.addEventListener("click", togglePopup);
// // ----------------------------------------------------------------------//

// // //------------------------------fetch jsonfile-----------------------------------------//
// fetch('data.json')
// .then((response) => response.json())
// .then((data) => {
//     localStorage.setItem('players', JSON.stringify(data.players));
//     console.log(data.players);  
//   })
// // //-----------------------------------------------------------------------------------------//
// document.addEventListener("DOMContentLoaded", () => {

//   const players = JSON.parse(localStorage.getItem('players')) || [];


//   function displayPlayers() {
//       const positions = ["CF", "LMF", "RMF", "CMF", "CB", "LB", "RB", "GK"]; 

//       players.forEach(player => {
        
//           const positionElement = document.getElementById(player.position);

         
//           if (positionElement) {
//             positionElement.innerHTML = `
//               <div class="player">
//                 <div class="player-image">
//                   <img src="${player.photo}" alt="${player.photo}" class="player-img"/>
//                 </div>
//                 <div class="rating-position">
//                   <h3 class="rating">${player.rating}</h3>
//                   <hr>
//                   <h3 class="position">${player.position}</h3>
//                 </div>
//                 <div class="name">
//                   <h4>${player.name}</h4>
//                 </div>
//               </div>
//             `;
//           }
          
//       });
//   }

//   displayPlayers();
// });
