// Change heading
var headline = document.getElementById("heading");
headline.onclick = function(){
    headline.innerHTML = "I did it!"
};
// Change paragraph text
var txt = document.getElementById("text");
txt.onclick = function(){
    txt.innerHTML = prompt("What text would you like to enter on this page?");
};