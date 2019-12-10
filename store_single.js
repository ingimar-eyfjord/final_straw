// JavaScript Document
window.addEventListener("DOMContentLoaded", getData);
function getData() {
	fetch("https://iesdesigner.eu/school-folder/2-semester/final-straw/wordpress/wp-json/wp/v2/store?_embed").then(res => res.json()).then(handleData)
}
function handleData(myData) {
	myData.forEach(showPost)
}
function showPost(post) {
	const template = document.querySelector(".template").content;
	const postCopy = template.cloneNode(true);
	
	const h1 = postCopy.querySelector("h1");
	h1.textContent = post.title.rendered;
	const imgPath = post.cover.guid;
	const img = postCopy.querySelector("img");
	img.setAttribute("src", imgPath)
	img.setAttribute("alt", "Poster of the movie " + post.title.rendered);
	const bodyinfo = postCopy.querySelector(".bodyinfo");
	bodyinfo.innerHTML = post.content.rendered;
	
	var url_string = (window.location.href).toLowerCase();
	var url = new URL(url_string);
	var id = url.searchParams.get("id");

	function appendWork() {
		if (post.id == id) document.querySelector("#work").appendChild(postCopy);
	}
	appendWork()
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-10vh";
  }
  prevScrollpos = currentScrollPos;
}