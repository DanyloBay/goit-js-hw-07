import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = createGalleryMakup(galleryItems);

function createGalleryMakup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>`;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

galleryContainer.addEventListener("click", onContainerGalleryClick);

function onContainerGalleryClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(
    `
    <img src="${evt.target.dataset.source}">`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscapeClose);
      },

      onClose: () => {
        window.addEventListener("keydown", onEscapeClose);
      },
    }
  );

  instance.show();

  function onEscapeClose(e) {
    if ((e.Code = "Escape")) {
      instance.close();
    }
  }
}
