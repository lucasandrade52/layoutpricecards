// DOM (Document Object Model)

// const, let, var

let priceOne = document.querySelector(".container__card--one .price");
let priceTwo = document.querySelector(".container__card--two .price");
let priceThree = document.querySelector(".container__card--three .price");
let switchInput = document.querySelector("#switch");

let antigoValorUm = "199.99"
let antigoValorDois = "249.99"
let antigoValorTres = "399.99"

let novoValorUm = "19.99"
let novoValorDois = "24.99"
let novoValorTres = "39.99"

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

// modal
const modal = document.getElementById("modal__professional");
const voltar = document.querySelector(".voltar")
function onoff() {
  
  modal.classList.toggle('hide');

}

  const button = document.querySelector(".container__card--two button");
  button.addEventListener('click', onoff)
  voltar.addEventListener('click', onoff)

//

const basic = {
  title: "Basic", 
  storage: "500gb",
  users: "2 users",
  send: "3GB",
}

const professional = {
  title: "Professional", 
  storage: "1TB",
  users: "5 users",
  send: "10GB",
}

const master = {
  title: "master", 
  storage: "2TB",
  users: "10 users",
  send: "20GB",
}
