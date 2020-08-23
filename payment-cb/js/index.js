"use strict";

var urlParams = new URLSearchParams(window.location.search);
var transactionID = document.getElementById('transactionID');
transactionID.innerHTML = transactionID.innerHTML.replace('{{transactionID}}', urlParams.get('transactionID') || '');