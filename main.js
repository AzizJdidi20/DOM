var btnmoins = document.getElementsByClassName("btn-moins");

console.log("btnmoins", btnmoins);

for (let i = 0; i < btnmoins.length; i++) {
  btnmoins[i].addEventListener("click", function () {
    if (btnmoins[i].nextElementSibling.innerText > 0) {
      btnmoins[i].nextElementSibling.innerText--;
    }
    totalPrice();
  });
}

var btnplus = document.getElementsByClassName("btn-plus");
console.log("btnplus", btnplus);

for (let j = 0; j < btnplus.length; j++) {
  btnplus[j].addEventListener("click", function () {
    btnplus[j].previousElementSibling.innerText++;
    totalPrice();
  });
}



var heartbtn = document.getElementsByClassName("fa-heart");

console.log("hearts", heartbtn);

for (let btn of heartbtn) {
  btn.addEventListener("click", function () {
    if (btn.style.color === "gray") {
      btn.style.color = "red";
    } else {
      btn.style.color = "gray";
    }
  });
}



var deletbtn = document.querySelectorAll(".btn-delete");
console.log("delet", deletbtn);

for (let k = 0; k < deletbtn.length; k++) {
  deletbtn[k].addEventListener("click", () => {
    deletbtn[k].parentElement.parentElement.remove();


    totalPrice();
  });
}

function totalPrice() {
  var productPrice = document.getElementsByClassName("prx");

  console.log("prx", productPrice);
  var productQuatity = document.getElementsByClassName("quantity");
  console.log("quantity", productQuatity);

  let sum = 0;

  for (let i = 0; i < productPrice.length; i++) {
    sum += productPrice[i].innerText * productQuatity[i].innerText;
  }
  document.getElementById("prix-total").innerText = sum;
}