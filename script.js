// Function to open the "Add Ring" popup
document.getElementById("add-ring-btn").addEventListener("click", function() {
    document.getElementById("add-ring-popup").style.display = "flex";
    // You can add form elements here dynamically
});

// Function to close the popup
function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}

// Placeholder functionality for the other buttons (View Ring, Ring Status)
document.getElementById("view-ring-btn").addEventListener("click", function() {
    alert("View Ring option clicked.");
});

document.getElementById("ring-status-btn").addEventListener("click", function() {
    alert("Ring Status option clicked.");
});
