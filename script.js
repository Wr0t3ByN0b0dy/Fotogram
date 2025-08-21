const IMG_GALLERY = document.getElementById("photo-gallery");
const IMG_DIALOG = document.getElementById("image-viewer");
const BODY = document.getElementsByTagName("body")[0];
const IMG_DATA = [
  { src: "img/pictures/urlaub1.jpg", alt: "Test-Urlaub Nummer: 1" },
  { src: "img/pictures/urlaub2.jpg", alt: "Test-Urlaub Nummer: 2" },
  { src: "img/pictures/urlaub3.jpg", alt: "Test-Urlaub Nummer: 3" },
  { src: "img/pictures/urlaub4.jpg", alt: "Test-Urlaub Nummer: 4" },
  { src: "img/pictures/urlaub5.jpg", alt: "Test-Urlaub Nummer: 5" },
  { src: "img/pictures/urlaub6.jpg", alt: "Test-Urlaub Nummer: 6" },
  { src: "img/pictures/urlaub7.jpg", alt: "Test-Urlaub Nummer: 7" },
  { src: "img/pictures/urlaub8.jpg", alt: "Test-Urlaub Nummer: 8" },
  { src: "img/pictures/urlaub9.jpg", alt: "Test-Urlaub Nummer: 9" },
  { src: "img/pictures/urlaub10.jpg", alt: "Test-Urlaub Nummer: 10" },
  { src: "img/pictures/urlaub11.jpg", alt: "Test-Urlaub Nummer: 11" },
  { src: "img/pictures/urlaub12.jpg", alt: "Test-Urlaub Nummer: 12" },
  { src: "img/pictures/urlaub13.jpg", alt: "Test-Urlaub Nummer: 13" },
  { src: "img/pictures/urlaub14.jpg", alt: "Test-Urlaub Nummer: 14" },
  { src: "img/pictures/urlaub15.jpg", alt: "Test-Urlaub Nummer: 15" },
  { src: "img/pictures/urlaub16.jpg", alt: "Test-Urlaub Nummer: 16" },
];

function initRenderImages() {
  IMG_GALLERY.innerHTML = IMG_DATA.map(
    (img, index) =>
      `<button class="picture-button" onclick="openPhotoDialog(${index})">
        <img class="picture-showcase" src="${img.src}" alt="${img.alt}" />
      </button>`
  ).join("");
}

function openPhotoDialog(index) {
  IMG_DIALOG.innerHTML = createDialogContent(index);
  IMG_DIALOG.showModal();
  BODY.classList.toggle("over-hidden");
  IMG_DIALOG.classList.add("d-flex");
}

function createDialogContent(index) {
  return `
    <header class="dialog-header">
      <h2 class="photo-title">${IMG_DATA[index].alt}</h2>
    </header>

    <main class="dialog-content">
      <img class="dialog-img" id="dialog-image" src="${
        IMG_DATA[index].src
      }" alt="${IMG_DATA[index].alt}" />
    </main>

    <footer class="dialog-footer">
        <img class="arrow-img" src="img/Pfeil_Links.png" alt="" onclick="navigateImages('prev', ${index})" />
        <p class="display-index">${index + 1} / ${IMG_DATA.length}</p>
      <img class="arrow-img" src="img/Pfeil_Rechts.png" alt="" onclick="navigateImages('next', ${index})" />
    </footer>
  `;
}

function navigateImages(direction, index) {
  if (direction === "next") {
    IMG_DIALOG.innerHTML = createDialogContent((index + 1) % IMG_DATA.length);
  }
  if (direction === "prev") {
    IMG_DIALOG.innerHTML = createDialogContent(
      (index - 1 + IMG_DATA.length) % IMG_DATA.length
    );
  }
}

// Close Dialog
IMG_DIALOG.addEventListener("click", (event) => {
  const rect = IMG_DIALOG.getBoundingClientRect();

  const inDialog =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;

  if (!inDialog) {
    IMG_DIALOG.close();
    BODY.classList.toggle("over-hidden");
    IMG_DIALOG.classList.remove("d-flex");
  }
});
