class Tem{
  doC = 1;
  constructor(C){
    this.doC = C;
  }
  changCtoF(){
  let dF = (this.doC *1.8) +32;
  return dF;
  }
  ChangCtoK(){
   let dK = this.doC + 273.15;
    return dK;
  }

}
let ChangeTem = new Tem(30);
let F = ChangeTem.changCtoF();
let C = ChangeTem.doC
document.write("Gia tri cua do F khi do C = " + C + " la " + F + "F"+ "</br>");
let K = ChangeTem.ChangCtoK();
document.write( "Gia tri cua do Kenvin khi do C = " + C + " la " + K + " K" + "</br>")
