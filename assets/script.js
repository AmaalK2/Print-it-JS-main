const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let arrowLeft = document.querySelector('.arrow_left');   //variable creer a partir d'une classe selectionnée. ici > arrow-left//
let arrowRight = document.querySelector('.arrow_right'); //variable creer a partir d'une classe selectionnée. ici > arrow-right//
let slider = document.querySelector("#banner");  //variable creer a partir d'une classe selectionnée. ici > slider est le banner, la div parent//
let nbr_img = slides.length;  //equivaut à la longueur du tableau/
let currentSlide = 0; 


let dots = document.querySelector(".dots"); //variable dot creer//
let dot_selected = document.querySelector(".dot_selected");

for (let i = 0; i < slides.length; i++){  //length  = longueur du tableau/: si i est inferieur a la longeur du tableau, / 
	let dot = document.createElement('div'); //creation d'une div// 
	dot.classList.add("dot"); //creation d'une class à la div//
	dots.appendChild(dot); 
}

arrowLeft.addEventListener('click', precedent); //permet de declencher une fonction//
arrowRight.addEventListener('click', next); //notre variable ici au click declenchera la fonction next//
selectDot()

function selectDot (){
	let dots = slider.querySelectorAll(".dot"); //variable creer a partir d'une classe selectionnée. ici > .dot qu'on a creer precedement en java/
	for (let i = 0; i < dots.length; i++){ 
		let dot = dots[i];
		dot.classList.remove('dot_selected');
		if (currentSlide == i){
			dot.classList.add('dot_selected');
		}
	}
}

function precedent (){ 
	currentSlide--;
	if (currentSlide < 0) {
		currentSlide = slides.length - 1; //recuprer l'index du tableau, retourner à l'index//
	}
	changeSlide(slides[currentSlide].image, slides[currentSlide].tagLine); 
	selectDot();
}

function next (){
	currentSlide++;
	if (currentSlide > slides.length - 1) {
		currentSlide = 0; 
	}
	changeSlide(slides[currentSlide].image, slides[currentSlide].tagLine);
	selectDot();
}

function changeSlide (imgUrl, tagLine){

	let img = slider.querySelector('.banner-img');
	let textContainer = slider.querySelector('p');


	img.src="./assets/images/slideshow/" + imgUrl;
	textContainer.innerHTML= tagLine; 

}
