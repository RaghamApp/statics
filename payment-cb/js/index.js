"use strict";
var urlParams = new URLSearchParams(window.location.search);
var transactionID = urlParams.get("transactionID")
var transactionIdEl = document.getElementById("transactionID");
transactionIdEl.innerHTML = transactionIdEl.innerHTML.replace("{{transactionID}}", transactionID || "");

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());

var userID = urlParams.get("userID");
var amount = Number(urlParams.get("amount"));

if (userID && amount) {
  console.log("Tracking purchase", userID, transactionID, amount);
  gtag("config", "G-HYBHD7T8SH", { user_id: userID });
  gtag("event", "purchase", {
    currency: "USD",
    transaction_id: transactionID,
    value: amount,
    revenue: amount
  });
}
