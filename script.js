// Get modal element
var modal = document.getElementById("myModal");

// Get button that opens the modal
var btn = document.getElementById("openModal");

// Get <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the audio element
var music = document.getElementById("backgroundMusic");

// Set volume to 50%
music.volume = 0.6; // Adjust this value between 0.0 and 1.0

// When the user clicks the button, open the modal and play music
btn.onclick = function() {
    modal.classList.remove("hidden");
    music.play(); // Play the music
}

// When the user clicks on <span> (x), close the modal and pause music
span.onclick = function() {
    modal.classList.add("hidden");
    music.pause(); // Pause the music
    music.currentTime = 0; // Reset the music to the beginning
}

// When the user clicks anywhere outside of the modal, close it and pause music
window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.add("hidden");
        music.pause(); // Pause the music
        music.currentTime = 0; // Reset the music to the beginning
    }
}
