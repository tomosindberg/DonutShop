var shops = getDonutShops();  //pull data from getDonutShops function
var $menu = $('#selection');  //just shortcut pointing to #selection from .HTML
var key='shop';

shops.forEach(function(shop){   //making the location buttons
  $('<button></button>')
    .text(shop.location)    //text this.location
    .data(key, shop)
    .click(function(){
      var $this = $(this);
      showShop($this.data(key));
    })
    .appendTo($menu);       //append data To #selction on .HTML
});
var $table = $('table')
function showShop(shop) {
  var $row = $('<tr></tr>')   //shorcut <tr>
  $row.append(createCell(shop.location))
  $row.append(createCell(shop.openingTime + ':00'))
  $row.append(createCell(shop.closingTime + ':00'))
  $row.append(createCell(shop.approxCustomerHr()))
  $row.append(createCell(shop.bakePerHr()))
  $row.append(createCell(shop.bakePerDay()))
  $table.append($row);
}

function createCell(value){

  return $('<td></td>').text(value);

}