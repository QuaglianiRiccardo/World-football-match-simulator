// Configurazione dei moltiplicatori puri per il calcolo al minuto

const TACTICAL_MODIFIERS = {

    "ATT": { goal: 2.00, defense: 0.02 },

    "ALA": { goal: 1.50, defense: 0.10 },

    "COC": { goal: 1.20, defense: 0.15 },

    "CC":  { goal: 0.70, defense: 0.60 },

    "CDC": { goal: 0.25, defense: 1.10 },

    "TS":  { goal: 0.30, defense: 1.00 },

    "TD":  { goal: 0.30, defense: 1.00 },

    "DC":  { goal: 0.10, defense: 1.80 },

    "POR": { goal: 0.00, defense: 2.50 }

};



/**

 * Calcola le percentuali pure di Gol e Difesa al minuto di un singolo giocatore

 */

function getPlayerMinutePercentages(player) {

    const mod = TACTICAL_MODIFIERS[player.pos] || { goal: 0.5, defense: 0.5 };

    

    // Elevando al quadrato il rapporto dell'overall, creiamo un divario netto tra i top player e i dilettanti

    // Esempio: 95 OVR -> 0.95^2 = 0.902 | 45 OVR -> 0.45^2 = 0.202 (I top valgono 4.5 volte un 45)

    let overallPower = Math.pow(player.ovr / 100, 2);



    // Costante base per calibrare i millesimi probabilistici al minuto

    const BASE_TICK = 0.015;



    let minuteGoalChance = overallPower * mod.goal * BASE_TICK;

    let minuteDefensePower = overallPower * mod.defense * BASE_TICK;



    return {

        goalChance: minuteGoalChance,       // Es. 0.027 (significa 2.7% di chance di gol in questo minuto)

        defensePower: minuteDefensePower    // Quanto questo giocatore contribuisce ad azzerare il gol avversario

    };

}



/**

 * Calcola il Muro Difensivo Totale di una squadra in un preciso minuto.

 * È la somma del potere difensivo al minuto di tutti i giocatori NON espulsi e NON infortunati.

 */

function calculateActiveTeamDefense(team) {

    let totalDefenseWall = 0;

    

    // Considera solo i giocatori attualmente attivi sul terreno di gioco

    let activePlayers = team.lineup.filter(p => !p.redCard && !p.injured);

    

    activePlayers.forEach(player => {

        let stats = getPlayerMinutePercentages(player);

        totalDefenseWall += stats.defensePower;

    });



    return totalDefenseWall;

}













function simulateMatchDynamics(teamAKey, teamBKey) {

    // Cloniamo le squadre dal database globale per non sovrascrivere le statistiche storiche durante i 90 min

    let teamA = JSON.parse(JSON.stringify(teamsDatabase[teamAKey]));

    let teamB = JSON.parse(JSON.stringify(teamsDatabase[teamBKey]));

    

    let scoreA = 0, scoreB = 0;

    let matchLog = [];



    // Loop minuto per minuto reale

    for (let minute = 1; minute <= 90; minute++) {

        

        // 1. Calcolo dei muri difensivi dinamici per questo minuto

        let defenseWallA = calculateActiveTeamDefense(teamA); // Potere difensivo Italia

        let defenseWallB = calculateActiveTeamDefense(teamB); // Potere difensivo Francia



        // 2. FASE DI ATTACCO SQUADRA A (Contro Difesa B)

        let attackersA = teamA.lineup.filter(p => !p.redCard && !p.injured);

        attackersA.forEach(player => {

            let stats = getPlayerMinutePercentages(player);

            

            // CONTRASTO DIRETTO: La chance di gol viene divisa per il muro difensivo avversario.

            // Se defenseWallB è enorme, la finalGoalChance diventa quasi zero.

            // Se defenseWallB è misero, la finalGoalChance resta intatta e alta.

            let finalGoalChance = stats.goalChance / (1 + defenseWallB);



            if (Math.random() < finalGoalChance) {

                scoreA++;

                

                // Salva il gol nel database storico per la classifica marcatori globale

                let dbPlayer = teamsDatabase[teamAKey].lineup.find(p => p.name === player.name);

                if (dbPlayer) dbPlayer.goals++;



                matchLog.push(`⚽ [${minute}'] GOL ${teamA.flag}! ${player.name} (${player.pos}) supera la difesa e segna!`);

            }

        });



        // 3. FASE DI ATTACCO SQUADRA B (Contro Difesa A) - Speculare

        let attackersB = teamB.lineup.filter(p => !p.redCard && !p.injured);

        attackersB.forEach(player => {

            let stats = getPlayerMinutePercentages(player);

            

            let finalGoalChance = stats.goalChance / (1 + defenseWallA);



            if (Math.random() < finalGoalChance) {

                scoreB++;

                

                let dbPlayer = teamsDatabase[teamBKey].lineup.find(p => p.name === player.name);

                if (dbPlayer) dbPlayer.goals++;



                matchLog.push(`⚽ [${minute}'] GOL ${teamB.flag}! ${player.name} (${player.pos}) segna con un'azione letale!`);

            }

        });

        

        // [Qui l'IA inserirà in seguito i controlli casuali al minuto per infortuni e cartellini]

    }



    return { scoreA, scoreB, log: matchLog };

}

