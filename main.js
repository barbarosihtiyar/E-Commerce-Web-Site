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
const shopCartInfoImg = document.querySelectorAll(".shopCartInfoImg");
const shopCartInfoTitle = document.querySelectorAll(".shopCartInfoTitle");
const shopCartInfoDesc = document.querySelectorAll(".shopCartInfoDesc");
const shopCartQuantityNumber = document.querySelectorAll(".shopCartQuantityNumber");
const shopCartProductPrice = document.querySelectorAll(".shopCartProductPrice");
const shopCartQuantityTitle  = document.querySelectorAll(".shopCartQuantityTitle");
let totalPriceTitle = document.querySelector(".totalPriceTitle");
let totalPriceNumber = document.querySelector(".totalPriceNumber");
let totalProductTitle = document.querySelector(".totalProductTitle");
let totalProductQuantity = document.querySelector(".totalProductQuantity");
const productCartTitle = document.querySelectorAll(".productCartTitle");
const productCartTextInfo = document.querySelectorAll(".productCartTextInfo");
const productCartPrice = document.querySelectorAll(".productCartPrice");
const shopCartInfo = document.querySelector(".shopCartInfo");
const shopCartFirst = document.getElementById("shopCartFirst");
const shopCartSecond = document.getElementById("shopCartSecond");
const shopCartThird = document.getElementById("shopCartThird");
const shopCartFourth = document.getElementById("shopCartFourth");
const shopCartFiveth = document.getElementById("shopCartFiveth");
const shopCartSixth = document.getElementById("shopCartSixth");
const shopCartSeventh = document.getElementById("shopCartSeventh");
const shopCartEighth = document.getElementById("shopCartEighth");
const shopCartNineth = document.getElementById("shopCartNineth");
const shopCartTenth = document.getElementById("shopCartTenth");
const shopCartEleventh = document.getElementById("shopCartEleventh");
const shopCartTwelveth = document.getElementById("shopCartTwelveth");
let photo = document.querySelectorAll(".photo");
let pieceText = document.querySelectorAll(".piece");
let cartValue = document.getElementById("cartValue");
let intCartValue = parseInt(cartValue.innerText);


addCart[0].addEventListener("click",function(){
  shopCartInfoImg[0].innerHTML=`<img src="./image/sg-1.jpg" alt="" class="shopCartImg">`
  shopCartInfoTitle[0].innerHTML=productCartTitle[0].innerHTML;
  shopCartInfoDesc[0].innerHTML = productCartTextInfo[0].innerHTML;
  shopCartQuantityNumber[0].innerHTML = 1;  
  shopCartQuantityTitle[0].innerHTML = "Quantity :";
  shopCartProductPrice[0].innerHTML = `x ${productCartPrice[0].innerHTML}`;
  totalPriceTitle.innerHTML = "Total Price:"
  totalProductTitle.innerHTML="Product Quantity:"
  // shopCartFirst.style.borderBottom = "1px solid #F7DF1E";
  shopCartFirst.classList.add("shopCartInfoFlex");
})
addCart[1].addEventListener("click",function(){
  shopCartInfoImg[1].innerHTML=`<img src="./image/sg-2.jpg" alt="" class="shopCartImg">`
  shopCartInfoTitle[1].innerHTML=productCartTitle[1].innerHTML;
  shopCartInfoDesc[1].innerHTML = productCartTextInfo[1].innerHTML;
  shopCartQuantityNumber[1].innerHTML = 1;  
  shopCartQuantityTitle[1].innerHTML = "Quantity :";
  shopCartProductPrice[1].innerHTML = `x ${productCartPrice[1].innerHTML}`;
  totalPriceTitle.innerHTML = "Total Price:"
  totalProductTitle.innerHTML="Product Quantity:"
  // shopCartSecond.style.borderBottom = "1px solid #F7DF1E";
  shopCartSecond.classList.add("shopCartInfoFlex");

})
addCart[2].addEventListener("click",function(){
  shopCartInfoImg[2].innerHTML=`<img src="./image/sg-3.jpg" alt="" class="shopCartImg">`
  shopCartInfoTitle[2].innerHTML=productCartTitle[2].innerHTML;
  shopCartInfoDesc[2].innerHTML = productCartTextInfo[2].innerHTML;
  shopCartQuantityNumber[2].innerHTML = 1;  
  shopCartQuantityTitle[2].innerHTML = "Quantity :";
  shopCartProductPrice[2].innerHTML = `x ${productCartPrice[2].innerHTML}`;
  totalPriceTitle.innerHTML = "Total Price:"
  totalProductTitle.innerHTML="Product Quantity:"
  // shopCartThird.style.borderBottom = "1px solid #F7DF1E";
  shopCartThird.classList.add("shopCartInfoFlex");
})
addCart[3].addEventListener("click",function(){
  shopCartInfoImg[3].innerHTML=`<img src="./image/sg-4.jpg" alt="" class="shopCartImg">`
  shopCartInfoTitle[3].innerHTML=productCartTitle[3].innerHTML;
  shopCartInfoDesc[3].innerHTML = productCartTextInfo[3].innerHTML;
  shopCartQuantityNumber[3].innerHTML = 1;  
  shopCartQuantityTitle[3].innerHTML = "Quantity :";
  shopCartProductPrice[3].innerHTML = `x ${productCartPrice[3].innerHTML}`;
  totalPriceTitle.innerHTML = "Total Price:"
  totalProductTitle.innerHTML="Product Quantity:"
  // shopCartFourth.style.borderBottom = "1px solid #F7DF1E";
  shopCartFourth.classList.add("shopCartInfoFlex");
})
addCart[4].addEventListener("click",function(){
  shopCartInfoImg[4].innerHTML=`<img src="./image/trousers-1.jpg" alt="" class="shopCartImg">`
  shopCartInfoTitle[4].innerHTML=productCartTitle[4].innerHTML;
  shopCartInfoDesc[4].innerHTML = productCartTextInfo[4].innerHTML;
  shopCartQuantityNumber[4].innerHTML = 1;  
  shopCartQuantityTitle[4].innerHTML = "Quantity :";
  shopCartProductPrice[4].innerHTML = `x ${productCartPrice[4].innerHTML}`;
  totalPriceTitle.innerHTML = "Total Price:"
  totalProductTitle.innerHTML="Product Quantity:"
  // shopCartFiveth.style.borderBottom = "1px solid #F7DF1E";
  shopCartFiveth.classList.add("shopCartInfoFlex");
})
addCart[5].addEventListener("click",function(){
  shopCartInfoImg[5].innerHTML=`<img src="./image/trousers-2.jpg" alt="" class="shopCartImg">`
  shopCartInfoTitle[5].innerHTML=productCartTitle[5].innerHTML;
  shopCartInfoDesc[5].innerHTML = productCartTextInfo[5].innerHTML;
  shopCartQuantityNumber[5].innerHTML = 1;  
  shopCartQuantityTitle[5].innerHTML = "Quantity :";
  shopCartProductPrice[5].innerHTML = `x ${productCartPrice[5].innerHTML}`;
  totalPriceTitle.innerHTML = "Total Price:"
  totalProductTitle.innerHTML="Product Quantity:"
  // shopCartSixth.style.borderBottom = "1px solid #F7DF1E";
  shopCartSixth.classList.add("shopCartInfoFlex");
})
addCart[6].addEventListener("click",function(){
  shopCartInfoImg[6].innerHTML=`<img src="./image/trousers-3.jpg" alt="" class="shopCartImg">`
  shopCartInfoTitle[6].innerHTML=productCartTitle[6].innerHTML;
  shopCartInfoDesc[6].innerHTML = productCartTextInfo[6].innerHTML;
  shopCartQuantityNumber[6].innerHTML = 1;  
  shopCartQuantityTitle[6].innerHTML = "Quantity :";
  shopCartProductPrice[6].innerHTML = `x ${productCartPrice[6].innerHTML}`;
  totalPriceTitle.innerHTML = "Total Price:"
  totalProductTitle.innerHTML="Product Quantity:"
  // shopCartSeventh.style.borderBottom = "1px solid #F7DF1E";
  shopCartSeventh.classList.add("shopCartInfoFlex");
})
addCart[7].addEventListener("click",function(){
  shopCartInfoImg[7].innerHTML=`<img src="./image/trousers-4.jpg" alt="" class="shopCartImg">`
  shopCartInfoTitle[7].innerHTML=productCartTitle[7].innerHTML;
  shopCartInfoDesc[7].innerHTML = productCartTextInfo[7].innerHTML;
  shopCartQuantityNumber[7].innerHTML = 1;  
  shopCartQuantityTitle[7].innerHTML = "Quantity :";
  shopCartProductPrice[7].innerHTML = `x ${productCartPrice[7].innerHTML}`;
  totalPriceTitle.innerHTML = "Total Price:"
  totalProductTitle.innerHTML="Product Quantity:"
  // shopCartEighth.style.borderBottom = "1px solid #F7DF1E";
  shopCartEighth.classList.add("shopCartInfoFlex");
})
addCart[8].addEventListener("click",function(){
  shopCartInfoImg[8].innerHTML=`<img src="./image//necklace-1.jpg" alt="" class="shopCartImg">`
  shopCartInfoTitle[8].innerHTML=productCartTitle[8].innerHTML;
  shopCartInfoDesc[8].innerHTML = productCartTextInfo[8].innerHTML;
  shopCartQuantityNumber[8].innerHTML = 1;  
  shopCartQuantityTitle[8].innerHTML = "Quantity :";
  shopCartProductPrice[8].innerHTML = `x ${productCartPrice[8].innerHTML}`;
  totalPriceTitle.innerHTML = "Total Price:"
  totalProductTitle.innerHTML="Product Quantity:"
  // shopCartNineth.style.borderBottom = "1px solid #F7DF1E";
  shopCartNineth.classList.add("shopCartInfoFlex");
})
addCart[9].addEventListener("click",function(){
  shopCartInfoImg[9].innerHTML=`<img src="./image//necklace-2.jpg" alt="" class="shopCartImg">`
  shopCartInfoTitle[9].innerHTML=productCartTitle[9].innerHTML;
  shopCartInfoDesc[9].innerHTML = productCartTextInfo[9].innerHTML;
  shopCartQuantityNumber[9].innerHTML = 1;  
  shopCartQuantityTitle[9].innerHTML = "Quantity :";
  shopCartProductPrice[9].innerHTML = `x ${productCartPrice[9].innerHTML}`;
  totalPriceTitle.innerHTML = "Total Price:"
  totalProductTitle.innerHTML="Product Quantity:"
  // shopCartTenth.style.borderBottom = "1px solid #F7DF1E";
  shopCartTenth.classList.add("shopCartInfoFlex");
})
addCart[10].addEventListener("click",function(){
  shopCartInfoImg[10].innerHTML=`<img src="./image//necklace-3.jpg" alt="" class="shopCartImg">`
  shopCartInfoTitle[10].innerHTML=productCartTitle[10].innerHTML;
  shopCartInfoDesc[10].innerHTML = productCartTextInfo[10].innerHTML;
  shopCartQuantityNumber[10].innerHTML = 1;  
  shopCartQuantityTitle[10].innerHTML = "Quantity :";
  shopCartProductPrice[10].innerHTML = `x ${productCartPrice[10].innerHTML}`;
  totalPriceTitle.innerHTML = "Total Price:"
  totalProductTitle.innerHTML="Product Quantity:"
  // shopCartEleventh.style.borderBottom = "1px solid #F7DF1E";
  shopCartEleventh.classList.add("shopCartInfoFlex");
})
addCart[11].addEventListener("click",function(){
  shopCartInfoImg[11].innerHTML=`<img src="./image//necklace-4.jpg" alt="" class="shopCartImg">`
  shopCartInfoTitle[11].innerHTML=productCartTitle[11].innerHTML;
  shopCartInfoDesc[11].innerHTML = productCartTextInfo[11].innerHTML;
  shopCartQuantityNumber[11].innerHTML = 1;  
  shopCartQuantityTitle[11].innerHTML = "Quantity :";
  shopCartProductPrice[11].innerHTML = `x ${productCartPrice[11].innerHTML}`;
  totalPriceTitle.innerHTML = "Total Price:"
  totalProductTitle.innerHTML="Product Quantity:"
  // shopCartTwelveth.style.borderBottom = "1px solid #F7DF1E";
  shopCartTwelveth.classList.add("shopCartInfoFlex");
})



for(i=0 ; i < addCart.length ; i++){
addCart[i].addEventListener("click",function(e){
  e.target.style.display="none";
  if(e.target.style.display="none"){
    intCartValue += 1;
    cartValue.innerHTML = intCartValue;
    totalProductQuantity.innerHTML = intCartValue;
    console.log(intCartValue);
  }
  for(i=0 ; i < shopCartPiece.length ; i++){
    if(addCart[i].style.display == "none"){
      shopCartPiece[i].style.display="flex";
    }
  }
});
}


for(i=0 ; i < minus.length ; i++){
minus[i].addEventListener("click",function(e){
  for(j=0; j < minus.length ; j++){
    if(e.target.classList.contains("1") && minus[j].classList.contains("1")){
      pieceText[0].value--;
      shopCartQuantityNumber[0].innerHTML = pieceText[0].value;
      if(pieceText[0].value <= 0){
        addCart[j].style.display="";
        shopCartPiece[j].style.display="none";
        pieceText[0].value = 1;
        intCartValue -= 1;
        cartValue.innerHTML = intCartValue;
        totalProductQuantity.innerHTML = intCartValue;
         shopCartQuantityNumber[0].innerHTML = intCartValue;
      }        
    }else if(e.target.classList.contains("2") && minus[j].classList.contains("2")){
      pieceText[1].value--;
      shopCartQuantityNumber[1].innerHTML = pieceText[1].value;
      if(pieceText[1].value <= 0){
        addCart[j].style.display="";
        shopCartPiece[j].style.display="none";
        pieceText[1].value = 1;
        intCartValue -= 1;
        cartValue.innerHTML = intCartValue;
        totalProductQuantity.innerHTML = intCartValue;
        shopCartQuantityNumber[1].innerHTML = intCartValue;
      }        
    }else if(e.target.classList.contains("3") && minus[j].classList.contains("3")){
      pieceText[2].value--;
      shopCartQuantityNumber[2].innerHTML = pieceText[2].value;
      if(pieceText[2].value <= 0){
        addCart[j].style.display="";
        shopCartPiece[j].style.display="none";
        pieceText[2].value = 1;
        intCartValue -= 1;
        cartValue.innerHTML = intCartValue;
        totalProductQuantity.innerHTML = intCartValue;
        shopCartQuantityNumber[2].innerHTML = intCartValue;
      }        
    }else if(e.target.classList.contains("4") && minus[j].classList.contains("4")){
      pieceText[3].value--;
      shopCartQuantityNumber[3].innerHTML = pieceText[3].value;
      if(pieceText[3].value <= 0){
        addCart[j].style.display="";
        shopCartPiece[j].style.display="none";
        pieceText[3].value = 1;
        intCartValue -= 1;
        cartValue.innerHTML = intCartValue;
        totalProductQuantity.innerHTML = intCartValue;
        shopCartQuantityNumber[3].innerHTML = intCartValue;
      }        
    }else if(e.target.classList.contains("5") && minus[j].classList.contains("5")){
      pieceText[4].value--;
      shopCartQuantityNumber[4].innerHTML = pieceText[4].value;
      if(pieceText[4].value <= 0){
        addCart[j].style.display="";
        shopCartPiece[j].style.display="none";
        pieceText[4].value = 1;
        intCartValue -= 1;
        cartValue.innerHTML = intCartValue;
        totalProductQuantity.innerHTML = intCartValue;
        shopCartQuantityNumber[4].innerHTML = intCartValue;
      }        
    }else if(e.target.classList.contains("6") && minus[j].classList.contains("6")){
      pieceText[5].value--;
      shopCartQuantityNumber[5].innerHTML = pieceText[5].value;
      if(pieceText[5].value <= 0){
        addCart[j].style.display="";
        shopCartPiece[j].style.display="none";
        pieceText[5].value = 1;
        intCartValue -= 1;
        cartValue.innerHTML = intCartValue;
        totalProductQuantity.innerHTML = intCartValue;
        shopCartQuantityNumber[5].innerHTML = intCartValue;
      }        
    }else if(e.target.classList.contains("7") && minus[j].classList.contains("7")){
      pieceText[6].value--;
      shopCartQuantityNumber[6].innerHTML = pieceText[6].value;
      if(pieceText[6].value <= 0){
        addCart[j].style.display="";
        shopCartPiece[j].style.display="none";
        pieceText[6].value = 1;
        intCartValue -= 1;
        cartValue.innerHTML = intCartValue;
        totalProductQuantity.innerHTML = intCartValue;
        shopCartQuantityNumber[6].innerHTML = intCartValue;
      }        
    }else if(e.target.classList.contains("8") && minus[j].classList.contains("8")){
      pieceText[7].value--;
      shopCartQuantityNumber[7].innerHTML = pieceText[7].value;
      if(pieceText[7].value <= 0){
        addCart[j].style.display="";
        shopCartPiece[j].style.display="none";
        pieceText[7].value = 1;
        intCartValue -= 1;
        cartValue.innerHTML = intCartValue;
        totalProductQuantity.innerHTML = intCartValue;
        shopCartQuantityNumber[7].innerHTML = intCartValue;
      }        
    }else if(e.target.classList.contains("9") && minus[j].classList.contains("9")){
      pieceText[8].value--;
      shopCartQuantityNumber[8].innerHTML = pieceText[8].value;
      if(pieceText[8].value <= 0){
        addCart[j].style.display="";
        shopCartPiece[j].style.display="none";
        pieceText[8].value = 1;
        intCartValue -= 1;
        cartValue.innerHTML = intCartValue;
        totalProductQuantity.innerHTML = intCartValue;
        shopCartQuantityNumber[8].innerHTML = intCartValue;
      }        
    }else if(e.target.classList.contains("10") && minus[j].classList.contains("10")){
      pieceText[9].value--;
      shopCartQuantityNumber[9].innerHTML = pieceText[9].value;
      if(pieceText[9].value <= 0){
        addCart[j].style.display="";
        shopCartPiece[j].style.display="none";
        pieceText[9].value = 1;
        intCartValue -= 1;
        cartValue.innerHTML = intCartValue;
        totalProductQuantity.innerHTML = intCartValue;
        shopCartQuantityNumber[9].innerHTML = intCartValue;
      }        
    }else if(e.target.classList.contains("11") && minus[j].classList.contains("11")){
      pieceText[10].value--;
      shopCartQuantityNumber[10].innerHTML = pieceText[10].value;
      if(pieceText[10].value <= 0){
        addCart[j].style.display="";
        shopCartPiece[j].style.display="none";
        pieceText[10].value = 1;
        intCartValue -= 1;
        cartValue.innerHTML = intCartValue;
        totalProductQuantity.innerHTML = intCartValue;
        shopCartQuantityNumber[10].innerHTML = intCartValue;
      }        
    }else if(e.target.classList.contains("12") && minus[j].classList.contains("12")){
      pieceText[11].value--;
      shopCartQuantityNumber[11].innerHTML = pieceText[11].value;
      if(pieceText[11].value <= 0){
        addCart[j].style.display="";
        shopCartPiece[j].style.display="none";
        pieceText[11].value = 1;
        intCartValue -= 1;
        cartValue.innerHTML = intCartValue;
        totalProductQuantity.innerHTML = intCartValue;
        shopCartQuantityNumber[11].innerHTML = intCartValue;
      }        
  }
}
}
)}



for(i=0 ; i < plus.length ; i++){
  plus[i].addEventListener("click",function(e){
    for(j=0; j < plus.length ; j++){
      if(e.target.classList.contains("1") && plus[j].classList.contains("1")){
        pieceText[0].value++;
        shopCartQuantityNumber[0].innerHTML = pieceText[0].value;
      }else if(e.target.classList.contains("2") && plus[j].classList.contains("2")){
        pieceText[1].value++;
        shopCartQuantityNumber[1].innerHTML = pieceText[1].value;
      }else if(e.target.classList.contains("3") && plus[j].classList.contains("3")){
        pieceText[2].value++;
        shopCartQuantityNumber[2].innerHTML = pieceText[2].value;
      }else if(e.target.classList.contains("4") && plus[j].classList.contains("4")){
        pieceText[3].value++;
        shopCartQuantityNumber[3].innerHTML = pieceText[3].value;
      }else if(e.target.classList.contains("5") && plus[j].classList.contains("5")){
        pieceText[4].value++;
        shopCartQuantityNumber[4].innerHTML = pieceText[4].value;
      }else if(e.target.classList.contains("6") && plus[j].classList.contains("6")){
        pieceText[5].value++;
        shopCartQuantityNumber[5].innerHTML = pieceText[5].value;
      }else if(e.target.classList.contains("7") && plus[j].classList.contains("7")){
        pieceText[6].value++;
        shopCartQuantityNumber[6].innerHTML = pieceText[6].value;
      }else if(e.target.classList.contains("8") && plus[j].classList.contains("8")){
        pieceText[7].value++;
        shopCartQuantityNumber[7].innerHTML = pieceText[7].value;
      }else if(e.target.classList.contains("9") && plus[j].classList.contains("9")){
        pieceText[8].value++;
        shopCartQuantityNumber[8].innerHTML = pieceText[8].value;
      }else if(e.target.classList.contains("10") && plus[j].classList.contains("10")){
        pieceText[9].value++;
        shopCartQuantityNumber[9].innerHTML = pieceText[9].value;
      }else if(e.target.classList.contains("11") && plus[j].classList.contains("11")){
        pieceText[10].value++;
        shopCartQuantityNumber[10].innerHTML = pieceText[10].value;
      }else if(e.target.classList.contains("12") && plus[j].classList.contains("12")){
        pieceText[11].value++;
        shopCartQuantityNumber[11].innerHTML = pieceText[11].value;
      }
    }
  }
  )}
  
const shopCartOpen = document.getElementById("cart");
const shopCartClose = document.getElementById("shopCartClose");
const shopCart = document.querySelector(".shopCart");

shopCartOpen.addEventListener("click",function(){
shopCart.classList.add("openShopCart");
mybutton.style.display="none";
mybutton.style.opacity="0";
})

shopCartClose.addEventListener("click",function(){
  shopCart.classList.remove("openShopCart");
  mybutton.style.display="block";
  mybutton.style.opacity="1";
})



let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    mybutton.style.display = "block";
  }else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}