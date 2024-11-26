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