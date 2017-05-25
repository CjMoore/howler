var API = 'http://localhost:3000/api/v1'
var PAPI = "https://info-is-everywhere.herokuapp.com/api/v1"

var printStuff = function(data){
  $("#emotionalData td").remove();
  $("#languageData td").remove();
  $("#social-data td").remove();

  var anger = ((data[0]["Emotion Tone"]["Anger"])* 100).toFixed(2)
  var disgust = ((data[0]["Emotion Tone"]["Disgust"])* 100).toFixed(2)
  var fear = ((data[0]["Emotion Tone"]["Fear"])* 100).toFixed(2)
  var joy = ((data[0]["Emotion Tone"]["Joy"])* 100).toFixed(2)
  var sadness = ((data[0]["Emotion Tone"]["Sadness"])* 100).toFixed(2)

  var analytical = (data[1]["Language Tone"]["Analytical"]* 100).toFixed(2)
  var confident = (data[1]["Language Tone"]["Confident"]* 100).toFixed(2)
  var tentative = (data[1]["Language Tone"]["Tentative"]* 100).toFixed(2)


  var openness = ((data[2]["Social Tone"]["Openness"])* 100).toFixed(2)
  var conscientiousness = ((data[2]["Social Tone"]["Conscientiousness"])* 100).toFixed(2)
  var extraversion = ((data[2]["Social Tone"]["Extraversion"])* 100).toFixed(2)
  var agreeableness = ((data[2]["Social Tone"]["Agreeableness"])* 100).toFixed(2)
  var emotionalRange = ((data[2]["Social Tone"]["Emotional Range"])* 100).toFixed(2)

  $("#emotionalData tbody").append("<tr>").append("<td>Anger</td><td>"+ anger +"%</td>")
  $("#emotionalData tbody").append("<tr>").append("<td>Disgust</td><td>"+ disgust+"%</td>")
  $("#emotionalData tbody").append("<tr>").append("<td>Fear</td><td>"+ fear +"%</td>")
  $("#emotionalData tbody").append("<tr>").append("<td>Joy</td><td>"+ joy +"%</td>")
  $("#emotionalData tbody").append("<tr>").append("<td>Sadness</td><td>"+ sadness +"%</td>")

  $("#languageData tbody").append("<tr>").append("<td>Analytical</td><td>"+ analytical +"%</td>")
  $("#languageData tbody").append("<tr>").append("<td>Confident</td><td>"+ confident +"%</td>")
  $("#languageData tbody").append("<tr>").append("<td>Tentative</td><td>"+ tentative +"%</td>")

  $("#social-data tbody").append("<tr>").append("<td>Openness</td><td>"+ openness +"%</td>")
  $("#social-data tbody").append("<tr>").append("<td>Conscientiousness</td><td>"+ conscientiousness +"%</td>")
  $("#social-data tbody").append("<tr>").append("<td>Extraversion</td><td>"+ extraversion +"%</td>")
  $("#social-data tbody").append("<tr>").append("<td>Agreeableness</td><td>"+ agreeableness +"%</td>")
  $("#social-data tbody").append("<tr>").append("<td>Emotional Range</td><td>"+ emotionalRange +"%</td>")

  $('#data-tables').show()

  var doEmotionChart = $(function () {
    var myChart = Highcharts.chart('emotionChartYo', {
        chart: {
            polar: true
        },
        title: {
            text: 'Emotion Data'
        },
        xAxis: {
            categories: ['Anger', 'Disgust', 'Fear', 'Joy', 'Sadness']
        },

        series: [{
            type: 'area',
            name: 'Tones',
            data: [data[0]["Emotion Tone"]["Anger"], data[0]["Emotion Tone"]["Disgust"] , data[0]["Emotion Tone"]["Fear"], data[0]["Emotion Tone"]["Joy"], data[0]["Emotion Tone"]["Sadness"]]
        }],

        zones: [{
           value: 0,
           color: '#f7a35c'
        }, {
           value: .5,
           color: '#7cb5ec'
        }, {
           color: '#90ed7d'
        }],
    });
  });

  var doLanguageChart = $(function () {
    var myOtherChart = Highcharts.chart('languageChart', {
      chart: {
        polar: true,
        colors: ["#8ff97a"]
      },
      title: {
        text: 'Language Data'
      },
      xAxis: {
        categories: ['Analytical', 'Confident', 'Tentative'],
      },

      series: [{
        type: 'area',
        name: 'Tones',
        data: [ data[1]["Language Tone"]["Analytical"], data[1]["Language Tone"]["Confident"], data[1]["Language Tone"]["Tentative"]],
      }],

    });
  });

  var doSocialChart = $(function () {
    var myOtheOtherrChart = Highcharts.chart('socialChart', {
      chart: {
        polar: true
      },
      title: {
        text: 'Social Data'
      },
      xAxis: {
        categories: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Emotional Range']
      },

      series: [{
        type: 'area',
        name: 'Tones',
        data: [data[2]["Social Tone"]["Openness"], data[2]["Social Tone"]["Conscientiousness"], data[2]["Social Tone"]["Extraversion"],  data[2]["Social Tone"]["Agreeableness"], data[2]["Social Tone"]["Emotional Range"]]
      }],

    });
  });

  $("#language-chart-script").add(doLanguageChart)
  $("#emotion-chart-script").add(doEmotionChart)
  $("#social-chart-script").add(doSocialChart)

  $('#save-btn').on('click', function(event) {
    saveHowler(data)
  })

  $('#clear').on('click', function(event) {
    clearInput()
  })
}

function clearInput(){

  $('#save').remove()
  $('#clear').remove()
  $('#data-tables').hide()

  $('#clear').empty().remove()
  $('#title').val('')
  $('#textarea1').val('')

  $("#emotionalData td").remove();
  $("#languageData td").remove();
  $("#social-data td").remove();

  $("#emotionChartYo").empty()
  $("#languageChart").empty()
  $("#socialChart").empty()

}

function saveHowler(data) {
  var howlerData = {howler: {title: $('#title').val(),
                             text: $('#textarea1').val(),
                             anger: data[0]["Emotion Tone"]["Anger"],
                             disgust: data[0]["Emotion Tone"]["Disgust"],
                             fear: data[0]["Emotion Tone"]["Fear"],
                             joy: data[0]["Emotion Tone"]["Joy"],
                             sadness: data[0]["Emotion Tone"]["Sadness"],
                             analytical: data[1]["Language Tone"]["Analytical"],
                             confident: data[1]["Language Tone"]["Confident"],
                             tentative: data[1]["Language Tone"]["Tentative"],
                             openness: data[2]["Social Tone"]["Openness"],
                             conscientiousness: data[2]["Social Tone"]["Conscientiousness"],
                             extraversion: data[2]["Social Tone"]["Extraversion"],
                             agreeableness: data[2]["Social Tone"]["Agreeableness"],
                             emotional_range: data[2]["Social Tone"]["Emotional Range"]
                           }}

  $.ajax({
    url: API + '/howlers',
    method: "POST",
    data: howlerData
  })
  .fail(function(error){
    console.error(error)
  });
}

var postData = function(){
  var input = $("textarea[name=text]").val();
  var title = $('#title').val()
  $('#clear').remove()
  $('#save').remove()

  var saveButton = `<button id='save' class = 'btn'>Save</button>`
  var clearButton = `<button id='clear' class = 'btn'>Clear</button>`


  if (input =='' && title =='') {
    const error = "Please input a title and text to be analyzed"
    $('.error').empty()
    $('.error').append(error)
  }
  else if (input == '') {
    const error = "Please input text to be analyzed"
    $('.error').empty()
    $('.error').append(error)
  } else if(title == '') {
    const error = "Please input a title"
    $('.error').empty()
    $('.error').append(error)
  } else {
    $('.error').empty()
    $('#save-btn').append(saveButton)
    $('#clear-input').append(clearButton)
    return $.ajax({
      url: API + '/tones',
      method: "GET",
      data: {text: input}
    })

    .done(printStuff)
    .fail(function(error){
      console.error(error)
    });
  }

}

$(document).ready(function(){
  $('#data-tables').hide()

  $("input[type=submit]").on('click', postData)

  $('form').on('submit', function(event){
    event.preventDefault();
  });
});
