
const acc = document.getElementsByClassName("accordion");

for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    // Close all panels
    for (var j = 0; j < acc.length; j++) {
      if (acc[j] !== this) {
        acc[j].classList.remove("active");
        acc[j].nextElementSibling.style.display = "none";
      }
    }

    // Toggle the clicked panel
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// const card = document.getElementsById("section6shadow");
// const cardh1 = document.getElementsById("section6cardheading");
// const cardh3 = document.getElementsById("section6cardsubheading");
// const cardp = document.getElementsById("section6cardp");

// card.addEventListener("mouseover", function () {
//   cardh1.style.color = "#fff";
//   cardh3.style.color = "#fff";
//   cardp.style.color = "#fff";
// });
// card.addEventListener("mouseout", function () {
//   cardh1.style.color = "#000";
//   cardh3.style.color = "#000";
//   cardp.style.color = "#000";
// });