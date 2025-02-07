function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');

}

function checkEmails() {
    var a = document.getElementById("email").value;
    var b = document.getElementById("confirm-email").value;
    if (a !== b) {
        alert("The email addresses do not match. Please try again.");
        return false;
    }
    return true;
}
