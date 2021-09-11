var nextBtn = document.getElementById("next");
var checkBtn = document.getElementById("check");
const billAmount = document.querySelector("#bill-amount")
const cashGiven = document.querySelector("#cash-given")

const den = [2000, 500, 100, 20, 10, 5, 1]

document.getElementById("cash").style.display = "none";
nextBtn.addEventListener("click", function () {
    if (!billAmount.value)
        alert("Enter the bill amount");
    else if (billAmount.value <= 0) {
        alert("Enter a valid bill amount")
    } else {
        document.getElementById("cash").style.display = "block";
    }
})

checkBtn.addEventListener("click", function () {
    let billAmt = parseInt(billAmount.value);
    let cashAmt = parseInt(cashGiven.value);

    if (!cashAmt) {
        alert("Enter the cash given");
        return;
    } else if (cashAmt < billAmt) {
        alert("Cash given should be greater than or equal to bill amount");
        return;
    }

    if (cashAmt === billAmt) {
        document.getElementById("no-return").style.display = "block";
        return;
    } else {
        const balance = cashAmt - billAmt;
        calculateChange(balance)
    }

});

function calculateChange(balance) {
    for (let i = 0; i < den.length; i++) {
        if (balance > 0 && balance >= den[i]) {
            let numOfNotes = Math.trunc(balance / den[i]);
            document.getElementById(den[i]).innerText = numOfNotes;
            balance = balance - (den[i] * numOfNotes);
        }
    }

    document.getElementById("denominations").style.display = "block";
}