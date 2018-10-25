$('.submit').click(function(e){
  if($('.ina1').get(0).checked === false && $('.ina2').get(0).checked === false){
    e.preventDefault()
    $(".ina").append( "<b>Hello </b>" );
  }
})