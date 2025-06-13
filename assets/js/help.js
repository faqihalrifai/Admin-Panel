// File: assets/js/help.js

document.addEventListener('DOMContentLoaded', function() {
    // Ensure this is the help page
    if (!document.body.classList.contains('help-page')) {
        return;
    }

    // Functionality for "Details" Buttons on Help Cards
    document.querySelectorAll('.help-page .btn-details').forEach(button => {
        button.addEventListener('click', function() {
            const modalTargetId = this.dataset.modalTarget;
            // openModal() is a global function from main.js
            openModal(modalTargetId);

            // --- Populate Modal Content with Detailed Information (Help Page) ---
            // This part assumes that the modals in help.html have elements to populate,
            // and translations from main.js (window.translations) are available.

            // Check if translations are available globally from main.js
            const currentLanguage = window.currentLanguage || 'en';
            const translations = window.translations || {};
            const langData = translations[currentLanguage] || translations['en']; // Fallback to English

            // Populate specific modal content based on modalTargetId
            if (modalTargetId === 'docModal') {
                const docModal = document.getElementById('docModal');
                if (docModal) {
                    const docTitle = docModal.querySelector('h2');
                    const docText1 = docModal.querySelector('[data-lang-key="modalDocText1"]');
                    // Get the parent <p> element containing <strong> and <span> to update
                    const docText2Parent = docModal.querySelector('p:has([data-lang-key="modalDocText2"])');
                    const goToDocsBtn = docModal.querySelector('[data-lang-key="modalGoToDocs"]');

                    if (docTitle) docTitle.textContent = langData['modalDocTitle'];
                    if (docText1) docText1.textContent = langData['modalDocText1'];
                    
                    // MODIFIED: Correcting how to fill the second p content for the documentation modal
                    if (docText2Parent) {
                        const topics = [
                            langData['modalGettingStarted'],
                            langData['modalUserGuide'],
                            langData['modalAPIReference'],
                            langData['modalTroubleshooting']
                        ].filter(Boolean).join(', '); // Filter Boolean to remove undefined/null if present
                        docText2Parent.innerHTML = `<strong>${langData['modalDocText2'].split(':')[0]}:</strong> ${topics}`;
                    }

                    if (goToDocsBtn) goToDocsBtn.href = "#"; // Replace with actual docs URL if available
                }
            } else if (modalTargetId === 'ticketModal') {
                const ticketModal = document.getElementById('ticketModal');
                if (ticketModal) {
                    const ticketTitle = ticketModal.querySelector('h2');
                    const ticketText1 = ticketModal.querySelector('[data-lang-key="modalTicketText1"]');
                    const ticketText2Parent = ticketModal.querySelector('p:has([data-lang-key="modalTicketText2"])');
                    const createTicketBtn = ticketModal.querySelector('[data-lang-key="modalCreateNewTicket"]');

                    if (ticketTitle) ticketTitle.textContent = langData['modalTicketTitle'];
                    if (ticketText1) ticketText1.textContent = langData['modalTicketText1'];
                    
                    // MODIFIED: Correcting how to fill the second p content for the ticket modal
                    if (ticketText2Parent) {
                        const items = [
                            langData['modalIssueDescription'],
                            langData['modalScreenshots'],
                            `${langData['modalRelevantIDs']} (${langData['modalOrder']}, ${langData['modalUser']}, ${langData['modalProduct']})`
                        ].filter(Boolean).join(', ');
                        ticketText2Parent.innerHTML = `<strong>${langData['modalTicketText2'].split(':')[0]}:</strong> ${items}`;
                    }

                    if (createTicketBtn) createTicketBtn.href = "#"; // Replace with actual ticket submission URL
                }
            } else if (modalTargetId === 'forumModal') {
                const forumModal = document.getElementById('forumModal');
                if (forumModal) {
                    const forumTitle = forumModal.querySelector('h2');
                    const forumText1 = forumModal.querySelector('[data-lang-key="modalForumText1"]');
                    const forumText2Parent = forumModal.querySelector('p:has([data-lang-key="modalForumText2"])');
                    const visitForumBtn = forumModal.querySelector('[data-lang-key="modalVisitForum"]');

                    if (forumTitle) forumTitle.textContent = langData['modalForumTitle'];
                    if (forumText1) forumText1.textContent = langData['modalForumText1'];
                    
                    // MODIFIED: Correcting how to fill the second p content for the forum modal
                    if (forumText2Parent) {
                        const features = [
                            langData['modalSearchOldPosts'],
                            langData['modalStartNewDiscussions'],
                            langData['modalGetPeerSupport']
                        ].filter(Boolean).join(', ');
                        forumText2Parent.innerHTML = `<strong>${langData['modalForumText2'].split(':')[0]}:</strong> ${features}`;
                    }

                    if (visitForumBtn) visitForumBtn.href = "#"; // Replace with actual forum URL
                }
            } else if (modalTargetId === 'tutorialsModal') {
                const tutorialsModal = document.getElementById('tutorialsModal');
                if (tutorialsModal) {
                    const tutorialsTitle = tutorialsModal.querySelector('h2');
                    const tutorialsText1 = tutorialsModal.querySelector('[data-lang-key="modalTutorialsText1"]');
                    const tutorialsText2Parent = tutorialsModal.querySelector('p:has([data-lang-key="modalTutorialsText2"])');
                    const watchTutorialsBtn = tutorialsModal.querySelector('[data-lang-key="modalWatchTutorials"]');

                    if (tutorialsTitle) tutorialsTitle.textContent = langData['modalTutorialsTitle'];
                    if (tutorialsText1) tutorialsText1.textContent = langData['modalTutorialsText1'];
                    
                    // MODIFIED: Correcting how to fill the second p content for the tutorial modal
                    if (tutorialsText2Parent) {
                        const series = [
                            langData['modalDashboardWalkthrough'],
                            langData['modalProductManagement'],
                            langData['modalAnalyticsDeepDive']
                        ].filter(Boolean).join(', ');
                        tutorialsText2Parent.innerHTML = `<strong>${langData['modalTutorialsText2'].split(':')[0]}:</strong> ${series}`;
                    }

                    if (watchTutorialsBtn) watchTutorialsBtn.href = "#"; // Replace with actual video playlist URL
                }
            } else if (modalTargetId === 'contactModal') {
                const contactModal = document.getElementById('contactModal');
                if (contactModal) {
                    const contactTitle = contactModal.querySelector('h2');
                    const contactText1 = contactModal.querySelector('[data-lang-key="modalContactText1"]');
                    const contactPhoneP = contactModal.querySelector('p:has([data-lang-key="modalPhone"])');
                    const contactEmailP = contactModal.querySelector('p:has([data-lang-key="modalEmail"])');
                    const sendEmailBtn = contactModal.querySelector('[data-lang-key="modalSendEmail"]');

                    if (contactTitle) contactTitle.textContent = langData['modalContactTitle'];
                    if (contactText1) contactText1.textContent = langData['modalContactText1'];
                    
                    // MODIFIED: Directly update innerHTML of the <p> element
                    if (contactPhoneP) {
                        contactPhoneP.innerHTML = `<strong>${langData['modalPhone']}</strong> +123 456 7890 (${langData['modalMonFri']}, 9 AM - 5 PM WIB)`;
                    }
                    if (contactEmailP) {
                         contactEmailP.innerHTML = `<strong>${langData['modalEmail']}</strong> support@dashpro.com`;
                    }
                    
                    if (sendEmailBtn) sendEmailBtn.href = "mailto:support@dashpro.com";
                }
            } else if (modalTargetId === 'systemStatusModal') {
                const systemStatusModal = document.getElementById('systemStatusModal');
                if (systemStatusModal) {
                    const statusTitle = systemStatusModal.querySelector('h2');
                    const statusText1 = systemStatusModal.querySelector('[data-lang-key="modalSystemStatusText1"]');
                    const currentStatusP = systemStatusModal.querySelector('p:has([data-lang-key="modalCurrentStatus"])');
                    const lastIncidentP = systemStatusModal.querySelector('p:has([data-lang-key="modalLastIncident"])');
                    const viewStatusPageBtn = systemStatusModal.querySelector('[data-lang-key="modalViewStatusPage"]');

                    if (statusTitle) statusTitle.textContent = langData['modalSystemStatusTitle'];
                    if (statusText1) statusText1.textContent = langData['modalSystemStatusText1'];
                    
                    // MODIFIED: Directly update innerHTML of the <p> element
                    if (currentStatusP) {
                        currentStatusP.innerHTML = `<strong>${langData['modalCurrentStatus']}</strong> ${langData['modalAllSystemsOperational']} <span style="color: var(--success);"><i class="fas fa-check-circle"></i></span>`;
                    }
                    if (lastIncidentP) {
                        lastIncidentP.innerHTML = `<strong>${langData['modalLastIncident']}</strong> ${langData['modalNone']} (<span data-lang-key="modalLastUpdated">${langData['modalLastUpdated']}</span>: 2025-06-08)`;
                    }
                    
                    if (viewStatusPageBtn) viewStatusPageBtn.href = "#"; // Replace with actual status page URL
                }
            }
        });
    });

    // FAQ Accordion Functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const parentItem = this.closest('.faq-item');
                if (parentItem) {
                    // Close other open FAQ items
                    document.querySelectorAll('.faq-item.active').forEach(item => {
                        if (item !== parentItem) {
                            item.classList.remove('active');
                        }
                    });
                    // Toggle active class on the clicked FAQ item
                    parentItem.classList.toggle('active');
                }
            });
        });
    }
});