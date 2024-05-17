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
    setInterval(updateStatus, 5);
});
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
function isBusinessOpen() {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 (Sunday) to 6 (Saturday)
  const currentHour = now.getHours();
  const currentMinutes = now.getMinutes();
  // Define opening hours
  const openingHours = {
    0: { closed: true }, // Sunday closed
    1: { start: 12.5, end: 18 },
    2: { start: 8.5, end: 18 },
    3: { start: 8.5, end: 18 },
    4: { start: 8.5, end: 18 },
    5: { start: 8.5, end: 19.5 },
    6: { start: 9.5, end: 17 }
  };

  const todayOpeningHours = openingHours[dayOfWeek];
  if (todayOpeningHours.closed) {
    return "Closed today";
  }

  const openingTime = todayOpeningHours.start * 60; // Convert hours to minutes
  const closingTime = todayOpeningHours.end * 60; // Convert hours to minutes
  const currentTime = currentHour * 60 + currentMinutes; // Convert hours to minutes

  return currentTime >= openingTime && currentTime <= closingTime
    ? "Open"
    : "Gesloten";
}

// Update status on the webpage
function updateStatus() {
  const statusElement = document.getElementById("opendicht");
  const status = isBusinessOpen();
  statusElement.textContent = `${status}`;
}

// Call the updateStatus function initially
updateStatus();

// Set interval to update every minute
