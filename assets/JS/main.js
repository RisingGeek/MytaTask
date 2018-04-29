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
    document.getElementById('newpass').innerHTML='Choose Password:';
    document.getElementById('wrong').innerHTML='';
    document.getElementById('signup').style.display='none';
    passwordStrength();  //To check the strength of the password
    if(document.getElementById('login').innerHTML=='Sign Up')
        alreadyAccount();    
}
/*
If users clicks on Sign Up by mistake
*/
function alreadyAccount() {
    document.getElementById('alreadyAcc').style.display='block';
    document.getElementById('alreadyAcc').addEventListener('click', function() {
        document.getElementById('login').innerHTML='Sign In';
        document.getElementById('newpass').innerHTML='Password:';
        document.getElementById('wrong').innerHTML='';
        document.getElementById('myForm').reset();
        document.getElementById('signup').style.display='block';
        document.getElementById('alreadyAcc').style.display='none';
    });
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
        if(!validateFormSignUp(username, password)) {
            e.preventDefault();
            return false;
        }
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
            if(!usernameExist(users, username)) {
                e.preventDefault();
                return false;
            }
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
        }
        document.getElementById('myForm').action='config.html';//opens config.html when form is submitted
    }
    /*
    Condition for Sign In
    */
    else {
        var users = JSON.parse(localStorage.getItem('users'));
        var flag=0;  //to determine whether the username or password is incorrect
        for(var i in users) {
            if(users[i].name == username && users[i].pass == password) {
                flag++;
                break;
            }
        }
        if(!validateFormSignIn(username, password,flag)) {
            e.preventDefault();
            return false;
        }
        else
        document.getElementById('myForm').action='config.html';
    }
}