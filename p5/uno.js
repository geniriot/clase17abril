var spaceOddity;

function setup() {
  loadJSON('http://faco.cl/data/ejemplo.json', gotData,'jsonp');
  var miCanvas = createCanvas(windowWidth, 400);
  miCanvas.parent('miContenedor');
}

function gotData(data){
   console.log(data);
   spaceOddity = data;
}

function draw(){
  background(235);
  if(spaceOddity){
    rectMode(CORNER)
    for (var n = 0; n < spaceOddity.Oscar.length; n++){
    text(spaceOddity [0].Oscar.nombre, 10, 20*(n+1));
    }
  }
}
