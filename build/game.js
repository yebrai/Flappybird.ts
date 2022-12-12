"use strict";
class Game {
    constructor() {
        this.addTubo = () => {
            if (this.frames % 120 === 0) {
                // agrega un tubo cuando han pasado 120 frames (2 segundos)
                // el tubo de arriba
                // cual es la posición de arriba
                let nuevoTubo = new Tubo(this.randomYint, "arriba");
                this.tubeArr.push(nuevoTubo);
                // el tubo de abajo
                // cual es la posición de abajo
                let randomYint2 = this.randomYint + nuevoTubo.h + 100;
                let tuboAbajo = new Tubo(randomYint2, "abajo");
                this.tubeArr.push(tuboAbajo);
            }
        };
        this.polloTuboCollision = () => {
            // this.tubeArr
            this.tubeArr.forEach((eachTubo) => {
                // this.polloObj
                // eachTubo
                if (this.polloObj.x < eachTubo.x + eachTubo.w &&
                    this.polloObj.x + this.polloObj.w > eachTubo.x &&
                    this.polloObj.y < eachTubo.y + eachTubo.h &&
                    this.polloObj.h + this.polloObj.y > eachTubo.y) {
                    // Collision detected!
                    console.log("Colisión!!");
                    this.gameOver();
                }
            });
        };
        this.gameOver = () => {
            // detener el juego
            this.isGameOn = false;
            // ocultar el canvas
            canvas.style.display = "none";
            // mostrar la pantalla de fin
            gameOverScreen.style.display = "flex";
        };
        // aumento del score (bonus)
        this.gameScore = () => {
            if (this.tubeArr.length !== 0 && this.tubeArr[0].x < -50) {
                // el array no está vacio y llega el primer tubo llegó al borde del canvas
                // 1. incrementar el score
                this.score++;
                console.log("el score es: ", this.score);
                // 2. sacar los 2 tubos del array
                this.tubeArr.shift(); // remueve tubo 1 (el de arriba)
                this.tubeArr.shift(); // remueve tubo 2 (el de abajo)
            }
        };
        this.drawFondo = () => {
            ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height);
        };
        // * BONUS 
        this.drawScore = () => {
            ctx.font = "30px Arial";
            // (elTexto, posX, posY)
            let scoreStr = `Score: ${this.score}`;
            ctx.fillText(scoreStr, canvas.width * 0.4, 50);
        };
        this.checkPolloFall = () => {
            if (this.polloObj.y + this.polloObj.h > canvas.height) {
                this.gameOver();
            }
        };
        this.gameLoop = () => {
            this.frames = this.frames + 1;
            // 1. limpiar el canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // 2. acciones y movimientos de los elementos
            this.polloObj.gravedadPollo();
            // this.tubeArr.moveTubo() // * [element]
            this.tubeArr.forEach((eachTubo) => {
                eachTubo.moveTubo();
            });
            this.addTubo();
            this.polloTuboCollision();
            // bonus
            this.gameScore();
            this.checkPolloFall();
            // 3. dibujado de los elementos
            this.drawFondo();
            this.polloObj.drawPollo();
            // this.tubeArr.drawTubo(); // * [element]
            this.tubeArr.forEach((eachTubo) => {
                eachTubo.drawTubo();
            });
            this.drawScore();
            // 4. control de la recursion
            if (this.isGameOn === true) {
                requestAnimationFrame(this.gameLoop);
            }
        };
        // todas nuestras propiedades o elementos del juego
        // fondo
        this.fondo = new Image();
        this.fondo.src = "./images/bg.png";
        // pollo
        this.polloObj = new Pollo(); // creando un nuevo obj de la clase pollo
        // tubos
        this.randomNum = Math.random() * -150;
        this.randomYint = Math.floor(this.randomNum);
        this.tuboObj = new Tubo(this.randomYint, "abajo"); // prueba
        this.tubeArr = [];
        this.frames = 0; // aumentará 60 veces por segundo
        this.isGameOn = true;
        this.score = 0;
        // suelo (bonus)
    }
}
