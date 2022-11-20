
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
        width: 50%;
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

var siteURL = window.location.hostname.split(".");
var sitePath = window.location.pathname.split("/");
//console.log(siteURL[0]);  //logs "stgeorge" or whatever area you are viewing
//console.log(siteURL[1]);  //logs "craigslist"
//console.log(siteURL[2]);  //logs "org"
//console.log(siteURL);     //logs ["location", "craigslist", "org"]
//console.log(sitePath);    //logs pathname -> /search/act or /act/12345.html when in activities category or on a post.

switch (true) {    

    case siteURL[1] == "craigslist" && siteURL[2] == "org":
        
        console.log("You are on craigslist")

        //Identifies when viewing a subcategory.
        if(sitePath[1] == "search") {
            console.log("You are in a subcategory");

            var styleSheet = document.createElement("style");
            styleSheet.innerText = generateSubStyle();
            document.head.appendChild(styleSheet);

        }

        //Identifies individual post.
        if(sitePath[1] != "" && sitePath[1] != "search" && sitePath[1] != "about") {
            console.log("You are viewing an individual post.");
        }

        break;

}