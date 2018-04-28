/*
Function for Sign Up validation
*/
function validateFormSignUp(username, password) { 
    /*
    If any of the field is empty
    */
    if(!username || !password)  {
        alert('Please fill in the details');
        document.getElementById('wrong').innerHTML='';
        document.getElementById('myForm').reset();
        return false;
    }
    /*
    If password contains space
    */
    if(password.indexOf(' ')!=-1) {
            document.getElementById('wrong').style.color='red';
            document.getElementById('wrong').innerHTML='Password cannot have space';
            document.getElementById('myForm').reset();
            return false;
    }
    /*
    If password has length less than 5
    */
    if(password.length < 5) {
        document.getElementById('wrong').style.color='red';
        document.getElementById('wrong').innerHTML='Password should have minimum 4 characters';
        document.getElementById('myForm').reset();
    }
    else
        return true;
}
/*
Function for Sign In validation
*/
function validateFormSignIn(username, password,flag) {
    /*
    If any of the field is empty
    */ 
    if(!username || !password)  {
        alert('Please fill in the details');
        document.getElementById('wrong').innerHTML='';
        document.getElementById('myForm').reset();
        return false;
    }
    /*
    If username or password is incorrect
    */
    if(flag==0) {
        document.getElementById('wrong').innerHTML='Userame or the Password is incorrect.';
        document.getElementById('myForm').reset();
        return false;
    }
    else
        return true;
}
/*
If username already exists
*/
function usernameExist(users, username) {
    let flag=0;
    for(let i in users) {
        if(users[i].name == username) {
            document.getElementById('wrong').style.color='red';
            document.getElementById('wrong').innerHTML='This username already exists';
            flag++;
            return false;
        }
    }
    if(flag==0)
        return true;
}