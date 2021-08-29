let newRequest = new XMLHttpRequest();
newRequest.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
                  let myObj = JSON.parse(this.responseText);    // this line and the one below is parsing the json and inserts myObj.name into the <p>
                  document.getElementById("example").innerHTML = myObj.name;
         }
};
newRequest.open("GET", "new.json", true);
newRequest.send();