//Ajax is m aking a request and retrieving info from an API
//api is an end point that contains information
// link shared in slack!!

let gitRequest = new XMLHttpRequest();
//looking for a ready request and a status
gitRequest.onreadystatechange = function(){
         if (this.readyState == 4 && this.status == 200){ //thisi is refering to self
                  let gitObject = JSON.parse(this.responseText);
                  document.getElementById("name").innerHTML = gitObject.name;
                  document.getElementById("location").innerHTML = gitObject.location;
                  document.getElementById("bio").innerHTML = gitObject.bio;

         }

         gitRequest.open("GET", "https://api.github.com/users/Anevear", true);
         gitRequest.send();
};