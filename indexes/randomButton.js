var maxIndex = 6;
var currentIndex = maxIndex;

function first() {
    currentIndex = 1;
    newIndex();
}

function last() {
    currentIndex--;
    newIndex();
}

function next() {
    currentIndex++;
    newIndex();
}

function latest() {
    currentIndex = maxIndex;
    newIndex();
}

function randomNum() {
	var num = Math.floor((Math.random() * maxIndex) + 1);
	currentIndex = num;
	newIndex();
}

function newIndex() {
    if (currentIndex > maxIndex) { currentIndex = maxIndex }
    if (currentIndex < 1) { currentIndex = 1 }
    var id = document.getElementById("comic-image");
    id.src = "comic-Images/comic"+currentIndex+".png";
}