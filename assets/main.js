//Preloader
// let loading = document.querySelector('#preloader')

// window.addEventListener('load', function(){
//     loading.style.display="none"
// })

// Scroll
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};
const sr = ScrollReveal({
  distance: "60px",
  duration: 1000,
  delay: 400,
  reset: true,
});

sr.reveal(".home-text", { delay: 200, origin: "top" });
sr.reveal(".home-img", { delay: 300, origin: "top" });
// sr.reveal(
//   ".about-tittle , .information, .about-text , .about, .about-img , .services, .heading , .services-content , .skills, .skill-container, .portfolio, .box, input, textarea, .social a",
//   { delay: 200, origin: "top" }
// );
sr.reveal(
  ".about-tittle , .information, .about-text , .about, .about-img , .services , .services-content , .skills, .skill-container, .portfolio, .box, .social a",
  { delay: 200, origin: "top" }
);

sr.reveal(" .portfolio, .box, .heading", {
  delay: 100,
  origin: "top",
  reset: false,
  distance: "20px",
});

// Dark Mode
let darkmode = document.querySelector("#greenmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
    localStorage.setItem("theme", "green");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
    localStorage.removeItem("theme");
  }
};

//simpan konf tema ke local storage

if (localStorage.getItem("theme") == "green") {
  darkmode.classList.replace("bx-moon", "bx-sun");
  document.body.classList.add("active");
} else {
  darkmode.classList.replace("bx-sun", "bx-moon");
  document.body.classList.remove("active");
}

//Contact Form
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwDz_j7umlRMjKnAhHTncAuJz08YP-hQWvEImYVuW_yo0OWYr569lEm3lmvRg36XCnM/exec";
const form = document.forms["submit-to-google-sheet"];
const sendBtn = document.querySelector(".send-btn");
const disBtn = document.querySelector(".dis-btn");
const myAlert = document.querySelector(".alert");
const close = document.querySelector(".close");

disBtn.style.display = "none";
myAlert.style.display = "none";

close.onclick = () => {
  myAlert.style.display = "none";
};

hapusAlert = () => {
  myAlert.style.display = "none";
};

form.addEventListener("submit", (e) => {
  sendBtn.style.display = "none";
  disBtn.style.removeProperty("display");

  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      sendBtn.style.display = "";
      disBtn.style.display = "none";
      console.log("Success!", response);
      form.reset();
      myAlert.style.display = "";
      setTimeout(hapusAlert, 4000);
    })
    .catch((error) => console.error("Error!", error.message));
});

//Scroll to top
let btnTop = document.querySelector(".back-to-top");

btnTop.style.display = "none";

window.onscroll = () => {
  if (
    document.body.scrollTop > 1500 ||
    document.documentElement.scrollTop > 1500
  ) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};

btnTop.onclick = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

//filter
// $(window).on("load", function () {
//   var $container = $("#lightbox");
//   $container.isotope({
//     filter: "*",
//     animationOptions: {
//       duration: 750,
//       easing: "linear",
//       queue: false,
//     },
//   });

//   $(".filter-buttons button").on("click", function () {
//     var selector = $(this).attr("data-filter");
//     $container.isotope({
//       filter: selector,
//       animationOptions: {
//         duration: 750,
//         easing: "linear",
//         queue: false,
//       },
//     });

//     $(".filter-buttons .active").removeClass("active");
//     $(this).addClass("active");
//   });
// });

$(document).ready(function () {
  var $grid = $(".portfolio-container").isotope({
    // Opsi Isotope
    itemSelector: ".box",
    layoutMode: "fitRows",
    filter: "*",
  });

  // Filter item ketika filter link diklik
  $(".filter-buttons").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });

    // Tambahkan kelas 'active' ke tombol yang saat ini diklik
    $(".filter-buttons button").removeClass("active");
    $(this).addClass("active");
  });
});
