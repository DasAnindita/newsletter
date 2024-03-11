document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("Email").value;
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
        // Email is valid, show success message and clear the input field
        document.getElementById("successMessage").style.display = "block";
        document.getElementById("Email").value = "";
    } else {
        // Email is not valid, you can show an error message or handle it accordingly
        alert("Please enter a valid email address.");
    }
});
