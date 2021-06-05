class Battery {
  constructor(){
    this.energy = 0;
}
setEnergy(energy){
  this.energy = energy;
}
getEnegry(){
  return this.energy;
}
decreaseEnegry() {
  if (this.energy >0){
    this.energy--;
  }
}
}
class FlashLamp{
  constructor(){}
  setBattery(battery){
    this.battery = battery;
  }
  getBatteryInfo(){
    return this.battery.getEnegry();
  }
  light() {
    if(this.status){
        alert("Lighting");
    } else {
        alert("Not lighting");
    }
};

turnOn() {
    this.status = true;
};

turnOff() {
    this.status = false;
}
}
let battery = new Battery();
battery.setEnergy(10);

let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);

document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");
flashLamp.light();

document.write("Turn on<br/>")
flashLamp.turnOn();
flashLamp.light();
document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");

document.write("Turn off<br/>")
flashLamp.turnOff();
flashLamp.light();