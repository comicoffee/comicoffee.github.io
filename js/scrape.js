const scrapeURL = "/extract";

async function getTheStuff() {

    try {
        // check the current db
        const dbsource = await fetch("db.json");
        const db = await dbsource.json();

        console.log(db);
    } catch (error) {
        console.error("DB not found");
    }
    

    const response = await fetch(scrapeURL);
    const data = await response.json();

    //console.log(data);

    const fbStatus = document.querySelector("#fbStatus");
    fbStatus.innerText = data.facebook.post;
    const fbImage = document.querySelector("#facebookImage");
    fbImage.setAttribute("src", data.facebook.img);
    //const fbPanel = document.querySelector('#facebookPanel');
    //fbPanel.setAttribute('onclick', "window.open('" + data.facebook.link + "')")

    const igImage = document.querySelector('#instagramImage');
    igImage.setAttribute('src', data.instagram.image);
}

getTheStuff();