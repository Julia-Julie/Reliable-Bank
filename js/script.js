function initMap() {
  const loc = { lat: 49.839684, lng: 24.029716 };
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: loc,
  });
  const marker = new google.maps.Marker({ position: loc, map: map });
}

// jQuery [Scrolling]
$("#nav a, #showcase a").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;
    $("html, body").animate({ scrollTop: $(hash).offset().top - 55 }, 1100);
  }
});

// Opacity of nav while scrolling
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    document.querySelector("#nav").style.opacity = 0.9;
  } else {
    document.querySelector("#nav").style.opacity = 1;
  }
});
