// JavaScript Document
window.addEventListener("DOMContentLoaded", getData);
window.addEventListener("DOMContentLoaded", getfetured);
window.addEventListener("DOMContentLoaded", getfeturedsmall);
function getData() {
	fetch("https://iesdesigner.eu/school-folder/2-semester/final-straw/wordpress/wp-json/wp/v2/work?per_page=100").then(res => res.json()).then(handleData)
}
function handleData(myData) {
	myData.forEach(showPost)
}
function showPost(post) {
	const template = document.querySelector(".template").content;
	const slidetemplate = document.querySelector(".featuredtemplate").content;
	const postCopy = template.cloneNode(true);
	const slideshow = slidetemplate.cloneNode(true);
	
	const h2 = postCopy.querySelector("h2");
	h2.textContent = post.title.rendered;
	const imgPath = post.cover.guid;
	const img = postCopy.querySelector("img");
	img.setAttribute("src", imgPath)
	img.setAttribute("alt", "Poster of the movie " + post.title.rendered);
	const bodyinfo = postCopy.querySelector(".Woroksinglebodyinfo");
	bodyinfo.innerHTML = post.content.rendered;
	const yearmade = postCopy.querySelector(".worksingle-year");
    yearmade.innerHTML = post.yearmade;
    
    const location = postCopy.querySelector(".worksingle-location");
    location.innerHTML = post.location;
	
	var url_string = (window.location.href).toLowerCase();
	var url = new URL(url_string);
	var id = url.searchParams.get("id");
	
	post.slideshow.forEach(e => {
		slideshow.querySelector(".carousel_track-work_single").innerHTML += `<div class="carousel-slide currentSlide"><img class="featuredimage_work" src="${e.guid}"></div>`;
	})

	function appendSlide() {
		if (post.id == id) document.querySelector(".carousel-track-container--worksingle").appendChild(slideshow);
	}
	appendSlide()
	
	function appendWork() {
		if (post.id == id) document.querySelector("#workSingle").appendChild(postCopy);
	}
	appendWork()
}

function getfetured(post) {
	const template = document.querySelector(".template").content;
	const postCopy = template.cloneNode(true);
	fetch("https://iesdesigner.eu/school-folder/2-semester/final-straw/wordpress/wp-json/wp/v2/work?per_page=100").then(res => res.json()).then(featuredyes).then(() => {
	
	const track = document.querySelector(".carousel_track-work_single");
	const slides = Array.from(track.children);
	const lastslide = slides.length - 3;
		
		
	const nextButton = document.querySelector(".carousel_button--right");
	const prevButton = document.querySelector(".carousel_button--left");
		
	const dotNav = document.querySelector(".caroselnav");
	const dots = Array.from(dotNav.children);
		
	slides[0].classList.add("currentSlide");
	slides[lastslide].classList.add("lastSlide");
	const slideWidth = slides[0].getBoundingClientRect().width;	
//	console.log(slides);
		
		function removeprevbutton(){
		if (document.querySelector(".carousel-slide").classList.contains("currentSlide")){
		document.querySelector(".carousel_button--left").style.display = "none";}	}
		removeprevbutton()

	nextButton.addEventListener("click", e =>{
	const currentSlide = track.querySelector(".currentSlide");
	const NextSlide = currentSlide.nextElementSibling;
	const amounttomove = NextSlide.style.transform.slideWidth;
	const lastSlide = track.querySelector(".lastSlide")
	
	document.querySelector(".carousel_button--left").style.display = "block";
	
	
	document.querySelectorAll(".carousel-slide").forEach(e => {

				if (e.classList.contains("currentSlide") && e.classList.contains("lastSlide")) {
					console.log("object");
					document.querySelector(".carousel_button--right").style.display = "none";
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
	document.querySelector(".carousel_button--right").style.display = "block";
	removeprevbutton()
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
	
	var url_string = (window.location.href).toLowerCase();
	var url = new URL(url_string);
	var id = url.searchParams.get("id");
	
	

	function appendWork() {
		if (featuredata.id == id) document.querySelector(".carousel_track-work_single").appendChild(postCopy);
	}
	appendWork()
}

// featured small	-----------------------------

function getfeturedsmall(post) {
	const template = document.querySelector(".template").content;
	const postCopy = template.cloneNode(true);
	fetch("https://iesdesigner.eu/school-folder/2-semester/final-straw/wordpress/wp-json/wp/v2/work?per_page=100").then(res => res.json()).then(featuresmall).then(() => {
//	
	const track = document.querySelector(".track-mini");
	const slides = Array.from(track.children);
		slides[0].classList.add("currentSlide");	
	const lastslide = slides.length -1;
		console.log(slides);
	
	slides[lastslide].classList.add("lastSlide");
//		console.log(slides);
		
	const slideWidth = slides[0].getBoundingClientRect().width;	
		console.log(slideWidth);
	var intervalID = window.setInterval(myCallback, 3000);	
	
	function myCallback(){
		function settofirstslide(){
			slides[0].classList.add("currentSlide");
			track.style.transform += "translateX(" + slideWidth * slides.length + "px)";
			console.log("hey");
		}
			const currentSlide = track.querySelector(".currentSlide");
		const prevSlide = currentSlide.previousElementSibling;
	const NextSlide = currentSlide.nextElementSibling;
		currentSlide.classList.remove("currentSlide");
		NextSlide.classList.add("currentSlide");
		track.style.transform += "translateX(-" + slideWidth + "px)";
		console.log(slides);
		document.querySelectorAll(".carousel-slidesmall").forEach(e => {
		if (e.classList.contains("currentSlide") && e.classList.contains("lastSlide")) {
			slides[lastslide].classList.remove("currentSlide");
			track.style.transform += "translateX(-" + slideWidth + "px)";
			settofirstslide();}})}		
})
}
function featuresmall(featdata) {
	featdata.forEach(showfeaturedsmall)
}

function showfeaturedsmall(featuredata){
	const template = document.querySelector(".featuredtemplatesmall").content;
	const postCopy = template.cloneNode(true);
	const carnavcopy = postCopy.querySelector("button");
	
featuredata.slideshow.forEach(e => {
		postCopy.querySelector(".track-mini").innerHTML += `<div class="carousel-slidesmall"><img class="featuredimage_work" src="${e.guid}"></div>`;
	})

	function appendSlide() {
		if (featuredata.id == id) document.querySelector(".featuredsmall").appendChild(template);
	}
	appendSlide()

var url_string = (window.location.href).toLowerCase();
	var url = new URL(url_string);
	var id = url.searchParams.get("id");
	
	

	function appendWork() {
		if (featuredata.id == id) document.querySelector(".featuredsmall").appendChild(postCopy);
	}
	appendWork()
}