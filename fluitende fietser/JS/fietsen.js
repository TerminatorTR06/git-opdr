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

function showdiv1(){
    if (document.getElementById("fiets1")) {
        document.getElementById("grid").style.display = 'none';
        document.getElementById("bike1").style.display = 'block';
    }
}
function showdiv2(){
    if (document.getElementById("fiets2")){
        document.getElementById("grid").style.display = 'none';
        document.getElementById("bike2").style.display = 'block';
    }
    
}
function showdiv3(){
    if (document.getElementById("fiets3")){
        document.getElementById("grid").style.display = 'none';
        document.getElementById("bike3").style.display = 'block';
    }
}
function showdiv4(){
    if (document.getElementById("fiets4")){
        document.getElementById("grid").style.display = 'none';
        document.getElementById("bike4").style.display = 'block';
    }
}
function hidediv(){
    document.getElementsByClassName("hiddendiv").style.display = 'none';
    document.getElementById("hiddencontainer").style.display = 'none';
    document.getElementById("grid").style.display = 'grid';
}