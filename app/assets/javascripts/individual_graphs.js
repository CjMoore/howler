$(document).ready(){
  function makeChart(){
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
      data: [$(".data").data("openness"), $(".data").data("conscientiousness"), $(".data").data("extraversion"),  $(".data").data("agreeableness"), $(".data").data("emotional-range")]
    }],

  });
});


  $(".small-graph").append(doSocialChart)
}
}
makeChart()
