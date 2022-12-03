"use strict";

const billAmount = document.querySelector("#bill_amount");
const tipAmount = document.querySelector("#tip_amount");
const totalBill = document.querySelector("#total_bill");
const tipPercentage = Array.from(document.querySelectorAll(".percent"));

const customPercentageInput = document.querySelector(".custom");
customPercentageInput.addEventListener("input", () => {
  tipAmount.innerText = (
    (billAmount.value / 100) *
    customPercentageInput.value
  ).toFixed(2);
  totalBill.innerText = (
    Number(tipAmount.innerText) + Number(billAmount.value)
  ).toFixed(2);
});

const percentageBtn = () => {
  for (const percent of tipPercentage) {
    percent.addEventListener("click", () => {
      customPercentageInput.value = "";
      tipAmount.innerText = (
        (billAmount.value / 100) *
        percent.innerText
      ).toFixed(2);
      totalBill.innerText = (
        Number(tipAmount.innerText) + Number(billAmount.value)
      ).toFixed(2);
    });
  }
};

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
  billAmount.value = "";
  customPercentageInput.value = "";
  tipAmount.innerText = "0.00";
  totalBill.innerText = "0.00";
});

percentageBtn();
