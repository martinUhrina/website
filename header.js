
contactWindow = false;
loginWindow = false;
signUpUser = false;
signInWindow = false;
username = ""


class user{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
}

var users = [];
users.push(new user("admin","heslo"));




function isUser(){
    var usernameLogin = document.getElementById("usernameValue").value;
    var password = document.getElementById("passwordValue").value;
    for(i = 0; i < users.length; i++){
        if(usernameLogin == users[i].username && password == users[i].password){
            console.log("Prihlaseny ako" + usernameLogin);
            this.username = usernameLogin
            alert("Uzivatel " + username + " sa úspešne prihlásil");
            isLogin = true;
            LoginWindow();
            return;
        }
    }
    alert("nepodarilo sa prihlasit");
}

function windowSignIn(){
    if(document.querySelector(".popup-content-sign-up").style.display == "none") {
        console.log("bbb")
        document.querySelector(".popup-content-sign-up").style.display = "block";
        document.querySelector(".popup-content-login").style.display = "none";
    }
    else{
        console.log("aa")
        document.querySelector(".popup-content-sign-up").style.display = "none";
        document.querySelector(".popup-content-login").style.display = "block";
    }
    
}

function createNewUser(){
    var name = document.getElementById("newUserName").value;
    var password = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    if(password == confirmPassword){
        users.push(new user(name,password));
        document.getElementById("newUserName").value = "";
        document.getElementById("newPassword").value = "";
        document.getElementById("confirmPassword").value = "";
        windowSignIn();
        alert("New user was succesfully creted: " + name);
    }
    else{
        alert("Password is not compare with confirm password");
    }

}

function SignUser(){
    if(!this.signUpUser){
        document.querySelector(".popupSignUser").style.display = "flex";
        document.getElementById("textLoggedUser").innerHTML = this.username;
        this.signUpUser = true;
    }
    else{
        document.querySelector(".popupSignUser").style.display = "none";
        this.signUpUser = false;
    }
    
}

function getContact(){
    document.querySelector(".popupContact").style.display = "flex";
}

function ContactWindow(){
    if(!this.contactWindow) {
        document.querySelector(".popupContact").style.display = "flex";
        document.getElementById("popupContact").style.height = "300px";
        this.contactWindow = true;
    }
    else{
        document.querySelector(".popupContact").style.display = "none";
        this.contactWindow = false;
    }
}

function LoginWindow(){
    if(!this.loginWindow) {
        document.querySelector(".popupLogin").style.display = "flex";
        this.loginWindow = true;
    }
    else{
        document.querySelector(".popupLogin").style.display = "none";
        this.loginWindow = false;
    }
    
}


function signIn(){
    document.querySelector(".popup-content-sign-up").style.display = "none";
}