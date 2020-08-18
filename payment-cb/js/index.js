"use strict";

var urlParams = new URLSearchParams(window.location.search);
var purchaseID = document.getElementById('purchaseID');
purchaseID.innerHTML = purchaseID.innerHTML.replace('{{purchaseID}}', urlParams.get('purchaseID') || '');