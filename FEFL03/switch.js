// node switch.js

const ANIMAL_TYPE = {
         DOG: { type:"dog", sound:"woof"},
         CAT: { type:"cat", sound:"meow"},
         LION: { type:"lion", sound:"roar"},
}

const pet1 = {
         name:"Cerberus",
         type: ANIMAL_TYPE.DOG
}

const pet2 = {
         name:"Kronos",
         type: ANIMAL_TYPE.CAT
}

const checkIfPet = pet => {
         switch(pet.type){
                  case ANIMAL_TYPE.DOG:
                  case ANIMAL_TYPE.CAT:
                           return true;
                  default:
                           return false;
         }
}

const checkIfDog = pet => {
         if(!checkIfPet(pet)){
                  return pet.name + " is not a pet."
         }
         switch(pet.type){
                  case ANIMAL_TYPE.DOG:
                           return pet.name + " says " + pet.type.sound;
                  default:
                           return pet.name + " is not a " + ANIMAL_TYPE.DOG.type;
         }
}

const checkIfCat = pet => {
         if(!checkIfPet(pet)){
                  return pet.name + " is not a pet."
         }
         switch(pet.type){
                  case ANIMAL_TYPE.CAT:
                           return pet.name + " says " + pet.type.sound;
                  default:
                           return pet.name + " is not a " + ANIMAL_TYPE.CAT.type;

         }
}

console.log("CHECKING IF PETS ARE DOGS");
console.log(checkIfDog(pet1));
console.log(checkIfDog(pet2));

console.log("CHECKING IF PETS ARE CATS");
console.log(checkIfCat(pet1));
console.log(checkIfCat(pet2));