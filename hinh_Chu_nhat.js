class rec{
  cd = 3;
  cr = 2;
  constructor(d,r){
    this.cd = d;
    this.cr = r;
  }

  acreage(){
    let acr = this.cr * this.cd;
    return acr;
  }
  perimeter(){
    let per = (this.cr + this.cd)*2;
    return per;
    
  }
}
let A = new rec(10,5);
let acr = A.acreage();
document.write( "dien tich hinh chu nhat " + acr +"</br>");
let per = A.perimeter();
document.write("chu vi hinh chu nhat " + per );