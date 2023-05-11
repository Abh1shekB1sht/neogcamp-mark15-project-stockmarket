var initialPrice = document.querySelector('#initial-price');
var quantityOfStock = document.querySelector('#quantity-of-stocks');
var currentPrice = document.querySelector('#current-price');
var clickButton = document.querySelector('#click-button');
var printMessage = document.querySelector('#print-message');

clickButton.addEventListener('click',calculateProfitAndLoss);