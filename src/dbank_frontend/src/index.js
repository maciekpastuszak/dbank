import { dbank_backend } from "../../declarations/dbank_backend";

window.addEventListener("load", async function() {
    const currentAmount = await dbank_backend.checkBalance();
    document.getElementById("value").innerText = Math.round(currentAmount * 100);
});

document.querySelector("form").addEventListener("submit", async function(event) {
    event.preventDefault();
    const inputAmount = parseFloat(document.getElementById("input-amount").value);
    const outputAmount = parseFloat(document.getElementById("withdrawal-amount").value);

    await dbank_backend.topUp(inputAmount);

    const currentAmount = await dbank_backend.checkBalance();
    document.getElementById("value").innerText = Math.round(currentAmount * 100) / 100;
})