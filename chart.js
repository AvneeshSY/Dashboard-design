


const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['20', ' ', '25',' ', '30',' ','35', ' ','40',' ','45',' ','60',' ','65'],
    datasets: [{
      label: ' ',
      data: [50, 60,70, 85, 90, 105,130,145,150,155,160,165,170,180,190],
      borderWidth: 1
     
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

