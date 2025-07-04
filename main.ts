async function getcoviddata() {
    const response = await fetch("https://disease.sh/v3/covid-19/countries");
    const data = await response.json();

    for (const cdata of data) {
        const newelem = document.createElement("div");
        newelem.classList = "c-box";
        newelem.innerHTML = "<div class='ttt'> <p class='sss'>" + cdata.country + "</p>" + "<p class='rrr'>Cases: " + cdata.cases + "</p> </div>" ;
        const celem = document.getElementById("list");
        celem?.appendChild(newelem);
    }
}

getcoviddata();