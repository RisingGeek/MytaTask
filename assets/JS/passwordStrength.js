function passwordStrength() {
    var passwordStrength = document.getElementById('wrong');
    document.getElementById('password').addEventListener('keyup', function() {
        if(document.getElementById('login').innerHTML=='Sign Up') {
        var password = document.getElementById('password').value;
            if(password.length >=0 && password.length <=6) {
                passwordStrength.style.color='red';
                passwordStrength.innerHTML='Password strength : Weak';
            }
            else if(password.length >=7 && password.length <=13) {
                passwordStrength.style.color='yellow';
                passwordStrength.innerHTML='Password strength : Medium';
            }
            else if(password.length >13) {
                passwordStrength.style.color='green';
                passwordStrength.innerHTML='Password strength : Strong';
            }
        }
    });
}