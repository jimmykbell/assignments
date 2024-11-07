// Open the popup when "Add Packet" is clicked
function openAddPacketPopup() {
    document.getElementById("popup").style.display = "flex";
    showStep('packet-number-step');
}

// Close the popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Function to show the next question in the form
function nextQuestion() {
    const currentStep = document.querySelector('.step:not([style*="display: none"])');
    const nextStep = currentStep.nextElementSibling;
    if (nextStep) {
        currentStep.style.display = 'none';
        nextStep.style.display = 'block';
    }
}

// Function to handle champion or recreational selection
function selectChampionRec(choice) {
    console.log("Champion or Recreational: ", choice);
    nextQuestion();
}

// Function to handle rank selection
function selectRank(rank) {
    console.log("Start Rank: ", rank);
    nextQuestion();
}

// Function to handle end rank selection
function selectEndRank(rank) {
    console.log("End Rank: ", rank);
    nextQuestion();
}

// Function to handle age group selection
function selectAgeGroup(group) {
    console.log("Age Group: ", group);
    nextQuestion();
}

// Function to handle gender selection
function selectGender(gender) {
    console.log("Gender: ", gender);
    nextQuestion();
}

// Function to handle body count input
function saveBodyCount() {
    const bodyCount = document.getElementById("body-count").value;
    console.log("Body Count: ", bodyCount);
    nextQuestion();
}

// Function to handle assigned ring input
function saveAssignedRing() {
    const assignedRing = document.getElementById("assigned-ring").value;
    console.log("Assigned Ring: ", assignedRing);
    nextQuestion();
}

// Function to save the packet data
function saveData() {
    alert("Packet saved successfully!");
    closePopup();
}
