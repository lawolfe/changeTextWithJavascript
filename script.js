// Change heading
var headline = document.getElementById("heading");
headline.onclick = function(){
    headline.innerHTML = "You did it!";
};

// Change paragraph text
var txt = document.getElementById("text");
txt.onclick = function(){
    txt.innerHTML = prompt("What would you like to say?");
};

// Buttons !NOT WORKING!
var button = document.getElementById("submit");
button.onclick = function(){
    var userTxt = document.getElementById("user-text").value;
    var userGen = document.getElementById("user-generated");
    userGen.innerHTML = userTxt;
};