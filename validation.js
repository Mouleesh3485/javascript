function validateSignup() {
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value.trim();

  
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    if (!username || !password) {
        document.getElementById('usernameError').textContent = 'Both username and password are required';
        return false; 
    }

    // Store user details in localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

   
    window.location.href = 'login.html';

   
    return false;
}
