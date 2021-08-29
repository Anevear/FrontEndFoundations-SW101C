let getInfo = new XMLHttpRequest();
getInfo.onreadystatechange = function(){
         if(this.readyState == 4 && this.status == 200) {
                  let infoObject = JSON.parse(this.responseText);
                  document.getElementById('name').innerHTML = infoObject.name;
                  document.getElementById('bday').innerHTML = infoObject.bday;
         }
};
getInfo.open("GET", "info.json", true);
getInfo.send();


function showBio(){
         getInfo.onreadystatechange = function(){
                  if(this.readyState == 4 && this.status == 200) {
                           let infoObject = JSON.parse(this.responseText);
                           document.getElementById('bio').innerHTML = infoObject.bio;
                  }
         };
         getInfo.open("GET", "info.json", true);
         getInfo.send();
}

function showHobbies(){
         getInfo.onreadystatechange = function(){
                  if(this.readyState == 4 && this.status == 200) {
                           let infoObject = JSON.parse(this.responseText);
                           document.getElementById("hobbies").innerHTML = " "; // w/o this line it would append the list every time the button is clicked. w/ this its making the append REPLACE what is already there 
                           for(var i = 0; i < infoObject.fun.length; i++){
                                    var node = document.createElement("LI");                 // Create a <li> node
                                    var textnode = document.createTextNode(infoObject.fun[i]);         // Create a text node
                                    node.appendChild(textnode);                              // Append the text to <li>
                                    document.getElementById("hobbies").appendChild(node);     // Append <li> to <ul> with id="myList" 
                           }
                  }
         };
         getInfo.open("GET", "info.json", true);
         getInfo.send();
}