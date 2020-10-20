"use strict";
var urlParams = new URLSearchParams(window.location.search);
var transactionID = document.getElementById("transactionID");
transactionID.innerHTML = transactionID.innerHTML.replace("{{transactionID}}", urlParams.get("transactionID") || "");

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

const userID = urlParams.get("userID");
const amount = Number(urlParams.get("amount"));

if (userID && amount) {
  console.log("Tracking purchase", userID, transactionID, amount);
  gtag("config", "G-8337L6T0K2", { user_id: userID });
  gtag("event", "purchase", {
    currency: "USD",
    transaction_id: transactionID,
    value: amount,
  });
}
