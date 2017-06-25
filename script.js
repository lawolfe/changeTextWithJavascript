// Change heading
document.getElementById("heading");
heading.onclick = function(){
    heading.innerHTML = "I did it!"
};
// Change paragraph text
document.getElementById("text");
text.onclick = function(){
    text.innerHTML = prompt("What text would you like to enter on this page?");
};