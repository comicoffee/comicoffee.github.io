let maxImages = 69;
let path = "images/";
let gallery = document.querySelector("#gallery");
let galleryViewer = document.querySelector("#galleryViewer");

for (let i = 1; i < maxImages; i++) {
    // create the parent div to hold the thumbnail
    let portfolioItem = document.createElement("div");
    portfolioItem.setAttribute("class", "porfolio__item");
    // create the image
    let newImg = document.createElement("img");
    newImg.setAttribute("src", path + i + ".jpg");
    newImg.setAttribute("class", "portfolio__image");
    newImg.setAttribute("onClick", "window.location='#portfolio-item-" + i +"';");
    //add the image to the div
    portfolioItem.appendChild(newImg);
    //add the div to the gallery list
    gallery.appendChild(portfolioItem);



    let portfolioLightbox = document.createElement("div");
    portfolioLightbox.setAttribute("id","portfolio-item-" + i);
    portfolioLightbox.setAttribute("class", "portfolio-lightbox");

    let portfolioLightboxContent = document.createElement("div");
    portfolioLightboxContent.setAttribute("class", "portfolio-lightbox__content");

    let closeLink = document.createElement("a");
    closeLink.setAttribute("href", "#gallery");
    closeLink.setAttribute("class", "close");

    let portfolioLightboxImage = document.createElement("img");
    portfolioLightboxImage.setAttribute("class", "portfolio-lightbox__image");
    portfolioLightboxImage.setAttribute("src", path + i + ".jpg");

    portfolioLightboxContent.appendChild(closeLink);
    portfolioLightboxContent.appendChild(portfolioLightboxImage);

    portfolioLightbox.appendChild(portfolioLightboxContent);
    
    galleryViewer.appendChild(portfolioLightbox);
}

