$('.submit').click(function(e){
  if($('.ina1').get(0).checked === false && $('.ina2').get(0).checked === false){
    e.preventDefault()
    $(".ina").append( "<b>Hello </b>" );
  }
})

$('.ina1').click(function(){
    $('.inf').toggleClass('hidden')
})
$('.ina2').click(function(){
  $('.ads').toggleClass('hidden')
})