const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")

// Menu on smartphone ect
hamburger.addEventListener("click", ()=>{
  menu.classList.toggle("hidden")
  hamburger.classList.toggle("bg-white")
})

// The scroll to menu section
hLinks.forEach(link=>{
  link.addEventListener("click", ()=>{
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
  })
})

// Dark mode
moon.addEventListener("click", ()=>{
  body.classList.toggle("dark")
})


// The read more btn 
function readMore(city) {
  let dots = document.querySelector(`.services[data-city="${city}"] .dots`);
  let moreText = document.querySelector(`.services[data-city="${city}"] .more`); 
  let btnText = document.querySelector(`.services[data-city="${city}"] .myBtn`);

  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.textContent = "Read more";
      moreText.style.display = "none";
  } else {
      dots.style.display = "none";
      btnText.textContent = "Load less"; 
      moreText.style.display = "inline";
  }
}

// Scroll back up
var toTopButton = document.getElementById("to-top-button");
        // When the user scrolls down 200px from the top of the document, show the button
        window.onscroll = function () {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 1800) {
                toTopButton.classList.remove("hidden");
            } else {
                toTopButton.classList.add("hidden");
            }
        }
        // When the user clicks on the button, scroll to the top of the document
        function goToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
