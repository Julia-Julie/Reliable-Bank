function initMap() {
  const loc = { lat: 49.839684, lng: 24.029716 };
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 14,
    center: loc,
  });
  const marker = new google.maps.Marker({ position: loc, map: map });
}
