var shops = getDonutShops();  //pull data from getDonutShops function
var $menu = $('#menu');  //just shortcut pointing to #selection from .HTML
var key='shop';
var $button = $('button');
var $footer =$('footer');

shops.forEach(function(shop){   //creating location buttons//forEach is a method
  $('<button></button>')
    .text(shop.location)    //text this.location
    .data(key, shop)
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
  var $row = $('<tr></tr>')   //shorcut <tr>
  $row.append(createCell(shop.location))
  $row.append(createCell(shop.openingTime + ':00'))
  $row.append(createCell(shop.closingTime + ':00'))
  $row.append(createCell(shop.approxCustomerHr()))
  $row.append(createCell(shop.approxCustomerHr()))
  $row.append(createCell(shop.approxCustomerHr()))
  $row.append(createCell(shop.approxCustomerHr()))
  $row.append(createCell(shop.approxCustomerHr()))
  $row.append(createCell(shop.approxCustomerHr()))
  $row.append(createCell(shop.approxCustomerHr()))
  $row.append(createCell(shop.approxCustomerHr()))
  $row.append(createCell(shop.approxCustomerHr()))
  $row.append(createCell(shop.approxCustomerHr()))
  $row.append(createCell(shop.approxCustomerHr()))
  $row.append(createCell(shop.bakePerDay()))
  $table.append($row);
}
function createCell(value){
  return $('<td></td>').text(value);
}


  $footer.click(function() {
    $footer.fadeOut(700);//change to change font:black
  });


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