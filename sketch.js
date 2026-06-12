// ---- CHART ----
function criarGrafico(){
  const ctx = document.getElementById('agroChart').getContext('2d');

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Safra 1', 'Safra 2', 'Safra 3', 'Safra 4'],
      datasets: [
        {
          label: 'Receita (R$)',
          data: [120, 180, 150, 220],
          borderColor: '#10b981',
          backgroundColor: 'rgba(16,185,129,.08)',
          tension: 0.35,
          pointRadius: 3
        },
        {
          label: 'Carbono (créditos)',
          data: [10, 15, 8, 20],
          borderColor: '#f59e0b',
          backgroundColor: 'rgba(245,158,11,.08)',
          tension: 0.35,
          pointRadius: 3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: '#cbd5e1' }
        }
      },
      scales: {
        x: {
          ticks: { color: '#94a3b8' },
          grid: { color: 'rgba(255,255,255,0.05)' }
        },
        y: {
          ticks: { color: '#94a3b8' },
          grid: { color: 'rgba(255,255,255,0.05)' }
        }
      }
    }
  });
}