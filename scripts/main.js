"use strict";

function selectValue() {
  new Promise(function(e, n) {
    xhr.open("GET", select.value, !0), xhr.onload = function() {
      return e(xhr.responseText)
    }, xhr.onerror = function() {
      return n(xhr.statusText)
    }, xhr.send()
  }).then(function(e) {
    currencyObj = JSON.parse(e);
    for (var n = 0; n < priceAsk.length; n++) checkbox[n].checked = !1, priceAsk[n].innerHTML = "$" + currencyObj.ask, hourChangeFlag = currencyObj.changes.price.hour < 0, hourChange[n].innerHTML = "<span>+</span>" + currencyObj.changes.price.hour + "$", hourChange[n].classList.toggle("text-red", hourChangeFlag), dayChangeFlag = currencyObj.changes.price.day < 0, dayChange[n].innerHTML = "<span>+</span>" + currencyObj.changes.price.day + "$", dayChange[n].classList.toggle("text-red", dayChangeFlag), weekChangeFlag = currencyObj.changes.price.week < 0, weekChange[n].innerHTML = "<span>+</span>" + currencyObj.changes.price.week + "$", weekChange[n].classList.toggle("text-red", weekChangeFlag), monthChangeFlag = currencyObj.changes.price.month < 0, monthChange[n].innerHTML = "<span>+</span>" + currencyObj.changes.price.month + "$", monthChange[n].classList.toggle("text-red", monthChangeFlag)
  }, function(e) {})
}

function toggleCheck() {
  for (var e = 0; e < checkbox.length; e++) checkboxChecked[e] = checkbox[e].checked, checkboxChecked[e] ? (hourChangeFlag = currencyObj.changes.percent.hour < 0, hourChange[e].innerHTML = "<span>+</span>" + currencyObj.changes.percent.hour + "%", hourChange[e].classList.toggle("text-red", hourChangeFlag), dayChangeFlag = currencyObj.changes.percent.day < 0, dayChange[e].innerHTML = "<span>+</span>" + currencyObj.changes.percent.day + "%", dayChange[e].classList.toggle("text-red", dayChangeFlag), weekChangeFlag = currencyObj.changes.percent.week < 0, weekChange[e].innerHTML = "<span>+</span>" + currencyObj.changes.percent.week + "%", weekChange[e].classList.toggle("text-red", weekChangeFlag), monthChangeFlag = currencyObj.changes.percent.month < 0, monthChange[e].innerHTML = "<span>+</span>" + currencyObj.changes.percent.month + "%", monthChange[e].classList.toggle("text-red", monthChangeFlag)) : (hourChangeFlag = currencyObj.changes.price.hour < 0, hourChange[e].innerHTML = "<span>+</span>" + currencyObj.changes.price.hour + "$", hourChange[e].classList.toggle("text-red", hourChangeFlag), dayChangeFlag = currencyObj.changes.price.day < 0, dayChange[e].innerHTML = "<span>+</span>" + currencyObj.changes.price.day + "$", dayChange[e].classList.toggle("text-red", dayChangeFlag), weekChangeFlag = currencyObj.changes.price.week < 0, weekChange[e].innerHTML = "<span>+</span>" + currencyObj.changes.price.week + "$", weekChange[e].classList.toggle("text-red", weekChangeFlag), monthChangeFlag = currencyObj.changes.price.month < 0, monthChange[e].innerHTML = "<span>+</span>" + currencyObj.changes.price.month + "$", monthChange[e].classList.toggle("text-red", monthChangeFlag))
}
$(document).ready(function() {
  $("#select").niceSelect()
});
var select = document.getElementById("select"),
 priceAsk = document.getElementsByClassName("price-ask"),
 hourChange = document.getElementsByClassName("hour-change"),
 dayChange = document.getElementsByClassName("day-change"),
 weekChange = document.getElementsByClassName("week-change"),
 monthChange = document.getElementsByClassName("month-change"),
 currencyObj = {},
 hourChangeFlag = !1,
 dayChangeFlag = !1,
 weekChangeFlag = !1,
 monthChangeFlag = !1,
 xhr = new XMLHttpRequest;
selectValue();
var checkbox = document.getElementsByClassName("checkbox"),
 checkboxChecked = [];