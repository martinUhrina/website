
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

function windowSignIn(){
    console.log("pp");
    
    document.querySelector(".popup-content-sign-up").style.display = "block";
    document.querySelector(".popup-content").style.display = "none";
}

function signIn(){
    document.querySelector(".popup-content-sign-up").style.display = "none";
}