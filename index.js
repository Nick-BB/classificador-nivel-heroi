let heroName = "Arthur";
let heroXp = 6900;
let heroNivel = "sem nível"

if (heroXp < 1000 ) {
    heroNivel = "Ferro";
} else if (heroXp >=1001 && heroXp <= 2000) {
    heroNivel = "Bronze";
} else if (heroXp >=2001 && heroXp <= 5000) {
    heroNivel = "Prata";
} else if (heroXp >=5001 && heroXp <= 7000) {
    heroNivel = "Ouro";
} else if (heroXp >=7001 && heroXp <= 8000) {
    heroNivel = "Platina";
} else if (heroXp >=8001 && heroXp <= 9000) {
    heroNivel = "Ascendente";
} else if (heroXp >=9001 && heroXp <= 10000) {
    heroNivel = "Imortal";
} else if (heroXp >= 10001) {
    heroNivel = "Radiante";
}

console.log("O Herói de nome " + heroName + " está no nível de " + heroNivel);