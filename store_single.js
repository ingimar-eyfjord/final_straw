// JavaScript Document
window.addEventListener("DOMContentLoaded", getData);
window.addEventListener("DOMContentLoaded", getInfoData);

function getData() {
    fetch("https://iesdesigner.eu/school-folder/2-semester/final-straw/wordpress/wp-json/wp/v2/store?_embed").then(res => res.json()).then(handleData)
}

function handleData(myData) {
    myData.forEach(showImage)
}

function getInfoData() {
    fetch("https://iesdesigner.eu/school-folder/2-semester/final-straw/wordpress/wp-json/wp/v2/store?_embed").then(res => res.json()).then(handleInfoData)
}

function showImage(image) {
    const templateImg = document.querySelector(".store-single-img-template").content;
    const imageCopy = templateImg.cloneNode(true);

    const imgPath = image.cover.guid;
    const img = imageCopy.querySelector("img");
    img.setAttribute("src", imgPath)
    img.setAttribute("alt", "Poster of the movie " + image.title.rendered);

    var url_string = (window.location.href).toLowerCase();
    var url = new URL(url_string);
    var id = url.searchParams.get("id");

    function appendWork() {
        if (image.id == id) document.querySelector("#store-single").appendChild(imageCopy);
    }
    appendWork()
}

//
function handleInfoData(myInfoData) {
    myInfoData.forEach(showInformation)
}

function showInformation(info) {
    const templateInfo = document.querySelector(".store-single-info-template").content;

    const infoCopy = templateInfo.cloneNode(true);

    const yearmade = infoCopy.querySelector(".workyearmade");
	yearmade.textContent = info.year_made;
	
    const dimmentions = infoCopy.querySelector(".dimentions");
	dimmentions.textContent = info.dimensions;

    const h1 = infoCopy.querySelector("h1");
    h1.textContent = info.title.rendered;

    const bodyinfo = infoCopy.querySelector(".bodyinfo");
    bodyinfo.innerHTML = info.content.rendered;

    const priceInfo = infoCopy.querySelector(".price");
    priceInfo.innerHTML = info.price;

    var url_string = (window.location.href).toLowerCase();
    var url = new URL(url_string);
    var id = url.searchParams.get("id");

    function appendInfo() {
        if (info.id == id) document.querySelector("#store-single").appendChild(infoCopy);
    }
    appendInfo()
}


// header scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-10vh";
    }
    prevScrollpos = currentScrollPos;
}
