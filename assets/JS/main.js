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
    else {
        var users = JSON.parse(localStorage.getItem('users'));
        var flag=0;  //to determine whether the username or password is incorrect
        for(var i in users) {
            if(users[i].name == username && users[i].pass == password) {
                flag++;
                break;
            }
        }
        if(flag==0) {
            document.getElementById('wrong').innerHTML='Userame or the Password is incorrect.';
            document.getElementById('myForm').reset();
            e.preventDefault();  //prevents form from submitting
        }
        else
        document.getElementById('myForm').action='user.html';
    }
}
