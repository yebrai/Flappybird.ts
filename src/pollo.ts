class Pollo {
  img: HTMLImageElement
  x: number
  y: number
  w: number
  h: number
  speed: number
  jumpSpeed: number
  isJumping: boolean
  
    constructor() {
      // propiedades del pollo
      this.img = new Image();
      this.img.src = "./images/flappy.png";
      this.x = 50; // posición en eje x
      this.y = 50; // posición en eje y
      this.w = 40; // ancho del pollo
      this.h = 35; // alto del pollo
      this.speed = 1.5;
      this.jumpSpeed = 40;
  
  
      // BONUS
      this.isJumping = false;
    }
  
    // metodos o acciones del pollo
    drawPollo = () => {
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    };
  
    // pollo caiga. gravedad del pollo.
    gravedadPollo = () => {
      // this.y = this.y + this.speed;
  
      if (this.isJumping === true) {
        if (this.y > 0) {
          // evita que suba fuera del canvas
          this.y = this.y - this.speed
        }
      } else {
        this.y = this.y + this.speed;
      }
    };
  
    // salto del pollo
    saltoPollo = () => {
      this.y = this.y - this.jumpSpeed;
    };
    // aleteo del pollo y animacion (bonus)
  }