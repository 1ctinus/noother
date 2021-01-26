// gets the json
var custom = window.location.href.split("/");
if (custom[4] != null) {
    fetch("https://raw.githubusercontent.com/1ctinus/noother/main/colors.json").then(r => r.json()).then((color) => {console.log(color)
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
            text += '<a class="d-inline-flex flex-items-center flex-nowrap link-gray no-underline text-small mr-3"  href="/'+ custom[3] + "/" + custom[4] +'/search?l='+keys[i]+`" data-ga-click="Repository, language stats search click, location:repo overview" >
            <svg class="octicon octicon-dot-fill mr-2" style="color:`+color[ keys[i] ].color+`;" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
            <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path></svg>
            <span class="text-gray-dark text-bold mr-1">` + keys[i] + '</span><span>' + (obj[Object.keys(obj)[i]] / sum * 100).toFixed(1) + '%</span></a>';
        }
        let node = document.createElement("LI");
        node.innerHTML = text;
        // let textnode = document.createTextNode(text);
        // node.appendChild(textnode);
        document.getElementsByClassName('list-style-none')[document.getElementsByClassName("list-style-none").length - 3].innerHTML = text;
    })
})
}
    //<a class="d-inline-flex flex-items-center flex-nowrap link-gray no-underline text-small mr-3" href="/apache/superset/search?l=javascript" data-ga-click="Repository, language stats search click, location:repo overview">
    //<svg class="octicon octicon-dot-fill mr-2" style="color:#f1e05a;" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8z"></path></svg>
    //<span class="text-gray-dark text-bold mr-1">JavaScript</span>
    //<span>25.5%</span>
  //</a>

// var test = '<a class="d-inline-flex flex-items-center flex-nowrap link-gray no-underline text-small mr-3"><span class="text-gray-dark text-bold mr-1">'+(obj[Object.keys(obj)[i]]/sum * 100).toFixed(1)+'</span><span>'+'</span></a>'