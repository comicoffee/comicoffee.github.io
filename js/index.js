const url = "https://spreadsheets.google.com/feeds/cells/1ubbtzIB4natiE30ew6n8AJvNyEjxtLfaN7U8tcW1_oo/1/public/full?alt=json";

const about = "";
const shake = "";

async function hello() {
   const response = await fetch(url);
   const data = await response.json();
    
    const entries = data.feed.entry;
    
    entries.forEach((entry,id) => {
        // Set about us
        if (id === 6) { 
            document.querySelector("#about").innerHTML = "<p>" + entry.content.$t.split(" \\n ").join("</p><p>") + "</p>";
        }

        // Set the shake
        if (id == 7 ) {
            document.querySelector("#shake").innerText = entry.content.$t;
            
        }
    });

    if (entries.length > 8) {

        const menu = document.querySelector("#menu");
        menu.innerHTML = '';
        // Build the menu
        for (let i = 8; i < entries.length; i++) {
            let div = document.createElement("div");
    
            div.setAttribute("class", "menuItem");
            if (entries[i].content.$t.substring(0,1) == "@") {
                div.setAttribute("class", "menuItemHeader");
                entries[i].content.$t = entries[i].content.$t.substring(1, entries[i].content.$t.length);
            }
            div.textContent = entries[i].content.$t;
    
            menu.appendChild(div);
        }
    }
}



hello();