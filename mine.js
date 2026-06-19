let teamA = [];
let teamB = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function renderTeam(container, players) {

    if (players.length === 0) {
        container.innerHTML = "No players yet.";
        return;
    }

    let html = "";

    players.forEach(player => {

        const imgSrc = `images/${player.trim().toLowerCase()}.jpeg`;

        html += `
            <div class="player-item">
                <img
                    src="${imgSrc}"
                    alt="${player}"
                    onerror="this.src='images/default.jpeg'"
                >

                <span class="player-name">
                    ${player}
                </span>
            </div>
        `;
    });

    container.innerHTML = html;
}

function generateTeams() {

    const players = document
        .getElementById("players")
        .value
        .split("\n")
        .map(player => player.trim())
        .filter(player => player !== "");

    if (players.length < 2) {
        alert("Minimum 2 players required.");
        return;
    }

    shuffle(players);

    const half = Math.ceil(players.length / 2);

    teamA = players.slice(0, half);
    teamB = players.slice(half);

    renderTeam(
        document.getElementById("teamA"),
        teamA
    );

    renderTeam(
        document.getElementById("teamB"),
        teamB
    );

    document
        .getElementById("tossResult")
        .classList.add("d-none");
}

function toss() {

    if (teamA.length === 0) {
        alert("Pehle teams generate karo.");
        return;
    }

    const winner =
        Math.random() < 0.5
            ? "🏆 Team A Won The Toss"
            : "🏆 Team B Won The Toss";

    const tossBox =
        document.getElementById("tossResult");

    tossBox.innerHTML = winner;
    tossBox.classList.remove("d-none");
}