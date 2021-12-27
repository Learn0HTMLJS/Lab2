var content = document.getElementById("Show");
content.style.display = 'none';
var animation = document.getElementById("hide");
console.log(content);

setTimeout(hide, 3000);

function hide()
{
    content.style.display = 'inline-flex';
    animation.style.display = 'none';
}