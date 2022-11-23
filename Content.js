
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

const generateHomePageStyle = () => {
    return `
    
    .page-container {
        padding-top: 0 !important;
        padding-bottom: 5% !important;
        width: 100% !important;
        margin: auto !important;
        display: block !important;
    }
    #center {
        display: block !important;
        float: none !important;
        width: 1405px !important;
        margin: auto !important;
    }
    #topban {
        width: 100% !important;
        margin: 0 !important;
        text-align: left !important;
    }
    .ban {
        width: auto !important;
        border-radius: 5px !important;
        box-shadow: 0px 0px 1px 1px rgb(0 0 0 / 75%) !important;
    }
    .col {
        width: auto !important;
    }
    a {
        width: auto !important;
        margin: 0 !important;
    }
    .area {
        line-height: 2 !important;
        font-size: 24px !important;
    }
    #newlogo {
        width: auto !important;
        float: left !important;
        text-align: left !important;
        margin: auto !important;
        padding-right: 2% !important;
        font-size: 235% !important;
        line-height: 135% !important;
        padding-left: 3% !important;
        font-family: "ArialRoundedMTBold" !important;
    }
    .regular-area {
        display: inline !important;
        margin: 0 !important;
    }
    .homepage .housing {
        width: auto !important;
        margin: 0 3% 0 0 !important;
        font-size: 30px !important;
        padding: 0 !important;
    }
    .homepage .community {
        width: auto !important;
        margin: auto !important;
        font-size: 30px !important;
    }
    .homepage .jobs {
        width: auto !important;
        margin: auto !important;
        margin-right: 3% !important;
        font-size: 30px !important;
        display: block !important;
    }
    .cl-location-picker-homepage-link {
        padding-left: 3% !important;
        width:max-content !important;
    }
    .forsale {
        color: #222;
        border: 0;
        font: inherit;
        vertical-align: baseline;
        width: auto !important;
        font-size: 30px !important;
        margin: 0 3% 0 3% !important;
        float: left !important;
    }
    #right {
        color: rgb(34, 34, 34);
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
        vertical-align: baseline;
        background: #fff;
        float: left;
        font-size: smaller;
        list-style: none;
        padding-bottom: 1em;
        padding-left: 22px;
        max-width: 44%;
    }
    .cal {
        display: none !important;
    }
    .leftlinks {
        display: none !important;
    }
    #leftbar {
        background: none !important;
        min-height: auto !important;
        margin: auto !important;
        float: none !important;
        width: 50% !important;
        display: block !important;
        border: none !important;
        margin-bottom: 15px !important;
    }
    .leftbar {
        margin: auto !important;
    }
    .cl-home-search-query {
        margin: auto !important;
        width: auto !important;
        display: inline-block !important;
        width: 50% !important;
        font-size: 20px !important;
    }
    .cl-search-dropown {
        margin: auto !important;
    }
    input {
        font-size: 20px !important;
        line-height: 30px !important;
        border: 1px solid #888 !important;
    }
    ul {
        width: auto !important;
    }
    #navbar {
        color: #222;
        font: inherit;
        font-size: 20px;
        width: 100% !important;
        text-align: left !important;
        margin: 0px 0px 1% !important;
        margin-bottom: 15px !important;
        background-color: #eee;
        border-bottom: 1px #ccc solid;
        display: block;
        float: right;
        height: auto;
        padding: 0;
        font-weight: normal;
        position: relative;
        height: auto !important;
    }
    #loginbutton {
        float: right;
        margin-top: 10px;
        margin-right: 3%;
        font-size: 20px;
    }
    #postbutton {
        display: inline !important;
        margin: auto;
        font-size: 20px;
        margin-left: 2%;
    }
    #buttonlist {
        color: #222;
        text-align: center;
        display: block !important;
        width: auto !important;
        height: auto;
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
        list-style: none;
    }
    #buttonlist li {
        display: inline-block;
        padding-right: 40px;
        padding-left: 40px;
        border-left: 1px #ccc solid;
        border-right: 1px #ccc solid;
        padding-bottom: 0 !important;
        line-height: 30px;
    }
    #langlinks {
        display: inline !important;
        font-size: 20px;
    }
    #chlang {
        font-size: 20px;
    }
    .mostpopular{
        color: #222;
        display: block;
        border: 0;
        font: inherit;
        width: auto !important;
        font-size: 24px !important;
        margin: 0px 3% 0px 0px !important;
        padding: 0px !important;
        float: left;
    }
    .cats {
        border: solid #ddd4d4 !important;
        border-radius: 5px !important;
        background: #ddd4d4 !important;
        box-shadow: 0px 0px 1px 1px rgb(0 0 0 / 75%) !important;
        height: auto !important;
        margin-bottom: 20px !important;
        overflow: auto !important;
        width: auto !important;
    }
    .cats li {
        background: #ddd4d4 !important;
    }
    .cats ul {
        background: #ddd4d4 !important;
        padding: 5px !important;
    }
    #jjj0 {
        padding-right: 40px !important;
    }
    
    
    `
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

    .global-header.wide .breadcrumbs-container {
        float: left;
        font-size: .9375em;
        min-height: 1.3em;
        position: relative;
    }

    `;
};

function homePage() {

    //moves resumes category under jobs
    const resume_li = document.createElement("li");
    const resume_link = document.createElement("a");
    resume_link.setAttribute("href", "/search/rrr");
    resume_link.innerText = "resumes";
    resume_li.appendChild(resume_link)
    const jjj0 = document.getElementById("jjj0");
    const jjj0x = jjj0.children[18];
    jjj0x.insertAdjacentElement("afterend", resume_li);
    document.getElementById("rrr").remove();
    
    
    //repositions gigs category
    const gigs = document.getElementById("ggg");
    document.getElementsByClassName("housing")[0].appendChild(gigs);
    
    
    //moves Craigslist logo to topright
    const newlogo = document.createElement("div");
    newlogo.setAttribute("id", "newlogo");
    const a = document.createElement("a");
    a.setAttribute("href", "https://www.craigslist.org/about/sites");
    a.innerText = "Craigslist";
    newlogo.appendChild(a);
    document.getElementById("topban").appendChild(newlogo);
    
    
    //repositions for sale category
    const forsale = document.createElement("div");
    forsale.setAttribute("class", "forsale");
    document.getElementById("center").insertBefore(forsale, document.getElementById("center").children[2]);
    forsale.appendChild(document.getElementById("sss"));
    
    
    //removes forums category
    const forums = document.getElementById("forums"); forums.remove();
    
    
    //navigation bar
    const navbar = document.createElement("div");
    navbar.setAttribute("id", "navbar");
    const page_container = document.getElementsByClassName("page-container")[0];
    page_container.insertBefore(navbar, page_container.children[4]);
    
    const buttonlist = document.createElement("ul");
    buttonlist.setAttribute("id", "buttonlist");
    navbar.appendChild(buttonlist); 
    
    const eventsb = document.createElement("li");
    eventsb.setAttribute("id", "eventsb");
    const a3 = document.createElement("a");
    a3.setAttribute("href", "https://stgeorge.craigslist.org/search/eee");
    a3.innerText = "Events";
    eventsb.appendChild(a3);
    buttonlist.appendChild(eventsb);
    
    const forumsb = document.createElement("li");
    forumsb.setAttribute("id", "forumsb");
    const a2 = document.createElement("a");
    a2.setAttribute("href", "https://forums.craigslist.org/?areaID=352");
    a2.innerText = "Forums";
    forumsb.appendChild(a2);
    buttonlist.appendChild(forumsb);
    
    const aboutb = document.createElement("li");
    aboutb.setAttribute("id", "aboutb");
    const a4 = document.createElement("a");
    a4.setAttribute("href", "https://www.craigslist.org/about/");
    a4.innerText = "About";
    aboutb.appendChild(a4);
    buttonlist.appendChild(aboutb);
    
    const helpb = document.createElement("li");
    helpb.setAttribute("id", "helpb");
    const a6 = document.createElement("a");
    a6.setAttribute("href", "https://www.craigslist.org/about/help/");
    a6.innerText = "Help";
    helpb.appendChild(a6);
    buttonlist.appendChild(helpb);
    
    const safetyb = document.createElement("li");
    safetyb.setAttribute("id", "safetyb");
    const a5 = document.createElement("a");
    a5.setAttribute("href", "https://www.craigslist.org/about/scams");
    a5.innerText = "Safety";
    safetyb.appendChild(a5);
    buttonlist.appendChild(safetyb);
    
    const langb = document.createElement("li");
    langb.setAttribute("id", "langb");
    const langdropdown = document.getElementById("langlinks");
    langb.appendChild(langdropdown);
    buttonlist.appendChild(langb);
    
    
    //new login/sign up button
    var loginbutton = document.createElement("button");
    loginbutton.setAttribute("id", "loginbutton")
    loginbutton.innerHTML = "Login/Account"
    loginbutton.onclick = function () {
        window.location = "https://accounts.craigslist.org/login/home";
    }
    document.getElementById("topban").appendChild(loginbutton);
    
    
    //new post button
    var postbutton = document.createElement("button");
    postbutton.setAttribute("id", "postbutton")
    postbutton.innerHTML = "Create Post"
    postbutton.onclick = function () {
        window.location = "https://post.craigslist.org/c/stg";
    }
    document.getElementById("leftbar").insertBefore(postbutton, document.getElementById("leftbar").children[3]);
    
    
    //removes left and right sidebars
    const x = document.getElementById("logo"); x.remove();
    const y = document.getElementById("postlks"); y.remove();
    const z = document.getElementById("calban"); z.remove();
    const rbar = document.getElementById("rightbar"); rbar.remove();
    
    
    //most popular
    const mostpopular = document.createElement("div");
    mostpopular.setAttribute("class", "mostpopular");
    const mmm = document.createElement("div");
    mmm.setAttribute("class", "col");
    mmm.setAttribute("id", "mmm");
    const mban = document.createElement("h3");
    mban.setAttribute("class", "ban");
    mban.innerHTML = "popular"
    const mcats = document.createElement("div");
    mcats.setAttribute("class", "cats");
    const mmm0 = document.createElement("ul");
    mmm0.setAttribute("id", "mmm0");
    
    
    document.getElementsByClassName("housing")[0].insertBefore(mmm, document.getElementsByClassName("housing")[0].children[0]);
    //mostpopular.appendChild(mmm);
    mmm.appendChild(mban);
    mmm.appendChild(mcats);
    mcats.appendChild(mmm0);
    
    const node1 = document.getElementById("hhh0").children[0];
    const clone1 = node1.cloneNode(true);
    mmm0.appendChild(clone1);
    const node2 = document.getElementById("sss0").children[15];
    const clone2 = node2.cloneNode(true);
    mmm0.appendChild(clone2);
    const node5 = document.getElementById("sss0").children[21];
    const clone5 = node5.cloneNode(true);
    mmm0.appendChild(clone5);
    const node = document.getElementById("sss1").children[1];
    const clone = node.cloneNode(true);
    mmm0.appendChild(clone);
    const node4 = document.getElementById("ccc1").children[0];
    const clone4 = node4.cloneNode(true);
    mmm0.appendChild(clone4);
    const node3 = document.getElementById("sss1").children[19];
    const clone3 = node3.cloneNode(true);
    mmm0.appendChild(clone3);
    
    }

var siteURL = window.location.hostname.split(".");
var sitePath = window.location.pathname.split("/");
//console.log(siteURL[0]);  //logs "stgeorge" or whatever area you are viewing
//console.log(siteURL[1]);  //logs "craigslist"
//console.log(siteURL[2]);  //logs "org"
//console.log(siteURL);     //logs ["location", "craigslist", "org"]
console.log(siteURL);
console.log(sitePath);    //logs pathname -> /search/act or /act/12345.html when in activities category or on a post.

//You are on craigslist
if(siteURL[1] == "craigslist" && siteURL[2] == "org") {
    
    console.log("An if statement here? if we know we are on the front page.")

    ////
    //Identifies when viewing the homepage.
    ////
    if(sitePath[0] == "" && sitePath[1] == "" && siteURL[0] != "forums") {

        var styleSheet = document.createElement("style");
        styleSheet.innerText = generateHomePageStyle();
        document.head.appendChild(styleSheet);
        homePage();
    }

    ////
    //Identifies when viewing a subcategory we want to style.
    ////
    if(sitePath[1] == "search" && categoryException(sitePath[2]) == false) {
        console.log("You are in a subcategory");

        var styleSheet = document.createElement("style");
        styleSheet.innerText = generateSubStyle();
        document.head.appendChild(styleSheet);

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





