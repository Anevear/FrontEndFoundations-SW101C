let stein = new XMLHttpRequest();

stein.onreadystatechange = function(){
         if (this.readyState == 4 && this.status == 200) {
                  let myObj = JSON.parse(this.responseText);
                  document.getElementById("name").innerHTML = myObj.name;
                  document.getElementById("bday").innerHTML = myObj.bday;
         }

};

stein.open("GET", "einstein.json", true);
stein.send();

function getInfo() {
         const xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function() {
                  if (this.readyState == 4 && this.status == 200) {
                           let myObj = JSON.parse(this.responseText);
                           document.getElementById("bio").innerHTML = myObj.bio;
                  }
         };
         xhttp.open("GET", "einstein.json", true);
         xhttp.send();
}

