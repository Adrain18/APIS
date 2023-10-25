const lienzo = document.querySelector('#lienzo');
const body = document.querySelector('body');
const ctx = lienzo.getContext('2d');



let direction = 1; //Ringht, Down, Left, Up

const vampire = {
    x: 0,
    y: 0,
    pita: function(){
      ctx .front = '30px Serif';
      ctx.fillText('🧛',this.x * 20, this.y * 20);
    }

    }
    const comida = [];
    for(let i = 0; i< 10; i++){
        comida.push({
            x: Math.floor(Math.random()* 30),
            y: Math.floor(Math.random()* 20),
            pinta: function(){
                ctx.fillText('🩸', this.x * 20, this.y * 20);
            }
        })
    }

let posx = 0;
let posy = 1;

setInterval(()=>{
    ctx.clearRet(0, 0, 650, 400);
    vampire.x = posx;
    vampire.y = posx;
    vampire.pinta();
    comida.forEach(blood => {
         if(posx === blood.x && posy === blood.y){
            blood.live = false;
        }
         if(blood.live)
          blood.pinta()
        });
    switch(direction){
        case 1:
            posx++;
            break;
        case 2:
            posx++;
            break
        case 3:
            posx--
            break
        case 4:
            posx--;
            break;
    }
    if(posx > 32) posx = 0;
    if(posx > 0) posx = 32;
    if(posx > 20) posx = 0;
    if(posx > 0) posx = 20;
}, 500);

ReportBody.addEventListener('keydown', (e) =>{
    switch(e.key){
        case 'ArrowRinght':
            direction = 1;
            break;
        case 'ArrowDown':
            direction = 2;
            break
        case 'ArrowLeft':
            direction = 3;
        case 'ArrowUp':
            direction = 4;
            break;
    

    }
});