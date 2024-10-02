const lightboxContainer = document.querySelector(".motorcycles__modal");
const images = document.querySelectorAll(".image");
const lightboxImg = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");
const lightboxTitle = document.querySelector(".lightbox .title");
const lightboxNumber = document.querySelector(".lightbox .number");
const closeBtn = document.querySelector(".lightbox .close-btn");
const nextBtn = document.querySelector(".lightbox .next-btn");
const previousBtn = document.querySelector(".lightbox .previous-btn");
let index = 0;

// Add eventListener to all images
images.forEach((image) => {
  image.addEventListener("click", () => {
    let imageIndex = image.firstElementChild.getAttribute("data-id");
    index = Number(imageIndex);
    showLightbox(image);
  });
});

// Open Lightbox
const showLightbox = (data) => {
  lightboxContainer.classList.add("active");

  lightboxImage.src = data.firstElementChild.src;
  const imageTitle = data.firstElementChild.alt;
  
  lightboxTitle.innerText = imageTitle;
  lightboxNumber.innerText = `${index + 1} / ${images.length}`;

  const imgTitle = [lightboxImg, lightboxTitle, lightboxNumber];
  imgTitle.forEach((item) => item.classList.add("fade"));
  setTimeout(() => imgTitle.forEach((item) => item.classList.remove("fade")), 620);
}

closeBtn.addEventListener("click", () => {
  lightboxContainer.classList.remove("active");
});

lightboxContainer.addEventListener("click", (e) => {
  if(e.target.classList.contains("motorcycles__modal")) {
    lightboxContainer.classList.remove("active");
  }
});

nextBtn.addEventListener("click", () => {
  showNextImage();
});

previousBtn.addEventListener("click", () => {
  showPreviousImage();
});

// Next and Previous Images
const showNextImage = () => {
  index++;
  if(index > images.length - 1) index = 0;

  showLightbox(images[index]);
};

const showPreviousImage = () => {
  index--;
  if(index < 0) index = images.length - 1;

  showLightbox(images[index]);
};