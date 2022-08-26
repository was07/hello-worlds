function setNum(num) {
    num_ = document.getElementById("num");
    num_.innerHTML = num;
}

function set(contentsJson) {
    var p = document.getElementById("languages-container");
    fletter = ''

    for (var key in contentsJson) {
        var tr = document.createElement("a");
        tr.classList.add("t-item");
        tr.href = contentsJson[key].html_url;
        tr.target = "_blank"

        let filename = contentsJson[key].name
        let name = filename.split('.')[0]
        let extention = filename.split('.')[1]

        tr.innerHTML = `<span class="t-icon">${Number(key) + 1}</span><span class="t-name">${name}</span><span class='t-extention'>.${extention}</span>`;
        
        if (fletter != contentsJson[key].name[0]) {
            p.appendChild(document.createElement('br'))
        }
        fletter = contentsJson[key].name[0]
        p.appendChild(tr);
    }

    document.getElementById("loading").innerHTML = "";
    setNum(contentsJson.length - 1);
}

fetch('https://api.github.com/repos/was07/Hello-Worlds/contents/programs').then(function(contents) {
    contents.json().then(function(contents) {set(contents);});
})
