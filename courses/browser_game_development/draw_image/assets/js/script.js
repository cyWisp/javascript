var canvas;
var vanvasContext;
var rhinoImage;

function drawCanvas(){
    canvas = document.getElementById('test');
    canvasContext = canvas.getContext('2d');
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
}

function drawRhino(){
    rhinoImage = document.getElementById('rhino');
    canvasContext.drawImage(rhinoImage, 10, 10);
}

function main(){
    console.log('*** TEST ***');
    drawCanvas();
    drawRhino();
}

window.onload = main();