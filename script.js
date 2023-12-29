
const search = document.querySelector(".search");
const btn = document.querySelector(".btn")
const input = document.querySelector(".input")

btn.addEventListener("keypress", change);
function change(){
   search.classList.add("active");
	input.focus();
}