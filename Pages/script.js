//inheritance fungsinya buat bikin class baru dari class yang udh ada 
//buat bikin class using inheritance, use extends 
class Animal{
    constructor(name, age){     // untuk ngubah 
        this.name = name;
        this.age = age; 
    }
    greet(){
        console.log("Hello");
    }
    info(){        
        this.greet(); //using methods within methods
        console.log(`My name is ${this.name}`);
        console.log(`I am ${this.age} years old`);
    }               
}
const animal = new Animal("Leo", 3); 
console.log(animal.name);
animal.greet();
animal.info();

//child class method 
class Dog extends Animal{  //ini udah masuk INHERITANCE 
    getHumanAge(){      //method    
        return this.age*7; //return values in Method 
    }
    info(){        
        this.greet(); //using methods within methods
        console.log(`My name is ${this.name}`);
        console.log(`I am ${this.age} years old`);
        const humanAge = this.getHumanAge(); //penambahan
        console.log(`I am ${humanAge} in human years`); //penambahan 
    }               
}
const dog = new Dog("Leo", 4);
dog.info();
const humanAge = dog.getHumanAge(); 
console.log(humanAge);

//kalo method name digunakan di parent class dan child class, yg akan dipake di child class
//sebutan untuk istilah diatas adalah override class 


// //overriding constructors 
// //when overriding constructors, you must add super() in the first line. 
// class Dog extends Animal{
//     constructor(){
//         super() // INI KHUSUS BUAT OVERRIDING CONSTRUCTOR
//     }
// }

//ini versi lengkapnya untuk overrade construction 
class Dog extends Animal{
    constructor(name, age, breed){
        super(name, age); //artinya child class constructor calls the parent 
            this.breed=breed; // after calling the parent class constructor, a breed property will be added.
    }
}

//ini versi paling lengkapnya (diambil dari Progate IV paling akhir)
class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
    greet() {
      console.log("Hello");
    }
    
    info() {
      this.greet();
      console.log(`My name is ${this.name}`);
      console.log(`I'm ${this.age} years old`);
    }
  }
  
  class Dog extends Animal {
    // Add the constructor
    constructor(name, age, breed){
      super(name, age);
       this.breed = breed;
    }
    
    info() {
      this.greet();
      console.log(`My name is ${this.name}`);
      // Ouptut 「I am a ____」
      console.log(`I am a ${this.breed}`);
      
      console.log(`I'm ${this.age} years old`);
      const humanAge = this.getHumanAge();
      console.log(`I am ${humanAge} years old in human years`);
    }
    
    getHumanAge() {
      return this.age * 7;
    }
  }
  
  // Pass the string "Chihuahua" as an argument
  const dog = new Dog("Leo", 4, "Chihuahua");
  dog.info(); 
  
