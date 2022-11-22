
//Styling for these subcategories looks worse so dont include them.
function categoryException(strName) {
    
    exceptions = ["hhh", "apa", "swp", "hsw", "off", "prk", "rea", "roo", "sha", "sub", "vac", "sss", "ata",
                  "ppa", "ara", "sna", "pta", "ava", "baa", "bar", "haa", "bip", "bia", "bpa", "boo", "bka",
                  "bfa", "cta", "ema", "moa", "cla", "cba", "syp", "sya", "ela", "gra", "zip", "fua", "gms",
                  "foa", "hva", "hsa", "jwa", "maa", "mpa", "mca", "msa", "pha", "rva", "sga", "tia", "tla",
                  "taa", "tra", "vga", "waa", "wta"];

    for (let index = 0; index < exceptions.length; index++) {
        if(exceptions[index] == strName) {
            return true;
        }
    }
    return false;
}

function testFunc() {
    var html = document.getElementsByClassName('.cl-search-toolbars .cl-search-tools-left .cl-search-view-mode, .cl-search-toolbars .cl-search-tools-right .cl-search-view-mode')[0].innerHTML;
    var clone = document.createElement('span');
    clone.innerHTML = html;

    var searchBar = document.getElementsByClassName('cl-query-bar')[0];
    searchBar.appendChild(clone);
}

const generateSubStyle = () => {
    return `
    
    .cl-result-info {
        border: solid #ddd4d4;
        border-radius: 5px;
        background: #ddd4d4;
        margin-top: 20px;
        padding: 10px;
        box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.75);
        -webkit-box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.75);
      }

    #search-toolbars-1 .cl-search-paginator {
        display: none;
    }

    #search-toolbars-1 {
        display: none;
    }

    .cl-search-query {
        display: flex;
        justify-content: center;
    }

    .cl-query-bar {
    }

    header.cl-wide .cl-menu-item.cl-goto-account {
        width: 80px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background: white;
        display: flex;
        justify-content: center;
        margin-right: 20px;
    }

    header.cl-wide .cl-menu-item.cl-goto-post {
        width: 80px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background: white;
        display: flex;
        justify-content: center;
        margin-right: 20px;
    }

    header .bd-button.link-like {
        background-color: #fff;
        border-color: #eee;
    }

    header .cl-breadcrumb.bd-combo-box {
        display: none;
    }

    `;
};

const generateSubStyle2 = () => {
    return `

    #search-toolbars-1 .cl-search-paginator {
        display: none;
    }

    #search-toolbars-1 {
        display: none;
    }

    .cl-search-query {
        display: flex;
        justify-content: center;
    }

    .cl-query-bar {
    }

    header.cl-wide .cl-menu-item.cl-goto-account {
        width: 80px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background: white;
        display: flex;
        justify-content: center;
        margin-right: 20px;
    }

    header.cl-wide .cl-menu-item.cl-goto-post {
        width: 80px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background: white;
        display: flex;
        justify-content: center;
        margin-right: 20px;
    }

    header .bd-button.link-like {
        background-color: #fff;
        border-color: #eee;
    }

    header .cl-breadcrumb.bd-combo-box {
        display: none;
    }

    .cl-hub-links {
        margin-bottom: 20px;
    }

    `;
};

const generatePostStyle = () => {
    return `
    
    .body {
        border: solid #ddd4d4;
        border-radius: 5px;
        background: #ddd4d4;
        box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.75);
        -webkit-box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.75);
      }

      section.body {
        padding: 20px 20px 20px 20px;
        margin: 0 auto;
        margin-bottom: 50px;
        margin-top: 50px;
        height: 90%;
        min-height: 600px;
    }

    footer {
        background: #eee;
        border-top: 1px solid #ccc;
        bottom: 0;
        left: 0;
        line-height: 1.5em;
        min-height: 1.1em;
        padding: .3em 4em .3em 0;
        position: inherit;
        right: 0;
        text-align: center;
    }

    .global-header.wide .userlinks .user-actions li:first-child {
        width: 80px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background: white;
        display: flex;
        justify-content: center;
        margin-right: 20px;
        padding-right: 0px;
    }

    .global-header.wide .userlinks .user-actions li {
        width: 80px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background: white;
        display: flex;
        justify-content: center;
        margin-right: 20px;
    }

    .user-actions li a {
        text-decoration: none;
        color: blue;
    }

    .user-actions li a:hover {
        text-decoration: underline;
    }

    .posting .postingtitle {
        display: flex;
        justify-content: center;
        font-family: "Bitstream Vera Serif","Times New Roman",serif;
        font-size: 1.4em;
        font-weight: bold;
        line-height: 1.4em;
        margin: 20px 0px 20px 0px;
        clear: left;
    }

    `;
};

var siteURL = window.location.hostname.split(".");
var sitePath = window.location.pathname.split("/");
//console.log(siteURL[0]);  //logs "stgeorge" or whatever area you are viewing
//console.log(siteURL[1]);  //logs "craigslist"
//console.log(siteURL[2]);  //logs "org"
//console.log(siteURL);     //logs ["location", "craigslist", "org"]
//console.log(sitePath);    //logs pathname -> /search/act or /act/12345.html when in activities category or on a post.

//You are on craigslist
if(siteURL[1] == "craigslist" && siteURL[2] == "org") {
    
    console.log("An if statement here? if we know we are on the front page.")

    ////
    //Identifies when viewing a subcategory we want to style.
    ////
    if(sitePath[1] == "search" && categoryException(sitePath[2]) == false) {
        console.log("You are in a subcategory");

        var styleSheet = document.createElement("style");
        styleSheet.innerText = generateSubStyle();
        document.head.appendChild(styleSheet);

        window.onload = function () {

            //testFunc()

        }

    } else if(sitePath[1] == "search" && categoryException(sitePath[2]) == true) {
        var styleSheet = document.createElement("style");
        styleSheet.innerText = generateSubStyle2();
        document.head.appendChild(styleSheet);
    }

    ////
    //Identifies when viewing an individual post.
    ////
    if(sitePath[1] != "" && sitePath[1] != "search" && sitePath[1] != "about") {
        console.log("You are viewing an individual post.");

        var styleSheet = document.createElement("style");
        styleSheet.innerText = generatePostStyle();
        document.head.appendChild(styleSheet);
    }
}
