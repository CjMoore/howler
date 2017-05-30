$(document).ready(function(){
  $('#show-title').on('click', function(event){
    const titleValue = $(event.target).text();
    $(event.target).html($('<input />',{'value' : titleValue}).val(titleValue).attr('id', titleValue))
  })

  $('#show-content').on('click', function(event){
    const contentValue = $(event.target).text();
    $(event.target).html($('<input />',{'value' : contentValue}).val(contentValue).attr('id', contentValue))
  })
})
