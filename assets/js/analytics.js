// File: assets/js/analytics.js

document.addEventListener('DOMContentLoaded', function() {
    // Ensure this is the analytics page
    if (!document.body.classList.contains('analytics-page')) {
        return;
    }

    // Date Range Filter Buttons
    const dateFilterButtons = document.querySelectorAll('.date-range-filter-group .filter-btn');
    if (dateFilterButtons.length > 0) {
        dateFilterButtons.forEach(button => {
            button.addEventListener('click', function() {
                dateFilterButtons.forEach(btn => btn.classList.remove('active')); // Remove active from all
                this.classList.add('active'); // Add active to clicked
                const selectedRange = this.dataset.range;
                // showToast() is a global function from main.js
                showToast(`Analytics data filtered for: ${selectedRange}`, 'info'); // Show toast for filter
                // You would replace the alert with data filtering/chart update logic here.
            });
        });
    }

    // Chart Initialization (Visitor Trends)
    const visitorTrendsCtx = document.getElementById('visitorTrendsChart');
    if (visitorTrendsCtx) {
        const ctx = visitorTrendsCtx.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(56, 178, 172, 0.4)'); // Use secondary color
        gradient.addColorStop(1, 'rgba(56, 178, 172, 0)');
        new Chart(visitorTrendsCtx, {
            type: 'line',
            data: {
                labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
                datasets: [{
                    label: 'Visitors',
                    data: [10000, 12000, 9000, 15000, 11000, 13000, 10500, 16000],
                    borderColor: 'var(--secondary)',
                    backgroundColor: gradient,
                    borderWidth: 3,
                    pointBackgroundColor: 'var(--white)',
                    pointBorderColor: 'var(--secondary)',
                    pointBorderWidth: 2,
                    pointRadius: 5,
                    pointHoverRadius: 7,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        mode: 'index', intersect: false, 
                        backgroundColor: 'var(--dark)', 
                        titleFont: { size: 14, weight: 'bold' }, 
                        bodyFont: { size: 12 }, 
                        padding: 10,
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) label += ': ';
                                if (context.parsed.y !== null) label += context.parsed.y.toLocaleString() + ' visitors';
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true, 
                        grid: { 
                            color: 'var(--border-color)', 
                            drawBorder: false 
                        },
                        ticks: { 
                            color: 'var(--gray)', 
                            font: { size: 11 } 
                        }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { 
                            color: 'var(--gray)', 
                            font: { size: 11 } 
                        }
                    }
                }
            }
        });
    } else { console.warn("visitorTrendsChart canvas not found on this page."); }

    // Chart Initialization (Traffic Sources)
    const trafficSourcesCtx = document.getElementById('trafficSourcesChart');
    if (trafficSourcesCtx) {
        new Chart(trafficSourcesCtx, {
            type: 'pie',
            data: {
                labels: ['Direct', 'Organic Search', 'Social Media', 'Referral', 'Email Campaign', 'Paid Ads'],
                datasets: [{
                    data: [25, 35, 18, 12, 5, 5],
                    // Warna-warna baru untuk grafik pie
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#C9CBCF'], // Warna-warni baru di sini
                    hoverOffset: 15, borderWidth: 1, borderColor: 'var(--card-background)'
                }]
            },
            options: {
                responsive: true, maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right', labels: { boxWidth: 20, padding: 15, font: { size: 12 }, color: 'var(--text-color)' }
                    },
                    tooltip: {
                        backgroundColor: 'var(--dark)', 
                        titleFont: { size: 14, weight: 'bold' }, 
                        bodyFont: { size: 12 }, 
                        padding: 10,
                        callbacks: {
                            label: function(context) {
                                let label = context.label || '';
                                if (label) label += ': ';
                                if (context.parsed !== null) {
                                    const total = context.dataset.data.reduce((sum, val) => sum + val, 0);
                                    const percentage = ((context.parsed / total) * 100).toFixed(1) + '%';
                                    label += percentage;
                                }
                                return label;
                            }
                        }
                    }
                }
            }
        });
    } else { console.warn("trafficSourcesChart canvas not found on this page."); }

    // Functionality for Download Chart Buttons (Analytics)
    // downloadChart() is a global function from main.js
    document.getElementById('downloadVisitorTrendsChart')?.addEventListener('click', function() { window.downloadChart('visitorTrendsChart', 'Visitor_Trends.png'); });
    document.getElementById('downloadTrafficSourcesChart')?.addEventListener('click', function() { window.downloadChart('trafficSourcesChart', 'Traffic_Sources.png'); });

    // Functionality for "Details" Buttons on Stats Cards (Analytics)
    document.querySelectorAll('.analytics-page .btn-details').forEach(button => {
        button.addEventListener('click', function() {
            const modalTargetId = this.dataset.modalTarget;
            // openModal() is a global function from main.js
            openModal(modalTargetId);

            // --- Placeholder chart initialization for modals on Analytics ---
            if (modalTargetId === 'pageViewsModal') {
                const chartCtx = document.getElementById('pageViewsModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'line',
                        data: {
                            labels: ['Day 1', 'Day 5', 'Day 10', 'Day 15', 'Day 20', 'Day 25', 'Day 30'],
                            datasets: [{
                                label: 'Page Views',
                                data: [5000, 7000, 6000, 8000, 7500, 9000, 10000],
                                borderColor: 'var(--primary)',
                                backgroundColor: 'rgba(90, 103, 216, 0.2)',
                                fill: true, tension: 0.3
                            }]
                        },
                        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { display: false }, y: { display: false } } }
                    });
                }
            }
            if (modalTargetId === 'uniqueVisitorsModal') {
                const chartCtx = document.getElementById('uniqueVisitorsModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'bar',
                        data: {
                            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                            datasets: [{
                                label: 'Unique Visitors',
                                data: [15000, 18000, 17000, 20000],
                                backgroundColor: [
                                    '#A6C48A', // Light Green
                                    '#7EB09B', // Muted Teal
                                    '#5A8D80', // Darker Teal
                                    '#366B62'  // Deep Teal
                                ], // MODIFIED: Various colors for Unique Visitors
                            }]
                        },
                        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { display: false }, y: { display: false } } }
                    });
                }
            }
            if (modalTargetId === 'sessionDurationModal') {
                const chartCtx = document.getElementById('sessionDurationModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'line',
                        data: {
                            labels: ['Day 1', 'Day 10', 'Day 20', 'Day 30'],
                            datasets: [{
                                label: 'Avg. Session Duration',
                                data: [230, 225, 220, 225], // seconds
                                borderColor: 'var(--warning)',
                                backgroundColor: 'rgba(237, 137, 54, 0.2)',
                                fill: true, tension: 0.3
                            }]
                        },
                        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { display: false }, y: { display: false } } }
                    });
                }
            }
            if (modalTargetId === 'bounceRateModal') {
                const chartCtx = document.getElementById('bounceRateModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'bar',
                        data: {
                            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                            datasets: [{
                                label: 'Bounce Rate',
                                data: [45, 46, 45.5, 45.8],
                                backgroundColor: [
                                    '#FFAD60', // Light Orange
                                    '#FF8243', // Orange
                                    '#E0622C', // Dark Orange
                                    '#C1491E'  // Deep Red-Orange
                                ], // MODIFIED: Various colors for Bounce Rate
                            }]
                        },
                        options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { display: false }, y: { display: false } } }
                    });
                }
            }
            if (modalTargetId === 'returningVisitorsModal') {
                const chartCtx = document.getElementById('returningVisitorsModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'doughnut',
                        data: {
                            labels: ['Returning', 'New'],
                            datasets: [{
                                data: [65, 35],
                                backgroundColor: [
                                    '#6C5B7B', // Dark Purple-Gray
                                    '#C06C84'  // Muted Rose
                                ], // MODIFIED: Various colors for Returning Visitors
                                hoverOffset: 4
                            }]
                        },
                        options: { responsive: true, maintainAspectRatio: false, cutout: '70%', plugins: { legend: { display: false } } }
                    });
                }
            }
            if (modalTargetId === 'conversionFunnelModal') {
                const chartCtx = document.getElementById('conversionFunnelModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'bar',
                        data: {
                            labels: ['Add to Cart', 'Checkout Initiated', 'Purchase Completed'],
                            datasets: [{
                                label: 'Conversion Rate %',
                                data: [90, 80, 72],
                                backgroundColor: [
                                    '#4F6D7A', // Blue-Gray
                                    '#7F9A9E', // Lighter Blue-Gray
                                    '#B0BEC5'  // Even Lighter Gray
                                ], // MODIFIED: Various colors for Conversion Funnel
                            }]
                        },
                        options: {
                            responsive: true, maintainAspectRatio: false,
                            plugins: { legend: { display: false } },
                            scales: { 
                                x: { grid: { display: false } }, 
                                y: { beginAtZero: true, max: 100 } 
                            }
                        }
                    });
                }
            }
        });
    });
});