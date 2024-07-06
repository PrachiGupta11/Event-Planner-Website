/* Created by Prachi Gupta */

let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

let themeToggler = document.querySelector(".theme-toggler");
let toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.onclick = () => {
  themeToggler.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
  themeToggler.classList.remove("active");
};

document.querySelectorAll(".theme-toggler .theme-btn").forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.background;
    document.querySelector(":root").style.setProperty("--theme-color", color);
  };
});

var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

function checkLoginStatus()
{
  const control=document.getElementById("login-function");
  const loggedInUserEmail=localStorage.getItem("loggedInUser")
  console.log(loggedInUserEmail)
  if(loggedInUserEmail)
    {
      const userData=JSON.parse(localStorage.getItem('user_'+loggedInUserEmail))
      control.innerHTML=`Hi ${loggedInUserEmail}!
      <img src="../images/logout.png" alt="" id="logout" height="30px">`
      document.getElementById("logout").onclick=logoutUser;
    }
    else{
      control.innerHTML=`<a href="./components/login.html" id="login">Login</a>`
    }
}

function logoutUser()
{
  localStorage.removeItem("loggedInUser");
  window.location.reload();
}


// const decorationTypeSelect = document.getElementById('decoration-type-select');
// const searchBtn = document.getElementById('search-btn');

// Event listener for the search button
// searchBtn.addEventListener('click', () => {
//   const selectedType = decorationTypeSelect.value;
//   if (selectedType) {
//     const filteredItems = data.filter(item => item.type === selectedType);
//     renderItems(filteredItems);
//   }
// });

// console.log(document.getElementsByClassName('decorType').innerText)
// let decorType=document.getElementsByClassName('decorType').innerText
// console.log(decorType)
// localStorage.setItem("DecorType",decorType)

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.decorType');

  links.forEach(link => {
      link.addEventListener('click', function(event) {
          const decorationType = event.target.dataset.type;
          localStorage.setItem('decorationType', decorationType);
      });
  });
});
