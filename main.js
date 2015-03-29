var shops = getDonutShops();  //pull data from getDonutShops function
var $menu = $('#menu');  //just shortcut pointing to #selection from .HTML
var key='shop';
var $button = $('button');
var $footer =$('footer');

shops.forEach(function(shop){   //creating location buttons//forEach is a method
  $('<button></button>')
    .text(shop.location)    //text this.location
    .data(key, shop)      //data(key, shop)  .data and key turn the shop into a string
    .click(function(){
      var $this = $(this);
      showShop($this.data(key));  //.this only effect the showShop function or object
    })
    .appendTo($menu);       //append data To #menu on .HTML
    $menu.hide().slideDown();   //Cannot get Hide to work, maybe function keeps making buttons
    $button.click(function(){
      $button.fadeOut(700);
    });
});

var $table = $('table')
function showShop(shop) {
  var hours =(shop.closingTime - shop.openingTime);
  var $row = $('<tr></tr>')   //shorcut <tr>
  $row.append(createCell(shop.location))
  $row.append(createCell(shop.openingTime + ':00'))
  $row.append(createCell(shop.closingTime + ':00'))
  for (i=0; i<hours; i++) {
    $row.append(createCell(shop.approxCustomerHr()))
    };
    // if (hours<11; hours++) {
    //   $row.append(createCell(0))
    // };

  // function emptyCell(hours){   //testing to make empty cells 0
  //   var empty = (11-hours);
  //   for(empty>=0; empty--){
  //   $row.append(createCell(0))
  //   }
  // }
  $row.append(createCell(shop.bakePerDay()))  //make 15th cell data location
  $table.append($row);
}
function createCell(value){
  return $('<td></td>').text(value);
}

 var form = document.querySelector('form');

form.addEventListener('submit',function(event)  {  //Update Donut Form
    event.preventDefault()
    var index =$("#updateLocation")[0].selectedIndex;
    var shop=shops[index]
     shop.openingTime=parseInt($("#updateOpen").val());
     shop.closingTime=parseInt($("#updateClose").val());  //parseInt=returns integer
     shop.minCustomerHr=parseInt($("#updateCustMin").val());
     shop.maxCustomerHr=parseInt($("#updateCustMax").val());
     shop.donutsPerCustomer=parseInt($("#updateDonut").val());
     console.log(shop.closingTime + shop.minCustomerHr + shop.maxCustomerHr+shop.donutsPerCustomer);
 });

  $footer.click(function() {
    $(footer).css("background-color","blue");
  });   //when i do $(this) it changes the rest of the line blue?

//appendTo or append??

      //this.submit();
  //}

  // function getData() {
  //
  // }

// $('#updateData').submit(function() {
//     // get all the inputs into an array.
//     // var $inputs = $('#updateData :input');
// console.log('#updateData: input');
//     // not sure if you wanted this, but I thought I'd add it.
//     // get an associative array of just the values.
//     // var values = {};
//     // $inputs.each(function() {
//     //     values[this.name] = $(this).val();
//     // });

// });
//fadeOut(700);
// $(function() {
//   $menu.hide().slideDown();
//   // $button.hide().each(function(index){
//   //   $(this).delay(700 * index).fadeIn(700);
//    });
//   $button.click(function(){
//     $(this).fadeOut(700);
//   //});
// });

// $(function(){
//   $table.on('mouseover click', function() {
//     $(this).css('background-color','cornflowerblue');
//   });
// })

// $(function() {

//   $('h2').hide().slideDown();
//   var $li = $('li');
//   $li.hide().each(function(index) {
//     $(this).delay(700 * index).fadeIn(700);
//   });

//   $li.on('click', function() {
//     $(this).fadeOut(700);
//   });

// });