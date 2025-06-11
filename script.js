
// Function to open modal
function openProfileModal() {
document.getElementById("profileModal").style.display = "flex";
}

// Function to close modal
function closeProfileModal() {
document.getElementById("profileModal").style.display = "none";
}


function showHelpModal() {
document.getElementById('helpModal').style.display = 'block';
document.getElementById('overlay').style.display = 'block';
}

function closeHelpModal() {
document.getElementById('helpModal').style.display = 'none';
document.getElementById('overlay').style.display = 'none';
}


function showLogoutDialog() {
    document.getElementById('logoutDialog').style.display = 'block';
}
function hideLogoutDialog() {
    document.getElementById('logoutDialog').style.display = 'none';
}
function logout() {
    window.location.href = 'signup.html';
}



function toggleNotificationDropdown() {
    let dropdown = document.getElementById("notificationDropdown");
    let overlay = document.getElementById("notificationOverlay");

    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
        overlay.style.display = "none";
    } else {
        dropdown.style.display = "block";
        overlay.style.display = "block";
    }
}

function closeNotificationDropdown() {
    document.getElementById("notificationDropdown").style.display = "none";
    document.getElementById("notificationOverlay").style.display = "none";
}



//sign up

    // Get elements for sign up overlay
    const signUpOverlay = document.getElementById("signUpOverlay");
    const openSignUpBtn = document.getElementById("openSignUp");
    const closeSignUpBtn = document.getElementById("closeSignUp");

    // Open overlay when clicking "Sign Up"
    openSignUpBtn.addEventListener("click", function(event) {
        event.preventDefault();
        signUpOverlay.style.display = "flex"; // Show Sign Up overlay
    });

    // Close overlay when clicking "X"
    closeSignUpBtn.addEventListener("click", function() {
        signUpOverlay.style.display = "none"; // Hide Sign Up overlay
    });

    // Prevent overlay from showing again after form submission
    document.getElementById("signUpForm").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Sign Up Successful!");
        signUpOverlay.style.display = "none"; // Hide overlay after submission
    });

   