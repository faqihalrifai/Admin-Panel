// File: assets/js/users.js

document.addEventListener('DOMContentLoaded', function() {
    // Ensure this is the users page
    if (!document.body.classList.contains('users-page')) {
        return;
    }

    // Functionality for "Details" Buttons on User Stats Cards
    document.querySelectorAll('.users-page .btn-details').forEach(button => {
        button.addEventListener('click', function() {
            const modalTargetId = this.dataset.modalTarget;
            // openModal() is a global function from main.js
            openModal(modalTargetId);

            // --- Chart Initialization for Modals on Users Page ---
            // Data and colors adjusted to be more diverse and informative
            if (modalTargetId === 'newUsersModal') {
                const chartCtx = document.getElementById('newUsersModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'line',
                        data: {
                            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                            datasets: [{
                                label: 'New Users',
                                data: [10, 15, 12, 13],
                                borderColor: 'var(--primary)',
                                backgroundColor: 'rgba(90, 103, 216, 0.3)', // Transparent color for area under the line
                                fill: true,
                                tension: 0.4 // Smoother line
                            }] // Corrected: This bracket was missing its closing pair.
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: { display: false },
                                tooltip: { // More detailed tooltip
                                    callbacks: {
                                        label: function(context) {
                                            return `New Users: ${context.raw}`;
                                        }
                                    }
                                }
                            },
                            scales: {
                                x: { display: false }, // X axis not displayed
                                y: { beginAtZero: true, display: false } // Y axis starts from zero and is not displayed
                            }
                        }
                    });
                }
            }
            if (modalTargetId === 'adminUsersModal') {
                const chartCtx = document.getElementById('adminUsersModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'doughnut',
                        data: {
                            labels: ['Super Admin', 'Content Admin', 'Order Manager'],
                            datasets: [{
                                data: [2, 2, 1], // Example distribution of 5 admins
                                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // Bright and varied colors
                                hoverOffset: 8
                            }]
                        },
                        options: {
                            responsive: true,
                            maintainAspectRatio: false,
                            cutout: '70%',
                            plugins: {
                                legend: {
                                    display: true, // Show legend to explain colors
                                    position: 'bottom',
                                    labels: {
                                        color: 'var(--text-color)'
                                    }
                                },
                                tooltip: { // More detailed tooltip
                                    callbacks: {
                                        label: function(context) {
                                            let label = context.label || '';
                                            if (label) {
                                                label += ': ';
                                            }
                                            if (context.parsed) {
                                                label += context.parsed;
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
            if (modalTargetId === 'inactiveUsersModal') {
                const chartCtx = document.getElementById('inactiveUsersModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'bar',
                        data: {
                            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
                            datasets: [{
                                label: 'Inactive Users',
                                data: [12, 11, 10, 10],
                                backgroundColor: [
                                    '#FF9900', // Orange
                                    '#CC6600', // Darker orange
                                    '#FFCC66', // Lighter orange
                                    '#FF8000'  // Medium orange
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
                                            return `Inactive Users: ${context.raw}`;
                                        }
                                    }
                                }
                            },
                            scales: {
                                x: { display: false },
                                y: { beginAtZero: true, display: false }
                            }
                        }
                    });
                }
            }
            if (modalTargetId === 'activeUsersModal') {
                const chartCtx = document.getElementById('activeUsersModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'pie',
                        data: {
                            labels: ['Active Users', 'Inactive Users'],
                            datasets: [{
                                data: [75, 25],
                                backgroundColor: ['#4CAF50', '#FFC107'], // Green for active, Yellow for inactive
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
            if (modalTargetId === 'subscribedUsersModal') {
                const chartCtx = document.getElementById('subscribedUsersModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'line',
                        data: {
                            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                            datasets: [{
                                label: 'Subscribed Users',
                                data: [180, 190, 195, 200, 210, 205], // Data updated
                                borderColor: '#9C27B0', // Purple
                                backgroundColor: 'rgba(156, 39, 176, 0.3)',
                                fill: true,
                                tension: 0.4
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
                                            return `Subscribed Users: ${context.raw}`;
                                        }
                                    }
                                }
                            },
                            scales: {
                                x: { display: true, ticks: { color: 'var(--gray)' } }, // Display X axis so months are visible
                                y: { beginAtZero: true, display: false }
                            }
                        }
                    });
                }
            }
            if (modalTargetId === 'pendingVerificationModal') {
                const chartCtx = document.getElementById('pendingVerificationModalChart');
                if (chartCtx) {
                    const existingChart = Chart.getChart(chartCtx);
                    if (existingChart) existingChart.destroy();
                    new Chart(chartCtx, {
                        type: 'bar',
                        data: {
                            labels: ['Email Verification', 'Phone Verification', 'Manual Review'], // More specific labels
                            datasets: [{
                                label: 'Pending Verifications',
                                data: [2, 1, 0], // Example distribution, can be adjusted
                                backgroundColor: [
                                    '#F44336', // Red for Email
                                    '#2196F3', // Blue for Phone
                                    '#607D8B'  // Gray for Manual (if any)
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
                                tooltip:
                                { // More detailed tooltip
                                    callbacks: {
                                        label: function(context) {
                                            return `${context.label}: ${context.raw}`;
                                        }
                                    }
                                }
                            },
                            scales: {
                                x: { display: true, ticks: { color: 'var(--gray)' } }, // Show X axis
                                y: { beginAtZero: true, display: false }
                            }
                        }
                    });
                }
            }
        });
    });

    // Add User Button
    document.getElementById('addUserBtn')?.addEventListener('click', function() {
        // showToast() is a global function from main.js
        showToast('A form/modal to add a new user would appear here!', 'info');
        // Or, if you have an actual Add User modal, call:
        // openModal('addUserModal'); // example
    });

    // User Role Tags (Clickable - simulated action)
    const roleTags = document.querySelectorAll('.role-tag');
    if (roleTags.length > 0) {
        roleTags.forEach(tag => {
            tag.addEventListener('click', function() {
                const role = this.dataset.role;
                // showToast() is a global function from main.js
                showToast(`Simulating filter or details for role: ${role.charAt(0).toUpperCase() + role.slice(1)}`, 'info');
            });
        });
    }

    // Functionality for Action Buttons on Users Table (View/Edit/Delete)
    const usersTable = document.getElementById('usersTable');
    if (usersTable) {
        usersTable.addEventListener('click', function(event) {
            const targetBtn = event.target.closest('.action-btn');
            if (!targetBtn) return;
            const row = targetBtn.closest('tr');
            if (!row) return;

            const userId = row.dataset.userId;
            const name = row.dataset.name;
            const email = row.dataset.email;
            const role = row.dataset.role;
            const status = row.dataset.status;
            const registeredDate = row.dataset.registeredDate;

            if (targetBtn.classList.contains('view-user')) {
                // Check for element existence before setting textContent
                const viewUserId = document.getElementById('viewUserId');
                const viewUserName = document.getElementById('viewUserName');
                const viewUserEmail = document.getElementById('viewUserEmail');
                const viewUserRole = document.getElementById('viewUserRole');
                const viewUserStatus = document.getElementById('viewUserStatus');
                const viewUserRegisteredDate = document.getElementById('viewUserRegisteredDate');

                if (viewUserId) viewUserId.textContent = userId;
                if (viewUserName) viewUserName.textContent = name;
                if (viewUserEmail) viewUserEmail.textContent = email;
                if (viewUserRole) viewUserRole.textContent = role;
                if (viewUserStatus) viewUserStatus.textContent = status;
                if (viewUserRegisteredDate) viewUserRegisteredDate.textContent = registeredDate;

                openModal('viewUserModal');
            } else if (targetBtn.classList.contains('edit-user')) {
                // Check for element existence before setting value/textContent
                const editUserIdDisplay = document.getElementById('editUserIdDisplay');
                const editUserName = document.getElementById('editUserName');
                const editUserEmail = document.getElementById('editUserEmail');
                const editUserRole = document.getElementById('editUserRole');
                const editUserStatus = document.getElementById('editUserStatus');
                const editOriginalUserId = document.getElementById('editOriginalUserId');

                if (editUserIdDisplay) editUserIdDisplay.textContent = userId;
                if (editUserName) editUserName.value = name;
                if (editUserEmail) editUserEmail.value = email;
                if (editUserRole) editUserRole.value = role;
                if (editUserStatus) editUserStatus.value = status;
                if (editOriginalUserId) editOriginalUserId.value = userId;

                openModal('editUserModal');
            } else if (targetBtn.classList.contains('delete-user')) {
                const deleteUserConfirmModal = document.getElementById('deleteUserConfirmModal');
                const deleteUserIdDisplay = document.getElementById('deleteUserIdDisplay');

                if (deleteUserConfirmModal) deleteUserConfirmModal._targetRow = row;
                if (deleteUserIdDisplay) deleteUserIdDisplay.textContent = userId;

                openModal('deleteUserConfirmModal');

                const confirmDeleteUserBtn = document.querySelector('#deleteUserConfirmModal .confirm-delete-user-btn');
                // Remove old event listener if it exists to prevent duplication
                const oldConfirmListener = confirmDeleteUserBtn?._deleteListener; // Use optional chaining
                if (oldConfirmListener) {
                    confirmDeleteUserBtn.removeEventListener('click', oldConfirmListener);
                }
                const newConfirmListener = () => {
                    const rowToDelete = document.getElementById('deleteUserConfirmModal')._targetRow;
                    if(rowToDelete) rowToDelete.remove();
                    closeModal('deleteUserConfirmModal');
                    // showToast() is a global function from main.js
                    showToast(`User ${userId} has been deleted.`, 'success');
                    // Remove the new event listener after it's triggered, and reset the reference
                    confirmDeleteUserBtn.removeEventListener('click', newConfirmListener);
                    confirmDeleteUserBtn._deleteListener = null;
                };
                confirmDeleteUserBtn.addEventListener('click', newConfirmListener);
                confirmDeleteUserBtn._deleteListener = newConfirmListener; // Store reference to the new listener
            }
        });
    }

    // Handle Edit User Form Submission
    const editUserForm = document.getElementById('editUserForm');
    if (editUserForm) {
        editUserForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const originalUserId = document.getElementById('editOriginalUserId').value;
            const newName = document.getElementById('editUserName').value;
            const newEmail = document.getElementById('editUserEmail').value;
            const newRole = document.getElementById('editUserRole').value;
            const newStatus = document.getElementById('editUserStatus').value;

            const targetRow = document.querySelector(`#usersTable tr[data-user-id="${originalUserId}"]`);
            if (targetRow) {
                targetRow.dataset.name = newName;
                targetRow.dataset.email = newEmail;
                targetRow.dataset.role = newRole;
                targetRow.dataset.status = newStatus;

                if (targetRow.children[1]) targetRow.children[1].textContent = newName;
                if (targetRow.children[2]) targetRow.children[2].textContent = newEmail;

                const roleCell = targetRow.children[3];
                if (roleCell) {
                    let roleSpan = roleCell.querySelector('.role-tag');
                    if (!roleSpan) { // Create if not exists
                        roleSpan = document.createElement('span');
                        roleSpan.className = 'role-tag';
                        roleCell.textContent = ''; // Remove existing text if any
                        roleCell.appendChild(roleSpan);
                    }
                    roleSpan.textContent = newRole;
                    roleSpan.className = 'role-tag'; // Reset class
                    if (newRole === 'Admin') roleSpan.classList.add('admin');
                    else if (newRole === 'Editor') roleSpan.classList.add('editor');
                    else if (newRole === 'Customer') roleSpan.classList.add('customer');
                }


                const statusCell = targetRow.children[4];
                if (statusCell) {
                    let statusSpan = statusCell.querySelector('.status');
                    if (!statusSpan) { // Create if not exists
                        statusSpan = document.createElement('span');
                        statusSpan.className = 'status';
                        statusCell.textContent = ''; // Remove existing text if any
                        statusCell.appendChild(statusSpan);
                    }
                    statusSpan.textContent = newStatus;
                    statusSpan.className = 'status'; // Reset class
                    if (newStatus === 'Active') statusSpan.classList.add('active');
                    else if (newStatus === 'Inactive') statusSpan.classList.add('inactive');
                    else if (newStatus === 'Pending') statusSpan.classList.add('pending');
                }
            }

            closeModal('editUserModal');
            showToast(`User ${originalUserId} has been updated.`, 'success');
        });
    }
});