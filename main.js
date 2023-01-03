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
  for(let i=0 ; i<trousers.length ; i++){
    trousers[i].style.display="none";
  }

  for(let i=0 ; i<necklace.length ; i++){
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

const showPartCollapse = document.querySelector(".showPartCollapse");
const reachUsTitle = document.getElementById("reachUsTitle");
const aboutUsTitle = document.getElementById("aboutUsTitle");
const findUsTitle = document.getElementById("findUsTitle");
const contactForm  =document.querySelector(".contactForm");
const aboutUs  =document.querySelector(".aboutUs");
const findUs  =document.querySelector(".findUs");

reachUsTitle.addEventListener("click",function(){
  reachUsTitle.classList.add("showPartCollapse");
  reachUsTitle.style.backgroundcolor="#FFFFFF";
  aboutUsTitle.classList.remove("showPartCollapse");
  findUsTitle.classList.remove("showPartCollapse");
  contactForm.classList.remove("none");
  aboutUs.classList.add("none");
  findUs.classList.add("none");
})
aboutUsTitle.addEventListener("click",function(){
  aboutUsTitle.classList.add("showPartCollapse");
  aboutUsTitle.style.backgroundcolor="#FFFFFF";
  reachUsTitle.classList.remove("showPartCollapse");
  findUsTitle.classList.remove("showPartCollapse");
  aboutUs.classList.remove("none");
  contactForm.classList.add("none");
  findUs.classList.add("none");
})
findUsTitle.addEventListener("click",function(){
  findUsTitle.classList.add("showPartCollapse");
  findUsTitle.style.backgroundcolor="#FFFFFF";
  aboutUsTitle.classList.remove("showPartCollapse");
  reachUsTitle.classList.remove("showPartCollapse");
  findUs.classList.remove("none");
  contactForm.classList.add("none");
  aboutUs.classList.add("none");
})



const addCart = document.querySelectorAll(".addCart");
const shopCartPiece = document.querySelectorAll(".shopCartPiece");
const productCartButton = document.querySelectorAll(".productCartButton");
const minus = document.querySelectorAll(".minus");
const plus = document.querySelectorAll(".plus");
let pieceText = document.querySelectorAll(".piece");

for(i=0 ; i < addCart.length ; i++){
addCart[i].addEventListener("click",function(e){
  e.target.style.display="none";
  for(i=0 ; i < shopCartPiece.length ; i++){
    if(addCart[i].style.display == "none"){
      shopCartPiece[i].style.display="flex";
    }
  }
});
}

console.log(pieceText.value);

for(i=0 ; i < minus.length ; i++){
minus[i].addEventListener("click",function(e){
  for(j=0; j < minus.length ; j++){
    if(e.target.classList.contains("1") && minus[j].classList.contains("1")){
      pieceText[0].value--;
      console.log(pieceText[0].value);
    }else if(e.target.classList.contains("1") && minus[j].classList.contains("2")){
      pieceText[1].value--;
    }else if(e.target.classList.contains("2") && minus[j].classList.contains("3")){
      pieceText[2].value--;
    }else if(e.target.classList.contains("3") && minus[j].classList.contains("4")){
      pieceText[3].value--;
    }else if(e.target.classList.contains("4") && minus[j].classList.contains("5")){
      pieceText[4].value--;
    }else if(e.target.classList.contains("5") && minus[j].classList.contains("6")){
      pieceText[5].value--;
    }else if(e.target.classList.contains("6") && minus[j].classList.contains("7")){
      pieceText[6].value--;
    }else if(e.target.classList.contains("7") && minus[j].classList.contains("8")){
      pieceText[7].value--;
    }else if(e.target.classList.contains("8") && minus[j].classList.contains("9")){
      pieceText[8].value--;
    }else if(e.target.classList.contains("9") && minus[j].classList.contains("10")){
      pieceText[9].value--;
    }else if(e.target.classList.contains("10") && minus[j].classList.contains("11")){
      pieceText[10].value--;
    }else if(e.target.classList.contains("11") && minus[j].classList.contains("12")){
      pieceText[11].value--;
  }
}
}
)}


for(i=0 ; i < plus.length ; i++){
  plus[i].addEventListener("click",function(e){
    for(j=0; j < plus.length ; j++){
      if(e.target.classList.contains("1") && plus[j].classList.contains("1")){
        pieceText[0].value++;
      }else if(e.target.classList.contains("2") && plus[j].classList.contains("2")){
        pieceText[1].value++;
      }else if(e.target.classList.contains("3") && plus[j].classList.contains("3")){
        pieceText[2].value++;
      }else if(e.target.classList.contains("4") && plus[j].classList.contains("4")){
        pieceText[3].value++;
      }else if(e.target.classList.contains("5") && plus[j].classList.contains("5")){
        pieceText[4].value++;
      }else if(e.target.classList.contains("6") && plus[j].classList.contains("6")){
        pieceText[5].value++;
      }else if(e.target.classList.contains("7") && plus[j].classList.contains("7")){
        pieceText[6].value++;
      }else if(e.target.classList.contains("8") && plus[j].classList.contains("8")){
        pieceText[7].value++;
      }else if(e.target.classList.contains("8") && plus[j].classList.contains("9")){
        pieceText[8].value++;
      }else if(e.target.classList.contains("8") && plus[j].classList.contains("10")){
        pieceText[9].value++;
      }else if(e.target.classList.contains("8") && plus[j].classList.contains("11")){
        pieceText[10].value++;
      }else if(e.target.classList.contains("8") && plus[j].classList.contains("12")){
        pieceText[11].value++;
      }
    }
  }
  )}
  
  
console.log(minus.length);