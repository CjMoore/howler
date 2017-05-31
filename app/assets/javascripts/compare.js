

$(document).ready(function(){
  $('#compare').click(function(event){
    event.preventDefault();
    compareChart()
  })
})

function compareChart(){
      if ($('input[type=checkbox]:checked').length > 2) {
          $(this).prop('checked', false);
          alert("You can only compare 2 Howlers");
      }
      else
        $('#compare').append(
          makeCompareChart()
        )
}

function makeCompareChart(){
  var chartIdOne = $('input[type=checkbox]:checked')[0].id
  var chartIdTwo = $(`.data-${<%= howler.id %>}`).data('id')

  var doSocialChart = $(function () {
    var socialCompare = Highcharts.chart(`small-social-chart-comparison`, {
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
        data: [$(`.data-${chartIdTwo}`).data("openness"), $(`.data-${chartIdTwo}`).data("conscientiousness"), $(`.data-${chartId}`).data("extraversion"),  $(`.data-${chartIdTwo}`).data("agreeableness"), $(`.data-${chartIdTwo}`).data("emotional-range")]
      },
    // next_series_of_data
      {
        type: 'area',
        name: 'Tones',
        data: [$(`.data-${chartIdOne}`).data("openness"), $(`.data-${chartId}`).data("conscientiousness"), $(`.data-${chartId}`).data("extraversion"),  $(`.data-${chartIdOne}`).data("agreeableness"), $(`.data-${chartIdOne}`).data("emotional-range")]
      }
  ],

    });
  });
}
