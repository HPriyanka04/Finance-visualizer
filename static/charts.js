const ctx = document.getElementById('expenseChart');

new Chart(ctx, {
type: 'doughnut',
data: {
labels: ['Food','Travel','Rent','Shopping','Entertainment'],
datasets: [{
data: [3000,2000,5000,1500,1000],
borderWidth:1
}]
}
});