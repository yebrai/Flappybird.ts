class Tubo {
    img: HTMLImageElement
    x: number
    y: number
    w: number
    h: number
    speed: number

    constructor(yParam: number, orientation: string) {
    
      // todas las propiedades de cada tubo
      this.img = new Image()
      if (orientation === "arriba") {
        this.img.src = "./images/obstacle_top.png"
      } else {
        this.img.src = "./images/obstacle_bottom.png"
      }
      this.x = canvas.width
  
      this.y = yParam
      this.w = 50
      this.h = 250
      this.speed = 2
    }
  
    // metodos o acciones de cada tubo
    drawTubo = () => {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    };
  
    // movimiento de los tubos
    moveTubo = () => {
      this.x = this.x - this.speed
    }
  }