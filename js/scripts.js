document.addEventListener("DOMContentLoaded", function () {
    const teamData = [
        {
            name: "Fabio",
            position: "Goleiro",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1473/FABIO-3x4_%281%29_slider.png?1683760626",
        },
        {
            name: "Pedro Rangel",
            position: "Goleiro",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1477/PEDRO-RANGEL-3x4_%281%29_slider.png?1683760724",
        },
        {
            name: "Vitor Eudes",
            position: "Goleiro",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1476/VITOR-EUDES-3x4_%281%29_slider.png?1683760684",
        },
        {
            name: "Vitor Mendes",
            position: "Zagueiro",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1503/VITOR-MENDES-3x4_slider.png?1683762005",
        },
        {
            name: "Manoel",
            position: "Zagueiro",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1495/MANOEL-3x4_slider.png?1683761616",
        },
        {
            name: "David Braz",
            position: "Zagueiro",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1482/DAVID-BRAZ-3x4_slider.png?1683761034",
        },
        {
            name: "Nino",
            position: "Zagueiro",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1499/NINO-3x4_slider.png?1683761815",
        },
        {
            name: "Luan Freitas",
            position: "Zagueiro",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1494/LUAN-FREITAS-3x4_slider.png?1683761566",
        },
        {
            name: "Diogo Barbosa",
            position: "Lateral",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1504/DIOGO-BARBOSA-3x4_%281%29_slider.png?1688394691",
        },
        {
            name: "Samuel Xavier",
            position: "Lateral",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1501/SAMUEL-XAVIER-3x4_slider.png?1683761922",
        },
        {
            name: "Jorge",
            position: "Lateral",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1490/JORGE-3x4_slider.png?1683761380",
        },
        {
            name: "Guga",
            position: "Lateral",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1487/GUGA-3x4_slider.png?1683761268",
        },
        {
            name: "Marcelo",
            position: "Lateral",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1496/MARCELO-3x4_slider.png?1683761661",
        },
        {
            name: "Martinelli",
            position: "Volante",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1498/MARTINELLI-3x4_slider.png?1683761740",
        },
        {
            name: "André",
            position: "Volante",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1481/ANDRE-3x4_slider.png?1683760992",
        },
        {
            name: "Felipe Melo",
            position: "Meio-Campo",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1483/FELIPE-MELO-3x4_slider.png?1683761091",
        },
        {
            name: "Alexsander",
            position: "Meio-Campo",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1480/ALEXSANDER-3x4_slider.png?1683760936",
        },
        {
            name: "Thiago Santos",
            position: "Meio-Campo",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1502/THIAGO-SANTOS-3x4_slider.png?1683761971",
        },
        {
            name: "Gabriel Pirani",
            position: "Meio-Campo",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1484/GABRIEL-PIRANI-3x4_slider.png?1683761139",
        },
        {
            name: "Lima",
            position: "Meio-Campo",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1493/LIMA-3x4_slider.png?1683761498",
        },
        {
            name: "Giovanni",
            position: "Meio-Campo",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1486/GIOVANNI-3x4_slider.png?1683761221",
        },
        {
            name: "Leo Fernández",
            position: "Meio-Campo",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1505/17_LEO_FERNANDEZ_3X4_slider.png?1688671808",
        },
        {
            name: "Jhon Arias",
            position: "Meio-Campo",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1488/JHON-ARIAS-3x4_slider.png?1683761307",
        },
        {
            name: "Daniel",
            position: "Meio-Campo",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1506/55_DANIEL_3X4_slider.png?1688671951",
        },
        {
            name: "Ganso",
            position: "Meio-Campo",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1500/PH-GANSO-3x4_slider.png?1683761856",
        },
        {
            name: "Cano",
            position: "Atacante",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1485/GERMAN-CANO-3x4_slider.png?1683761188",
        },
        {
            name: "Lelê",
            position: "Atacante",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1492/LELE-3x4_slider.png?1683761461",
        },
        {
            name: "John Kennedy",
            position: "Atacante",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1489/JOHN-KENNEDY-3x4_slider.png?1683761346",
        },
        {
            name: "Alan",
            position: "Atacante",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1478/ALAN-3x4_slider.png?1683760819",
        },
        {
            name: "Keno",
            position: "Atacante",
            image: "https://s3.amazonaws.com/assets-fluminense/player_pictures/1491/KENO-3x4_slider.png?1683761426",
        },

    ];

    const teamSection = document.getElementById("team-section");
    const selectedPlayers = new Set();
    const selectedPlayersSection = document.getElementById("selected-players").querySelector("ul");
    const selectedPositions = new Set();
    let totalSelected = 0; 

    teamData.forEach((player) => {
        const playerCard = document.createElement("div");
        playerCard.classList.add("player-card");

        const playerImage = document.createElement("img");
        playerImage.src = player.image;
        playerCard.appendChild(playerImage);

        const playerName = document.createElement("h3");
        playerName.textContent = player.name;
        playerCard.appendChild(playerName);

        const playerPosition = document.createElement("p");
        playerPosition.textContent = player.position;
        playerCard.appendChild(playerPosition);

        const selectButton = document.createElement("button");
        selectButton.textContent = "Selecionar";
        selectButton.addEventListener("click", function () {
            if (!selectedPlayers.has(player.name) && totalSelected < 11) {
                if (player.position === "Goleiro" && selectedPositions.has("Goleiro")) {
                    alert("Você só pode escolher um jogador da posição 'Goleiro'.");
                    return;
                }

                selectedPlayers.add(player.name);
                selectedPositions.add(player.position);
                totalSelected++;
                updateSelectedPlayersList();
            } else if (selectedPlayers.has(player.name)) {
                alert("Este jogador já foi selecionado.");
            } else {
                alert("Você já selecionou 11 jogadores.");
            }
        });
        playerCard.appendChild(selectButton);

        teamSection.appendChild(playerCard);
    });

    function updateSelectedPlayersList() {
        selectedPlayersSection.innerHTML = "";

        selectedPlayers.forEach((playerId) => {
            const player = teamData.find((p) => p.name === playerId);
            if (player) {
                const playerContainer = document.createElement("div");
                playerContainer.classList.add("player-container");

                const playerName = document.createElement("span");
                playerName.textContent = `${player.name} (${player.position})`;
                playerContainer.appendChild(playerName);

                const deleteIcon = document.createElement("img");
                deleteIcon.src = "https://static.thenounproject.com/png/76172-200.png";
                deleteIcon.alt = "Excluir";
                deleteIcon.classList.add("delete-icon");
                deleteIcon.addEventListener("click", function () {
                    selectedPlayers.delete(playerId);
                    selectedPositions.delete(player.position);
                    totalSelected--;
                    updateSelectedPlayersList();
                });
                playerContainer.appendChild(deleteIcon);

                selectedPlayersSection.appendChild(playerContainer);
            }
        });
    }
    const confirmButton = document.getElementById("confirm-button");
    confirmButton.addEventListener("click", function () {
        if (selectedPlayers.size === 11) {
            confirmEscalação();
        } else {
            alert("Você precisa selecionar exatamente 11 jogadores para confirmar a escalação.");
        }
    });
    function confirmEscalação() {
        alert("Escalação confirmada! Você selecionou 11 jogadores.");
        selectedPlayers.clear();
        selectedPositions.clear();
        totalSelected = 0;

        updateSelectedPlayersList(); 
    }
});

