// JavaScript Document
window.addEventListener("DOMContentLoaded", getData);
window.addEventListener("DOMContentLoaded", getfetured);
function getData() {
	fetch("https://iesdesigner.eu/school-folder/2-semester/final-straw/wordpress/wp-json/wp/v2/work?_embed").then(res => res.json()).then(handleData)
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
	
 document.querySelector("#work").appendChild(postCopy)
}

function getfetured() {
	fetch("https://iesdesigner.eu/school-folder/2-semester/final-straw/wordpress/wp-json/wp/v2/work?_embed").then(res => res.json()).then(featuredyes)
}
function featuredyes(featdata) {
	featdata.forEach(showfeatured)
}
function showfeatured(featuredata){
	const template = document.querySelector(".featuredtemplate").content;
	const postCopy = template.cloneNode(true);
	const carnavcopy = postCopy.querySelector("button");
	
	const imgPath = featuredata.cover.guid;
	const img = postCopy.querySelector("img");
	
	img.setAttribute("src", imgPath)
	img.setAttribute("alt", "Poster of the movie " + featuredata.title.rendered);
	
//	const h1 = postCopy.querySelector("h1");
//	h1.textContent = featuredata.title.rendered;

	function appendcarnav(){
		if (featuredata.featured == 1){
		document.querySelector(".caroselnav").appendChild(carnavcopy);
	}}
	appendcarnav()
	function appendfeatured(){
	
	if (featuredata.featured == 1)
	{document.querySelector(".carousel_track").appendChild(postCopy);
	}}
	appendfeatured()
//	console.log(featuredata.featured);
//	document.querySelector(".featured").appendChild(postCopy);
}