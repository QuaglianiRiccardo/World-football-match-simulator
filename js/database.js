// Database globale delle squadre aggiornato a Settembre 2026
const teamsDatabase = {
"ENG": {
name: "Inghilterra",
flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
formation: "4-2-3-1",
lineup: [
{ id: 1, name: "J. Pickford", pos: "POR", ovr: 84, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 2, name: "T. Alexander-Arnold", pos: "TD", ovr: 86, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 3, name: "J. Stones", pos: "DC", ovr: 85, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 4, name: "M. Guéhi", pos: "DC", ovr: 83, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 5, name: "L. Colwill", pos: "TS", ovr: 82, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 6, name: "D. Rice", pos: "CDC", ovr: 88, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 7, name: "K. Mainoo", pos: "CC", ovr: 83, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 8, name: "B. Saka", pos: "ALA", ovr: 88, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 9, name: "J. Bellingham", pos: "COC", ovr: 91, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 10, name: "P. Foden", pos: "ALA", ovr: 89, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 11, name: "H. Kane", pos: "ATT", ovr: 89, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", goals: 0, yellowCard: false, redCard: false, injured: false }
],
bench: [
{ id: 12, name: "A. Ramsdale", pos: "POR", ovr: 81, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 13, name: "E. Konsa", pos: "DC", ovr: 81, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 14, name: "R. Lewis", pos: "TD", ovr: 80, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 15, name: "C. Palmer", pos: "COC", ovr: 87, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 16, name: "A. Gordon", pos: "ALA", ovr: 82, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 17, name: "O. Watkins", pos: "ATT", ovr: 83, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 18, name: "H. Maguire", pos: "DC", ovr: 79, flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", goals: 0, yellowCard: false, redCard: false, injured: false }
]
},
"UAE": {
name: "Emirati Arabi Uniti",
flag: "🇦🇪",
formation: "4-2-3-1",
lineup: [
{ id: 101, name: "K. Eisa", pos: "POR", ovr: 72, flag: "🇦🇪", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 102, name: "Z. Sultan", pos: "TD", ovr: 68, flag: "🇦🇪", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 103, name: "K. Al-Hashemi", pos: "DC", ovr: 68, flag: "🇦🇪", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 104, name: "M. Al-Attas", pos: "DC", ovr: 67, flag: "🇦🇪", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 105, name: "A. Idrees", pos: "TS", ovr: 67, flag: "🇦🇪", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 106, name: "Y. Nader", pos: "CDC", ovr: 68, flag: "🇦🇪", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 107, name: "A. Salmeen", pos: "CDC", ovr: 68, flag: "🇦🇪", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 108, name: "F. Lima", pos: "ALA", ovr: 75, flag: "🇦🇪", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 109, name: "H. Suhail", pos: "COC", ovr: 72, flag: "🇦🇪", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 110, name: "A. Saleh", pos: "ALA", ovr: 72, flag: "🇦🇪", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 111, name: "Caio Canedo", pos: "ATT", ovr: 73, flag: "🇦🇪", goals: 0, yellowCard: false, redCard: false, injured: false }
],
bench: [
{ id: 112, name: "A. Humaid", pos: "POR", ovr: 65, flag: "🇦🇪", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 113, name: "B. Abaelaziz", pos: "DC", ovr: 65, flag: "🇦🇪", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 114, name: "K. Al-Dhanhani", pos: "TD", ovr: 66, flag: "🇦🇪", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 115, name: "T. Al-Zaabi", pos: "CC", ovr: 68, flag: "🇦🇪", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 116, name: "M. Rashid", pos: "CC", ovr: 64, flag: "🇦🇪", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 117, name: "K. Al-Ghassani", pos: "ATT", ovr: 71, flag: "🇦🇪", goals: 0, yellowCard: false, redCard: false, injured: false },
{ id: 118, name: "S. Mabkhout", pos: "ATT", ovr: 71, flag: "🇦🇪", goals: 0, yellowCard: false, redCard: false, injured: false }
]
}
};

function getTeamAverageOvr(teamKey) {
const team = teamsDatabase[teamKey];
if (!team || !team.lineup.length) return 0;
const sum = team.lineup.reduce((acc, player) => acc + player.ovr, 0);
return (sum / team.lineup.length).toFixed(1);
}

function createNewPlayer(teamKey, name, pos, ovr, flag) {
const team = teamsDatabase[teamKey];
if (!team) return;

team.bench.push({
id: Date.now(),
name: name,
pos: pos,
ovr: parseInt(ovr),
flag: flag || team.flag,
goals: 0,
yellowCard: false,
redCard: false,
injured: false
});
}
