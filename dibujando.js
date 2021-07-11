var dCanvas = document.getElementById("dibujito");
var lienzo = dCanvas.getContext("2d");
var contador = 0;
var largo = lienzo.canvas.clientHeight;
var ancho = lienzo.canvas.clientWidth;
colorLinea = "#ff00ae";

function dibujame(colorTrazo, xI, yI, xF, yF) {
    lienzo.beginPath();
    lienzo.strokeStyle = colorTrazo;
    lienzo.moveTo(xI, yI);
    lienzo.lineTo(xF, yF);
    lienzo.stroke();
    lienzo.closePath();
}

while (contador < largo) {
    dibujame(colorLinea,0,0+contador,0+contador,largo);
    dibujame(colorLinea, ancho,0+contador,0+contador,0);
    dibujame(colorLinea,0+contador,0,0,largo-contador);
    dibujame(colorLinea,contador,largo,ancho,largo-contador);
    contador = contador + 5;
    //contador++;
}

colorLinea = "#00eeff";

for(l=0; l < largo; l++){
    dibujame(colorLinea,0,0+contador,0+contador,largo);
    dibujame(colorLinea, ancho,0+contador,0+contador,0);
    dibujame(colorLinea,0+contador,0,0,largo-contador);
    dibujame(colorLinea,contador,largo,ancho,largo-contador);
}

dibujame(colorLinea,1,1,1,largo);
dibujame(colorLinea,1,largo-1,ancho,largo-1);
dibujame(colorLinea,ancho-1,largo-1,ancho-1,1);
dibujame(colorLinea,1,1,ancho,1);