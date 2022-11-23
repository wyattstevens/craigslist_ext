
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

    //Identifies when viewing a subcategory we want to style.
    if(sitePath[1] == "search" && categoryException(sitePath[2]) == false) {
        console.log("You are in a subcategory");

        var styleSheet = document.createElement("style");
        styleSheet.innerText = generateSubStyle();
        document.head.appendChild(styleSheet);

    }

    //Identifies when viewing an individual post.
    if(sitePath[1] != "" && sitePath[1] != "search" && sitePath[1] != "about") {
        console.log("You are viewing an individual post.");

        var styleSheet = document.createElement("style");
        styleSheet.innerText = generatePostStyle();
        document.head.appendChild(styleSheet);
    }
}



var siteURL = window.location.hostname.split(".");
//console.log(siteURL[0]);  logs "stgeorge" or whatever area you are viewing
//console.log(siteURL[1]);  logs "craigslist"
//console.log(siteURL[2]);  logs "org"

switch (true) {    

    case siteURL[1] == "craigslist" && siteURL[2] == "org":
        console.log("You are on craigslist");
        console.log("Do stuff here to alter the styling");
        break;

}


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
