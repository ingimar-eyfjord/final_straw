// JavaScript Document
window.addEventListener("DOMContentLoaded", getData);
window.addEventListener("DOMContentLoaded", getfetured);
window.addEventListener("DOMContentLoaded", getmedium);
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

	
	post.medium.forEach(e =>{
	const infowrapper = postCopy.querySelector(".seemore");
	const classadd = e.post_title;
	const price = postCopy.querySelector(".price");
	price.innerHTML = `<p>${Math.trunc(post.price)}&nbsp;DKK</p>`;
	const dimensions = postCopy.querySelector(".dimentions");
	dimensions.textContent = post.dimensions;
	
	infowrapper.classList.add(`${classadd}`);
//		console.log(classadd);console.log(infowrapper);
//	infowrapper.classList.add("$[post.medium.title.rendered]");
		console.log(infowrapper);
	infowrapper.setAttribute("value", classadd)
	})
	
	var a = postCopy.querySelector(".seemore");
	a.href = `store_single.html?id=${post.id}`;
	
 document.querySelector("#store").appendChild(postCopy)}

function getfetured() {
	fetch("https://iesdesigner.eu/school-folder/2-semester/final-straw/wordpress/wp-json/wp/v2/store?_embed").then(res => res.json()).then(featuredyes).then(() => {
	
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
	
		postCopy.querySelector(".storecarousel-slide img").addEventListener("click", e =>{
			window.location.href = `store_single.html?id=${featuredata.id}`;
	})
	
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

function getmedium() {
	fetch("https://iesdesigner.eu/school-folder/2-semester/final-straw/wordpress/wp-json/wp/v2/medium?_embed").then(res => res.json()).then(handlemediumData)
}
function handlemediumData(myData) {
	myData.forEach(showmediumPost)
}

function showmediumPost(post) {
	const template = document.querySelector(".mediumnactemplate").content;
	const postCopy = template.cloneNode(true);
	const h2 = postCopy.querySelector("h2");
	h2.textContent = post.title.rendered;
	
	h2.addEventListener("click", e =>{
	const returnname = h2.innerHTML;
	const infowrapper = document.querySelectorAll(".seemore");
	const slice = Array.from(infowrapper);
		
		slice.forEach(e => {
			
			const classis = Array.from(e.classList);
			const classesare = Array.from(classis);
			
				classesare.forEach(t =>{
					e.style.display = "none";
					console.log(t == returnname);
				if (t == returnname) {
					console.log("object");
				e.style.display = "block";
				}
					
//					t != returnname.style.display = "none";
		})
			
			
				})
		
		
//		console.log(infowrapper.classList.contains);
//		if (document.querySelectorAll(".seemore").classList.contains == returnname) {
//			infowrapper.style.display = "none";   
//  }
		
	})
	
 document.querySelector(".mediumnav").appendChild(postCopy)}

function scrolldown(){
window.scrollTo(0,1000,document.body.scrollHeight);
}