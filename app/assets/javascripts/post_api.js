var API = 'http://localhost:3000/api/v1'
var PAPI = "https://info-is-everywhere.herokuapp.com/api/v1"

var printStuff = function(data){
  $("#emotionalData td").remove();
  $("#languageData td").remove();
  $("#social-data td").remove();

  $("#emotionalData tbody").append("<tr>").append("<td>Anger</td><td>"+ data[0]["Emotion Tone"]["Anger"] +"</td>")
  $("#emotionalData tbody").append("<tr>").append("<td>Disgust</td><td>"+ data[0]["Emotion Tone"]["Disgust"] +"</td>")
  $("#emotionalData tbody").append("<tr>").append("<td>Fear</td><td>"+ data[0]["Emotion Tone"]["Fear"] +"</td>")
  $("#emotionalData tbody").append("<tr>").append("<td>Joy</td><td>"+ data[0]["Emotion Tone"]["Joy"] +"</td>")
  $("#emotionalData tbody").append("<tr>").append("<td>Sadness</td><td>"+ data[0]["Emotion Tone"]["Sadness"] +"</td>")

  $("#languageData tbody").append("<tr>").append("<td>Analytical</td><td>"+ data[1]["Language Tone"]["Analytical"] +"</td>")
  $("#languageData tbody").append("<tr>").append("<td>Confident</td><td>"+ data[1]["Language Tone"]["Confident"] +"</td>")
  $("#languageData tbody").append("<tr>").append("<td>Tentative</td><td>"+ data[1]["Language Tone"]["Tentative"] +"</td>")

  $("#social-data tbody").append("<tr>").append("<td>Openness</td><td>"+ data[2]["Social Tone"]["Openness"] +"</td>")
  $("#social-data tbody").append("<tr>").append("<td>Conscientiousness</td><td>"+ data[2]["Social Tone"]["Conscientiousness"] +"</td>")
  $("#social-data tbody").append("<tr>").append("<td>Extraversion</td><td>"+ data[2]["Social Tone"]["Extraversion"] +"</td>")
  $("#social-data tbody").append("<tr>").append("<td>Agreeableness</td><td>"+ data[2]["Social Tone"]["Agreeableness"] +"</td>")
  $("#social-data tbody").append("<tr>").append("<td>Emotional Range</td><td>"+ data[2]["Social Tone"]["Emotional Range"] +"</td>")

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
}

function saveHowler(data) {
  debugger
}

var postData = function(){
  var input = $("textarea[name=text]").val();

  var saveButton = `<button id='save' class = 'btn'>Save</button>`

  $('#save-btn').append(saveButton)

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

$(document).ready(function(){

  $("input[type=submit]").on('click', postData)

  $('form').on('submit', function(event){
    event.preventDefault();
  });
});
