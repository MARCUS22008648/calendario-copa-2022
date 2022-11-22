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

//Cartões de jogos da copa do mundo (ordenados por data e hora)
document.querySelector('#cards').innerHTML = 

    createCard('20/11', 'Domingo', createGame("qatar", "0 - 2", "ecuador")) +

    createCard('21/11', 'Segunda', createGame("england", "6 - 2", "iran") + createGame("senegal", "0 - 2", "netherlands") + 
    createGame("usa", "1 - 1", "wales")) +

    createCard('22/11', 'Terça', createGame("argentina", "1 - 2", "saudiArabia") + createGame("denmark", "0 - 0", "tunisia") + 
    createGame("mexico", "0 - 0", "poland") + createGame("france", "4 - 1", "australia")) +

    createCard('23/11', 'Quarta', createGame("morocco", "10:00", "croatia") + createGame("germany", "13:00", "japan") + 
    createGame("spain", "16:00", "costaRica") + createGame("belgium", "19:00", "canada")) +


    createCard('24/11', 'Quinta',  createGame("switzerland", "10:00", "cameroon")  + createGame("uruguay", "13:00", "koreaRepublic") + 
    createGame("portugal", "16:00", "ghana") + createGame("brazil", "19:00", "serbia"))  + 

    createCard('25/11', 'Sexta',  createGame("wales", "10:00", "iran")  + createGame("qatar", "13:00", "senegal") + 
    createGame("netherlands", "16:00", "ecuador") + createGame("england", "19:00", "usa"))  +

    createCard('26/11', 'Sábado',  createGame("tunisia", "10:00", "australia")  + createGame("poland", "13:00", "saudiArabia") + 
    createGame("france", "16:00", "denmark") + createGame("argentina", "19:00", "mexico")) +

    createCard('27/11', 'Domingo',  createGame("japan", "10:00", "costaRica")  + createGame("belgium", "13:00", "morocco") + 
    createGame("croatia", "16:00", "canada") + createGame("spain", "19:00", "germany")) +

    createCard('28/11', 'Segunda',  createGame("cameroon", "10:00", "serbia")  + createGame("koreaRepublic", "13:00", "ghana") + 
    createGame("brazil", "16:00", "switzerland") + createGame("portugal", "19:00", "uruguay")) +

    createCard('29/11', 'Terça',  createGame("netherlands", "15:00", "qatar")  + createGame("ecuador", "15:00", "senegal") + 
    createGame("wales", "19:00", "england") + createGame("iran", "19:00", "usa")) +

    createCard('30/11', 'Quarta',  createGame("australia", "15:00", "denmark")  + createGame("tunisia", "15:00", "france") + 
    createGame("poland", "19:00", "argentina") + createGame("saudiArabia", "19:00", "mexico")) +

    createCard('01/12', 'Quinta',  createGame("croatia", "15:00", "belgium")  + createGame("canada", "15:00", "morocco") + 
    createGame("costaRica", "19:00", "germany") + createGame("japan", "19:00", "spain")) +

    createCard('02/12', 'Sexta',  createGame("ghana", "15:00", "uruguay")  + createGame("koreaRepublic", "15:00", "portugal") + 
    createGame("cameroon", "19:00", "brazil") + createGame("serbia", "19:00", "switzerland"))

