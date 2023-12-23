function searchMovie(quer, tp) {
    
    //console.log(`http://www.omdbapi.com/?apikey=b9468d4d&s=${quer}&type=${tp}`);
    let rtrn = [];
    getJson(`http://www.omdbapi.com/?apikey=b9468d4d&s=${quer}&type=${tp}`).then((value) => {
        let array = value.Search;
        array.forEach(element => {
            rtrn.push(element);
            //console.log(element);
            console.log(rtrn.length);
        });

    });
    return rtrn;
}

function renderCard(cardObj) {
    let card = document.createElement("div");
    card.classList.add("card");

    let pic = document.createElement("img");
    pic.src = cardObj.Poster;
    card.append(pic);
    
    
    let table = document.createElement("table");
    for ([key, value] of Object.entries(cardObj)) {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        let td = document.createElement("td");
        if (typeof(value) != "object" && key != "Poster" && key != "imdbID") {
            th.innerText = key + ":";
            th.style.textAlign = "end";
            td.innerText = value;
        }
        tr.append(th, td);
        table.append(tr);
    }
    card.append(table);

    let btn = document.createElement("button");
    btn.innerText = "Details";
    btn.addEventListener("click", function(e) {
        e.preventDefault();
        details(cardObj.Title)
    });
    card.append(btn);

    document.body.querySelector("main").append(card);
}

function details(data) {
    $(".details").remove();
    getMovie(data)
    getJson(`http://www.omdbapi.com/?apikey=b9468d4d&t=${data}`).then((value) => {
        console.log(value);

        let detcard = document.createElement("div");
        detcard.classList.add("details");
        detcard.classList.add("card");

        let pic = document.createElement("img");
        pic.src = value.Poster;
        detcard.append(pic);

        let table = document.createElement("table");
            table.append(crTableStr("Title:", value.Title));
            table.append(crTableStr("Released:", value.Year));
            table.append(crTableStr("Genre:", value.Genre));
            table.append(crTableStr("Country:", value.Country));
            table.append(crTableStr("Director:", value.Director));
            table.append(crTableStr("Writer:", value.Writer));
            table.append(crTableStr("Actors:", value.Actors));
            table.append(crTableStr("Awards:", value.Awards));

        detcard.append(table);
        document.body.querySelector("main").prepend(detcard);
    });
}

function crTableStr(key, val) {
    let tr = document.createElement("tr");
            let th = document.createElement("th");
            let td = document.createElement("td");
            
                th.innerText = key;
                th.style.textAlign = "end";
                td.innerText = val;
            
        tr.append(th, td);
        return tr;
}