const IMAGES_CONTAINER = document.getElementById("images");

let imgArray = [
  "urlaub1.jpg",
  "urlaub2.jpg",
  "urlaub3.jpg",
  "urlaub4.jpg",
  "urlaub5.jpg",
  "urlaub6.jpg",
  "urlaub7.jpg",
  "urlaub8.jpg",
  "urlaub9.jpg",
  "urlaub10.jpg",
  "urlaub11.jpg",
  "urlaub12.jpg",
  "urlaub13.jpg",
  "urlaub14.jpg",
  "urlaub15.jpg",
  "urlaub16.jpg",
];

function initRenderImgs() {
  for (let index = 0; index < imgArray.length; index++) {
    const IMG = imgArray[index];

    IMAGES_CONTAINER.innerHTML += `<button class="img-button" onclick="showImg()">
      <img class="main-img" src="./img/pictures/${IMG}" alt="">
     </button>`;
  }
}

function showImg() {
  console.log("Test");
}
