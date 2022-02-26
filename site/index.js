function setNum(num) {
    num_ = document.getElementById("num");
    num_.innerHTML = num;
}

function set(langsJson, contentsJson) {
    setNum(contentsJson.length);

    var p = document.getElementById("languages");
    var langs = Object.keys(langsJson);
    langs.sort()
    console.log(langs);
    p.innerHTML = "";
    for (var key in langs) {
        var tr = document.createElement("span");
        tr.classList.add("t-item");

        var fileIcon = document.createElement("span");
        fileIcon.classList.add("t-icon");
        fileIcon.innerHTML = '<i class="fa-solid fa-file-code"></i>'
        tr.appendChild(fileIcon);
        
        var name = document.createElement("span");
        name.classList.add("t-name");
        name.innerHTML = langs[key];
        tr.appendChild(name);

        p.appendChild(tr);
    }

    document.getElementById("loading").innerHTML = "";
}

fetch("https://api.github.com/repos/was07/Hello-Worlds/languages")
    .then(function(langs) {
        langs.json().then(function(langs) {
            fetch('https://api.github.com/repos/was07/Hello-Worlds/contents/programs').then(function(contents) {
                contents.json().then(function(contents) {set(langs, contents);});
            })
        })
    })
