// when runing scripts can open terminal and type node script.js. where script.js is the name of your actual script name


const person = {
         name: "Vathah",
         height: 70,      //inches
         shoeHeight: 1,   //inches
         hatHeight: 2,    //inches
         getHeight: function(wearingClothes = false, withHat = false) {
                  var height = this.height;

//---- --         height += wearingClothes ? this.shoeHeight : 0;
//---- --         height += (wearingClothes && withHat) ? this.hatHeight : 0;
                           //the 2 lines above can be written into 1

                  height += wearingClothes ? (withHat ? (this.shoeHeight + this.hatHeight) : this.shoeHeight): 0;

                  return height;
         }
}

let heightNoClothes = person.getHeight();                   //70
let heightWithClothes = person.getHeight(true);             //71
let heightWithClothesHat = person.getHeight(true,true);     //73

console.log("Height without clothing: " + heightNoClothes);
console.log("Height with clothing: " + heightWithClothes);
console.log("Height with clothing and hat: " + heightWithClothesHat);


//---------------below is the drawn out code for the above
//const person = {
//         name: "Vathah",
//         height: 70,      //inches
//         shoeHeight: 1,   //inches
//         hatHeight: 2,    //inches
//         getHeight: function(wearingClothes = false, withHat = false) {
//                  var height = this.height;

//                  if(wearingClothes) {
//                           height += this.shoeHeight

//                           if (withHat) {
//                                    height += this.hatHeight;
//                           }
//                  }

//                  return height;
//         }
//}

//let heightNoClothes = person.getHeight();                   //70
//let heightWithClothes = person.getHeight(true);             //71
//let heightWithClothesHat = person.getHeight(true,ture);     //73

//console.log("Height without clothing: " + heightNoClothes);
//console.log("Height with clothing: " + heightWithClothes);
//console.log("Height with clothing and hat: " + heightWithClothesHat);