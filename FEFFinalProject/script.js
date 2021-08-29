function loadRepo(){

         const xhttp = new XMLHttpRequest();
         xhttp.onreadystatechange = function(){
                  if (this.readyState == 4 && this.status == 200){
                           let info = JSON.parse(this.responseText);
                           document.getElementById("repList").innerHTML = " ";
                           for(var i = 0; i < info.length; i++){
                                    console.log(info[1].name);

                                    var list = document.getElementById("repList");
                                    var node = document.createElement("LI");
                                    var a = document.createElement("a");

                                    node.appendChild(document.createTextNode(info[i].name));

                                    a.appendChild(node);
                                    a.setAttribute("href", info[i].html_url);
                                    list.appendChild(a);
                           }
                  }
         }
         xhttp.open("GET", "https://api.github.com/users/Anevear/repos", true);
         xhttp.send();
}

$(document).ready(function(){
         big();
         press();
})

const big = () => {
         $("a").hover(function(){
                  $(this).toggleClass("btn-lg");
         }, function(){
                  $(this).removeClass("btn-lg").addClass("move");
         })
}
const press = () => {
         $(".clicker").click(function(){
                  $(this).addClass("btn-secondary").removeClass("btn-primary");
         })
}
