const parentContainerWidth = document.querySelector(".projects").offsetWidth;
const projecstList = document.querySelector(".projects-list");

const downloadCV = () => {
  window.open("assets/your_cv.pdf");
};

document
  .getElementById("project-prev-item")
  .addEventListener("click", () => showNextPrevProjectsList("prev"));
document
  .getElementById("project-next-item")
  .addEventListener("click", () => showNextPrevProjectsList("next"));

document
  .querySelector(".projects-list")
  .addEventListener("scroll", () => updateSliderNextPrev());

const slider_prev_item = document.getElementById("slider-prev-item");
const slider_next_item = document.getElementById("slider-next-item");

slider_prev_item.addEventListener("click", () => showNextPrevImage("prev"));
slider_next_item.addEventListener("click", () => showNextPrevImage("next"));

const showNextPrevProjectsList = (type) => {
  let newScroll = parentContainerWidth;
  if (
    projecstList.scrollWidth - projecstList.scrollLeft <
    parentContainerWidth
  ) {
    newScroll = projecstList.scrollWidth - projecstList.scrollLeft;
  }

  const scrolLeft =
    projecstList.scrollLeft + (type === "next" ? newScroll : -newScroll);

  projecstList.scrollTo({
    left: scrolLeft,
    behavior: "smooth",
  });
};

const updateSliderNextPrev = () => {
  const next = document.getElementById("project-next-item");
  const prev = document.getElementById("project-prev-item");

  if (
    projecstList.scrollWidth - projecstList.scrollLeft ===
    parentContainerWidth
  )
    next.classList.add("hide");
  else if (next.classList.contains("hide")) next.classList.remove("hide");

  if (projecstList.scrollLeft === 0) prev.classList.add("hide");
  else if (prev.classList.contains("hide")) prev.classList.remove("hide");
};

//project details
const closeModal = (id) => {
  document.getElementById(id).classList.add("hide");
};
const showModal = (id) => {
  document.getElementById(id).classList.remove("hide");
};
let currentShownImageId = 0;
const totalProjectImagesCount = document.querySelectorAll(
  ".project-gallery img"
).length;
const showProjectGallerySlider = (event, modalId) => {
  document.getElementById(modalId).classList.remove("hide");
  document.getElementById("project-current-image").src = event.target.src;
  currentShownImageId = Number(event.target.id.substring(14));
  if (currentShownImageId === 1) slider_prev_item.classList.add("hide");
  else slider_prev_item.classList.remove("hide");
  if (currentShownImageId === totalProjectImagesCount)
    slider_next_item.classList.add("hide");
  else slider_next_item.classList.remove("hide");
};
//project gallery slider
const showNextPrevImage = (type) => {
  currentShownImageId =
    type === "next" ? currentShownImageId + 1 : currentShownImageId - 1;
  if (currentShownImageId === 1) {
    slider_prev_item.classList.add("hide");
  } else if (currentShownImageId === totalProjectImagesCount) {
    slider_next_item.classList.add("hide");
  } else {
    if (slider_prev_item.classList.contains("hide"))
      slider_prev_item.classList.remove("hide");
    if (slider_next_item.classList.contains("hide"))
      slider_next_item.classList.remove("hide");
  }
  document.getElementById("project-current-image").src =
    document.getElementById(`gallery-image_${currentShownImageId}`).src;
};

//mobile version
//close left menu
const changeTopNavState = (type) => {
  type === "close"
    ? document.querySelector(".side-nav").classList.add("hide")
    : document.querySelector(".side-nav").classList.remove("hide");
};

const scrollToSection = (list) => {
  document.getElementById(list).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};
