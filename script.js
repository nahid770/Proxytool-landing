let menu = document.getElementById('ham-menu');
let navBar = document.getElementById('nav-bar');
let navLinks = navBar.querySelectorAll('li');

menu.addEventListener('click', () =>{
    navBar.classList.toggle('active');
    menu.classList.toggle('fa-times');
})

// slider
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      340: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Glitch Effect
  




// video
var modwrapper = document.getElementsByClassName("video_background")[0],
      modclose = document.getElementsByClassName("mod_close")[0],
      modinner = document.getElementsByClassName("modal_inner")[0];

    var modal = document.getElementById("modal")

    modal.addEventListener("click", function (e) {
      if (e.target !== this) return
      modal.classList.remove("active")
      modal.innerHTML = ""
    })

    function playvideo() {
      // modwrapper.classList.add("active");

      let iframe = document.createElement('iframe')
      let closeButton = document.createElement('button')

      iframe.setAttribute('src', 'https://www.youtube.com/embed/HdLyb30OFT4?autoplay=1&rel=0&enablejsapi=1&vq=hd1080&controls=0')

      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture')

      iframe.setAttribute('allowfullscreen', '')

      iframe.setAttribute('frameborder', '0')
      iframe.setAttribute('controls', '0')
      iframe.setAttribute('rel', '0')
      iframe.setAttribute('modestbranding', '')
      // iframe.setAttribute('width', '700')
      // iframe.setAttribute('height', '394')

      iframe.classList.add('youtube')
      modal.classList.add('active')

      closeButton.classList.add('mod_close')
      closeButton.innerHTML = 'Close'
      closeButton.onclick = function () {
        modal.classList.remove("active")
        modal.innerHTML = ""
      }

      modal.append(iframe)
      modal.append(closeButton)

      let player = document.getElementsByClassName("youtube")[0]

      setTimeout(function () {
        player.classList.add("active")
      }, 100)

    }

    document.onkeydown = function (evt) {
      evt = evt || window.event
      var isEscape = false
      if ("key" in evt) {
        isEscape = evt.key == "Escape" || evt.key == "Esc"
      } else {
        isEscape = evt.keyCode == 27
      }
      if (isEscape) {
        modal.classList.remove("active")
        modal.innerHTML = ""
      }
    }


    // specs section //
      // setTimeout(function () {
      //   const specs = document.getElementById("specs");
      //   const specsContent = document.getElementById("specsContent");
      //   const contentAfter = document.getElementById("contentAfter");

      //   const contentHeight = specsContent.getBoundingClientRect().height;
      //   const documentHeight = document.body.getBoundingClientRect().height;
      //   const specsTop =
      //     specs.getBoundingClientRect().top -
      //     document.body.getBoundingClientRect().top;

      //   //init:
      //   contentAfter.style.marginTop = `${contentHeight}px`;

      //   document.addEventListener(
      //     "scroll",
      //     (e) => {
      //       const scrollTop = window.scrollY;
      //       // the content of specs should scroll with the body but the backgroun of specs should stay in place
      //       if (scrollTop > specsTop) {
      //         if (
      //           window.scrollY + window.innerHeight >=
      //           specsTop + contentHeight
      //         ) {
      //           specs.style.position = "relative";
      //           specs.style.top = 0;
      //           specsContent.style.top = 0;
      //           contentAfter.style.marginTop = 0;
      //         } else {
      //           specs.style.position = "absolute";
      //           specs.style.top = `${scrollTop}px`;
      //           contentAfter.style.marginTop = `${contentHeight}px`;

      //           specsContent.style.top = `${specsTop - scrollTop}px`;
      //         }
      //       } else {
      //         specs.style.position = "relative";
      //         specs.style.top = "0";
      //         specsContent.style.top = "0";
      //       }
      //     },
      //     false
      //   );
      // }, 10);
   
