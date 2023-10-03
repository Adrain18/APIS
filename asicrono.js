const teams = ["liverpol ","Dortmun","Chrlsie"];

setTimeout(() => console.log('Tarea asinrona'), 2000);


console.log('Sigue ejecutando');
console.log(teams);


function grtTeams(){
    return teams;

}

function asincGeTeams(){
    setTimeout(() => teams, 2000);
}

console.log(getTeams());{
console.log('Final de codigo');

console.log(asincGeTeams());
console.log('Terminal el llamado de funcion');

}