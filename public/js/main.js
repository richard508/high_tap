$('.submit').click(function(e){
  if($('.ina1').get(0).checked === false && $('.ina2').get(0).checked === false){
    e.preventDefault()
    $(".ina").prepend( "<strong style='color:red'>Please select Influencer and/or Advertiser</strong><br />" );
  }
})

$('.ina1').click(function(){
    $('.inf').toggleClass('hidden')
    if($(this).get(0).checked === true){
      $("#iFollower").prop('required', true)
    } else $("#iFollower").prop('required', false)
})
$('.ina2').click(function(){
  $('.ads').toggleClass('hidden')
  if($(this).get(0).checked === true){
    $("#companyName").prop('required', true)
    $("#category").prop('required', true)
    $("#size").prop('required', true)
  } else {
    $("#companyName").prop('required', false)
    $("#category").prop('required', false)
    $("#size").prop('required', false)
  }
})