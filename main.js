// ------------------SHOW POPUP AND HIDE IT  ------------------------//
const addButton = document.getElementById("add"); 
const cancelButton = document.getElementById("cancelPlayer");

function togglePopup() {
    const pop = document.getElementById("footballPopupform");
    pop.classList.toggle("hidden");
}
addButton.addEventListener("click", togglePopup);
cancelButton.addEventListener("click", togglePopup);
// ----------------------------------------------------------------------//

// //------------------------------fetch jsonfile-----------------------------------------//
fetch('data.json')
.then((response) => response.json())
.then((data) => {
    localStorage.setItem('players', JSON.stringify(data.players));
    console.log(data.players);  
  })
// //-----------------------------------------------------------------------------------------//
function showPlayer(player){
  return `
       <div class="w-full h-full grid grid-cols-2 items-center  ">
            <div class=" mt-8 flex flex-col items-center justify-end w-full">
                <p>${player.rating}</p>
                <p>${player.position}</p>
                <img class="w-2 h-2" src="${player.logo}" alt="">
            </div>
            <div class="relative right-4 top-2 ">
                <img class="h-12 w-16" src="${player.photo}" alt="">
            </div>
           
        </div>
        <div class="w-full h-full flex flex-col justify-center mb-2">
            <div class="flex flex items-center justify-center gap-1 mt-[-10px]">
                <p>${player.name}</p>
                <img class="w-2 h-2" src="${player.flag}" alt="">
            </div>
            <div class=" flex w-full justify-evenly text-[6px]  	">
                <div class="flex flex-col">
                    <div class="flex gap-1 leading-none ">
                        <p>DIV</p>
                        <p>${player.pace}</p>
                    </div>
                    <div class="flex gap-1 ">
                        <p>HAN</p>
                        <p>${player.shooting}</p>
                    </div>
                    <div class="flex gap-1 leading-none">
                        <p>KIC</p>
                        <p>${player.passing}</p>
                    </div>
                </div>
                <div class="flex flex-col">   
                    <div class="flex gap-1 leading-none">
                        <p>REF</p>
                        <p>${player.dribbling}</p>
                    </div>
                    <div class="flex gap-1">
                        <p>DEF</p>
                        <p>${player.defending}</p>
                    </div>
                    <div class="flex gap-1 leading-none">
                        <p>PHY</p>
                        <p>${player.physical}</p>
                    </div>

                </div>
                </div>
         
        </div>
  `
}