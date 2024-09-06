document.getElementById('submit-button').addEventListener('click', function(){
    //User Email get
    const usetInput = document.getElementById("user-email");
    const userEmail = usetInput.value ;
    

    //user password get
    const passwordInput = document.getElementById('user-password');
    const userPass = passwordInput.value ;

    if(userEmail == 'admin@gmail.com' && userPass == '123456'){
        alert("Login Successfull");
        window.location.href = "banking.html"
    } else  if(userEmail != 'admin@gmail.com' || userPass != '123456'){
        alert("UserName or Password is not valid");
    
    }

    
})

