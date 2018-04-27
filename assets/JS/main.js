window.addEventListener('load', init);
function init() {
document.getElementById('signup').addEventListener('click', newUser);  //for new user
document.getElementById('myForm').addEventListener('submit', whenSubmit);
}
/*
Function for Sign Up
*/
function newUser() {
    document.getElementById('login').innerHTML='Sign Up';
    document.getElementById('newpass').innerHTML='Choose Password';
}
/*
This function is called when the form is submitted
*/
function whenSubmit(e) {
    var username = document.getElementById('user').value;
    var password = document.getElementById('password').value;
    /*
    Condition for Sign Up
    */
    if(document.getElementById('login').innerHTML=='Sign Up') {
        var user = {
            name : username,
            pass : password
        };
        
        if(localStorage.getItem('users') === null) {
            var users = [];  //contains username and password of all users
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
        }
        else {
            var users = JSON.parse(localStorage.getItem('users'));
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
        }
        document.getElementById('myForm').action='user.html';//opens user.html when form is submitted
    }
}