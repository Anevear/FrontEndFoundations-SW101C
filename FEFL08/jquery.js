//$(document).ready(function(){
//         $("div").click(function(){
//                  $(this).hide();
//         })
//})
//the above is a way to write it out in its entirety the below is how to write it out as a function to call the other constants saves some keystrokes

$(document).ready(function(){
         example1a();
         example2a();
         example1();
         example2();
         example3();
         example4();
         example5();
})

const example1a = () => {
         $("h1").click(function(){
                  $(this).toggleClass("blue");
         })
}

const example2a = () => {
         $("header").click(function(){
                  $(this).css("color", "purple");
         })
}

//The bit below will change when a user hovers over an area w/ a class of 'p1'. Since hover is being used both mouseenter and mouseleave need to be invoked by having 2 functions inside the hover() method. When the mouse eenters the .p1 are it will change to TNR font when it eaves it will change back to what it was orig, which is GA font
//Example 1

const example1 = () => {
         $(".p1").hover(function(){
                  $(this).css("font-family", "Times New Roman").css("color", "red") //you can chain things together!!!
         }, function(){
                  $(this).css("font-family", "Georgia").css("color", "lightblue")
         })
}

//Example 2 Originally there is a button in the HTML that didnt do anything (Hide All Pets). W/ the code below now when the button is clicked it will hide all the pets w/ a class of .pets

const example2 = () => {
         $("button").click(function(){
               //   $(".pets").hide();
               let pets = $(".pets"); //pets is easier to type than the $(".pets")
               let isHidden = pets.is(":hidden");

               if(isHidden) pets.show();
               else pets.hide();

               isHidden = !isHidden;
               let title = (isHidden ? "Show" : "Hide") + " all pets"; // this is a ternary function
               $(this).html(title);
         })
}
// the snippet above has been turned into a toggle essentially

//Example 3 here when User clicks on an ele w/ an id="" of #rainbows (the Name w/ the input field), and alert will appear sauong "You double-clicked me!"

const example3 = () => {
         $("#rainbows").dblclick(function(){
                  alert("You double-clicked me!!");
         })
}

//Example 4 this will change the bkgd color of the inputs to lightblue after User clicks into an input

const example4 = () => {
         $("input").focus(function() { //when focus is on the input (user is clicked into it)
                  $(this).css("background-color", "lightblue");
         })

         $("input").blur(function() { //.blur() is for when User is clicked out of the input window
                  $(this).css("background-color", "white");
         })
}

//Example 5 this will change the font color to red after you have released a key that pressed. the key can be heldown for as long and one would like, but the color wont change until you release it. Once you release it, all letters will be red.

const example5 = () => {
         $("input").keyup(function(){
                  $(this).css("color", "red");
         })

         $("input").keydown(function(event) {
                  switch(event.originalEvent.key) {
                           case '-': case ':':
                                    event.preventDefault(); // this right here will make it so that a dash - or a colon : will not show up in the input field if it is typed
                  }
         })
}

