function setNum(num) {
    num_ = document.getElementById("num");
    num_.innerHTML = num;
}

function set(langsJson, contentsJson) {

    var p = document.getElementById("languages-container");
    var langs = Object.keys(langsJson);
    langs.sort()
    console.log(langs);
    p.innerHTML = "";

    snum = 0;
    fletter = langs[0].charAt(0);
    for (var key in langs) {
        if (langs[key] == 'HTML' || langs[key] == 'CSS') {
            continue;
        }
        if (langs[key].charAt(0) != fletter) {
            p.innerHTML += "<br>";
        }
        snum += 1;
        fletter = langs[key].charAt(0);

        var tr = document.createElement("span");
        tr.classList.add("t-item");

        var fileIcon = document.createElement("span");
        fileIcon.classList.add("t-icon");
        fileIcon.innerHTML = '<span>' + snum + '</span>'
        tr.appendChild(fileIcon);
        
        var name = document.createElement("span");
        name.classList.add("t-name");
        name.innerHTML = langs[key];
        tr.appendChild(name);

        p.appendChild(tr);
    }

    document.getElementById("loading").innerHTML = "";
    setNum(snum);
}

fetch("https://api.github.com/repos/was07/Hello-Worlds/languages")
    .then(function(langs) {
        langs.json().then(function(langs) {
            fetch('https://api.github.com/repos/was07/Hello-Worlds/contents/programs').then(function(contents) {
                contents.json().then(function(contents) {set(langs, contents);});
            })
        })
    })
