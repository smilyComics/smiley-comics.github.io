var index = 1;
var id = document.getElementById("slideShow");
window.onload = function () {
	if(index == 1) {id.style.marginLeft = "40%";}
	setInterval(function() {
		index += 1;
		changeSlide();
	},3000);
}

function slideSet(num) {
    index = num;
    changeSlide();
}
function changeSlide() {
    if (index > 6) { index = 1; }
    if (index == 1) { id.style.marginLeft = "40%"; }
    if (index == 2) { id.style.marginLeft = "35%"; }
    if (index == 3) { id.style.marginLeft = "35%"; }
    if (index == 4) { id.style.marginLeft = "23%"; }
    if (index == 5) { id.style.marginLeft = "38%"; }
    if (index == 6) { id.style.marginLeft = "32%"; }
    id.src = "indexes/comic-Images/slideShow/image" + index + ".png";
}