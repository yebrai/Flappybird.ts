"use strict";
const canvas = document.querySelector("#my-canvas");
const ctx = canvas.getContext("2d");
const startScreen = document.querySelector("#splash-screen");
const startBtn = document.querySelector("#start-btn");
const gameOverScreen = document.querySelector("#gameover-screen");
let gameObj;
// se crea global pero el juego no ha iniciado
const startGame = () => {
    console.log("iniciando el juego");
    // ocultar la pantalla de inicio
    startScreen.style.display = "none";
    // mostrar el canvas
    canvas.style.display = "block";
    // "block" el elemento toma todo el tamaño del ancho de la pantalla
    // crear una nueva version del juego
    let gameObj = new Game();
    // iniciará el juego. ejecutar el metodo gameLoop
    // en esta seccion se agregarian setTimeout o setIntervals
    gameObj.gameLoop();
};
startGame();
