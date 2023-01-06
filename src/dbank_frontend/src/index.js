import { dbank_backend } from "../../declarations/dbank_backend";

window.addEventListener("load", async function() {
    const currentAmount = dbank_backend.checkBalance();
    this.document.getElementById("value").innerText = currentAmount;
})