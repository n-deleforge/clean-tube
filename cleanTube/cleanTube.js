// ===> Variables
const DEBUG = false;
const DELAY = 2000;

// ===> Main call
if (DEBUG) console.log(DELAY)
setTimeout(hideElements, DELAY);
if (DEBUG) console.log("CleanTube loaded");
if (DEBUG) console.log("Called ended");

// ===> Main function to hide or display the different elements
function hideElements() {
    // => Left menu

    // Hide "Trending"
    document.getElementById("sections").childNodes[2].style.display = "none";
    // Hide "Library", "History" etc;
    document.getElementById("sections").childNodes[3].style.display = "none";
    // Hide "best of Youtube"
    document.getElementById("sections").childNodes[0].childNodes[3].childNodes[1].style.display = "none";
    // Hide "Parameters" etc.
    document.getElementById("sections").childNodes[0].childNodes[3].childNodes[3].style.display = "none";
    // Hide the footer of the menu
    document.getElementById("footer").style.display = "none";

    // => Top menu

    // Hide "Add a video"
    document.getElementById("buttons").childNodes[0].style.display = "none";
    // Hide "Youtube apps"
    document.getElementById("buttons").childNodes[1].style.display = "none";

    // => AppDrawer display

    // Hide "Trending"
    document.getElementsByClassName("style-scope ytd-mini-guide-renderer")[2].style.display = "none";
    // Hide "Library"
    document.getElementsByClassName("style-scope ytd-mini-guide-renderer")[4].style.display = "none";

    if (DEBUG) console.log("Hiding done");
}