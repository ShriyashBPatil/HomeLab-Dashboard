var users = {
    "admin": "admin"
};

function authenticate() {
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    if (users[username] && users[username] === password) {
        window.location.href = "dashboard.html"; 
        return false; 
    } else {
        alert("Invalid username or password. Please try again.");
        return false; 
    }
}
