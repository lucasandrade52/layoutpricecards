// DOM (Document Object Model)

// const, let, var

let priceOne = document.querySelector(".container__card--one .price");
let priceTwo = document.querySelector(".container__card--two .price");
let priceThree = document.querySelector(".container__card--three .price");
let switchInput = document.querySelector("#switch");

let antigoValorUm = "19.99"
let antigoValorDois = "24.99"
let antigoValorTres = "34.99"

let novoValorUm = "$29.99"
let novoValorDois = "$35.99"
let novoValorTres = "$35.99"

switchInput.addEventListener("change", function(){
  
  if (switchInput.checked === true) {
    priceOne.innerHTML = novoValorUm
    priceTwo.innerHTML = novoValorDois
    priceThree.innerHTML = novoValorTres 
  } else {
    priceOne.innerHTML = antigoValorUm
    priceTwo.innerHTML = antigoValorDois
    priceThree.innerHTML = antigoValorTres 
  }  
  
});
