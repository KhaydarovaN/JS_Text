var eltextarea = document.querySelector('#textarea');
var eldiv = document.querySelector('.div');

eltextarea.addEventListener('keyup', function(){
	eldiv.textContent = eltextarea.value;
});