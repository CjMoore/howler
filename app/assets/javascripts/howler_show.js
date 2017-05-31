function makeCharts(){
  var doEmotionChart = $(function () {
    var myChart = Highcharts.chart('show-emotion-chart', {
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
        data: [$('.data').data('anger'), $('.data').data('disgust'), $('.data').data('fear'), $('.data').data('joy'), $('.data').data('sadness')]
      }],
    });
  });

  var doLanguageChart = $(function () {
    var myOtherChart = Highcharts.chart('show-language-chart', {
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
        data: [ $('.data').data("analytical"), $('.data').data('confident'), $('.data').data('tentative')]
      }],

    });
  });

  var doSocialChart = $(function () {
    var myOtheOtherrChart = Highcharts.chart('show-social-chart', {
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
        data: [$('.data').data('openness'), $('.data').data('conscientiousness'), $('.data').data('extraversion'),  $('.data').data('agreeableness'), $('.data').data('emotional-range')]
      }],

    });
  });

  $("#show-language-chart-script").add(doLanguageChart)
  $("#show-emotion-chart-script").add(doEmotionChart)
  $("#show-social-chart-script").add(doSocialChart)

}

makeCharts();
