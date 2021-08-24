let idealCar = {
         name: "Mustang",
         color: "red",
         weightInLBS: 3600,

         myCar: function() {
                  return "My ideal car is a " + this.name + " with a color of " + this.color + " , but I do not want it to be over " + this.weightInLBS + " pounds.";
         }
}

console.log(idealCar.myCar())


//let idealCar = {
//         name: 'Mustang',
//         color: 'Red',
//         weightInPounds: 3600,
//         myCar: function () {
//             console.log('My ideal car is a ' + this.name + ' with a color of ' + this.color + ', but I do not want it to be over ' +
//                 this.weightInPounds + ' pounds.');
//         }
//     };
     
//     idealCar.myCar();