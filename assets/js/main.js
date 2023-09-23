/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  /*Active link*/
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*Remove menu mobile*/
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});
sr.reveal(".float", { delay: 400 });
sr.reveal(".floatText", { delay: 400 });

/*SCROLL HOME*/
sr.reveal(".home__title", {});
sr.reveal(".home__title-color", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home__img", { delay: 400 });
sr.reveal(".logotext", {});
sr.reveal(".home__social-icon", { interval: 200 });


/*SCROLL ABOUT*/
sr.reveal(".about__img", {});
sr.reveal(".about__subtitle", { delay: 400 });
sr.reveal(".autoimgmodels", { delay: 400 });
sr.reveal(".about__text", { delay: 400 });

/*SCROLL scene*/
sr.reveal(".scene__subtitle", {});
sr.reveal(".scene__text", {});
sr.reveal(".scene__data", { interval: 200 });
sr.reveal(".scene__img", { delay: 600 });
sr.reveal(".youtube_videos", { delay: 600 });

/*SCROLL WORK*/
sr.reveal(".work__img", { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal(".contact__input", { interval: 200 });

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlidesphotos");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 4000); // Change image every 2 seconds
}

function myFunction(x) {
  x.classList.toggle("change");
}

// Loop selectors
var videos = document.querySelectorAll(".youtube");  
for (var i=0; i<videos.length; i++) {
  var youtube = videos[i];
  // Get function
  getVideos(youtube);
}

// Get videos function
function getVideos(el){
  var img = document.createElement("img");
  // Get images
  img.setAttribute('src', 'http://i.ytimg.com/vi/'+el.id+'/hqdefault.jpg');
  // Add class to img
  img.setAttribute('class', 'thumb');
  // Make div to embed videos
  var video = document.createElement("div");
  // Remove this if you like
  video.setAttribute("class","video_here");  
  // Insert tags
  el.appendChild(img);
  el.appendChild(video);
  // On click get video
  el.addEventListener('click',function(){ 
    var iframe = document.createElement("iframe");
    iframe.setAttribute('class','youtube_video');
    iframe.setAttribute('src','https://www.youtube.com/embed/'+
    this.id +'?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1'); 
    // Remplace img for video
    this.parentNode.replaceChild(iframe, this);
  },false);  
}

