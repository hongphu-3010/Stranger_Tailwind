// import Swiper bundle with all modules installed
// import Swiper from "swiper/bundle";

// // import styles bundle
// import "swiper/css/bundle";

const menuIcon = document.getElementById("menu_icon");
const closeMenu = document.getElementById("close_menu");
const sideBar = document.getElementById("sidebar");
const headerLink = document.getElementById("header_link");
const btnPlay = document.querySelectorAll(".btn_play");
const video = document.querySelectorAll(".video");
const closeVideo = document.querySelectorAll("#close_video");
const pagesSwipper = document.querySelector(".book_swipper");
const books = pagesSwipper.querySelector(".books");
const btnCloseHopper = document.querySelector("#close_hopper");
const btnOpenHopper = document.querySelector(".select_hopper");

let isPlayVideo = false;
let isSideBar = false;
let isModalHopper = false;
const checkIsSideBar = () => {
  isSideBar = !isSideBar;
  if (isSideBar) {
    sideBar.classList.remove("ml-[-100%]");
    menuIcon.classList.add("hidden");
    closeMenu.classList.remove("hidden");
    document.querySelector("body").classList.add("overflow-hidden");
    document.querySelector("body").classList.add("resize-y");
  } else {
    sideBar.classList.add("ml-[-100%]");
    menuIcon.classList.remove("hidden");
    closeMenu.classList.add("hidden");
    document.querySelector("body").classList.remove("overflow-hidden");
  }
};

const handleClickMenu = () => {
  menuIcon.addEventListener("click", checkIsSideBar);
};
handleClickMenu();
const handleCloseMenu = () => {
  closeMenu.addEventListener("click", checkIsSideBar);
};
handleCloseMenu();
const handleClickHeaderLink = () => {
  headerLink.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", checkIsSideBar);
  });
};
handleClickHeaderLink();

// ---------Slider trailer
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

//--------- slide hopper
var swiper2 = new Swiper(".books", {
  effect: "cards",
  grabCursor: true,
});

const check = (item) => {
  const data = item.dataset.id;
  item.addEventListener("click", () => {
    isPlayVideo = !isPlayVideo;

    if (isPlayVideo) {
      document.querySelector(`.video${data}`).classList.add("ml-0");
      document.querySelector("body").classList.add("overflow-hidden");
    } else {
      document.querySelector(`.video${data}`).classList.remove("ml-0");
      document
        .querySelector(`.video${data} iframe`)
        .contentWindow.postMessage(
          '{"event":"command","func":"' + "stopVideo" + '","args":""}',
          "*"
        );
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  });
};
btnPlay.forEach((item, index) => {
  check(item);
});
closeVideo.forEach((item) => {
  check(item);
});

const handleModalHopper = () => {
  isModalHopper = !isModalHopper;
  if (isModalHopper) {
    pagesSwipper.classList.remove("scale-0");
    pagesSwipper.classList.remove("opacity-0");
    document.querySelector("body").classList.add("overflow-hidden");
  } else {
    pagesSwipper.classList.add("scale-0");
    pagesSwipper.classList.add("opacity-0");
    document.querySelector("body").classList.remove("overflow-hidden");
  }
};
btnOpenHopper.addEventListener("click", handleModalHopper);
btnCloseHopper.addEventListener("click", handleModalHopper);

// ----------resize window
const logHeightWindow = () => {
  if (window.innerHeight <= 414) {
    books.classList.remove("books");
    books.classList.add("books_width");
  } else {
    books.classList.add("books");
    books.classList.remove("books_width");
  }
};
logHeightWindow();
window.addEventListener("resize", logHeightWindow);
