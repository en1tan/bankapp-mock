google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(initialize);

function initialize() {
  var chart = new google.visualization.ChartWrapper({
    containerId: 'transactions_chart',
  });

  var options = {
    // title: 'Transactions',
    curveType: 'function',
    pointSize: 4,
    legend: 'bottom',
    hAxis: {
      format: 'date',
      textPosition: 'in',
    },
    vAxis: { textPosition: 'none' },
    series: {
      0: { color: '#00FF00' },
      1: { color: '#FF0000' },
    },
    backgroundColor: 'transparent',
    width: '100%',
    chartArea: {
      width: '98%',
    },
    animation: {
      duration: 1500,
      startup: true,
      easing: 'inAndOut',
    },
  };

  chart.setChartType('LineChart');
  chart.setOptions(options);

  // var weeklyButton = document.getElementById('weeklyChart');
  var monthlyButton = document.getElementById('monthlyChart');

  // weeklyButton.onclick = function () {
  //   drawWeeklyChart();
  // };

  monthlyButton.onclick = function () {
    drawMonthlyChart();
  };

  function drawMonthlyChart() {
    var data = new google.visualization.arrayToDataTable([
      [
        '',
        { label: 'Credit', id: 'Credit', type: 'number' },
        { label: 'Debit', id: 'Debit', type: 'number' },
      ],
      ['1', 2000, -4000],
      ['2', 2300, -500],
      ['3', 230, -40],
      ['4', 5400, -460],
      ['5', 8900, -230],
      ['6', 9000, -66300],
      ['8', 24000, -40000],
      ['9', 24000, -40000],
      ['10', 24000, -40000],
      ['11', 24000, -40000],
    ]);
    chart.setDataTable(data);
    chart.draw();
  }

  drawMonthlyChart();

  // function drawWeeklyChart() {
  //   var data = google.visualization.arrayToDataTable([
  //     [
  //       '',
  //       { label: 'Credit', id: 'Credit', type: 'number' },
  //       { label: 'Debit', id: 'Debit', type: 'number' },
  //     ],
  //     ['Sun', 2000, -4000],
  //     ['Mon', 2300, -500],
  //     ['Tue', 230, -40],
  //     ['Wed', 5400, -460],
  //     ['Thu', 8900, -230],
  //     ['Fri', 9000, -66300],
  //     ['Sat', 24000, -40000],
  //   ]);
  //   chart.setDataTable(data);
  //   chart.draw();
  // }

  // drawWeeklyChart();
}
