let voornaam = prompt("wat is je voornaam");
var elementvoornaam1 = document.getElementById("voornaam");
elementvoornaam1.innerHTML = voornaam;

let leeftijd = prompt("hoe oud ben je");
if(leeftijd < 18){
    document.body.style.backgroundColor = "red";
}
if(leeftijd > 18){
    document.body.style.backgroundColor = "green";
}
var element = document.getElementById("leeftijd");
element.innerHTML = leeftijd;

let bezoeker= {
    voornaam:voornaam,
    leeftijd:leeftijd
}