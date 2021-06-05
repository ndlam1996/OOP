class Apple {
   weigth = 10
   constructor(w){
    this.weigth = w;
   }
   decrease(){
     --this.weigth;
   }
   isEmpty(){
    if( this.weigth == 0){
      return true;
    }
    else{
      return false;
    }
   }
  getWeight(){
    return this.weigth;
  }
}
class Human {
  name = "";
  gender = true
  weigth = 12
  constructor(N,G,W){
    this.name = N;
    this.gender = G;
    this.weigth = W;
  }
  checkApple(apple){
    let isNotEmpty = apple.isEmpty() !== true ;
    return isNotEmpty;
  }
  eat (apple){
    if (apple.getWeight() > 0){
      apple.decrease();
      this.weigth++;
    }
  
  }
  getWeigthHuman(){
    return this.weigth;
  }
}

let apple1 = new Apple(10);
let adam = new Human("Admam", "male", 80);
let eva = new Human("Eva", "Female" ,50);
while(apple1.isEmpty() !== true){
  document.write(" Adam an 1 mieng tao </br>")
  adam.eat(apple1);
  document.write("trong luong qua tao con " + apple1.getWeight() + "dv <br>");
  document.write(" can nang Adam la " + adam.getWeigthHuman() + "<br>" )
  document.write("Eva an 1 mieng tao </br>");
  eva.eat(apple1);
  document.write("trong luong qua tao con " + apple1.getWeight() + "dv <br>");
  document.write(" can nang Eva la " + eva.getWeigthHuman() + "<br>" )
}

