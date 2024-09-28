// Get the buttons
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

// Yes Button Event
yesBtn.addEventListener("click", function() {
    response.textContent = "You're the love of my life!❤️";
    response.classList.remove("hidden");
});

// No Button Event (it moves away when hovered)
noBtn.addEventListener("mouseover", function() {
    const randomX = Math.floor(Math.random() * window.innerWidth - noBtn.clientWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight - noBtn.clientHeight);

    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});
