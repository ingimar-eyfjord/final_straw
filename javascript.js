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
	fetch("https://iesdesigner.eu/school-folder/2-semester/final-straw/wordpress/wp-json/wp/v2/work?_embed").then(res => res.json()).then(featuredyes).then(() => {
	
	const track = document.querySelector(".carousel_track");
	const slides = Array.from(track.children);

		
	const nextButton = document.querySelector(".carousel_button--right");
	const prevButton = document.querySelector(".carousel_button--left");
		
		
	const dotNav = document.querySelector(".caroselnav");
	const dots = Array.from(dotNav.children);
		
	slides[0].classList.add("currentSlide");
	const slideWidth = slides[0].getBoundingClientRect().width;	
	
//		
//	slides.forEach((slide, index) =>{
//		slide.style.left = slideWidth * index + "px";
//	})	
	nextButton.addEventListener("click", e =>{
	const currentSlide = track.querySelector(".currentSlide");
	const NextSlide = currentSlide.nextElementSibling;
	const amounttomove = NextSlide.style.transform.slideWidth;
	
	track.style.transform += "translateX(-33vw)";
	currentSlide.classList.remove("currentSlide");
	NextSlide.classList.add("currentSlide");
		console.log(slides);
		console.log(NextSlide);
	})
		
	prevButton.addEventListener("click", e =>{
	const currentSlide = track.querySelector(".currentSlide");
	const prevSlide = currentSlide.previousElementSibling;
	const amounttomove = prevSlide.style.transform.slideWidth;
	
	track.style.transform += "translateX(33vw)";
	currentSlide.classList.remove("currentSlide");
	prevSlide.classList.add("currentSlide");
//		console.log(slides);
//		console.log(NextSlide);
	})
	
	
	

		
		
})
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
}
