$(document).ready(function(){
         header();
         paragraph();
         hide();
         field();
})

const header = () => {
         $("h1").hover(function(){
                  $(this).css("color", "lightseagreen").css("background-color", "purple")
         }, function(){
                  $(this).css("color", "salmon").css("background-color", "black")
         })
}

const paragraph = () => {
         $("p").click(function(){
                  $(this).text("jQuery is a fast, JavaScript library that makes many tasks easier and simpler to accomplish. A JavaScript library contains pre-written JavaScript which makes developing applications a bit easier for the developer. This means jQuery is not a language, but an extension of JavaScript. It takes many lines of JavaScript code, which we would have had to write ourselves before jQuery, and compresses it.");
         })
}

const hide = () => {
         $("li").dblclick(function(){
                  $(this).hide();
         })
}

const field = () => {
         $("input").keydown(function() {
                  $(this).toggleClass("input");
         })
}
