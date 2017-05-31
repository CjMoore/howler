var API = 'http://localhost:3000/api/v1'
var PAPI = "https://the-howler.herokuapp.com/api/v1"

$(document).ready(function(){
  $('#edit-da-form').on('click', function(event){
    $('#edit-da-form').remove();
    const titleValue = $('#show-title').text();
    const contentValue = $('#show-content').text();
    $('#show-title').html($('<input />',{'value' : titleValue}).val(titleValue).attr('id', 'titleInput'))
    $("#show-content").html($('<input />',{'value' : contentValue}).val(contentValue).attr('id', 'contentInput'))
    editSubmit();
  })

  // $('#show-content').on('click', function(event){
  //   $('#edit-btn').remove();
  //   $(event.target).html($('<input />',{'value' : titleValue}).val(titleValue).attr('id', 'titleInput'))
  //   $(event.target).html($('<input />',{'value' : contentValue}).val(contentValue).attr('id', 'contentInput'))
  //   editSubmit();
  // })
  $('body').on('click', '#edit-btn', function(event){
    const newTitle = $('#titleInput').val()
    const newContent = $('#contentInput').val()
    const updateData = {howler: {title: newTitle, text: newContent}}

    if (newTitle =='' && newContent =='') {
      const error = "Please input a title and text to be analyzed"
      $('.error').empty()
      $('.error').append(error)
    } else if (newTitle == '') {
      const error = "Please input text to be analyzed"
      $('.error').empty()
      $('.error').append(error)
    } else if(newContent == '') {
      const error = "Please input a title"
      $('.error').empty()
      $('.error').append(error)
    } else {
      $('.error').empty()
    }

    return $.ajax({
      url: API + `/howlers/${$('.data').data('id')}`,
      method: 'PATCH',
      data: updateData
    }).then(printData)
    .fail(function(error){
      console.error(error)
    });
  })
})

function printData(data) {
  $('#make-form').append("<button id='edit-da-form' class='btn right'>Edit Howler</button>")
  $('#edit-btn').remove();
  $('#show-title').empty().text(data.title)
  $('#show-content').empty().text(data.text)
  let eChart = Highcharts.charts[0]
  let lChart = Highcharts.charts[1]
  let sChart = Highcharts.charts[2]

  $('.data').data('anger', data.anger)
  $('.data').data('disgust', data.disgust)
  $('.data').data('fear', data.fear)
  $('.data').data('joy', data.joy)
  $('.data').data('sadness', data.sadness)
  $('.data').data('tentative', data.tentative)
  $('.data').data('confident', data.confident)
  $('.data').data('analytical', data.analytical)
  $('.data').data('openness', data.openness)
  $('.data').data('extraversion', data.extraversion)
  $('.data').data('conscientiousness', data.conscientiousness)
  $('.data').data('agreeableness', data.agreeableness)
  $('.data').data('emotional-range', data.emotional_range)

  let lChartData = [data.analytical, data.confident, data.tentative]
  let sChartData = [data.openness, data.conscientiousness, data.extraversion, data.agreeableness, data.emotional_range]
  let eChartData = [data.anger, data.disgust, data.fear, data.joy, data.sadness]
  eChart.series[0].setData(eChartData, true)
  lChart.series[0].setData(lChartData, true)
  sChart.series[0].setData(sChartData, true)
}

function editSubmit(){
  $('#edit').append('<button id="edit-btn" class="btn right">Update Howler</button>')
}
