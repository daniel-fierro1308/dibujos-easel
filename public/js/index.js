var stage = new createjs.Stage("myCanvas");
var global = new createjs.Graphics();
var airplane = new createjs.Graphics();

//airplane
airplane
.f('#fff')
.s('#000')
.ss(1)
.mt(100,110)
.lt(115,100)
.lt(130,110)
.lt(210,110)
.lt(230,125)
.lt(120,125)
.lt(100,110)
.f('#000')
.mt(205,110)
.dr(205,110,5,5)
.mt(190,110)
.dr(190,110,5,5)



var air = new createjs.Shape(airplane);


function init(){
// sun
global.ss(4).f("yellow").dc(1070, 40, 130);

global.f('green');

//mountain 1
global
.s('#000')
.ss(1)
.mt(30,500)
.lt(190,210)
.lt(390,500)

//mountain 2
global
.mt(600,500)
.lt(800, 230)
.lt(950, 500)

//mountain 3
global
.s('#000')
.mt(200, 500)
.lt(330, 210)
.lt(500, 500)

//mountain 4
global
.mt(740, 500)
.lt(930, 210)
.lt(1110, 500)


//mountain 5
global
.mt(0, 500)
.lt(70, 250)
.lt(200, 500)



//mountain 6
global
.s('#000') 
.mt(880, 500)
.lt(1050, 230)
.lt(1200, 500)
.ef()
.es()

// Part of the house
global
.ss(2)
.s('#000')
.f("#8E3728")
.r(390,300,350,200)


//Door
global
.f("#fff")
.r(535,420,70,80)

//Left window
global
.f("#fff")
.r(430,320, 55,55)


//Right window
global
.f("#fff")
.r(640,320, 55,55)
.ef()

//chimney
global
.f("#603728").r(710, 220, 30, 80)
.es()
// techo
.ss(2)
.s('#000')
.f("#6B3728")

.mt(390,300)
//line left
.lt(420,250)
//line up
.lt(710,250)
//line right
.lt(740,300)
.ef()
.es()


// clouds

global
.f("#fff")
.de(10, 10, 80,60)
.de(60, 10, 80,60)

global
.de(180, 40, 80,60)
.de(230, 40, 80,60)
.de(270, 40, 80,60)
.de(320, 40, 80,60)

global
.de(600, 55, 80,60)
.de(650, 55, 80,60)
.de(700, 55, 80,60)

.de(900, 30, 80,60)
.de(950, 30, 80,60)
.ef();

stage.addChild(new createjs.Shape(global),air);
stage.update();
}


document.onkeydown = function(event){
    var press = event.key;
    switch(press){
        case 'ArrowUp':
            event.preventDefault();
            air.y -= 2;
            break;
        case 'ArrowRight':
            event.preventDefault();
            air.x += 2;
            break;
        case 'ArrowDown':
            event.preventDefault();
            air.y += 2;
            break;
        case 'ArrowLeft':
            event.preventDefault();
            air.x -= 2;
            break;
            default:
            console.log('Error you do not press a key correct');
    }
    stage.update();
}
