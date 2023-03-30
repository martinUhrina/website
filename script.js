class item{
    constructor(name, prize, type){
        this.name = name;
        this.prize = prize;
        this.type = type
    }
}

isLogin = false;

finalPrize = 0;
var listItems = [];
var listItemsToBuy = [];
listItems.push(new item("Granule", 10, "dog"));
listItems.push(new item("Voditko", 5, "dog"));
listItems.push(new item("Rybicky", 2, "cat"));
listItems.push(new item("Mlieko", 1, "cat"));






function addToCart(prize){
    this.finalPrize += prize;
    document.getElementById("prize").innerHTML = Number(this.finalPrize).toFixed(2) + "€";
}

function getFeedback(){
    document.querySelector(".popup").style.display = "flex";
}

function closeWindowFeedback(){
    
    document.querySelector(".popup").style.display = "none";    
}

function changeSearch(){
    var input = document.getElementById("inputSearch").value;
    if(input)alert(input);
}

function choiceDog(){
    alert(listItems[0].prize);
    console.log(listItems[2].name);
}