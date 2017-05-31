

$(document).ready(function(){
  $('#compare').click(function(event){
    event.preventDefault();
    compareChart()
  })
})

function compareChart(){
      if ($('input[type=checkbox]:checked').length > 2 || $('input[type=checkbox]:checked').length < 2 ) {
          $(this).prop('checked', false);
          alert("You need to select a total of 2 Howlers to compare");
      }
      else
      $(`#compare-chart`).clear
          makeCompareChart()

}

function makeCompareChart(){
  var idOne = $('input[type=checkbox]:checked')[0].id
  var idTwo = $('input[type=checkbox]:checked')[1].id

  var open = function findOpenness(id){
      return $(`.data-${id}`).data("openness")
    }
  var conscientious = function findConscientiousness(id){
      return $(`.data-${id}`).data("conscientiousness")
    }
  var extraverted = function findExtroversion(id){
    return  $(`.data-${id}`).data("extraversion")
    }
  var agreeable = function findAgreeableness(id){
    return  $(`.data-${id}`).data("agreeableness")
    }
  var emoRange = function findEmotionalRange(id){
    return  $(`.data-${id}`).data("emotional-range")
    }
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
          name: 'Tones1',
          data: [open(idOne), conscientious(idOne), extraverted(idOne), agreeable(idOne), emoRange(idOne)]
        },
        {
          type: 'area',
          name: 'Tones2',
          data: [open(idTwo), conscientious(idTwo), extraverted(idTwo), agreeable(idTwo), emoRange(idTwo)]
        }],

      })
    })
    $(`#compare-chart`).add(doSocialChart)

};
