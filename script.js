var currentChartIndex = 0
var chartElements = document.querySelectorAll('.forex-chart')

function toggleCharts() {
  chartElements.forEach(function (chart) {
    chart.classList.add('hidden')
  })

  currentChartIndex = (currentChartIndex + 1) % chartElements.length
  chartElements[currentChartIndex].classList.remove('hidden')
}
