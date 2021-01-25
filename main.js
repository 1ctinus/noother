// gets the json
var custom = window.location.href.split("/");
if (custom[4] != null){
    fetch("https://api.github.com/repos/" + custom[3] + "/" + custom[4] + "/languages").then(r => r.json()).then((obj) => {
        // sums it up  
        console.log(obj);
        var sum = 0; for (x in obj) {
            sum += obj[x];

        }

        console.log(sum)
        // gets the keys as an array
        let keys = Object.keys(obj);
        // for the loops
        var i; var text = "";
        // array as brrrrrr
        for (i = 0; i < keys.length; i++) {
            text += keys[i] + "\n";
        }

        let node = document.createElement("LI");
        let textnode = document.createTextNode(text);
        node.appendChild(textnode);
        document.getElementsByClassName('list-style-none')[document.getElementsByClassName("list-style-none").length - 3].appendChild(node);
    })}