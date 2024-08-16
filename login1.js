function validate(callback) {
    
    
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    
    console.log(username.value); // Correct logging
    console.log(password.value); // Correct logging

    if (username.value.trim() == "admin" && password.value.trim() == "12345") {
        callback(); // Call the callback function on successful validation
    } else {
        alert('Invalid credentials');
        return false;
    }
}

function redirect() {
    console.log("redirect");
    window.location.href = "main1.html"; // Redirect to the main page
}
