const canvas = document.querySelector("#my-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
const startScreen = document.querySelector("#splash-screen") as HTMLDivElement;
const startBtn = document.querySelector("#start-btn") as HTMLButtonElement;
const gameOverScreen = document.querySelector("#gameover-screen") as HTMLDivElement;
let gameObj;

// se crea global pero el juego no ha iniciado

const startGame = () => {
    console.log("iniciando el juego")
    
    // ocultar la pantalla de inicio
    startScreen.style.display = "none"
    
    // mostrar el canvas
    canvas.style.display = "block"
    // "block" el elemento toma todo el tamaño del ancho de la pantalla
    
    // crear una nueva version del juego
    
    
    let gameObj = new Game()
    // iniciará el juego. ejecutar el metodo gameLoop
    // en esta seccion se agregarian setTimeout o setIntervals

    gameObj.gameLoop()
};

startGame()
