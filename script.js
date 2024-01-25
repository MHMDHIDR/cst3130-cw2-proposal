const currentChartIndex = 0
const chartElements = document.querySelectorAll('.forex-chart')

function toggleCharts() {
  chartElements.forEach(function (chart) {
    chart.classList.add('hidden')
  })

  currentChartIndex = (currentChartIndex + 1) % chartElements.length
  chartElements[currentChartIndex].classList.remove('hidden')
}

google.charts.load('current', { packages: ['corechart'] })
google.charts.setOnLoadCallback(drawChart)

function drawChart() {
  const data = google.visualization.arrayToDataTable([
    ['Year', 'Positive', 'Negative', 'Neutral'],
    // Assuming openai data provides the following example data
    ['2016', 0.1, 0.2, 0.7],
    ['2017', 0.2, 0.1, 0.7],
    ['2018', 0.3, 0.3, 0.4],
    ['2019', 0.4, 0.4, 0.2],
    ['2020', 0.5, 0.3, 0.2]
  ])

  const options = {
    title: 'Currency Exchange Rates and Sentiment Analysis',
    curveType: 'function',
    legend: { position: 'bottom' },
    isStacked: true,
    seriesType: 'line',
    series: { 5: { type: 'line' }, 6: { type: 'line' }, 7: { type: 'line' } }
  }

  const chart = new google.visualization.ComboChart(
    document.getElementById('sentiment_analysis')
  )
  chart.draw(data, options)
}
