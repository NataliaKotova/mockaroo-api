console.log('json & ajax');

//to test jquery
$(document).ready(function(){
  
// ajax method

$.ajax({
  url:'https://my.api.mockaroo.com/plant.json?key=d4c3fc70',
  type:'GET',
  data:'json',
  success: function(data){
    console.log(data);
    var i;
    for(i=0; i<data.length;i++) {
      document.getElementById('result').innerHTML +=
      '<div class="card" style="width: 18rem;">'
        '<img class="card-img-top" src="..." alt="Card image cap">'
        '<div class="card-body">'
          '<h5 class="card-title">' + data[i].plant_name + '</h5>'
          '<p class="card-text">' + data[i].scientific_name + '</p>'
          '<a href="#" class="btn btn-primary">Go somewhere</a>'
        '</div>'
      '</div>';
    }
  }, //success
  error: function(){
    console.log('error');
  } //error
}); //ajax

});