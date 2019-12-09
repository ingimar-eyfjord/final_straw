// JavaScript Document

window.addEventListener("DOMContentLoaded", getfetured);

function getfetured() {
	fetch("https://iesdesigner.eu/school-folder/2-semester/final-straw/wordpress/wp-json/wp/v2/work?_embed").then(res => res.json()).then(featuredyes).then(() => {
	
	const track = document.querySelector(".storecarousel_track");
	const slides = Array.from(track.children);
	const lastslide = slides.length - 3;
		
		
	const nextButton = document.querySelector(".storecarousel_button--right");
	const prevButton = document.querySelector(".storecarousel_button--left");
		
		
	const dotNav = document.querySelector(".storecaroselnav");
	const dots = Array.from(dotNav.children);
		
	slides[0].classList.add("currentSlide");
	slides[lastslide].classList.add("lastSlide");
	const slideWidth = slides[0].getBoundingClientRect().width;	
	console.log(slides);
		
		function removeprevbutton(){
		if (document.querySelector(".storecarousel-slide").classList.contains("currentSlide")){
		document.querySelector(".storecarousel_button--left").style.display = "none";}	}
		removeprevbutton()

	nextButton.addEventListener("click", e =>{
	const currentSlide = track.querySelector(".currentSlide");
	const NextSlide = currentSlide.nextElementSibling;
	const amounttomove = NextSlide.style.transform.slideWidth;
	const lastSlide = track.querySelector(".lastSlide")
	
	document.querySelector(".storecarousel_button--left").style.display = "block";
	
	
	document.querySelectorAll(".storecarousel-slide").forEach(e => {

				if (e.classList.contains("currentSlide") && e.classList.contains("lastSlide")) {
					console.log("object");
					document.querySelector(".storecarousel_button--right").style.display = "none";
				}
			})
			track.style.transform += "translateX(-50vw)";
			currentSlide.classList.remove("currentSlide");
			NextSlide.classList.add("currentSlide");
//			document.querySelector(".carousel_button--right").style.display = "block";
		removeprevbutton()
	})
	
		
	prevButton.addEventListener("click", e =>{
	const currentSlide = track.querySelector(".currentSlide");
	const prevSlide = currentSlide.previousElementSibling;
	const amounttomove = prevSlide.style.transform.slideWidth;
	
	track.style.transform += "translateX(50vw)";
	currentSlide.classList.remove("currentSlide");
	prevSlide.classList.add("currentSlide");
	document.querySelector(".storecarousel_button--right").style.display = "block";
	removeprevbutton()
	})			
})
}


function featuredyes(featdata) {
	featdata.forEach(showfeatured)
}
function showfeatured(featuredata){
	const template = document.querySelector(".storefeaturedtemplate").content;
	const postCopy = template.cloneNode(true);
	const carnavcopy = postCopy.querySelector("button");
	
	const imgPath = featuredata.cover.guid;
	const img = postCopy.querySelector("img");
	
	img.setAttribute("src", imgPath)
	img.setAttribute("alt", "Poster of the movie " + featuredata.title.rendered);
	
//	const h1 = postCopy.querySelector("h1");
//	h1.textContent = featuredata.title.rendered;

//	console.log(featuredata.querySelector(".carousel-slide").classList.contains("lastslide"));
	
	function appendcarnav(){
		if (featuredata.featured == 1){
		document.querySelector(".storecaroselnav").appendChild(carnavcopy);
	}}
	appendcarnav()
	function appendfeatured(){
	
	if (featuredata.featured == 1)
	{document.querySelector(".storecarousel_track").appendChild(postCopy);
	}}
	appendfeatured()
}