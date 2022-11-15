
var siteURL = window.location.hostname.split(".");
//console.log(siteURL[0]);  logs "stgeorge" or whatever area you are viewing
//console.log(siteURL[1]);  logs "craigslist"
//console.log(siteURL[2]);  logs "org"

switch (true) {    

    case siteURL[1] == "craigslist" && siteURL[2] == "org":
        console.log("You are on craigslist")
        console.log("Do stuff here to alter the styling")
        break;

}