// File: assets/js/categories.js

document.addEventListener('DOMContentLoaded', function() {
    /// Ensure this is the categories page

    if (!document.body.classList.contains('categories-page')) {
        return;
    }

    // Functionality for "Details" Buttons on Category Stats Cards
    document.querySelectorAll('.categories-page .btn-details').forEach(button => {
        button.addEventListener('click', function() {
            const modalTargetId = this.dataset.modalTarget;
            // openModal() is a global function from main.js
            openModal(modalTargetId);

            // --- Chart Initialization for Modals on Categories Page ---
            if (modalTargetId === 'totalCategoriesModal') {
                const chartCtx = document.getElementById('totalCategoriesModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'doughnut',
                        data: {
                            labels: ['Main Categories', 'Sub Categories'],
                            datasets: [{
                                data: [10, 5], // Example: 10 main, 5 sub
                                backgroundColor: ['#5a67d8', '#38b2ac'], // Primary & Secondary colors
                                hoverOffset: 8
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            cutout: '70%',
                            plugins: {
                                legend: {
                                    display: true, // Show legend
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
                                                label += context.parsed + ' categories';
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
            if (modalTargetId === 'newCategoriesModal') {
                const chartCtx = document.getElementById('newCategoriesModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'bar',
                        data: {
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                            datasets: [{
                                label: 'New Categories Added',
                                data: [1, 0, 2, 0, 3, 1],
                                backgroundColor: [
                                    '#48BB78', // Success
                                    '#A0AEC0', // Gray (for zero value)
                                    '#48BB78',
                                    '#A0AEC0',
                                    '#48BB78',
                                    '#48BB78'
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
                                            return `New Categories: ${context.raw}`;
                                        }
                                    }
                                }
                            },
                            scales: {
                                x: { display: true, ticks: { color: 'var(--gray)' } }, // Show X axis labels
                                y: { beginAtZero: true, display: true, ticks: { color: 'var(--gray)' } } // Show Y axis labels
                            }
                        }
                    });
                }
            }
            if (modalTargetId === 'topCategoriesModal') {
                const chartCtx = document.getElementById('topCategoriesModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'pie',
                        data: {
                            labels: ['Electronics', 'Apparel', 'Home Goods', 'Books', 'Sports & Outdoors'],
                            datasets: [{
                                data: [40, 25, 20, 10, 5],
                                backgroundColor: [
                                    '#5a67d8', // Primary
                                    '#38b2ac', // Secondary
                                    '#ed8936', // Warning
                                    '#e53e3e', // Danger
                                    '#3182ce'  // Info
                                ],
                                hoverOffset: 8
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
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
                                                label += context.parsed + '% Revenue';
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
            if (modalTargetId === 'trendingCategoriesModal') {
                const chartCtx = document.getElementById('trendingCategoriesModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'line',
                        data: {
                            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'], // Added a week for more data
                            datasets: [{
                                label: 'Trend Score',
                                data: [70, 75, 80, 85, 90],
                                borderColor: '#3182ce', // Info color
                                backgroundColor: 'rgba(49, 130, 206, 0.3)',
                                fill: true,
                                tension: 0.4, // Smoother line
                                pointBackgroundColor: '#3182ce',
                                pointBorderColor: '#fff',
                                pointHoverBackgroundColor: '#fff',
                                pointHoverBorderColor: '#3182ce',
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
                                            return `Trend Score: ${context.raw}`;
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
            if (modalTargetId === 'categorizedProductsModal') {
                const chartCtx = document.getElementById('categorizedProductsModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'doughnut',
                        data: {
                            labels: ['Categorized', 'Uncategorized'],
                            datasets: [{
                                data: [80, 20],
                                backgroundColor: ['#38b2ac', '#a0aec0'], // Secondary & Gray
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
                                                label += context.parsed + '%';
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
            if (modalTargetId === 'categoriesReviewModal') {
                const chartCtx = document.getElementById('categoriesReviewModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'bar',
                        data: {
                            labels: ['Outdated Products', 'Low Sales Volume'], // More descriptive labels
                            datasets: [{
                                label: 'Categories to Review',
                                data: [15, 5],
                                backgroundColor: [
                                    '#e53e3e', // Danger
                                    '#ed8936'  // Warning
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
                                            return `${context.label}: ${context.raw} categories`;
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

    // Add Category Button
    document.getElementById('addCategoryBtn')?.addEventListener('click', function() {
        // showToast() is a global function from main.js
        showToast('A form/modal to add a new category would appear here!', 'info');
    });

    // Functionality for Action Buttons on Category Table (View/Edit/Delete/Toggle Description)
    const categoriesTable = document.getElementById('categoriesTable');
    if (categoriesTable) {
        categoriesTable.addEventListener('click', function(event) {
            const targetBtn = event.target.closest('.action-btn');
            if (!targetBtn) return;

            const row = targetBtn.closest('tr');
            if (!row) return;

            // Safely get data attributes
            const categoryId = row.dataset.categoryId || '';
            const name = row.dataset.name || '';
            const totalProducts = row.dataset.totalProducts || '';
            const lastUpdated = row.dataset.lastUpdated || '';
            const description = row.dataset.description || '';
            // Get the *next* sibling row which is the description row
            const descriptionRow = row.nextElementSibling; 

            // Handle View Category Button
            if (targetBtn.classList.contains('view-category')) {
                // Ensure elements exist before populating
                const viewCategoryId = document.getElementById('viewCategoryId');
                const viewCategoryName = document.getElementById('viewCategoryName');
                const viewCategoryTotalProducts = document.getElementById('viewCategoryTotalProducts');
                const viewCategoryLastUpdated = document.getElementById('viewCategoryLastUpdated');
                const viewCategoryDescription = document.getElementById('viewCategoryDescription');

                if (viewCategoryId) viewCategoryId.textContent = categoryId;
                if (viewCategoryName) viewCategoryName.textContent = name;
                if (viewCategoryTotalProducts) viewCategoryTotalProducts.textContent = totalProducts;
                if (viewCategoryLastUpdated) viewCategoryLastUpdated.textContent = lastUpdated;
                if (viewCategoryDescription) viewCategoryDescription.textContent = description;
                
                // openModal() is a global function from main.js
                openModal('viewCategoryModal');
            // Handle Edit Category Button
            } else if (targetBtn.classList.contains('edit-category')) {
                // Ensure elements exist before populating
                const editCategoryIdDisplay = document.getElementById('editCategoryIdDisplay');
                const editCategoryName = document.getElementById('editCategoryName');
                const editCategoryTotalProducts = document.getElementById('editCategoryTotalProducts');
                const editCategoryLastUpdated = document.getElementById('editCategoryLastUpdated');
                const editCategoryDescription = document.getElementById('editCategoryDescription');
                const editOriginalCategoryId = document.getElementById('editOriginalCategoryId');

                if (editCategoryIdDisplay) editCategoryIdDisplay.textContent = categoryId;
                if (editCategoryName) editCategoryName.value = name;
                if (editCategoryTotalProducts) editCategoryTotalProducts.value = totalProducts;
                if (editCategoryLastUpdated) editCategoryLastUpdated.value = lastUpdated;
                if (editCategoryDescription) editCategoryDescription.value = description;
                if (editOriginalCategoryId) editOriginalCategoryId.value = categoryId;
                
                openModal('editCategoryModal');
            // Handle Delete Category Button
            } else if (targetBtn.classList.contains('delete-category')) {
                const deleteCategoryConfirmModal = document.getElementById('deleteCategoryConfirmModal');
                if (deleteCategoryConfirmModal) {
                    deleteCategoryConfirmModal._targetRow = row;
                    deleteCategoryConfirmModal._descriptionRow = descriptionRow; // Store description row too
                    
                    const deleteCategoryIdDisplay = deleteCategoryConfirmModal.querySelector('#deleteCategoryIdDisplay');
                    if (deleteCategoryIdDisplay) deleteCategoryIdDisplay.textContent = categoryId;

                    openModal('deleteCategoryConfirmModal');

                    const confirmDeleteBtn = deleteCategoryConfirmModal.querySelector('.confirm-delete-category-btn');
                    // Remove old event listener if it exists to prevent duplication
                    const oldConfirmListener = confirmDeleteBtn?._deleteListener;
                    if (oldConfirmListener) {
                        confirmDeleteBtn.removeEventListener('click', oldConfirmListener);
                    }
                    const newConfirmListener = () => {
                        const rowToDelete = document.getElementById('deleteCategoryConfirmModal')._targetRow;
                        const descRowToDelete = document.getElementById('deleteCategoryConfirmModal')._descriptionRow;
                        if(rowToDelete) {
                             rowToDelete.remove();
                             if (descRowToDelete) {
                                descRowToDelete.remove(); // Remove description row if it exists
                            }
                        }
                        closeModal('deleteCategoryConfirmModal');
                        // showToast() is a global function from main.js
                        showToast(`Category ${categoryId} has been deleted.`, 'success');
                        confirmDeleteBtn.removeEventListener('click', newConfirmListener);
                        confirmDeleteBtn._deleteListener = null;
                        document.getElementById('deleteCategoryConfirmModal')._targetRow = null; // Clear stored reference
                        document.getElementById('deleteCategoryConfirmModal')._descriptionRow = null; // Clear stored reference
                    };
                    confirmDeleteBtn.addEventListener('click', newConfirmListener);
                    confirmDeleteBtn._deleteListener = newConfirmListener;
                } else {
                    console.warn('Delete Category Confirm Modal not found in categories.html.');
                    if (confirm(`Are you sure you want to delete Category ID: ${categoryId}?`)) {
                        row.remove();
                        // If descriptionRow also exists, remove it in fallback as well
                        if (descriptionRow && descriptionRow.classList.contains('category-description-row')) {
                            descriptionRow.remove();
                        }
                        showToast(`Category ${categoryId} has been deleted.`, 'success');
                    }
                }
            // Handle Toggle Description Button
            } else if (targetBtn.classList.contains('toggle-description-btn')) {
                // translations[currentLanguage] comes from global main.js
                // Ensure translations are available
                const categoriesShowDescription = window.translations?.[window.currentLanguage]?.['categoriesShowDescription'] || 'Show Description';
                const categoriesHideDescription = window.translations?.[window.currentLanguage]?.['categoriesHideDescription'] || 'Hide Description';

                if (descriptionRow && descriptionRow.classList.contains('category-description-row')) {
                    const isShowing = descriptionRow.classList.toggle('show-description');
                    targetBtn.textContent = isShowing ? categoriesHideDescription : categoriesShowDescription;
                    
                    // Toggle button styles based on visibility
                    if (isShowing) {
                         targetBtn.classList.remove('btn-primary');
                         targetBtn.classList.add('btn-secondary'); // Change to secondary style when description is shown
                     } else {
                         targetBtn.classList.remove('btn-secondary');
                         targetBtn.classList.add('btn-primary'); // Change back to primary style when description is hidden
                     }
                } else {
                    console.warn("No description row found for this category or it's not correctly structured.");
                    showToast("No detailed description available.", 'info');
                }
            }
        });
    }

    // Handle Edit Category Form Submission
    const editCategoryForm = document.getElementById('editCategoryForm');
    if (editCategoryForm) {
        editCategoryForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const originalCategoryId = document.getElementById('editOriginalCategoryId').value;
            const newName = document.getElementById('editCategoryName').value;
            const newTotalProducts = document.getElementById('editCategoryTotalProducts').value;
            const newLastUpdated = document.getElementById('editCategoryLastUpdated').value;
            const newDescription = document.getElementById('editCategoryDescription').value;

            const targetRow = document.querySelector(`#categoriesTable tr[data-category-id="${originalCategoryId}"]`);
            if (targetRow) {
                // Update data attributes
                targetRow.dataset.name = newName;
                targetRow.dataset.totalProducts = newTotalProducts;
                targetRow.dataset.lastUpdated = newLastUpdated;
                targetRow.dataset.description = newDescription;

                // Update displayed text
                if (targetRow.children[1]) {
                    const categoryNameSpan = targetRow.children[1].querySelector('span[data-lang-key]');
                    if (categoryNameSpan) {
                         // If it's a translated span, we need to map it back or handle it differently
                         // For now, directly setting textContent
                         categoryNameSpan.textContent = newName;
                         // A more robust solution for translated text would be to update the translation object
                         // and then call setLanguage() again if needed, but that's beyond simple form submission.
                    } else {
                         targetRow.children[1].textContent = newName;
                    }
                }
                if (targetRow.children[2]) targetRow.children[2].textContent = newTotalProducts;
                if (targetRow.children[3]) targetRow.children[3].textContent = newLastUpdated;

                // Update the corresponding description row if it exists
                // This assumes the description row is the immediate sibling and has a `data-category` matching the new name.
                // It's safer to query for the description row based on its relationship to the main row.
                const updatedDescriptionRow = targetRow.nextElementSibling;
                if (updatedDescriptionRow && updatedDescriptionRow.classList.contains('category-description-row')) {
                    const descPElement = updatedDescriptionRow.querySelector('p');
                    if (descPElement) {
                        descPElement.textContent = newDescription;
                        // Also update data-category for consistency, though not strictly needed for this JS
                        updatedDescriptionRow.dataset.category = newName.toLowerCase().replace(/ & /g, '').replace(/ /g, '');
                    }
                }
            }

            closeModal('editCategoryModal');
            showToast(`Category ${originalCategoryId} has been updated.`, 'success');
        });
    }
});