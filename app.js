var initialPrice = document.querySelector('#initial-price');
var quantityOfStock = document.querySelector('#quantity-of-stocks');
var currentPrice = document.querySelector('#current-price');
var clickButton = document.querySelector('#click-button');
var printMessage = document.querySelector('#print-message');

function calculateProfitAndLoss() {
    var profitOrLoss = currentPrice.value - initialPrice.value;
    if(profitOrLoss > initialPrice.value) {
        var percentageProfit = Math.trunc(((profitOrLoss*quantityOfStock.value)/(initialPrice.value*quantityOfStock.value))*100);
        printMessage.innerText = "Hey, the profit is " + profitOrLoss + " and the profit-percentage is " + percentageProfit + "%";
    }else {
        const lossAmount = Math.abs(profitOrLoss)
        var percentageLoss = Math.trunc(((lossAmount*quantityOfStock.value)*100)/initialPrice.value);
        printMessage.innerText = "Hey, the loss is " + lossAmount + " and the loss-percentage is " + percentageLoss + "%";
    }
}

clickButton.addEventListener('click',calculateProfitAndLoss);