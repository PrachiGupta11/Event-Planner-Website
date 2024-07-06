function validateForm(){
    let email=document.getElementById("email").value
    let pass=document.getElementById("password").value

    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var passPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&])[A-Za-z\d!@#$%^&]{6,}$/;

 
    if(!emailPattern.test(email)){
        alert('Please enter a valid email address')
        return false
    }
    if(!passPattern.test(pass)){
        alert('please Enter a valid password, Password length must be at least 6 and contain at least one uppercase letter,and one special character.')
        return  false
    }
    return true;
}