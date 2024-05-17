document.addEventListener("DOMContentLoaded", function () {
    const movingImage = document.getElementById("movingImage");
    let currentPosition = 0;
    let direction = 1; // 1 for right, -1 for left
  
    function moveImage(){
        currentPosition += direction * 5;
  
        if (currentPosition >= window.innerWidth - movingImage.width || currentPosition <= 0){
            direction *= -1; //different direction when reaching edge of screen
            rotateImage();
        }
  
        movingImage.style.left = currentPosition + "px";
    }
  
    function rotateImage(){
        const rotation = direction === 1 ? 0 : 180;
        movingImage.style.transform = `scaleX(${direction})`;
    }
  
    setInterval(moveImage, 24)
  });