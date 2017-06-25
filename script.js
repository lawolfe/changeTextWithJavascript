// Change heading
var headline = document.getElementById("heading");
headline.onclick = function(){
    headline.innerHTML = "You did it!"
};
// Change paragraph text
var txt = document.getElementById("text");
txt.onclick = function(){
    txt.innerHTML = prompt("What would you like to say?");
};