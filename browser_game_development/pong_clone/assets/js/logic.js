var canvas;
var canvasContext;


function drawCanvas(){
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');
    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
}


// ========================================
// Main
function main(){
    console.log('*** START GAME LOOP ***');
    drawCanvas();



}

window.onload = main();