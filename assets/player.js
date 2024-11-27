document.addEventListener("DOMContentLoaded", () => {
    fetch('../data.json')
        .then(response => response.json())
        .then(data => {
            const players = data.players;
            const grid = document.querySelector('.players-grid');
            
            players.forEach(player => {
                const card = document.createElement('div');
                card.classList.add('player-card');
                card.innerHTML = `
                    <img src="${player.photo}" alt="${player.name}">
                    <h3>${player.name}</h3>
                    <p>${player.position}</p>
                     <p>$ ${player.club}</p>
                    <p>${player.rating}</p>
                `;
                grid.appendChild(card);
            });
            console.log("Players:", players);
        })  
});
