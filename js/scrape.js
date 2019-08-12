async function getTheStuff() {
    const response = await fetch("https://comicoffee.glitch.me/extract", {
        mode: 'no-cors'
    });
    const data = await response.json();

    console.log(data);

    const fbStatus = document.querySelector("#fbStatus");
    fbStatus.innerText = data.facebook.post;
    const fbImage = document.querySelector("#facebookImage");
    fbImage.setAttribute("src", data.facebook.img);
    const fbPanel = document.querySelector('#facebookPanel');
    fbPanel.setAttribute('onclick', "window.open('" + data.facebook.link + "')")

    const igImage = document.querySelector('#instagramImage');
    igImage.setAttribute('src', data.instagram.image);
}

getTheStuff();