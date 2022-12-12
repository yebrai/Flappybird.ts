class Game {
  fondo: HTMLImageElement
  frames: number
  polloObj: object
  isGameOn: boolean
  score: number

    constructor() {
        // todas nuestras propiedades o elementos del juego
        // fondo
        this.fondo = new Image()
        this.fondo.src = "./images/bg.png"
        // pollo
        this.polloObj = new Pollo() // creando un nuevo obj de la clase pollo

        // tubos
        // this.tuboObj = new Tubo(); // prueba
        //this.tubeArr = []

        this.frames = 0 // aumentará 60 veces por segundo
        this.isGameOn = true

        this.score = 0

        // suelo (bonus)
    }


    drawFondo = () => {
        ctx.drawImage(this.fondo, 0, 0, canvas.width, canvas.height)
    };

    // * BONUS 
    drawScore = () => {
        ctx.font = "30px Arial"
        // (elTexto, posX, posY)
        let scoreStr = `Score: ${this.score}`
        ctx.fillText(scoreStr, canvas.width * 0.4, 50)
    }

     gameLoop = () => {
    this.frames = this.frames + 1

    // 1. limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 2. acciones y movimientos de los elementos
    // this.tubeArr.moveTubo() // * [element]


    
    // bonus


    // 3. dibujado de los elementos
    this.drawFondo();

    // this.tubeArr.drawTubo(); // * [element]

    this.drawScore()

    // 4. control de la recursion
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };


}