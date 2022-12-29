let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


const cartBorder = document.querySelector(".cartBorder");
const textAll = document.getElementById("textAll");
const textSunglasses = document.getElementById("textSunglasses");
const textTrousers = document.getElementById("textTrousers");
const textNecklace = document.getElementById("textNecklace");
const sunglasses = document.getElementsByClassName("sunglasses");
const trousers = document.getElementsByClassName("trousers");
const necklace = document.getElementsByClassName("necklace");

textAll.addEventListener("click",function(){
  textAll.classList.add("cartBorder");
  textSunglasses.classList.remove("cartBorder");
  textTrousers.classList.remove("cartBorder");
  textNecklace.classList.remove("cartBorder");
  for(let i=0 ; i<sunglasses.length ; i++){
    sunglasses[i].style.display="block";
  }
  for(let i=0 ; i<sunglasses.length ; i++){
    trousers[i].style.display="block";
  }

  for(let i=0 ; i<sunglasses.length ; i++){
    necklace[i].style.display="block";
  }
});

textSunglasses.addEventListener("click",function(){
  textSunglasses.classList.add("cartBorder");
  textAll.classList.remove("cartBorder");
  textTrousers.classList.remove("cartBorder");
  textNecklace.classList.remove("cartBorder");
  for(let i=0 ; i<sunglasses.length ; i++){
    sunglasses[i].style.display="block";
  }
  for(let i=0 ; i<sunglasses.length ; i++){
    trousers[i].style.display="none";
  }

  for(let i=0 ; i<sunglasses.length ; i++){
    necklace[i].style.display="none";
  }
});

textTrousers.addEventListener("click",function(){
  textTrousers.classList.add("cartBorder");
  textSunglasses.classList.remove("cartBorder");
  textAll.classList.remove("cartBorder");
  textNecklace.classList.remove("cartBorder");
  for(let i=0 ; i<sunglasses.length ; i++){
    sunglasses[i].style.display="none";
  }
  for(let i=0 ; i<sunglasses.length ; i++){
    trousers[i].style.display="block";
  }

  for(let i=0 ; i<sunglasses.length ; i++){
    necklace[i].style.display="none";
  }
});

textNecklace.addEventListener("click",function(){
  textNecklace.classList.add("cartBorder");
  textSunglasses.classList.remove("cartBorder");
  textTrousers.classList.remove("cartBorder");
  textAll.classList.remove("cartBorder");
  for(let i=0 ; i<sunglasses.length ; i++){
    sunglasses[i].style.display="none";
  }
  for(let i=0 ; i<sunglasses.length ; i++){
    trousers[i].style.display="none";
  }

  for(let i=0 ; i<sunglasses.length ; i++){
    necklace[i].style.display="block";
  }

});


const firstIcon = document.getElementById("firstIcon");
const secondIcon = document.getElementById("secondIcon");
const thirdIcond = document.getElementById("thirdIcon");
const faqsPartFirst = document.querySelector(".faqsPartFirst");
const faqsPartSecond = document.querySelector(".faqsPartSecond");
const faqsPartThird = document.querySelector(".faqsPartThird");
const collapseFirst = document.querySelector(".collapseFirst");
const collapseSecond = document.querySelector(".collapseSecond");
const collapseThird = document.querySelector(".collapseThird");
const delivery = document.querySelector(".delivery");
const reaching = document.querySelector(".reaching");
const policy = document.querySelector(".policy");


faqsPartFirst.addEventListener("click",function(){
  firstIcon.classList.toggle("rotate");
  collapseFirst.classList.toggle("showCollapse");
  delivery.classList.toggle("pb");
  faqsPartFirst.style.height="auto";
})

faqsPartSecond.addEventListener("click",function(){
  secondIcon.classList.toggle("rotate");
  collapseSecond.classList.toggle("showCollapse");
  reaching.classList.toggle("pb");
  faqsPartSecond.style.height="auto";
})

faqsPartThird.addEventListener("click",function(){
  thirdIcond.classList.toggle("rotate");
  collapseThird.classList.toggle("showCollapse");
  policy.classList.toggle("pb");
  faqsPartThird.style.height="auto";
})