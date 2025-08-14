const IMAGES_CONTAINER = document.getElementById("images");
const IMAGE_DIALOG = document.getElementById("show-image");

const IMG_DATA = {
  urlaub1: {
    headline: "Blick über die Dächer von Verona - Italiens historische Perle",
    description:
      "Ein Panorama aus roten Ziegeldächern, engen Gassen und markanten Kirchtürmen, eingerahmt von sanften Hügeln dieser Ausblick fängt den unverwechselbaren Charme Veronas ein, wo Geschichte, Architektur und mediterrane Atmosphäre aufeinandertreffen.",
    url: "./img/pictures/urlaub1.jpg",
  },
  urlaub2: {
    headline: "Idyllischer Ausblick auf den Gardasee",
    description:
      "Eine ruhige Landstraße führt vorbei an sanften Hügeln, Olivenhainen und malerischen Häusern im Hintergrund glitzert der Gardasee unter einem strahlend blauen Himmel.",
    url: "./img/pictures/urlaub2.jpg",
  },
  urlaub3: {
    headline: "Weite Dünenlandschaft von Maspalomas",
    description:
      "Endlose Sandhügel ziehen sich bis zum Meer, begleitet von dramatisch bewölktem Himmel die Dünen von Maspalomas vereinen Wüstenflair und Küstenpanorama zu einer einzigartigen Szenerie.",
    url: "./img/pictures/urlaub3.jpg",
  },
  urlaub4: {
    headline: "Test Headline",
    description: "Test Description",
    url: "./img/pictures/urlaub4.jpg",
  },
  urlaub5: {
    headline: "Test Headline",
    description: "Test Description",
    url: "./img/pictures/urlaub5.jpg",
  },
  urlaub6: {
    headline: "Test Headline",
    description: "Test Description",
    url: "./img/pictures/urlaub6.jpg",
  },
  urlaub7: {
    headline: "Test Headline",
    description: "Test Description",
    url: "./img/pictures/urlaub7.jpg",
  },
  urlaub8: {
    headline: "Test Headline",
    description: "Test Description",
    url: "./img/pictures/urlaub8.jpg",
  },
  urlaub9: {
    headline: "Test Headline",
    description: "Test Description",
    url: "./img/pictures/urlaub9.jpg",
  },
  urlaub10: {
    headline: "Test Headline",
    description: "Test Description",
    url: "./img/pictures/urlaub10.jpg",
  },
  urlaub11: {
    headline: "Test Headline",
    description: "Test Description",
    url: "./img/pictures/urlaub11.jpg",
  },
  urlaub12: {
    headline: "Test Headline",
    description: "Test Description",
    url: "./img/pictures/urlaub12.jpg",
  },
  urlaub13: {
    headline: "Test Headline",
    description: "Test Description",
    url: "./img/pictures/urlaub13.jpg",
  },
  urlaub14: {
    headline: "Test Headline",
    description: "Test Description",
    url: "./img/pictures/urlaub14.jpg",
  },
  urlaub15: {
    headline: "Test Headline",
    description: "Test Description",
    url: "./img/pictures/urlaub15.jpg",
  },
  urlaub16: {
    headline: "Test Headline",
    description: "Test Description",
    url: "./img/pictures/urlaub16.jpg",
  },
};

function initRenderImgs() {
  Object.entries(IMG_DATA).forEach(([key, data]) => {
    IMAGES_CONTAINER.innerHTML += `
      <button class="img-button" onclick="showImgDialog(this)">
        <img class="main-img" src="${data.url}" alt="${data.headline}" />
      </button>`;
  });
}

function showImgDialog(element) {
  let img = element.querySelector("img");
  let src = img.getAttribute("src");
  let dataKeys = src.split("/").pop().replace(".jpg", "");
  let data = IMG_DATA[dataKeys];
  let allDataKeys = Object.keys(IMG_DATA);
  let keysLength = allDataKeys.length;
  let keysIndex = allDataKeys.indexOf(dataKeys) + 1;

  if (data) {
    IMAGE_DIALOG.innerHTML = `
      <header class="img-dialog-header">
          <h2 class="img-dialog-headline py-16">${data.headline}</h2>
          <div>
            <p class="img-dialog-description">${data.description}</p>
          </div>
          </header>
      <section class="img-dialog-main py-16">
          <img class="dialog-img" src="${data.url}" alt="${data.headline}" />
      </section>
      <footer class="img-dialog-footer py-16">
          <button>Vorher</button>
          <p>${keysIndex} / ${keysLength}</p>
          <button>Nachher</button>
      </footer>`;

    openDialog(IMAGE_DIALOG);
  } else {
    console.warn(`Keine Daten für ${dataKeys} gefunden`);
  }
}

function openDialog(dialogID) {
  dialogID.showModal();
}

IMAGE_DIALOG.addEventListener("click", (event) => {
  const rect = IMAGE_DIALOG.getBoundingClientRect();
  const clickedInDialog =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;

  if (!clickedInDialog) {
    IMAGE_DIALOG.close();
  }
});
