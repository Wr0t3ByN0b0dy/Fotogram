const IMG_GALLERY = document.getElementById("photo-gallery");
const IMG_DIALOG = document.getElementById("image-viewer");
const BODY = document.getElementsByTagName("body")[0];
const IMG_DATA = [
  {
    src: "img/pictures/Verona-Italien.jpg",
    alt: "Die Dächer von Verona - Italien",
  },
  {
    src: "img/pictures/Gardasee-Italien.jpg",
    alt: "Ausblick auf den Gardasee - Italien",
  },
  {
    src: "img/pictures/Maspalomas-Spanien.jpg",
    alt: "Dünenlandschaft von Maspalomas - Spanien",
  },
  {
    src: "img/pictures/Rom-Italien.jpg",
    alt: "Kolosseum im Sonnenlicht - Italien",
  },
  {
    src: "img/pictures/Rauris-Österreich.jpg",
    alt: "Winter in den Alpen - Österreich",
  },
  {
    src: "img/pictures/Vittoriano-Italien.jpg",
    alt: "Vittoriano in Rom - Italien",
  },
  {
    src: "img/pictures/Kamele-Fuerteventura.jpg",
    alt: "Kamele - Fuerteventura",
  },
  {
    src: "img/pictures/Meer-Spanien.jpg",
    alt: "Blick aufs endlose Meer - Spanien",
  },
  {
    src: "img/pictures/KöniglicheGärten-Spanien.jpg",
    alt: "Königliche Gartenanlage - Spanien",
  },
  { src: "img/pictures/Peñíscola-Spanien.jpg", alt: "Peñíscola - Spanien" },
  { src: "img/pictures/Tapas-Spanien.jpg", alt: "Spanische Tapas - Spanien" },
  {
    src: "img/pictures/Gartenanlagen-Spanien.jpg",
    alt: "Blick über die prachtvollen Gartenanlagen - Spanien",
  },
  { src: "img/pictures/Gardasee2-Italien.jpg", alt: "Gardasee - Italien" },
  { src: "img/pictures/Calpe-Spanien.jpg", alt: "Calpe - Spanien" },
  {
    src: "img/pictures/Vatikanstadt-Italien.jpg",
    alt: "Vatikanstadt bei Nacht - Italien",
  },
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
  IMG_DIALOG.innerHTML = createPhotoDialogContent(index);
  IMG_DIALOG.showModal();
  BODY.classList.toggle("over-hidden");
  IMG_DIALOG.classList.add("dialog-flex");
}

function createPhotoDialogContent(index) {
  const pad = (n) => n.toString().padStart(2, "0");
  return `
    <header class="dialog-header">
      <h2 class="photo-title">${IMG_DATA[index].alt}</h2>
    </header>

    <main class="dialog-content">
      <img class="dialog-img" src="${IMG_DATA[index].src}" alt="${
    IMG_DATA[index].alt
  }" />
    </main>

    <footer class="dialog-footer">
        <img class="arrow-img" src="img/Pfeil_Links.png" alt="" onclick="navigateImages('prev', ${index})" />
        <p class="display-index">${pad(index + 1)} / ${IMG_DATA.length}</p>
        <img class="arrow-img" src="img/Pfeil_Rechts.png" alt="" onclick="navigateImages('next', ${index})" />
    </footer>
  `;
}

function navigateImages(direction, index) {
  if (direction === "next") {
    IMG_DIALOG.innerHTML = createPhotoDialogContent(
      (index + 1) % IMG_DATA.length
    );
  }
  if (direction === "prev") {
    IMG_DIALOG.innerHTML = createPhotoDialogContent(
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
    IMG_DIALOG.classList.remove("dialog-flex");
  }
});
