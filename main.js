function createGame(player1, hour, player2){
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="${player1}" />
            <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="${player2}" />
    </li>
    `
}

let delay = -0.3;

function createCard(date, day, games){
    delay += 0.3;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
    `
}


document.querySelector('#cards').innerHTML = 

    createCard('20/11', 'Domingo', createGame("qatar", "16:00", "equador")) +

    createCard('21/11', 'Segunda', createGame("england", "13:00", "iran") + createGame("senegal", "16:00", "netherlands") + 
    createGame("usa", "19:00", "wales")) +

    createCard('22/11', 'Terça', createGame("argentina", "10:00", "saudiArabia") + createGame("denmark", "13:00", "tunisia") + 
    createGame("mexico", "16:00", "poland") + createGame("france", "19:00", "australia")) +




    createCard('24/11', 'Quinta', createGame("brazil", "16:00", "serbia")) +
    createCard('28/11', 'Segunda', createGame("switzerland", "13:00", "brazil") + createGame("portugal", "16:00", "uruguay")) +
    createCard('02/12', 'Sexta', createGame("brazil", "16:00", "cameroon"))

