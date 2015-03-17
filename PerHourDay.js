//Constructor function to make DonutShops and add properties.
function DonutShop (location, openingTime, closingTime, minCustomerHr, maxCustomerHr, donutsPerCustomer) {

    this.location = location;
    this.openingTime = openingTime;
    this.closingTime = closingTime;
    this.minCustomerHr = minCustomerHr;
    this.maxCustomerHr = maxCustomerHr;
    this.donutsPerCustomer = donutsPerCustomer;

    this.approxCustomerHr = function() {
      var random = Math.round (Math.random() * this.maxCustomerHr);  //Math.random() creates random 0.00001-1
      if (random < minCustomerHr) {
        return minCustomerHr;
      }
        return random;
    }
    this.bakePerHr = function() {
      return Math.round(this.donutsPerCustomer * this.approxCustomerHr());
    }
    this.bakePerDay = function() {
      return this.bakePerHr() * (this.closingTime - this.openingTime);
    }
 //}   //test callData  and "information" outside of Contrustor
    var information = [this.location, this.openingTime, this.closingTime,
        this.minCustomerHr, this.maxCustomerHr, this.donutsPerCustomer,
        this.approxCustomerHr(), this.bakePerHr(), this.bakePerDay()];

    var callData = "Location: " + information[0] +    //how to move callData to HTML
    "  Hours: " + information[1] +":00-" + information[2] + ":00  " +
    " Customer Per Hour: " + this.approxCustomerHr() +
    "   Bake Per Hour:" + this.bakePerHr[6] +
    "   Bake Per Day:" + this.bakePerDay[7];

    console.log(callData);
}
//var data = document.getElementById('data');
//data.innerHTML = callData;
    //var comparison = 30;

    // var el = document.getElementById('data');
    // el.className = callData;
    //document.getElementById("data").innerHTML = 'callData';


var donutShop1 = new DonutShop ("Downtown", 7, 18, 8, 43, 4.50);
var donutShop2 = new DonutShop ("Capitol Hill", 7, 18, 4, 37, 2.00);
var donutShop3 = new DonutShop ("South Lake Union", 7, 18, 9, 23, 6.33);
var donutShop4 = new DonutShop ("Wedgewood", 7, 18, 2, 28, 1.25);
var donutShop5 = new DonutShop ("Ballard", 7, 18, 8, 58, 3.75);
var shopArray = [];

    for (i=1; i<6; i++){
        var shop ="donutShop" + i;
        shopArray.push(shop);
    }
console.log(shopArray);

 var bakePD = donutShop1.bakePerDay();   //
    console.log(bakePD);


// var infoArray = function(this){
//  var information = [this + .approxCustomerHr()];
// }
//var DowntownInfo = infoArray(Downtown);
//var callData =" xxx";
    // var callData = "Location: " + information[0] +    //how to move callData to HTML
    // "  Hours: " + information[1] +":00-" + information[2] + ":00  " +
    // " Customer Per Hour: " + this.approxCustomerHr() +
    // "   Bake Per Hour:" + this.bakePerHr[6] +
    // "   Bake Per Day:" + this.bakePerDay[7];
    // console.log(callData);

//function callDowntown(){
 // document.getElementById('downtown').innerHTML = DowntownInfo;
//}

