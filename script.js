const IMAGES_CONTAINER = document.getElementById("images");

const IMG_DATA = {
  urlaub1: {
    headline: "Verona - Italien",
    description:
      "Ein Panorama aus roten Ziegeldächern, engen Gassen und markanten Kirchtürmen, eingerahmt von sanften Hügeln dieser Ausblick fängt den unverwechselbaren Charme Veronas ein, wo Geschichte, Architektur und mediterrane Atmosphäre aufeinandertreffen.",
    url: "./img/pictures/urlaub1.jpg",
  },
  urlaub2: {
    headline: "Test2 Headline",
    description: "Test2 Description",
    url: "./img/pictures/urlaub2.jpg",
  },
  urlaub3: {
    headline: "Test Headline",
    description: "Test Description",
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
  let dataKey = src.split("/").pop().replace(".jpg", "");
  let data = IMG_DATA[dataKey];

  console.log(dataKey, data);

  if (data) {
    console.log("Headline:", data.headline);
    console.log("Description:", data.description);
  } else {
    console.warn(`Keine Daten für ${dataKey} gefunden`);
  }
}
