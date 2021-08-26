$(document).ready(function() {
         $("#driver").click(function(event) {
                  $("#stage").load("info.html");
         });
});

// $(document).ready(function() :: this makes sure the doc loads and is rdy
// $("#driver").click(function(event) :: uses the id driver as a target for a click event
// $("#stage").load("info.html") :: loads the targeted URL whish is the file info.html that will be created next to the id given

// this says:: when the document is loaded and the driver button is clicked load the info from the info.html and drop it into the div