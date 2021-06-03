class rec{
  cd = 3;
  cr = 2;

  acreage(){
  let acr = this.cr * this.cd;
    document.write( "dien tich hinh chu nhat " + acr +"</br>");
  }
  perimeter(){
    let per = (this.cr + this.cd)*2
    document.write("chu vi hinh chu nhat " + per )
  }
}
let A = new rec();
A.cd = 10;
A.cr = 5 ;
A.acreage();
A.perimeter()