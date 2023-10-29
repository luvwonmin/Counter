var too = 0;
var number = document.getElementsByTagName('h2')[1];
function decrease(){
	too--;
	number.innerText = too;
}
function resetbtn(){
	too=0;
	number.innerText = too;
}
function increase(){
	too++;
	number.innerText = too;
}