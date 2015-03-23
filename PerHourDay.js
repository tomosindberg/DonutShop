
function getDonutShops(){
  var donutShop1 = new DonutShop ("Downtown", 7, 18, 8, 43, 4.50);
  var donutShop2 = new DonutShop ("Capitol Hill", 7, 18, 4, 37, 2.00);
  var donutShop3 = new DonutShop ("South Lake Union", 7, 18, 9, 23, 6.33);
  var donutShop4 = new DonutShop ("Wedgewood", 7, 18, 2, 28, 1.25);
  var donutShop5 = new DonutShop ("Ballard", 7, 18, 8, 58, 3.75);

  return [donutShop1,donutShop2,donutShop3, donutShop4, donutShop5];
}
//Constructor function to make DonutShops and add properties.
function DonutShop (location, openingTime, closingTime, minCustomerHr, maxCustomerHr, donutsPerCustomer) {

  this.location = location;
  this.openingTime = openingTime;
  this.closingTime = closingTime;
  this.minCustomerHr = minCustomerHr;
  this.maxCustomerHr = maxCustomerHr;
  this.donutsPerCustomer = donutsPerCustomer;

  var hours = (this.closingTime - this.openingTime);
  var random =[];
  var allDay = 0;

  this.approxCustomerHr = function() {
    for (var i=0; i<hours; i++) {
      random[i] = Math.round (Math.random() * this.maxCustomerHr);  //Math.random() creates random 0.00001-1
      if (random[i] < this.minCustomerHr) {
          random[i] = this.minCustomerHr;
          allDay += random[i];
          return random[i];
      }
      allDay += random[i];
      return random[i]
    }
    allDay= array_sum(random);
  }
  this.bakePerDay = function()   {
   return allDay;
  }

}



//fix footer with banner
// fix fade in for instructions and maybe table
//add css position problems



