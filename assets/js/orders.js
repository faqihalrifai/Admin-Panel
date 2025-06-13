// File: assets/js/orders.js

document.addEventListener('DOMContentLoaded', function() {
    // Ensure this is the orders page
    if (!document.body.classList.contains('orders-page')) {
        return;
    }

    const filterButtons = document.querySelectorAll('.order-filters-group .filter-btn');
    const ordersTable = document.getElementById('ordersTable');

    if (filterButtons.length > 0 && ordersTable) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                const statusToFilter = this.dataset.status;
                const tableRows = ordersTable.querySelectorAll('tbody tr');
                tableRows.forEach(row => {
                    const rowStatus = row.dataset.status;
                    if (statusToFilter === 'all' || rowStatus === statusToFilter) {
                        row.style.display = ''; // Show row
                    } else {
                        row.style.display = 'none'; // Hide row
                    }
                });
                // showToast() is a global function from main.js
                showToast(`Orders filtered by: ${statusToFilter}`, 'info');
            });
        });
    }

    // Functionality for "Details" Buttons on Orders Stats Cards
    document.querySelectorAll('.orders-page .btn-details').forEach(button => {
        button.addEventListener('click', function() {
            const modalTargetId = this.dataset.modalTarget;
            // openModal() is a global function from main.js
            openModal(modalTargetId);

            // --- Enhanced Chart Display for Modals on Orders Page ---
            if (modalTargetId === 'newOrdersModal') {
                const chartCtx = document.getElementById('newOrdersModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'bar',
                        data: {
                            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
                            datasets: [{
                                label: 'New Orders',
                                data: [5, 8, 7, 10, 6],
                                backgroundColor: [
                                    '#FF6384', // Pink
                                    '#36A2EB', // Blue
                                    '#FFCE56', // Yellow
                                    '#4BC0C0', // Teal
                                    '#9966FF'  // Purple
                                ],
                                borderColor: 'transparent',
                                borderWidth: 1
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: { display: false },
                                tooltip: {
                                    callbacks: {
                                        label: function(context) {
                                            return `New Orders: ${context.raw}`;
                                        }
                                    }
                                }
                            },
                            scales: {
                                x: { display: true, ticks: { color: 'var(--gray)' } }, // Show day labels
                                y: { beginAtZero: true, display: true, ticks: { color: 'var(--gray)' } } // Show y values
                            }
                        }
                    });
                }
            }
            if (modalTargetId === 'completedOrdersModal') {
                const chartCtx = document.getElementById('completedOrdersModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'line',
                        data: {
                            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                            datasets: [{
                                label: 'Completed Orders',
                                data: [100, 110, 105, 120],
                                borderColor: '#28a745', // Green color
                                backgroundColor: 'rgba(72, 187, 120, 0.3)',
                                fill: true,
                                tension: 0.4, // Smoother line
                                pointBackgroundColor: '#28a745', // Point color
                                pointBorderColor: '#fff',
                                pointHoverBackgroundColor: '#fff',
                                pointHoverBorderColor: '#28a745',
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: { display: false },
                                tooltip: {
                                    callbacks: {
                                        label: function(context) {
                                            return `Completed Orders: ${context.raw}`;
                                        }
                                    }
                                }
                            },
                            scales: {
                                x: { display: true, ticks: { color: 'var(--gray)' } },
                                y: { beginAtZero: true, display: true, ticks: { color: 'var(--gray)' } }
                            }
                        }
                    });
                }
            }
            if (modalTargetId === 'pendingOrdersModal') {
                const chartCtx = document.getElementById('pendingOrdersModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'bar',
                        data: {
                            labels: ['New Pending', 'Old Pending'],
                            datasets: [{
                                label: 'Pending Orders',
                                data: [15, 10], // Data aligned with the modal
                                backgroundColor: [
                                    '#FFD700', // Gold Yellow
                                    '#FFA500'  // Orange
                                ],
                                borderColor: 'transparent',
                                borderWidth: 1
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: { display: false },
                                tooltip: {
                                    callbacks: {
                                        label: function(context) {
                                            return `${context.label}: ${context.raw}`;
                                        }
                                    }
                                }
                            },
                            scales: {
                                x: { display: true, ticks: { color: 'var(--gray)' } },
                                y: { beginAtZero: true, display: true, ticks: { color: 'var(--gray)' } }
                            }
                        }
                    });
                }
            }
            if (modalTargetId === 'cancelledOrdersModal') {
                const chartCtx = document.getElementById('cancelledOrdersModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'pie',
                        data: {
                            labels: ['Customer Request', 'Out of Stock', 'Other Reasons'], // Clearer labels
                            datasets: [{
                                data: [60, 30, 10], // Example percentage
                                backgroundColor: [
                                    '#E53E3E', // Red (Danger)
                                    '#FD7F20', // Orange (slightly different from warning)
                                    '#A0AEC0'  // (Gray)
                                ],
                                hoverOffset: 8
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    display: true, // Show Legend
                                    position: 'bottom',
                                    labels: {
                                        color: 'var(--text-color)'
                                    }
                                },
                                tooltip: {
                                    callbacks: {
                                        label: function(context) {
                                            let label = context.label || '';
                                            if (label) {
                                                label += ': ';
                                            }
                                            if (context.parsed) {
                                                label += context.parsed + '%'; // Show Percentage
                                            }
                                            return label;
                                        }
                                    }
                                }
                            }
                        }
                    });
                }
            }
            if (modalTargetId === 'inTransitOrdersModal') {
                const chartCtx = document.getElementById('inTransitOrdersModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'line',
                        data: {
                            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'],
                            datasets: [{
                                label: 'Orders in Transit',
                                data: [15, 12, 10, 8, 5],
                                borderColor: '#5a67d8', // primary color
                                backgroundColor: 'rgba(90, 103, 216, 0.3)',
                                fill: true,
                                tension: 0.4,
                                pointBackgroundColor: '#5a67d8',
                                pointBorderColor: '#fff',
                                pointHoverBackgroundColor: '#fff',
                                pointHoverBorderColor: '#5a67d8',
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: { display: false },
                                tooltip: {
                                    callbacks: {
                                        label: function(context) {
                                            return `Orders in Transit: ${context.raw}`;
                                        }
                                    }
                                }
                            },
                            scales: {
                                x: { display: true, ticks: { color: 'var(--gray)' } },
                                y: { beginAtZero: true, display: true, ticks: { color: 'var(--gray)' } }
                            }
                        }
                    });
                }
            }
            if (modalTargetId === 'refundedOrdersModal') {
                const chartCtx = document.getElementById('refundedOrdersModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'bar',
                        data: {
                            labels: ['Defective Item', 'Dissatisfaction', 'Other'],
                            datasets: [{
                                label: 'Refund Reasons',
                                data: [1, 0.5, 0.5], // Example refund count data
                                backgroundColor: [
                                    '#6A5ACD', // SlateBlue
                                    '#8A2BE2', // BlueViolet
                                    '#DDA0DD'  // Plum
                                ],
                                borderColor: 'transparent',
                                borderWidth: 1
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: { display: false },
                                tooltip: {
                                    callbacks: {
                                        label: function(context) {
                                            return `${context.label}: ${context.raw} order(s)`;
                                        }
                                    }
                                }
                            },
                            scales: {
                                x: { display: true, ticks: { color: 'var(--gray)' } },
                                y: { beginAtZero: true, display: true, ticks: { color: 'var(--gray)' } }
                            }
                        }
                    });
                }
            }
        });
    });

    // Functionality for Action Buttons on Orders Table (View/Edit/Delete)
    const ordersTableActions = document.getElementById('ordersTable');
    if (ordersTableActions) {
        ordersTableActions.addEventListener('click', function(event) {
            const targetBtn = event.target.closest('.action-btn');
            if (!targetBtn) return;
            const row = targetBtn.closest('tr');
            if (!row) return;

            const orderId = row.dataset.orderId;
            const customer = row.dataset.customer;
            const product = row.dataset.product;
            const amount = row.dataset.amount;
            const date = row.dataset.date;
            const status = row.dataset.status;

            if (targetBtn.classList.contains('view-order')) {
                // Ensure these elements exist before setting textContent
                const viewOrderId = document.getElementById('viewOrderId');
                const viewOrderCustomer = document.getElementById('viewOrderCustomer');
                const viewOrderDate = document.getElementById('viewOrderDate');
                const viewOrderAmount = document.getElementById('viewOrderAmount');
                const viewOrderStatus = document.getElementById('viewOrderStatus');
                const viewOrderProduct = document.getElementById('viewOrderProduct');

                if (viewOrderId) viewOrderId.textContent = orderId;
                if (viewOrderCustomer) viewOrderCustomer.textContent = customer;
                if (viewOrderDate) viewOrderDate.textContent = date;
                if (viewOrderAmount) viewOrderAmount.textContent = amount;
                if (viewOrderStatus) viewOrderStatus.textContent = status;
                if (viewOrderProduct) viewOrderProduct.textContent = product;
                
                openModal('viewOrderModal');
            } else if (targetBtn.classList.contains('edit-order')) {
                // Ensure these elements exist before setting value/textContent
                const editOrderIdDisplay = document.getElementById('editOrderIdDisplay');
                const editCustomer = document.getElementById('editCustomer');
                const editProduct = document.getElementById('editProduct');
                const editAmount = document.getElementById('editAmount');
                const editDate = document.getElementById('editDate');
                const editStatus = document.getElementById('editStatus');
                const editOriginalOrderId = document.getElementById('editOriginalOrderId');

                if (editOrderIdDisplay) editOrderIdDisplay.textContent = orderId;
                if (editCustomer) editCustomer.value = customer;
                if (editProduct) editProduct.value = product;
                if (editAmount) editAmount.value = amount;
                if (editDate) editDate.value = date;
                if (editStatus) editStatus.value = status;
                if (editOriginalOrderId) editOriginalOrderId.value = orderId;
                
                openModal('editOrderModal');
            } else if (targetBtn.classList.contains('delete-order')) {
                const deleteConfirmModal = document.getElementById('deleteConfirmModal');
                const deleteOrderIdDisplay = document.getElementById('deleteOrderIdDisplay');

                if (deleteConfirmModal) deleteConfirmModal._targetRow = row;
                if (deleteOrderIdDisplay) deleteOrderIdDisplay.textContent = orderId;
                
                openModal('deleteConfirmModal');
                const confirmDeleteBtn = document.querySelector('#deleteConfirmModal .confirm-delete-btn');
                const oldConfirmListener = confirmDeleteBtn._deleteListener;
                if (oldConfirmListener) confirmDeleteBtn.removeEventListener('click', oldConfirmListener);
                const newConfirmListener = () => {
                    const rowToDelete = document.getElementById('deleteConfirmModal')._targetRow;
                    if(rowToDelete) rowToDelete.remove();
                    closeModal('deleteConfirmModal');
                    showToast(`Order ${orderId} has been deleted.`, 'success');
                    confirmDeleteBtn.removeEventListener('click', newConfirmListener);
                    confirmDeleteBtn._deleteListener = null;
                };
                confirmDeleteBtn.addEventListener('click', newConfirmListener);
                confirmDeleteBtn._deleteListener = newConfirmListener;
            }
        });
    }

    // Handle Edit Order Form Submission (Orders Page specific table)
    const editOrderFormOrdersPage = document.getElementById('editOrderForm');
    if (editOrderFormOrdersPage) {
        editOrderFormOrdersPage.addEventListener('submit', function(event) {
            event.preventDefault();
            const originalOrderId = document.getElementById('editOriginalOrderId').value;
            const newCustomer = document.getElementById('editCustomer').value;
            const newProduct = document.getElementById('editProduct').value;
            const newAmount = document.getElementById('editAmount').value;
            const newDate = document.getElementById('editDate').value;
            const newStatus = document.getElementById('editStatus').value;
            const targetRow = document.querySelector(`#ordersTable tr[data-order-id="${originalOrderId}"]`);
            if (targetRow) {
                targetRow.dataset.customer = newCustomer;
                targetRow.dataset.product = newProduct;
                targetRow.dataset.amount = newAmount;
                targetRow.dataset.date = newDate;
                targetRow.dataset.status = newStatus;

                // Ensure element exists before updating textContents
                if (targetRow.children[1]) targetRow.children[1].textContent = newCustomer;
                if (targetRow.children[2]) targetRow.children[2].textContent = newProduct;
                if (targetRow.children[3]) targetRow.children[3].textContent = newAmount;
                if (targetRow.children[4]) targetRow.children[4].textContent = newDate;

                const statusCell = targetRow.children[5];
                if (statusCell) {
                    const statusSpan = statusCell.querySelector('.status');
                    if (statusSpan) {
                        statusSpan.textContent = newStatus;
                        statusSpan.className = 'status'; // Reset class
                        if (newStatus === 'Completed') statusSpan.classList.add('completed');
                        else if (newStatus === 'Pending') statusSpan.classList.add('pending');
                        else if (newStatus === 'Processing') statusSpan.classList.add('processing');
                    }
                }
            }
            closeModal('editOrderModal');
            showToast(`Order ${originalOrderId} has been updated.`, 'success');
        });
    }
});