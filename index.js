// JavaScript Document
window.addEventListener("DOMContentLoaded", getData);
window.addEventListener("DOMContentLoaded", getsmallData);

function getData() {
	fetch("https://iesdesigner.eu/school-folder/2-semester/final-straw/wordpress/wp-json/wp/v2/work?per_page=3").then(res => res.json()).then(handleData)
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
//	const bodyinfo = postCopy.querySelector(".bodyinfo");
//	bodyinfo.innerHTML = post.content.rendered;
	
//	console.log(post.medium[0].post_title);
	post.medium.forEach(e =>{
	const infowrapper = postCopy.querySelector(".seemore");
	const classadd = e.post_title;
	
//	infowrapper.classList.add(`${classadd}`);
////		console.log(classadd);console.log(infowrapper);
////	infowrapper.classList.add("$[post.medium.title.rendered]");
//		console.log(infowrapper);
//	infowrapper.setAttribute("value", classadd)
//	})
	
	
	const yearmade = postCopy.querySelector(".workyearmade");
	yearmade.textContent = post.year_made;
	const dimmentions = postCopy.querySelector(".dimentions");
	dimmentions.textContent = post.dimentions;
	
	var a = postCopy.querySelector(".seemore");
	a.href = `work_single.html?id=${post.id}`;
	
 document.querySelector("#workindex").appendChild(postCopy)})};

document.querySelector(".indexseemore").addEventListener("click", e=>{
	window.location.href = `work.html`;
})




function getsmallData() {
	fetch("https://iesdesigner.eu/school-folder/2-semester/final-straw/wordpress/wp-json/wp/v2/work?per_page=1").then(res => res.json()).then(handlesmallData)
}
function handlesmallData(myData) {
	myData.forEach(showsmallPost)
}
function showsmallPost(post) {
	const template = document.querySelector(".template").content;
	const postCopy = template.cloneNode(true);
	
	const h1 = postCopy.querySelector("h1");
	h1.textContent = post.title.rendered;
	const imgPath = post.cover.guid;
	const img = postCopy.querySelector("img");
	img.setAttribute("src", imgPath)
	img.setAttribute("alt", "Poster of the movie " + post.title.rendered);
//	const bodyinfo = postCopy.querySelector(".bodyinfo");
//	bodyinfo.innerHTML = post.content.rendered;
	
//	console.log(post.medium[0].post_title);
	post.medium.forEach(e =>{
	const infowrapper = postCopy.querySelector(".seemore");
	const classadd = e.post_title;
	
//	infowrapper.classList.add(`${classadd}`);
////		console.log(classadd);console.log(infowrapper);
////	infowrapper.classList.add("$[post.medium.title.rendered]");
//		console.log(infowrapper);
//	infowrapper.setAttribute("value", classadd)
//	})
	
	
	const yearmade = postCopy.querySelector(".workyearmade");
	yearmade.textContent = post.year_made;
	const dimmentions = postCopy.querySelector(".dimentions");
	dimmentions.textContent = post.dimentions;
	
	var a = postCopy.querySelector(".seemore");
	a.href = `work_single.html?id=${post.id}`;
	
 document.querySelector("#workindexsmall").appendChild(postCopy)})};

document.querySelector(".indexseemore").addEventListener("click", e=>{
	window.location.href = `work.html`;
})

