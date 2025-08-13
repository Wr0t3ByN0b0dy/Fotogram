const IMAGES_CONTAINER = document.getElementById("images");

let imgArray = [
  "urlaub1.jpg",
  "urlaub2.jpg",
  "urlaub3.jpg",
  "urlaub4.jpg",
  "urlaub5.jpg",
  "urlaub6.jpg",
  "urlaub7.jpg",
];

function initRenderImgs() {
  for (let index = 0; index < imgArray.length; index++) {
    const element = imgArray[index];

    IMAGES_CONTAINER.innerHTML += `<button class="img-button" onclick="showImg()">
      <img class="main-img" src="./img/pictures/${element}" alt="">
     </button>`;
  }
}

function showImg() {
  console.log("Test");
}
