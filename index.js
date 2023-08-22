let phoneNumber = document.getElementById("phone-number").textContent;
let pagerNumber = document.getElementById("pager-number").textContent;

function numTriggered(val) {
  console.log(phoneNumber);

  phoneNumber += val;
  document.getElementById("phone-number").textContent = phoneNumber;
}

function sendNumberToPager() {
  pagerNumber.textContent = phoneNumber;
  document.getElementById("pager-number").textContent = phoneNumber;
}

function reset() {
  document.getElementById("phone-number").textContent = "";
  document.getElementById("pager-number").textContent = "";
  phoneNumber = "";
  pagerNumber = "";
}
