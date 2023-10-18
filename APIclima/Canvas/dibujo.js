document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
  
        // Cuerpo del patito
        ctx.beginPath();
        ctx.arc(200, 200, 80, 0, 2 * Math.PI);
        ctx.fillStyle = "#FFD700"; // Color amarillo
        ctx.fill();
        ctx.stroke();

         // Cabeza del patito
    ctx.beginPath();
    ctx.arc(200, 100, 50, 0, 2 * Math.PI);
    ctx.fillStyle = "#FFD700"; // Color amarillo
    ctx.fill();
    ctx.stroke();
  
    // Ojos
    ctx.beginPath();
    ctx.arc(185, 90, 5, 0, 2 * Math.PI);
    ctx.arc(215, 90, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#000"; // Color negro
    ctx.fill();
  
    // Pico
    ctx.beginPath();
    ctx.moveTo(200, 100);
    ctx.lineTo(190, 110);
    ctx.lineTo(210, 110);
    ctx.closePath();
    ctx.fillStyle = "#FF6347"; // Color naranja
    ctx.fill();
  });
  