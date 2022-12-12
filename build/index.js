"use strict";
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
const startScreen = document.querySelector("#splash-screen");
const startBtn = document.querySelector("#start-btn");
const gameOverScreen = document.querySelector("#gameover-screen");
const restartBtn = document.querySelector("#restart-btn");
let gameObj;
// se crea global pero el juego no ha iniciado
const startGame = () => {
    console.log("iniciando el juego");
    // ocultar la pantalla de inicio
    startScreen.style.display = "none";
    gameOverScreen.style.display = "none";
    // mostrar el canvas
    canvas.style.display = "block";
    // "block" el elemento toma todo el tamaño del ancho de la pantalla
    // crear una nueva version del juego
    gameObj = new Game();
    // iniciará el juego. ejecutar el metodo gameLoop
    // en esta seccion se agregarian setTimeout o setIntervals
    gameObj.gameLoop();
};
// * ADD EVENT LISTENERS
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);
window.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        // como invocamos saltoPollo() ??
        // gameObj.polloObj.saltoPollo();
        // si hay tiempo solventamos ese bug
        // BONUS (cambio de funcion)
        gameObj.polloObj.isJumping = true;
    }
});
// BONUS
window.addEventListener("keyup", (event) => {
    if (event.code === "Space") {
        gameObj.polloObj.isJumping = false;
    }
});
