// File: assets/js/products.js

document.addEventListener('DOMContentLoaded', function() {
    // Ensure this is the products page
    if (!document.body.classList.contains('products-page')) {
        return;
    }

    // Functionality for "Details" Buttons on Product Stats Cards (NO CHANGES HERE for chart logic)
    document.querySelectorAll('.products-page .btn-details').forEach(button => {
        button.addEventListener('click', function() {
            const modalTargetId = this.dataset.modalTarget;
            // openModal() is a global function from main.js
            openModal(modalTargetId);

            // --- Chart Initialization for Product Modals (NO CHANGES IN COLOR/TOOLTIP LOGIC) ---
            if (modalTargetId === 'totalProductsModal') {
                const chartCtx = document.getElementById('totalProductsModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'bar',
                        data: {
                            labels: ['Electronics', 'Fashion', 'Home Goods', 'Books', 'Sports & Outdoors'],
                            datasets: [{
                                label: 'Products Count',
                                data: [50, 120, 30, 200, 75],
                                backgroundColor: [
                                    '#FF6384',
                                    '#36A2EB',
                                    '#FFCE56',
                                    '#4BC0C0',
                                    '#9966FF'
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
                                            return `${context.label}: ${context.raw} products`;
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
            if (modalTargetId === 'activeProductsModal') {
                const chartCtx = document.getElementById('activeProductsModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'doughnut',
                        data: {
                            labels: ['Active', 'Inactive'],
                            datasets: [{
                                data: [110, 15],
                                backgroundColor: ['#28A745', '#DC3545'],
                                hoverOffset: 8
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            cutout: '70%',
                            plugins: {
                                legend: {
                                    display: true,
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
                                                label += context.parsed + ' products';
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
            if (modalTargetId === 'inactiveProductsModal') {
                const chartCtx = document.getElementById('inactiveProductsModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'bar',
                        data: {
                            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                            datasets: [{
                                label: 'Inactive Products',
                                data: [16, 15, 15, 15],
                                backgroundColor: [
                                    '#FFC107',
                                    '#FFA000',
                                    '#FFCD38',
                                    '#FF8F00'
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
                                            return `Inactive Products: ${context.raw}`;
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
            if (modalTargetId === 'totalSalesModal') {
                const chartCtx = document.getElementById('totalSalesModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'line',
                        data: {
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                            datasets: [{
                                label: 'Monthly Sales ($)',
                                data: [2500, 3000, 2800, 3200, 3500, 3800],
                                borderColor: '#3182CE',
                                backgroundColor: 'rgba(49, 130, 206, 0.3)',
                                fill: true,
                                tension: 0.4,
                                pointBackgroundColor: '#3182CE',
                                pointBorderColor: '#fff',
                                pointHoverBackgroundColor: '#fff',
                                pointHoverBorderColor: '#3182CE',
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
                                            return `Monthly Sales: $${context.raw}`;
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
            if (modalTargetId === 'averageRatingModal') {
                const chartCtx = document.getElementById('averageRatingModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'bar',
                        data: {
                            labels: ['5 Stars', '4 Stars', '3 Stars', '2 Stars', '1 Star'],
                            datasets: [{
                                label: 'Review Count',
                                data: [300, 150, 40, 7, 3],
                                backgroundColor: [
                                    '#4CAF50',
                                    '#2196F3',
                                    '#FFC107',
                                    '#FF9800',
                                    '#F44336'
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
                                            return `${context.label}: ${context.raw} reviews`;
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
            if (modalTargetId === 'lowStockProductsModal') {
                const chartCtx = document.getElementById('lowStockProductsModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'doughnut',
                        data: {
                            labels: ['Low Stock', 'Sufficient Stock'],
                            datasets: [{
                                data: [5, 120],
                                backgroundColor: ['#E53E3E', '#48BB78'],
                                hoverOffset: 8
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            cutout: '70%',
                            plugins: {
                                legend: {
                                    display: true,
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
                                                label += context.parsed + ' products';
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
        });
    });

    // Add Product Button
    document.querySelector('.products-page .table-header .btn-primary')?.addEventListener('click', function() {
        showToast('A form/modal to add a new product would appear here!', 'info');
    });

    // Functionality for Action Buttons on Products Table (View Images, Edit, Delete)
    const productsTable = document.getElementById('productsTable');
    if (productsTable) {
        productsTable.addEventListener('click', function(event) {
            const targetBtn = event.target.closest('.action-btn');
            if (!targetBtn) return;

            const row = targetBtn.closest('tr');
            if (!row) return;

            // Safely get data attributes
            const productId = row.dataset.productId || '';
            const productName = row.dataset.name || '';
            const productCategory = row.dataset.category || '';
            const productPrice = row.dataset.price || '';
            const productStock = row.dataset.stock || '';
            const productStatus = row.dataset.status || '';
            
            // Handle View Images Button
            if (targetBtn.classList.contains('view-images')) {
                const imageGalleryModal = document.getElementById('imageGalleryModal');
                const galleryProductNameElem = document.getElementById('galleryProductName');
                const galleryImagesContainer = imageGalleryModal?.querySelector('.gallery-images-container');

                if (imageGalleryModal && galleryProductNameElem && galleryImagesContainer) {
                    galleryProductNameElem.textContent = `${productName} Images`;
                    galleryImagesContainer.innerHTML = ''; // Clear previous images

                    // MODIFIED: Use products.jpg directly
                    const imageUrl = 'assets/images/products.jpg'; // Path to your products.jpg 

                    const imgWrapper = document.createElement('div');
                    imgWrapper.classList.add('image-viewer-wrapper');

                    const img = document.createElement('img');
                    img.src = imageUrl;
                    img.alt = productName;
                    imgWrapper.appendChild(img);
                    
                    galleryImagesContainer.appendChild(imgWrapper);
                    
                    // ADDED: Add a note if there's only one image or this is the default image
                    galleryImagesContainer.innerHTML += `<p class="image-source-note" style="text-align: center; color: var(--gray); margin-top: 15px; font-size: 0.85rem;">This is a default product image. Replace with specific product images for a live version.</p>`;

                    openModal('imageGalleryModal');
                } else {
                    console.warn('Image Gallery Modal elements not found.');
                    showToast(`Simulating image gallery for Product: ${productName}.`, 'info');
                }

            // Handle Edit Product Button
            } else if (targetBtn.classList.contains('edit-product')) {
                const editProductModal = document.getElementById('editProductModal');
                if (editProductModal) {
                    // Ensure elements exist before populating
                    const editProductIdDisplay = editProductModal.querySelector('#editProductIdDisplay');
                    const editProductName = editProductModal.querySelector('#editProductName');
                    const editProductCategory = editProductModal.querySelector('#editProductCategory');
                    const editProductPrice = editProductModal.querySelector('#editProductPrice');
                    const editProductStock = editProductModal.querySelector('#editProductStock');
                    const editProductStatus = editProductModal.querySelector('#editProductStatus');
                    const editOriginalProductId = editProductModal.querySelector('#editOriginalProductId');

                    if (editProductIdDisplay) editProductIdDisplay.textContent = productId;
                    if (editProductName) editProductName.value = productName;
                    if (editProductCategory) editProductCategory.value = productCategory;
                    if (editProductPrice) editProductPrice.value = productPrice;
                    if (editProductStock) editProductStock.value = productStock;
                    if (editProductStatus) editProductStatus.value = productStatus;
                    if (editOriginalProductId) editOriginalProductId.value = productId;

                    openModal('editProductModal');
                } else {
                    console.warn('Edit Product Modal not found in products.html.');
                    showToast(`Simulating edit for Product ID: ${productId}.`, 'info');
                }
            
            // Handle Delete Product Button
            } else if (targetBtn.classList.contains('delete-product')) {
                const deleteProductConfirmModal = document.getElementById('deleteProductConfirmModal');
                if (deleteProductConfirmModal) {
                    deleteProductConfirmModal._targetRow = row;
                    const deleteProductIdDisplay = deleteProductConfirmModal.querySelector('#deleteProductIdDisplay');
                    if (deleteProductIdDisplay) deleteProductIdDisplay.textContent = productId;

                    openModal('deleteProductConfirmModal');

                    const confirmDeleteBtn = deleteProductConfirmModal.querySelector('.confirm-delete-product-btn');
                    // Remove old event listener if it exists to prevent duplication
                    const oldConfirmListener = confirmDeleteBtn?._deleteListener;
                    if (oldConfirmListener) {
                        confirmDeleteBtn.removeEventListener('click', oldConfirmListener);
                    }
                    
                    const newConfirmListener = () => {
                        const rowToDelete = deleteProductConfirmModal._targetRow;
                        if(rowToDelete) {
                            rowToDelete.remove();
                            showToast(`Product ID: ${productId} deleted.`, 'success');
                        }
                        closeModal('deleteProductConfirmModal');
                        // Remove the new event listener after it's triggered, and reset its reference
                        confirmDeleteBtn.removeEventListener('click', newConfirmListener);
                        confirmDeleteBtn._deleteListener = null;
                    };
                    confirmDeleteBtn.addEventListener('click', newConfirmListener);
                    confirmDeleteBtn._deleteListener = newConfirmListener; // Store the reference to the new listener
                } else {
                    console.warn('Delete Product Confirm Modal not found in products.html. Using alert fallback.');
                    if (confirm(`Are you sure you want to delete Product ID: ${productId}?`)) {
                        row.remove();
                        showToast(`Product ID: ${productId} deleted.`, 'success');
                    }
                }
            }
        });
    }

    // Handle Edit Product Form Submission
    const editProductForm = document.getElementById('editProductForm');
    if (editProductForm) {
        editProductForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const originalProductId = document.getElementById('editOriginalProductId').value;
            const newName = document.getElementById('editProductName').value;
            const newCategory = document.getElementById('editProductCategory').value;
            const newPrice = document.getElementById('editProductPrice').value;
            const newStock = document.getElementById('editProductStock').value;
            const newStatus = document.getElementById('editProductStatus').value;

            const targetRow = document.querySelector(`#productsTable tr[data-product-id="${originalProductId}"]`);
            if (targetRow) {
                // Update data-attributes
                targetRow.dataset.name = newName;
                targetRow.dataset.category = newCategory;
                targetRow.dataset.price = newPrice;
                targetRow.dataset.stock = newStock;
                targetRow.dataset.status = newStatus;

                // Update displayed text in table cells
                if (targetRow.children[1]) targetRow.children[1].textContent = newName;

                const categoryCell = targetRow.children[2];
                if (categoryCell) {
                    let categorySpan = categoryCell.querySelector('span');
                    if (!categorySpan) { // Create if not exists
                        categorySpan = document.createElement('span');
                        categoryCell.textContent = '';
                        categoryCell.appendChild(categorySpan);
                    }
                    categorySpan.textContent = newCategory;
                }

                if (targetRow.children[3]) targetRow.children[3].textContent = newPrice;
                if (targetRow.children[4]) targetRow.children[4].textContent = newStock;

                const statusCell = targetRow.children[5];
                if (statusCell) {
                    let statusSpan = statusCell.querySelector('.status');
                    if (!statusSpan) {
                        statusSpan = document.createElement('span');
                        statusSpan.className = 'status';
                        statusCell.textContent = '';
                        statusCell.appendChild(statusSpan);
                    }
                    statusSpan.textContent = newStatus;
                    statusSpan.className = 'status'; // Reset classes
                    if (newStatus === 'Active') statusSpan.classList.add('active');
                    else if (newStatus === 'Inactive') statusSpan.classList.add('inactive');
                    else if (newStatus === 'Low Stock') statusSpan.classList.add('pending'); // Use 'pending' if you want specific color for low stock
                }
            }
            closeModal('editProductModal');
            showToast(`Product ${originalProductId} has been updated.`, 'success');
        });
    }
});