// File: assets/js/settings.js

document.addEventListener('DOMContentLoaded', function() {
    // Ensure this is the settings page
    if (!document.body.classList.contains('settings-page')) {
        return;
    }

    const tabButtons = document.querySelectorAll('.settings-tabs .tab-button');
    const tabPanes = document.querySelectorAll('.settings-content .tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(btn => btn.classList.remove('active')); // Deactivate all tab buttons
            tabPanes.forEach(pane => pane.classList.remove('active')); // Hide all tab panes
            this.classList.add('active'); // Activate the clicked tab button
            const targetTabId = this.dataset.tabTarget; // Get the ID of the target pane
            const targetPane = document.getElementById(targetTabId);
            targetPane?.classList.add('active'); // Show the target pane
        });
    });

    // Form submission handlers for settings forms
    const generalSettingsForm = document.getElementById('generalSettingsForm');
    const securitySettingsForm = document.getElementById('securitySettingsForm');
    const notificationSettingsForm = document.getElementById('notificationSettingsForm');
    const integrationSettingsForm = document.getElementById('integrationSettingsForm');

    generalSettingsForm?.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('General settings saved!');
        // showToast() is a global function from main.js
        showToast(translations[currentLanguage]['toastSettingsSaved'], 'success'); // translations[currentLanguage] dari main.js
    });

    securitySettingsForm?.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Security settings updated!');
        // showToast() is a global function from main.js
        showToast(translations[currentLanguage]['toastSettingsSaved'], 'success');
    });

    notificationSettingsForm?.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Notification settings updated!');
        // showToast() is a global function from main.js
        showToast(translations[currentLanguage]['toastSettingsSaved'], 'success');
    });

    integrationSettingsForm?.addEventListener('submit', function(event) {
        event.preventDefault();
        console.log('Integration settings updated!');
        // showToast() is a global function from main.js
        showToast(translations[currentLanguage]['toastSettingsSaved'], 'success');
    });
});