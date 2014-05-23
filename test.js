var page = require("webpage").create();

page.open("http://google.ro", function(status){
     if (status == "success") {
	//SDK module
	var base64 = require("sdk/base64");
         console.log("The title of the page is: "+ page.title);
	 console.log("The base64 encoded title of the page is: " + base64.encode(page.title));
     }
     else {
         console.log("Sorry, the page is not loaded");
     }
     page.close();
     phantom.exit();
});
