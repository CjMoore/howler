var API = 'http://localhost:3000/api/v1'
var PAPI = "https://the-howler.herokuapp.com/api/v1"

$(document).ready(function(){
  $('body').on('click', '#edit-da-form', function(event){
    $('#edit-da-form').remove();
    const titleValue = $('#show-title').text();
    const contentValue = $('#show-content').text();
    $('#show-title').html($('<input />',{'value' : titleValue}).val(titleValue).attr('id', 'titleInput'))
    $("#show-content").html($('<input />',{'value' : contentValue}).val(contentValue).attr('id', 'contentInput'))
    editSubmit();
  })

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
      url: PAPI + `/howlers/${$('.data').data('id')}`,
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
  
  let angerPercent = (data.anger * 100).toFixed(2)
  let disgustPercent = (data.disgust * 100).toFixed(2)
  let fearPercent = (data.fear * 100).toFixed(2)
  let joyPercent = (data.joy * 100).toFixed(2)
  let sadnessPercent = (data.sadness * 100).toFixed(2)
  let analyticalPercent = (data.analytical * 100).toFixed(2)
  let confidentPercent = (data.confident * 100).toFixed(2)
  let tentativePercent = (data.tentative * 100).toFixed(2)
  let opennessPercent = (data.openness * 100).toFixed(2)
  let conscientiousnessPercent = (data.conscientiousness * 100).toFixed(2)
  let extraversionPercent = (data.extraversion * 100).toFixed(2)
  let agreeablenessPercent = (data.agreeableness * 100).toFixed(2)
  let emotionalRangePercent = (data.emotional_range * 100).toFixed(2)

  $('#anger-data').text(`${angerPercent}%`)
  $('#disgust-data').text(`${disgustPercent}%`)
  $('#fear-data').text(`${fearPercent}%`)
  $('#joy-data').text(`${joyPercent}%`)
  $('#sadness-data').text(`${sadnessPercent}%`)
  $('#analytical-data').text(`${analyticalPercent}%`)
  $('#confident-data').text(`${confidentPercent}%`)
  $('#tentative-data').text(`${tentativePercent}%`)
  $('#openness-data').text(`${opennessPercent}%`)
  $('#conscientiousness-data').text(`${conscientiousnessPercent}%`)
  $('#extraversion-data').text(`${extraversionPercent}%`)
  $('#agreeableness-data').text(`${agreeablenessPercent}%`)
  $('#emotional-range-data').text(`${emotionalRangePercent}%`)

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
