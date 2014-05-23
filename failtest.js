var page = require("webpage").create();

page.open("http://google.ro", function(status){
     if (status == "success") {
	//SDK module
	var tabs = require("sdk/tabs");
	console.log("The title of the page is: "+ page.title);
     }
     else {
         console.log("Sorry, the page is not loaded");
     }
     page.close();
     phantom.exit();
});
