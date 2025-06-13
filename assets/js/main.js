// File: assets/js/main.js

// Universal function to toggle sidebar
function toggleSidebar() { // MODIFIED: Made into a named function for reusability
    const sidebar = document.querySelector('.sidebar');
    const appContainer = document.querySelector('.app-container');
    sidebar.classList.toggle('active'); // Toggles the 'active' class on the sidebar
    appContainer.classList.toggle('sidebar-open'); // Toggles a class on the main container to show/hide overlay
}

document.querySelector('.toggle-sidebar')?.addEventListener('click', toggleSidebar); // Use the named function
document.querySelector('.close-sidebar')?.addEventListener('click', toggleSidebar); // ADDED: Event listener for the close sidebar button

// Universal function to open a modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'flex'; // Use flex to center the modal
        // Add listener to close modal when clicking outside
        // Ensure event listener is added only once
        if (!modal.dataset.outsideClickListenerAdded) { // Add flag to prevent listener duplication
            modal.addEventListener('click', function closeOnClickOutside(event) {
                if (event.target === modal) { // Check if the click was directly on the modal overlay
                    closeModal(modalId);
                }
            });
            modal.dataset.outsideClickListenerAdded = 'true'; // Set flag
        }
    }
}

// Universal function to close a modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Universal Toast Notification Function
function showToast(message, type = 'success') {
    const toastNotification = document.getElementById('toastNotification');
    if (toastNotification) {
        let iconClass = '';
        if (type === 'success') {
            iconClass = 'fa-check-circle';
        } else if (type === 'error') {
            iconClass = 'fa-times-circle';
        } else if (type === 'info') {
            iconClass = 'fa-info-circle';
        } else if (type === 'warning') {
            iconClass = 'fa-exclamation-triangle';
        }
        
        let toastIcon = toastNotification.querySelector('i.fas');
        let toastSpan = toastNotification.querySelector('span');

        // Ensure icon and span elements exist, create if not
        if (!toastIcon) {
            toastIcon = document.createElement('i');
            toastIcon.classList.add('fas');
            toastNotification.prepend(toastIcon); // Add icon at the beginning
        }
        if (!toastSpan) {
            toastSpan = document.createElement('span');
            toastNotification.appendChild(toastSpan); // Add span at the end
        }

        toastIcon.className = `fas ${iconClass}`; // Update icon class
        toastSpan.textContent = message;  // Update message text

        toastNotification.classList.remove('success', 'error', 'info', 'warning');
        toastNotification.classList.add(type);
        toastNotification.classList.add('show');
        
        setTimeout(() => {
            toastNotification.classList.remove('show');
        }, 3000); 
    }
}


// --- Multi-Language Feature ---
const translations = {
    'en': {
        // Global/Common
        'dashboardTitle': 'DashPro - Modern Admin Panel Dashboard',
        'helpTitle': 'DashPro - Help & Support',
        'increase': 'increase',
        'decrease': 'decrease',
        'detailsBtn': 'Details',
        'modalClose': 'Close',
        'change': 'change', // For 0% change in trends
        'highGrowth': 'High Growth', // New for categories
        'modalEditProfile': 'Edit Profile', // Common profile modal button
        'modalGoToLogin': 'Go to Login', // Common login/register modal button
        'modalSwitch': 'Switch', // Common switch account modal button
        'modalCancel': 'Cancel', // Common cancel button

        // Sidebar Menu
        'menuMain': 'Main',
        'menuDashboard': 'Dashboard',
        'menuAnalytics': 'Analytics',
        'menuOrders': 'Orders',
        'menuManagement': 'Management',
        'menuUsers': 'Users',
        'menuProducts': 'Products',
        'menuCategories': 'Categories',
        'menuSettings': 'Settings',
        'menuHelp': 'Help',

        // ADDED: Header Notifications/Messages
        'headerNotificationsTitle': 'Notifications',
        'notificationNewOrder': 'New order received!',
        'notificationOrderId': '#ORD-001',
        'notificationLowStock': 'Product',
        'notificationProductA': '"Product A"',
        'notificationUpdateAvailable': 'System update available.',
        'headerViewAllNotifications': 'View All Notifications',
        'headerMessagesTitle': 'Messages',
        'messageNewFeatureInquiry': 'Inquiry about new feature...',
        'messageFeedbackOnReport': 'Feedback on monthly report...',
        'headerViewAllMessages': 'View All Messages',
        'modalAllNotificationsTitle': 'All Notifications',
        'notificationNewOrderFull': 'New order received! Order ID: #ORD-001 from John Doe for $128.50.',
        'notificationLowStockFull': 'Critical low stock alert for "Laptop Pro X15". Only 5 units left.',
        'notificationUpdateAvailableFull': 'System update version 2.1.0 is available. Please update for new features.',
        'notificationNewUserRegistered': 'A new user has registered: Sarah Johnson.',
        'notificationMarkRead': 'Mark as Read',
        'notificationMarkUnread': 'Mark as Unread',
        'modalClearAll': 'Clear All',
        'modalAllMessagesTitle': 'All Messages',
        'messageNewFeatureSubject': 'Subject: Inquiry about new feature rollout',
        'messageNewFeatureDetail': '"Hi team, I was wondering if there\'s any update on the new feature rollout described in the last meeting notes..."',
        'messageFeedbackSubject': 'Subject: Feedback on monthly report',
        'messageFeedbackDetail': '"The monthly report was very insightful. Just had a small question about the Q3 projections..."',
        'messageViewDetails': 'View Details',
        'modalComposeMessage': 'Compose Message',
        'noNotifications': 'No new notifications.', // Added for clear all notifications scenario
        
        // Header Dropdowns (Existing, reordered for clarity)
        'profileMyProfile': 'My Profile',
        'profileAccountSettings': 'Account Settings',
        'profileSwitchAccount': 'Switch Account',
        'profileLoginRegister': 'Login / Register',
        'profileLogout': 'Log Out',

        // Breadcrumbs
        'breadcrumbHome': 'Home',
        'breadcrumbDashboard': 'Dashboard',

        // Dashboard Page - Card Titles & Info
        'cardTotalOrders': 'Total Orders',
        'cardTotalRevenue': 'Total Revenue',
        'cardTotalCustomers': 'Total Customers',
        'cardConversionRate': 'Conversion Rate',
        'cardProductsInStock': 'Products in Stock',
        'cardOpenSupportTickets': 'Open Support Tickets',

        // Dashboard Page - Chart Titles
        'chartRevenueOverview': 'Revenue Overview',
        'chartSalesDistribution': 'Sales Distribution',
        'chartViewData': 'View Data',
        'chartExportCSV': 'Export to CSV',

        // Dashboard Page - Table
        'tableRecentOrders': 'Recent Orders',
        'searchOrdersPlaceholder': 'Search orders...',
        'tableHeaderOrderID': 'Order ID',
        'tableHeaderCustomer': 'Customer',
        'tableHeaderDate': 'Date',
        'tableHeaderAmount': 'Amount',
        'tableHeaderStatus': 'Status',
        'tableHeaderActions': 'Actions',
        
        // Status Labels (Used across various tables/cards)
        'statusCompleted': 'Completed',
        'statusPending': 'Pending',
        'statusProcessing': 'Processing',
        'statusActive': 'Active', 
        'statusInactive': 'Inactive', 
        'statusLowStock': 'Low Stock', 
        
        // Dashboard Modals
        'modalOrdersTitle': 'Total Orders Details',
        'modalTotal': 'Total:',
        'modalOrders': 'orders',
        'modalCompleted': 'Completed:',
        'modalPending': 'Pending:',
        'modalCancelled': 'Cancelled:',
        'modalOrdersInfo': "This section provides a summary of all customer orders. You can find more detailed order information on the 'Orders' page in the sidebar.",
        'modalRevenueTitle': 'Total Revenue Details',
        'modalMonthlyGoal': 'Monthly Goal:',
        'modalLastMonth': 'Last Month:',
        'modalRevenueInfo': "Explore the detailed revenue breakdown by product, region, and time period in the 'Analytics' section for deeper insights.",
        'modalCustomersTitle': 'Total Customers Details',
        'modalCustomers': 'customers',
        'modalNewCustomers': 'New Customers (last 30 days):',
        'modalActiveCustomers': 'Active Customers:',
        'modalCustomersInfo': "Gain a comprehensive understanding of your customer base, including demographics and behavior, on the 'Users' page.",
        'modalConversionTitle': 'Conversion Rate Details',
        'modalCurrentRate': 'Current Rate:',
        'modalTargetRate': 'Target Rate:',
        'modalPreviousPeriod': 'Previous Period:',
        'modalConversionInfo': "Analyze conversion funnels and identify areas for optimization to improve overall business performance through our 'Analytics' tools.",
        'modalProductsInStockTitle': 'Products in Stock Details',
        'modalTotalInStock': 'Total in stock:',
        'modalProducts': 'products',
        'modalHighDemandItems': 'High demand items:',
        'modalLowStockAlerts': 'Low stock alerts:',
        'modalProductsInStockInfo': "View detailed stock levels and manage inventory on the 'Products' page.",
        'modalOpenTicketsTitle': 'Open Support Tickets Details',
        'modalTotalOpen': 'Total open:',
        'modalNewToday': 'New today:',
        'modalAvgResolutionTime': 'Average resolution time:',
        'modalTickets': 'tickets',
        'modalDays': 'days',
        'modalOpenTicketsInfo': "Access the support system to manage and resolve customer inquiries.",
        'modalOrderDetailsTitle': 'Order Details',
        'modalCustomer': 'Customer:',
        'modalDate': 'Date:',
        'modalAmount': 'Amount:',
        'modalCustomerName': 'Customer Name',
        'modalOrderDate': 'Order Date',
        'modalSaveChanges': 'Save Changes',
        'modalConfirmDeletionTitle': 'Confirm Deletion',
        'modalDeleteOrderConfirm': 'Are you sure you want to delete order',
        'modalDelete': 'Delete',
        
        // Help Page Cards
        'cardDocumentationTitle': 'Documentation',
        'cardDocumentationText': 'Access detailed guides',
        'cardTicketTitle': 'Submit a Ticket',
        'cardTicketText': 'Get personalized support',
        'cardForumTitle': 'Community Forum',
        'cardForumText': 'Ask questions, share insights',
        'cardTutorialsTitle': 'Video Tutorials',
        'cardTutorialsText': 'Learn with visual guides',
        'cardContactTitle': 'Contact Support',
        'cardContactText': 'Direct contact options',
        'cardSystemStatusTitle': 'System Status',
        'cardSystemStatusText': 'Check service uptime',

        // Help Page FAQ
        'faqTitle': 'Frequently Asked Questions',
        'faqQ1': 'How do I reset my password?',
        'faqA1': 'You can reset your password from the login page by clicking on "Forgot Password" or in your user profile settings if you are logged in. For security reasons, please follow the instructions sent to your registered email address.',
        'faqQ2': 'Where can I find my order history?',
        'faqA2': 'Your complete order history is available under the "Orders" section in the sidebar menu. You can filter by date, status, or search for specific order IDs.',
        'faqQ3': 'Is this dashboard mobile-friendly?',
        'faqA3': 'Yes, DashPro is designed to be fully responsive and works seamlessly on various screen sizes, including mobile phones and tablets. The layout adapts automatically for optimal viewing.',
        'faqQ4': 'How to add a new product?',
        'faqA4': 'Navigate to the "Products" page from the sidebar. Click on the "Add Product" button usually located at the top right of the product list. Fill in the required details such as name, category, price, stock, and upload relevant images. Click \'Save\' to add the product.',
        'faqQ5': 'Can I customize the dashboard colors?',
        'faqA5': 'Primary color customization can be done via the theme settings icon in the header. For advanced customization, direct modification of CSS variables in the `style.css` file is recommended.',
        'faqQ6': 'How do I integrate with third-party services?',
        'faqA6': 'Integrations with services like Google Analytics or Mailchimp can be managed from the \'Settings\' page under the \'Integrations\' tab. You will typically need to provide API keys or tracking IDs from the respective service.',
        
        // Help Page Modals
        'modalDocTitle': 'Documentation Details',
        'modalDocText1': 'Access our comprehensive documentation portal for step-by-step guides, feature explanations, and troubleshooting tips.',
        'modalDocText2': 'Topics include:',
        'modalGettingStarted': 'Getting Started',
        'modalUserGuide': 'User Guide',
        'modalAPIReference': 'API Reference',
        'modalTroubleshooting': 'Troubleshooting',
        'modalGoToDocs': 'Go to Docs',
        'modalTicketTitle': 'Submit a Ticket Details',
        'modalTicketText1': 'For personalized support, submit a new support ticket. Our team aims to respond within 24-48 hours.',
        'modalTicketText2': 'Please include:',
        'modalIssueDescription': 'Issue description',
        'modalScreenshots': 'screenshots',
        'modalRelevantIDs': 'relevant IDs',
        'modalOrder': 'order',
        'modalUser': 'user',
        'modalProduct': 'product',
        'modalCreateNewTicket': 'Submit New Ticket',
        'modalForumTitle': 'Community Forum Details',
        'modalForumText1': 'Join our active community forum to ask questions, share knowledge, and connect with other users. Many common issues are resolved here.',
        'modalForumText2': 'Features: Search old posts, Start new discussions, Get peer support.',
        'modalSearchOldPosts': 'Search old posts',
        'modalStartNewDiscussions': 'Start new discussions',
        'modalGetPeerSupport': 'Get peer support',
        'modalVisitForum': 'Visit Forum',
        'modalTutorialsTitle': 'Video Tutorials Details',
        'modalTutorialsText1': 'Watch our video tutorials for visual, step-by-step instructions on how to use various features of DashPro.',
        'modalTutorialsText2': 'Available series:',
        'modalDashboardWalkthrough': 'Dashboard Walkthrough',
        'modalProductManagement': 'Product Management',
        'modalAnalyticsDeepDive': 'Analytics Deep Dive',
        'modalWatchTutorials': 'Watch Videos',
        'modalContactTitle': 'Contact Support Details',
        'modalContactText1': 'If you need direct assistance, you can reach our support team via phone or email during business hours.',
        'modalPhone': 'Phone:',
        'modalMonFri': 'Mon-Fri', // Days of week
        'modalEmail': 'Email:',
        'modalSendEmail': 'Send Email',
        'modalSystemStatusTitle': 'System Status Details',
        'modalSystemStatusText1': 'Check the current operational status of all DashPro services. We aim for 99.9% uptime.',
        'modalCurrentStatus': 'Current Status:',
        'modalAllSystemsOperational': 'All Systems Operational',
        'modalLastIncident': 'Last Incident:',
        'modalNone': 'None',
        'modalLastUpdated': 'Last updated:',
        'modalViewStatusPage': 'View Status Page',

        // Profile Modals Common
        'modalMyProfileTitle': 'My Profile Details',
        'modalName': 'Name:',
        'modalRole': 'Role:',
        'modalMyProfileInfo': 'View and manage your personal profile information.',
        'modalSwitchAccountTitle': 'Switch Account',
        'modalSwitchAccountInfo': 'Select another account to switch to. You might need to re-authenticate.',
        'modalSelectAccount': 'Select Account',
        'modalLoginRegisterTitle': 'Login / Register',
        'modalLoginRegisterInfo': 'You are currently logged in. This modal simulates redirecting to login/registration forms.',
        'modalLogoutTitle': 'Confirm Logout',
        'modalLogoutConfirm': 'Are you sure you want to log out of DashPro?',

        // Analytics Page
        'analyticsPageViews': 'Page Views',
        'analyticsUniqueVisitors': 'Unique Visitors',
        'analyticsAvgSessionDuration': 'Avg. Session Duration',
        'analyticsBounceRate': 'Bounce Rate',
        'analyticsReturningVisitors': 'Returning Visitors',
        'analyticsConversionFunnel': 'Conversion Funnel',
        'analyticsVisitorTrends': 'Visitor Trends',
        'analyticsTrafficSources': 'Traffic Sources',
        'dateFilterLast30Days': 'Last 30 Days',
        'dateFilterLast7Days': 'Last 7 Days',
        'dateFilterThisMonth': 'This Month',
        'dateFilterLastMonth': 'Last Month',
        'dateFilterCustom': 'Custom',
        'modalPageViewsTitle': 'Page Views Details',
        'modalViews': 'views',
        'modalTopPages': 'Top Pages:',
        'modalAvgPerVisitor': 'Avg. per visitor:',
        'modalPages': 'pages',
        'modalPageViewsInfo': "Detailed page view analysis, including heatmaps and user flow, is available in the full analytics report.",
        'modalUniqueVisitorsTitle': 'Unique Visitors Details',
        'modalUniqueUsers': 'unique users',
        'modalNewVsReturning': 'New vs Returning:',
        'modalNew': 'new',
        'modalReturning': 'returning',
        'modalPeakHours': 'Peak Hours:',
        'modalUniqueVisitorsInfo': "Understand your audience better with demographic and geographic insights found in comprehensive user analytics.",
        'modalSessionDurationTitle': 'Avg. Session Duration Details',
        'modalAverage': 'Average:',
        'modalGoal': 'Goal:',
        'modalLongestSessions': 'Longest Sessions:',
        'modalProductConfig': 'Product configuration',
        'modalBlogReading': 'Blog reading',
        'modalSessionDurationInfo': "Improve user engagement and content strategy by analyzing session duration across different content types.",
        'modalBounceRateTitle': 'Bounce Rate Details',
        'modalCurrent': 'Current:',
        'modalIndustryAvg': 'Industry Avg:',
        'modalHighBouncePages': 'High Bounce Pages:',
        'modalBounceRateInfo': "Identify pages with high bounce rates to optimize content, user experience, and call-to-actions.",
        'modalReturningVisitorsTitle': 'Returning Visitors Details',
        'modalPercentage': 'Percentage:',
        'modalLoyaltyScore': 'Loyalty Score:',
        'modalHigh': 'High',
        'modalRetentionRate': 'Retention Rate (30 days):',
        'modalReturningVisitorsInfo': "Focus on strategies to convert new visitors into loyal returning customers for long-term growth.",
        'modalConversionFunnelTitle': 'Conversion Funnel Details',
        'modalOverallConversion': 'Overall Conversion:',
        'modalStage1': 'Stage 1 (Add to Cart):',
        'modalStage2': 'Stage 2 (Checkout Initiated):',
        'modalStage3': 'Stage 3 (Purchase Completed):',
        'modalConversionFunnelInfo': "Analyze each step of the conversion funnel to identify drop-off points and optimize your sales process.",
        'modalTrend': 'Trend (Last 30 Days):',

        // Orders Page
        'ordersPageTitle': 'Order Management',
        'ordersAllOrders': 'All Orders',
        'ordersFilterAll': 'All',
        'tableHeaderCustomerName': 'Customer Name',
        'tableHeaderProduct': 'Product',
        'tableHeaderOrderDate': 'Order Date',
        'ordersNewOrdersToday': 'New Orders Today',
        'ordersCompletedOrders': 'Completed Orders',
        'ordersPendingOrders': 'Pending Orders',
        'ordersCancelledOrders': 'Cancelled Orders',
        'ordersInTransitOrders': 'Orders in Transit',
        'ordersRefundedOrders': 'Refunded Orders',
        'modalNewOrdersTitle': 'New Orders Today Details',
        'modalCount': 'Count:',
        'modalAvgValue': 'Avg. Value:',
        'modalFromChannels': 'From Channels:',
        'modalOnlineStore': 'Online Store',
        'modalMobileApp': 'Mobile App',
        'modalNewOrdersInfo': 'Review newly placed orders and prioritize for processing.',
        'modalCompletedOrdersTitle': 'Completed Orders Details',
        'modalTotalValue': 'Total Value:',
        'modalAvgFulfillmentTime': 'Avg. Fulfillment Time:',
        'modalCompletedOrdersInfo': 'Monitor the efficiency of your order fulfillment process.',
        'modalPendingOrdersTitle': 'Pending Orders Details',
        'modalOldestPending': 'Oldest Pending:',
        'modalDaysAgo': 'days ago',
        'modalCommonIssues': 'Common Issues:',
        'modalPaymentPending': 'Payment pending',
        'modalStockCheck': 'Stock check',
        'modalPendingOrdersInfo': 'Address pending orders to prevent delays and customer dissatisfaction.',
        'modalCancelledOrdersTitle': 'Cancelled Orders Details',
        'modalCommonReasons': 'Common Reasons:',
        'modalCustomerRequest': 'Customer request',
        'modalItemOutOfStock': 'Item out of stock',
        'modalValueLost': 'Value Lost:',
        'modalCancelledOrdersInfo': 'Analyze cancellation reasons to improve product availability and customer service.',
        'modalInTransitOrdersTitle': 'Orders in Transit Details',
        'modalAvgDeliveryTime': 'Avg. Delivery Time:',
        'modalCarriers': 'Carriers:',
        'modalInTransitOrdersInfo': 'Track ongoing deliveries and manage logistics efficiency.',
        'modalRefundedOrdersTitle': 'Refunded Orders Details',
        'modalTotalRefundedValue': 'Total Refunded Value:',
        'modalReasons': 'Reasons:',
        'modalDefectiveItem': 'Defective item',
        'modalCustomerDissatisfaction': 'Customer dissatisfaction',
        'modalRefundedOrdersInfo': 'Review refund cases to address product quality and customer experience issues.',

        // Users Page
        'usersUserList': 'User List', 
        'usersAddUser': 'Add User', 
        'searchUsersPlaceholder': 'Search users...', 
        'usersTableHeaderUserID': 'User ID', 
        'usersTableHeaderName': 'Name', 
        'usersTableHeaderEmail': 'Email', 
        'usersTableHeaderRole': 'Role', 
        'usersTableHeaderStatus': 'Status', 
        'usersTableHeaderRegisteredDate': 'Registered Date', 
        'roleAdmin': 'Admin', 
        'roleEditor': 'Editor', 
        'roleCustomer': 'Customer', 
        'usersNewUsersThisMonth': 'New Users This Month', 
        'usersAdminUsers': 'Admin Users', 
        'usersInactiveUsers': 'Inactive Users', 
        'usersActiveUsers': 'Active Users', 
        'usersSubscribedUsers': 'Subscribed Users', 
        'usersPendingVerification': 'Users with Pending Verification', 
        'modalNewUsersTitle': 'New Users This Month Details', 
        'modalUsers': 'users', 
        'modalAvgDailySignups': 'Avg. daily signups:', 
        'modalGrowthLastMonth': 'Growth from last month:', 
        'modalNewUsersInfo': 'Monitor new user acquisition trends and sources.', 
        'modalAdminUsersTitle': 'Admin Users Details', 
        'modalAdministrators': 'administrators', 
        'modalSuperAdmin': 'Super Admin', 
        'modalContentAdmin': 'Content Admin', 
        'modalOrderManager': 'Order Manager', 
        'modalLastActivity': 'Last activity:', 
        'modalToday': 'Today', 
        'modalAdminUsersInfo': 'Manage administrative access and permissions.', 
        'modalInactiveUsersTitle': 'Inactive Users Details', 
        'modalLastLoginOver30Days': 'Last login over 30 days:', 
        'modalPotentialReasons': 'Potential reasons:', 
        'modalAccountDormant': 'Account dormant', 
        'modalUnsubscribed': 'Unsubscribed', 
        'modalInactiveUsersInfo': 'Identify inactive users for re-engagement campaigns or account cleanup.', 
        'modalActiveUsersTitle': 'Active Users Details', 
        'modalDailyActiveUsers': 'Daily Active Users (DAU):', 
        'modalMonthlyActiveUsers': 'Monthly Active Users (MAU):', 
        'modalActiveUsersInfo': 'Track user engagement and overall platform health.', 
        'modalSubscribedUsersTitle': 'Subscribed Users Details', 
        'modalSubscriptionType': 'Subscription type:', 
        'modalEmailNewsletter': 'Email Newsletter', 
        'modalConversionToCustomer': 'Conversion to customer:', 
        'modalSubscribedUsersInfo': 'Manage your subscriber list for marketing and communication.', 
        'modalPendingVerificationTitle': 'Users with Pending Verification Details', 
        'modalVerificationType': 'Verification type:', 
        'modalPhone': 'Phone', 
        'modalEmail': 'Email', 
        'modalActionNeeded': 'Action needed:', 
        'modalSendReminder': 'Send reminder', 
        'modalManualReview': 'Manual review', 
        'modalPendingVerificationInfo': 'Address unverified accounts to ensure data integrity and security.', 
        'modalUserDetailsTitle': 'User Details', 
        'modalRegisteredDate': 'Registered Date:', 
        'modalEditUserTitle': 'Edit User', 
        'modalDeleteUserConfirm': 'Are you sure you want to delete user', 
        
        // Products Page
        'productsProductList': 'Product List', 
        'productsAddProduct': 'Add Product', 
        'searchProductsPlaceholder': 'Search products...', 
        'productsTableHeaderProductID': 'Product ID', 
        'productsTableHeaderName': 'Name', 
        'productsTableHeaderCategory': 'Category', 
        'productsTableHeaderPrice': 'Price', 
        'productsTableHeaderStock': 'Stock', 
        'productsTableHeaderStatus': 'Status', 
        'productsTotalProducts': 'Total Products', 
        'productsActiveProducts': 'Active Products', 
        'productsInactiveProducts': 'Inactive Products', 
        'productsTotalSales': 'Total Sales', 
        'productsAverageRating': 'Average Rating', 
        'productsLowStockProducts': 'Low Stock Products', 
        'productsProductImages': 'Product Images', 
        'categoryElectronics': 'Electronics', 
        'categoryFashion': 'Fashion', 
        'categoryHomeGoods': 'Home Goods', 
        'categoryBooks': 'Books', 
        'categorySportsOutdoors': 'Sports & Outdoors', 
        'modalTotalProductsTitle': 'Total Products Details', 
        'modalNewProductsThisMonth': 'New products this month:', 
        'modalTotalProductsInfo': 'Manage your entire product catalog.', 
        'modalActiveProductsTitle': 'Active Products Details', 
        'modalTopSellingCategories': 'Top selling categories:', 
        'modalAverageConversionRate': 'Average conversion rate:', 
        'modalActiveProductsInfo': 'Monitor the performance of your active products.', 
        'modalInactiveProductsTitle': 'Inactive Products Details', 
        'modalOutOfStock': 'Out of stock', 
        'modalDiscontinued': 'Discontinued', 
        'modalLastUpdated': 'Last updated:', 
        'modalWeeksAgo': 'weeks ago', 
        'modalInactiveProductsInfo': 'Identify inactive products for potential updates or removal.', 
        'modalTotalSalesTitle': 'Total Sales Details', 
        'modalTotalRevenue': 'Total revenue:', 
        'modalTopSellingProduct': 'Top selling product:', 
        'modalAverageOrderValue': 'Average order value:', 
        'modalTotalSalesInfo': 'Track your overall product sales and performance.', 
        'modalAverageRatingTitle': 'Average Rating Details', 
        'modalAverageRating': 'Average rating:', 
        'modalStars': 'stars', 
        'modalTotalReviews': 'Total reviews:', 
        'modalMostReviewedProduct': 'Most reviewed product:', 
        'modalAverageRatingInfo': 'Monitor customer satisfaction with your products.', 
        'modalLowStockProductsTitle': 'Low Stock Products Details', 
        'modalExampleProducts': 'Example products:', 
        'modalRestock': 'Restock', 
        'modalNotifySupplier': 'Notify supplier', 
        'modalLowStockProductsInfo': 'Ensure you don\'t run out of popular products.', 
        'noImagesAvailable': 'No images available for this product.',

        // Categories Page
        'categoriesProductCategories': 'Product Categories', 
        'categoriesAddCategory': 'Add Category', 
        'searchCategoriesPlaceholder': 'Search categories...', 
        'categoriesTableHeaderCategoryID': 'Category ID', 
        'categoriesTableHeaderName': 'Name', 
        'categoriesTableHeaderTotalProducts': 'Total Products', 
        'categoriesTableHeaderLastUpdated': 'Last Updated', 
        'categoriesShowDescription': 'Show Description', 
        'categoriesHideDescription': 'Hide Description', 
        'catDescElectronics': 'This category includes a wide range of electronic devices such as laptops, smartphones, cameras, and audio equipment. It is one of our best-selling categories with high customer engagement.', 
        'catDescApparel': 'Our apparel collection features modern and stylish clothing for all genders and ages. From casual wear to formal attire, we offer diverse options for every season.', 
        'catDescBooks': 'A vast library of books covering various genres including fiction, non-fiction, educational, and children\'s literature. New titles are added weekly.', 
        'catDescHomeKitchen': 'Everything you need for a comfortable home and functional kitchen, including appliances, decor, cookware, and storage solutions.', 
        'catDescSportsOutdoors': 'Gear and equipment for various sports activities and outdoor adventures, from camping and hiking to fitness and team sports.', 
        'categoriesTotalCategories': 'Total Categories', 
        'categoriesNewCategoriesThisMonth': 'New Categories This Month', 
        'categoriesTopCategories': 'Top Categories', 
        'categoriesTrendingCategories': 'Trending Categories', 
        'categoriesTrendingCategoriesValue': 'Electronics, Apparel', 
        'categoriesCategorizedProducts': 'Categorized Products', 
        'categoriesNeedingReview': 'Categories Needing Review', 
        'modalTotalCategoriesTitle': 'Total Categories Details', 
        'modalCategories': 'categories', 
        'modalMainCategories': 'Main Categories:', 
        'modalLastAdded': 'Last added:', 
        'modalTools': 'Tools', 
        'modalJune': 'June', 
        'modalTotalCategoriesInfo': 'Overview of all product categories in the system.', 
        'modalNewCategoriesTitle': 'New Categories This Month Details', 
        'modalNewCategories': 'new categories', 
        'modalRecentlyAdded': 'Recently added:', 
        'modalGarden': 'Garden', 
        'modalPetSupplies': 'Pet Supplies', 
        'modalImpact': 'Dampak:', 
        'modalIncreasedProductVariety': 'Meningkatkan variasi produk sebesar', 
        'modalNewCategoriesInfo': 'Track recent category additions and their impact.', 
        'modalTopCategoriesTitle': 'Top Categories Details', 
        'modalTop5': 'Top 5:', 
        'modalRevenueContribution': 'Revenue contribution:', 
        'modalGrowthRate': 'Growth Rate:', 
        'modalTopCategoriesInfo': 'Insights into your best-performing product categories.', 
        'modalTrendingCategoriesTitle': 'Trending Categories Details', 
        'modalCurrentlyTrending': 'Currently trending:', 
        'modalDueToNewLaunches': 'due to new product launches', 
        'modalSearchVolumeIncrease': 'Search volume increase:', 
        'modalTrendingCategoriesInfo': 'Identify categories with increasing customer interest.', 
        'modalCategorizedProductsTitle': 'Categorized Products Details', 
        'modalOfProductsAreCategorized': 'of products are categorized', 
        'modalUncategorized': 'Uncategorized:', 
        'modalCategorizeRemaining': 'Categorize remaining products for better discoverability.', 
        'modalCategorizedProductsInfo': 'Ensure all products are correctly categorized for easy navigation.', 
        'modalCategoriesReviewTitle': 'Categories Needing Review Details', 
        'modalReasons': 'Reasons:', 
        'modalOldElectronics': 'Old Electronics', 
        'modalNicheBooks': 'Niche Books', 
        'modalOutdatedProducts': 'Outdated products', 
        'modalLowSalesVolume': 'Low sales volume', 
        'modalCategoriesReviewInfo': 'Periodically review categories to keep your catalog relevant and optimized.', 
        'modalCategoryDetailsTitle': 'Category Details', 
        'modalDescription': 'Description:', 
        'modalEditCategoryTitle': 'Edit Category', 
        'modalCategoryName': 'Category Name', 
        'modalDeleteCategoryConfirm': 'Are you sure you want to delete category', 

        // Settings Page
        'settingsGeneral': 'General', 
        'settingsSecurity': 'Security', 
        'settingsNotifications': 'Notifications', 
        'settingsIntegrations': 'Integrations', 
        'settingsGeneralAppSettings': 'General Application Settings', 
        'settingsSiteName': 'Site Name', 
        'settingsSiteNameValue': 'DashPro Dashboard', 
        'settingsTimezone': 'Timezone', 
        'timezoneJakarta': 'Asia/Jakarta', 
        'timezoneLondon': 'Europe/London', 
        'timezoneNewYork': 'America/New_York', 
        'timezoneUTC': 'UTC', 
        'settingsDefaultCurrency': 'Default Currency', 
        'settingsDefaultLanguage': 'Default Language', 
        'languageEnglish': 'English', 
        'languageIndonesian': 'Bahasa Indonesia', 
        'languageSpanish': 'Español', 
        'settingsMaintenanceMode': 'Maintenance Mode', 
        'settingsSaveGeneral': 'Save General Settings', 
        'settingsAccountSecurity': 'Account Security Settings', 
        'settingsPasswordPolicy': 'Password Policy', 
        'policyStrong': 'Strong (min 8 chars, 1 uppercase, 1 number, 1 symbol)', 
        'policyMedium': 'Medium (min 6 chars, 1 number)', 
        'policyWeak': 'Weak (min 4 chars)', 
        'settingsTwoFactorAuth': 'Two-Factor Authentication (2FA)', 
        'settingsSessionTimeout': 'Session Timeout (minutes)', 
        'settingsIPWhitelist': 'IP Whitelist (comma-separated, optional)', 
        'settingsIPWhitelistPlaceholder': 'e.g., 192.168.1.1, 10.0.0.5', 
        'settingsIPWhitelistHint': 'Only allow access from specified IP addresses.', 
        'settingsSaveSecurity': 'Save Security Settings', 
        'settingsNotificationPreferences': 'Notification Preferences', 
        'settingsEmailNotifications': 'Email Notifications', 
        'settingsEmailNotificationsHint': 'Receive important updates via email.', 
        'settingsSMSNotifications': 'SMS Notifications', 
        'settingsSMSNotificationsHint': 'Receive critical alerts on your mobile phone.', 
        'settingsPushNotifications': 'Push Notifications (in-app)', 
        'settingsPushNotificationsHint': 'Get real-time updates directly in the dashboard.', 
        'settingsSaveNotifications': 'Save Notification Settings', 
        'settingsThirdPartyIntegrations': 'Third-Party Integrations', 
        'settingsGoogleAnalytics': 'Google Analytics', 
        'settingsGoogleAnalyticsText': 'Connect your Google Analytics account to track website traffic.', 
        'settingsTrackingID': 'Tracking ID (GA4)', 
        'settingsEnableDisableGA': 'Enable/Disable Google Analytics integration.', 
        'settingsMailchimp': 'Mailchimp', 
        'settingsMailchimpText': 'Sync your customer data with Mailchimp for email marketing campaigns.', 
        'settingsAPIKey': 'API Key', 
        'settingsEnableDisableMailchimp': 'Enable/Disable Mailchimp integration.', 
        'settingsSaveIntegrations': 'Save Integrations', 
        'toastSettingsSaved': 'Settings saved successfully!', 

        // Footer
        'footerText': '&copy; 2023 DashPro. All rights reserved.'
    },
    'id': {
        // Global/Common
        'dashboardTitle': 'DashPro - Dasbor Panel Admin Modern',
        'helpTitle': 'DashPro - Bantuan & Dukungan',
        'increase': 'peningkatan',
        'decrease': 'penurunan',
        'detailsBtn': 'Detail',
        'modalClose': 'Tutup',
        'change': 'perubahan', // For 0% change in trends
        'highGrowth': 'Pertumbuhan Tinggi', // New for categories
        'modalEditProfile': 'Edit Profil', // Common profile modal button
        'modalGoToLogin': 'Ke Halaman Login', // Common login/registration modal button
        'modalSwitch': 'Ganti', // Common switch account modal button
        'modalCancel': 'Batal', // Common cancel button

        // Sidebar Menu
        'menuMain': 'Utama',
        'menuDashboard': 'Dasbor',
        'menuAnalytics': 'Analitik',
        'menuOrders': 'Pesanan',
        'menuManagement': 'Manajemen',
        'menuUsers': 'Pengguna',
        'menuProducts': 'Produk',
        'menuCategories': 'Kategori',
        'menuSettings': 'Pengaturan',
        'menuHelp': 'Bantuan',

        // ADDED: Header Notifications/Messages
        'headerNotificationsTitle': 'Notifikasi',
        'notificationNewOrder': 'Pesanan baru diterima!',
        'notificationOrderId': '#ORD-001',
        'notificationLowStock': 'Produk',
        'notificationProductA': '"Produk A"',
        'notificationUpdateAvailable': 'Pembaruan sistem tersedia.',
        'headerViewAllNotifications': 'Lihat Semua Notifikasi',
        'headerMessagesTitle': 'Pesan',
        'messageNewFeatureInquiry': 'Pertanyaan tentang fitur baru...',
        'messageFeedbackOnReport': 'Umpan balik laporan bulanan...',
        'headerViewAllMessages': 'Lihat Semua Pesan',
        'modalAllNotificationsTitle': 'Semua Notifikasi',
        'notificationNewOrderFull': 'Pesanan baru diterima! ID Pesanan: #ORD-001 dari John Doe seharga $128.50.',
        'notificationLowStockFull': 'Peringatan stok kritis untuk "Laptop Pro X15". Hanya tersisa 5 unit.',
        'notificationUpdateAvailableFull': 'Pembaruan sistem versi 2.1.0 tersedia. Harap perbarui untuk fitur baru.',
        'notificationNewUserRegistered': 'Pengguna baru telah terdaftar: Sarah Johnson.',
        'notificationMarkRead': 'Tandai sudah Dibaca',
        'notificationMarkUnread': 'Tandai belum Dibaca',
        'modalClearAll': 'Bersihkan Semua',
        'modalAllMessagesTitle': 'Semua Pesan',
        'messageNewFeatureSubject': 'Subjek: Pertanyaan tentang peluncuran fitur baru',
        'messageNewFeatureDetail': '"Halo tim, saya ingin tahu apakah ada pembaruan tentang peluncuran fitur baru yang dijelaskan dalam catatan rapat terakhir..."',
        'messageFeedbackSubject': 'Subjek: Umpan balik laporan bulanan',
        'messageFeedbackDetail': '"Laporan bulanan sangat informatif. Hanya ada pertanyaan kecil tentang proyeksi Q3..."',
        'messageViewDetails': 'Lihat Detail',
        'modalComposeMessage': 'Tulis Pesan',
        'noNotifications': 'Tidak ada notifikasi baru.', // Added for clear all notifications scenario
        
        // Header Dropdowns (Existing, reordered for clarity)
        'profileMyProfile': 'Profil Saya',
        'profileAccountSettings': 'Pengaturan Akun',
        'profileSwitchAccount': 'Ganti Akun',
        'profileLoginRegister': 'Login / Daftar',
        'profileLogout': 'Keluar',

        // Breadcrumbs
        'breadcrumbHome': 'Beranda',
        'breadcrumbDashboard': 'Dasbor',

        // Dashboard Page - Card Titles & Info
        'cardTotalOrders': 'Total Pesanan',
        'cardTotalRevenue': 'Total Pendapatan',
        'cardTotalCustomers': 'Total Pelanggan',
        'cardConversionRate': 'Tingkat Konversi',
        'cardProductsInStock': 'Produk dalam Stok',
        'cardOpenSupportTickets': 'Tiket Dukungan Terbuka',

        // Dashboard Page - Chart Titles
        'chartRevenueOverview': 'Ikhtisar Pendapatan',
        'chartSalesDistribution': 'Distribusi Penjualan',
        'chartViewData': 'Lihat Data',
        'chartExportCSV': 'Ekspor ke CSV',

        // Dashboard Page - Table
        'tableRecentOrders': 'Pesanan Terbaru',
        'searchOrdersPlaceholder': 'Cari pesanan...',
        'tableHeaderOrderID': 'ID Pesanan',
        'tableHeaderCustomer': 'Pelanggan',
        'tableHeaderDate': 'Tanggal',
        'tableHeaderAmount': 'Jumlah',
        'tableHeaderStatus': 'Status',
        'tableHeaderActions': 'Tindakan',

        // Status Labels (Used across various tables/cards)
        'statusCompleted': 'Selesai',
        'statusPending': 'Tertunda',
        'statusProcessing': 'Diproses',
        'statusActive': 'Aktif',
        'statusInactive': 'Tidak Aktif',
        'statusLowStock': 'Stok Rendah',

        // Dashboard Modals
        'modalOrdersTitle': 'Detail Total Pesanan',
        'modalTotal': 'Total:',
        'modalOrders': 'pesanan',
        'modalCompleted': 'Selesai:',
        'modalPending': 'Tertunda:',
        'modalCancelled': 'Dibatalkan:',
        'modalOrdersInfo': "Bagian ini memberikan ringkasan semua pesanan pelanggan. Anda dapat menemukan informasi pesanan yang lebih rinci di halaman 'Pesanan' di bilah sisi.",
        'modalRevenueTitle': 'Detail Total Pendapatan',
        'modalMonthlyGoal': 'Target Bulanan:',
        'modalLastMonth': 'Bulan Lalu:',
        'modalRevenueInfo': "Jelajahi rincian pendapatan berdasarkan produk, wilayah, dan periode waktu di bagian 'Analitik' untuk wawasan yang lebih dalam.",
        'modalCustomersTitle': 'Detail Total Pelanggan',
        'modalCustomers': 'pelanggan',
        'modalNewCustomers': 'Pelanggan Baru (30 hari terakhir):',
        'modalActiveCustomers': 'Pelanggan Aktif:',
        'modalCustomersInfo': "Dapatkan pemahaman komprehensif tentang basis pelanggan Anda, termasuk demografi dan perilaku, di halaman 'Pengguna'.",
        'modalConversionTitle': 'Detail Tingkat Konversi',
        'modalCurrentRate': 'Tingkat Saat Ini:',
        'modalTargetRate': 'Tingkat Target:',
        'modalPreviousPeriod': 'Periode Sebelumnya:',
        'modalConversionInfo': "Analisis corong konversi dan identifikasi area untuk optimasi guna meningkatkan kinerja bisnis secara keseluruhan melalui alat 'Analitik' kami.",
        'modalProductsInStockTitle': 'Detail Produk dalam Stok',
        'modalTotalInStock': 'Total dalam stok:',
        'modalProducts': 'produk',
        'modalHighDemandItems': 'Item permintaan tinggi:',
        'modalLowStockAlerts': 'Peringatan stok rendah:',
        'modalProductsInStockInfo': "Lihat level stok terperinci dan kelola inventaris di halaman 'Produk'.",
        'modalOpenTicketsTitle': 'Detail Tiket Dukungan Terbuka',
        'modalNewToday': 'Baru hari ini:',
        'modalAvgResolutionTime': 'Waktu penyelesaian rata-rata:',
        'modalTickets': 'tiket',
        'modalDays': 'hari',
        'modalOpenTicketsInfo': "Akses sistem dukungan untuk mengelola dan menyelesaikan pertanyaan pelanggan.",
        'modalOrderDetailsTitle': 'Detail Pesanan',
        'modalCustomer': 'Pelanggan:',
        'modalDate': 'Tanggal:',
        'modalAmount': 'Jumlah:',
        'modalCustomerName': 'Nama Pelanggan',
        'modalOrderDate': 'Tanggal Pesanan',
        'modalSaveChanges': 'Simpan Perubahan',
        'modalConfirmDeletionTitle': 'Konfirmasi Penghapusan',
        'modalDeleteOrderConfirm': 'Anda yakin ingin menghapus pesanan',
        'modalDelete': 'Hapus',
        
        // Help Page Cards
        'cardDocumentationTitle': 'Dokumentasi',
        'cardDocumentationText': 'Akses panduan terperinci',
        'cardTicketTitle': 'Ajukan Tiket',
        'cardTicketText': 'Dapatkan dukungan personal',
        'cardForumTitle': 'Forum Komunitas',
        'cardForumText': 'Ajukan pertanyaan, bagikan wawasan',
        'cardTutorialsTitle': 'Tutorial Video',
        'cardTutorialsText': 'Belajar dengan panduan visual',
        'cardContactTitle': 'Hubungi Dukungan',
        'cardContactText': 'Pilihan kontak langsung',
        'cardSystemStatusTitle': 'Status Sistem',
        'cardSystemStatusText': 'Periksa waktu aktif layanan',

        // Help Page FAQ
        'faqTitle': 'Pertanyaan yang Sering Diajukan',
        'faqQ1': 'Bagaimana cara mengatur ulang kata sandi saya?',
        'faqA1': 'Anda dapat mengatur ulang kata sandi dari halaman login dengan mengklik "Lupa Kata Sandi" atau di pengaturan profil pengguna Anda jika Anda sudah masuk. Demi alasan keamanan, ikuti instruksi yang dikirimkan ke alamat email terdaftar Anda.',
        'faqQ2': 'Di mana saya bisa menemukan riwayat pesanan saya?',
        'faqA2': 'Riwayat pesanan lengkap Anda tersedia di bagian "Pesanan" di menu bilah sisi. Anda dapat memfilter berdasarkan tanggal, status, atau mencari ID pesanan tertentu.',
        'faqQ3': 'Apakah dasbor ini ramah seluler?',
        'faqA3': 'Ya, DashPro dirancang agar sepenuhnya responsif dan berfungsi dengan mulus di berbagai ukuran layar, termasuk ponsel dan tablet. Tata letak akan menyesuaikan secara otomatis untuk tampilan optimal.',
        'faqQ4': 'Bagaimana cara menambahkan produk baru?',
        'faqA4': 'Navigasikan ke halaman "Produk" dari bilah sisi. Klik tombol "Tambah Produk" yang biasanya terletak di kanan atas daftar produk. Isi detail yang diperlukan seperti nama, kategori, harga, stok, dan unggah gambar yang relevan. Klik \'Simpan\' untuk menambahkan produk.',
        'faqQ5': 'Bisakah saya menyesuaikan warna dasbor?',
        'faqA5': 'Kustomisasi warna primer dapat dilakukan melalui ikon pengaturan tema di header. Untuk kustomisasi lanjutan, disarankan modifikasi langsung variabel CSS di file `style.css`.',
        'faqQ6': 'Bagaimana cara mengintegrasikan dengan layanan pihak ketiga?',
        'faqA6': 'Integrasi dengan layanan seperti Google Analytics atau Mailchimp dapat dikelola dari halaman \'Pengaturan\' di bawah tab \'Integrasi\'. Anda biasanya perlu memberikan kunci API atau ID pelacakan dari layanan masing-masing.',

        // Help Page Modals
        'modalDocTitle': 'Detail Dokumentasi',
        'modalDocText1': 'Akses portal dokumentasi komprehensif kami untuk panduan langkah demi langkah, penjelasan fitur, dan tips pemecahan masalah.',
        'modalDocText2': 'Topik meliputi:',
        'modalGettingStarted': 'Memulai',
        'modalUserGuide': 'Panduan Pengguna',
        'modalAPIReference': 'Referensi API',
        'modalTroubleshooting': 'Pemecahan Masalah',
        'modalGoToDocs': 'Ke Dokumentasi',
        'modalTicketTitle': 'Detail Pengajuan Tiket',
        'modalTicketText1': 'Untuk dukungan personal, ajukan tiket dukungan baru. Tim kami bertujuan untuk merespons dalam 24-48 jam.',
        'modalTicketText2': 'Harap sertakan:',
        'modalIssueDescription': 'Deskripsi masalah',
        'modalScreenshots': 'tangkapan layar',
        'modalRelevantIDs': 'ID relevan',
        'modalOrder': 'pesanan',
        'modalUser': 'pengguna',
        'modalProduct': 'produk',
        'modalCreateNewTicket': 'Ajukan Tiket Baru',
        'modalForumTitle': 'Detail Forum Komunitas',
        'modalForumText1': 'Bergabunglah dengan forum komunitas aktif kami untuk mengajukan pertanyaan, berbagi pengetahuan, dan terhubung dengan pengguna lain. Banyak masalah umum diselesaikan di sini.',
        'modalForumText2': 'Fitur: Cari postingan lama, Mulai diskusi baru, Dapatkan dukungan rekan.',
        'modalSearchOldPosts': 'Cari postingan lama',
        'modalStartNewDiscussions': 'Mulai diskusi baru',
        'modalGetPeerSupport': 'Dapatkan dukungan rekan',
        'modalVisitForum': 'Kunjungi Forum',
        'modalTutorialsTitle': 'Detail Tutorial Video',
        'modalTutorialsText1': 'Tonton tutorial video kami untuk instruksi visual langkah demi langkah tentang cara menggunakan berbagai fitur DashPro.',
        'modalTutorialsText2': 'Seri yang tersedia:',
        'modalDashboardWalkthrough': 'Panduan Dasbor',
        'modalProductManagement': 'Manajemen Produk',
        'modalAnalyticsDeepDive': 'Analitik Mendalam',
        'modalWatchTutorials': 'Tonton Video',
        'modalContactTitle': 'Detail Kontak Dukungan',
        'modalContactText1': 'Jika Anda membutuhkan bantuan langsung, Anda dapat menghubungi tim dukungan kami melalui telepon atau email selama jam kerja.',
        'modalPhone': 'Telepon:',
        'modalMonFri': 'Sen-Jum', // Hari kerja
        'modalEmail': 'Email:',
        'modalSendEmail': 'Kirim Email',
        'modalSystemStatusTitle': 'Detail Status Sistem',
        'modalSystemStatusText1': 'Periksa status operasional saat ini dari semua layanan DashPro. Kami menargetkan 99,9% uptime.',
        'modalCurrentStatus': 'Status Saat Ini:',
        'modalAllSystemsOperational': 'Semua Sistem Beroperasi',
        'modalLastIncident': 'Insiden Terakhir:',
        'modalNone': 'Tidak Ada',
        'modalLastUpdated': 'Terakhir diperbarui:',
        'modalViewStatusPage': 'Lihat Halaman Status',

        // Profile Modals Common
        'modalMyProfileTitle': 'Detail Profil Saya',
        'modalName': 'Nama:',
        'modalRole': 'Peran:',
        'modalMyProfileInfo': 'Lihat dan kelola informasi profil pribadi Anda.',
        'modalSwitchAccountTitle': 'Ganti Akun',
        'modalSwitchAccountInfo': 'Pilih akun lain untuk diganti. Anda mungkin perlu mengautentikasi ulang.',
        'modalSelectAccount': 'Pilih Akun',
        'modalLoginRegisterTitle': 'Login / Daftar',
        'modalLoginRegisterInfo': 'Anda saat ini masuk. Modal ini mensimulasikan pengalihan ke formulir login/registrasi.',
        'modalLogoutTitle': 'Konfirmasi Keluar',
        'modalLogoutConfirm': 'Anda yakin ingin keluar dari DashPro?',
    }
};

// EXPORT translations and currentLanguage to global scope for other JS files
window.translations = translations;
window.currentLanguage = localStorage.getItem('language') || 'en'; // Default to English


/**
 * Sets the active language for the dashboard.
 * Iterates through elements with `data-lang-key` and updates their text content
 * or placeholder text based on the selected language from the `translations` object.
 * Also updates the active state of language selection buttons.
 * @param {string} lang - The language code (e.g., 'en', 'id').
 */
function setLanguage(lang) {
    window.currentLanguage = lang; // Update the global currentLanguage
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.dataset.langKey;
        const translation = translations[lang] && translations[lang][key];

        if (translation) {
            // Special handling for input placeholders
            if (element.tagName === 'INPUT' && element.placeholder !== undefined) {
                element.placeholder = translation;
            } 
            // Special handling for select options (if their textContent is meant to be translated)
            else if (element.tagName === 'OPTION') {
                 element.textContent = translation;
            }
            // Handle specific cases where innerHTML is needed (e.g., for icons in footer)
            else if (element.dataset.langHtml) { // Use a new data attribute for innerHTML
                element.innerHTML = translation;
            }
            // Default: update textContent for other elements
            else {
                element.textContent = translation;
            }
        }
    });
    // Update active class for language buttons
    document.querySelectorAll('.language-select').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    // Update category description buttons if on categories page
    if (document.body.classList.contains('categories-page')) {
        document.querySelectorAll('.toggle-description-btn').forEach(btn => {
            const descriptionRow = btn.closest('tr').nextElementSibling;
            if (descriptionRow && descriptionRow.classList.contains('show-description')) {
                btn.textContent = translations[window.currentLanguage]['categoriesHideDescription']; // Use global currentLanguage
            } else {
                btn.textContent = translations[window.currentLanguage]['categoriesShowDescription']; // Use global currentLanguage
            }
        });
    }
    localStorage.setItem('language', lang); // Save preference to local storage
}


// --- Theme Customizer (Primary Color) ---
const colorDots = document.querySelectorAll('.color-dot');
const root = document.documentElement; // Root element for CSS variables

/**
 * Helper function to darken a hex color.
 * @param {string} hex - The hex color code (e.g., '#RRGGBB').
 * @param {number} percent - The percentage to darken (e.g., 0.15 for 15%).
 * @returns {string} The darkened hex color code.
 */
function darkenColor(hex, percent) {
    let f = parseInt(hex.slice(1), 16),
        t = percent < 0 ? 0 : 255,
        p = percent < 0 ? percent * -1 : percent,
        R = f >> 16,
        G = (f >> 8) & 0x00ff,
        B = f & 0x0000ff;
    return "#" + (
        0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 +
        (Math.round((t - G) * p) + G) * 0x100 +
        (Math.round((t - B) * p) + B)
    ).toString(16).slice(1);
}

/**
 * Sets the primary color for the dashboard by updating CSS variables.
 * Also calculates a darker shade for '--primary-dark' based on the chosen primary color.
 * Updates the active state of color picker dots.
 * @param {string} color - The hex color code (e.g., '#5a67d8').
 */
function setPrimaryColor(color) {
    root.style.setProperty('--primary', color);
    root.style.setProperty('--primary-dark', darkenColor(color, 0.15)); // Darken by 15%

    localStorage.setItem('primaryColor', color); // Save color preference to local storage

    // Update active class for color dots (excluding the custom input itself for its own click behavior)
    document.querySelectorAll('.color-dot').forEach(dot => {
        if (dot.id !== 'customPrimaryColorInput') {
            if (dot.dataset.color && dot.dataset.color.toLowerCase() === color.toLowerCase()) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        }
    });

    // Special handling for the custom color input itself: ensure it reflects the active color
    const customColorInput = document.getElementById('customPrimaryColorInput');
    if (customColorInput) {
        if (customColorInput.value.toLowerCase() === color.toLowerCase()) {
            customColorInput.classList.add('active');
        } else {
            customColorInput.classList.remove('active');
        }
    }
}


// Executed when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Apply saved language and theme preferences on load
    setLanguage(window.currentLanguage); // Use global currentLanguage

    const savedPrimaryColor = localStorage.getItem('primaryColor');
    if (savedPrimaryColor) {
        setPrimaryColor(savedPrimaryColor);
    } else {
        setPrimaryColor('#5a67d8'); // Default primary color if no preference is saved
    }

    // Event listeners for Color Picker Dots
    document.querySelectorAll('.color-dot').forEach(dot => {
        // Only attach listener to actual color buttons, not the custom input itself here
        if (dot.id !== 'customPrimaryColorInput') {
            dot.addEventListener('click', function() {
                setPrimaryColor(this.dataset.color);
            });
        }
    });

    // Event listener for the new custom color input
    const customPrimaryColorInput = document.getElementById('customPrimaryColorInput');
    if (customPrimaryColorInput) {
        customPrimaryColorInput.addEventListener('input', function() { // Use 'input' for real-time update
            setPrimaryColor(this.value);
        });
        // Set initial value of custom color input if a color was saved
        if (savedPrimaryColor) {
            customPrimaryColorInput.value = savedPrimaryColor;
        } else {
            customPrimaryColorInput.value = '#5a67d8'; // Set default value for custom input
        }
    }


    // Event listeners for Language Selection
    document.querySelectorAll('.language-select').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            setLanguage(this.dataset.lang);
            // Close language menu after selection
            this.closest('.dropdown-menu')?.classList.remove('show');
        });
    });


    // --- Common Modal Close Buttons ---
    document.querySelectorAll('.modal .close-button, .modal .close-modal-btn').forEach(button => {
        button.addEventListener('click', function() {
            const modal = this.closest('.modal');
            if (modal) {
                closeModal(modal.id);
            }
        });
    });

    // --- Header Dropdown Toggles (Language, Theme, Profile, Notifications, Messages) ---
    document.querySelectorAll('.header-icon.dropdown-toggle, .user-profile.profile-toggle').forEach(toggleElement => {
        toggleElement.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent document click listener from immediately closing it
            const targetMenuId = this.id === 'languageToggle' ? 'languageMenu' :
                                 this.id === 'themeToggle' ? 'themeMenu' :
                                 this.id === 'profileToggle' ? 'profileMenu' :
                                 this.id === 'notificationsToggle' ? 'notificationsMenu' : // ADDED
                                 this.id === 'messagesToggle' ? 'messagesMenu' : null; // ADDED
            
            if (targetMenuId) {
                const targetMenu = document.getElementById(targetMenuId);

                // Close all other open dropdowns first
                document.querySelectorAll('.dropdown-menu.show').forEach(openMenu => {
                    if (openMenu && openMenu !== targetMenu) {
                        openMenu.classList.remove('show');
                    }
                });

                // Toggle the clicked dropdown
                targetMenu?.classList.toggle('show');
            }
        });
    });

    // --- Chart Options Dropdown Logic (Universal for Dashboard & Analytics) ---
    document.querySelectorAll('.chart-options-toggle').forEach(button => {
        button.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent click from immediately closing dropdown
            const chartId = this.dataset.chartId;
            const dropdown = document.getElementById(`${chartId}Dropdown`);
            
            // Close all other chart options dropdowns
            document.querySelectorAll('.chart-options-dropdown.show').forEach(openDropdown => {
                if (openDropdown && openDropdown !== dropdown) {
                    openDropdown.classList.remove('show');
                }
            });
            // Close all header dropdowns (including new ones)
            document.querySelectorAll('.dropdown-menu.show').forEach(openMenu => { // MODIFIED to close all header dropdowns
                openMenu.classList.remove('show');
            });

            dropdown?.classList.toggle('show');
        });
    });

    // Close all dropdowns (header, chart options) and sidebar when clicking anywhere else on the document
    document.addEventListener('click', function(event) {
        // Chart option dropdowns
        document.querySelectorAll('.chart-options-dropdown.show').forEach(dropdown => {
            // Check if the click target is outside the dropdown and its toggle button
            const toggleButton = document.querySelector(`[data-chart-id="${dropdown.id.replace('Dropdown', '')}"]`);
            if (dropdown && !dropdown.contains(event.target) && (!toggleButton || !toggleButton.contains(event.target))) {
                dropdown.classList.remove('show');
            }
        });
        // Header dropdowns (Profile, Language, Theme, Notifications, Messages)
        document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
            // Find the corresponding toggle button for the menu
            let toggleButton;
            if (menu.id === 'profileMenu') toggleButton = document.getElementById('profileToggle');
            else if (menu.id === 'languageMenu') toggleButton = document.getElementById('languageToggle');
            else if (menu.id === 'themeMenu') toggleButton = document.getElementById('themeToggle');
            else if (menu.id === 'notificationsMenu') toggleButton = document.getElementById('notificationsToggle'); // ADDED
            else if (menu.id === 'messagesMenu') toggleButton = document.getElementById('messagesToggle'); // ADDED

            if (menu && !menu.contains(event.target) && (!toggleButton || !toggleButton.contains(event.target))) {
                menu.classList.remove('show');
            }
        });

        // Close sidebar when clicking outside of it (on the overlay)
        const sidebar = document.querySelector('.sidebar');
        const appContainer = document.querySelector('.app-container');
        const toggleSidebarBtn = document.querySelector('.toggle-sidebar');
        
        if (appContainer.classList.contains('sidebar-open')) {
            if (!sidebar.contains(event.target) && !toggleSidebarBtn.contains(event.target)) {
                if (window.innerWidth <= 992) {
                    toggleSidebar();
                }
            }
        }
    });

    // Handle dropdown menu item clicks for charts (View Data, Export CSV)
    document.querySelectorAll('.chart-options-dropdown a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const action = this.dataset.action;
            const chartId = this.closest('.chart-options-dropdown').id.replace('Dropdown', '');
            
            if (action === 'view-data') {
                alert(`${window.translations[window.currentLanguage]['chartViewData']} for ${chartId}.`);
            } else if (action === 'export-csv') {
                alert(`${window.translations[window.currentLanguage]['chartExportCSV']} for ${chartId}.`);
            }
            this.closest('.chart-options-dropdown')?.classList.remove('show');
        });
    });

    // Handle clicks within Profile Menu common actions (My Profile, Switch Account, Login/Register, Logout)
    document.querySelectorAll('#profileMenu .dropdown-item[data-action]').forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); 
            const action = this.dataset.action;
            const modalTarget = this.dataset.modalTarget; 

            if (modalTarget) {
                openModal(modalTarget);
            } else if (action === 'my-profile') {
                showToast('Navigating to My Profile page (simulated action).', 'info');
            } else if (action === 'switch-account') {
                 showToast('Opening account switcher (simulated action).', 'info');
            } else if (action === 'login-register') {
                showToast('Redirecting to Login/Register page (simulated action).', 'info');
            } else if (action === 'logout') {
                showToast('Logging out (simulated action).', 'info');
            }
            this.closest('.dropdown-menu')?.classList.remove('show');
        });
    });

    // ADDED: Handle dropdown-footer clicks (e.g., View All Notifications/Messages)
    document.querySelectorAll('.dropdown-footer[data-action]').forEach(footerLink => {
        footerLink.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation(); // Prevent dropdown from closing immediately
            const modalTarget = this.dataset.modalTarget;
            if (modalTarget) {
                openModal(modalTarget);
                // Close the dropdown after opening the modal
                this.closest('.dropdown-menu')?.classList.remove('show');
            } else {
                showToast(`Navigating to ${this.dataset.action} page (simulated action).`, 'info');
            }
        });
    });

    // ADDED: Example functionality for Notification/Message Full List buttons
    document.querySelectorAll('#notificationsModal .mark-read-btn').forEach(button => {
        button.addEventListener('click', function() {
            const notificationItem = this.closest('.notification-item-full');
            if (notificationItem) {
                notificationItem.classList.add('read');
                showToast(window.translations[window.currentLanguage]['notificationMarkRead'], 'success');
                // Optionally update badge count here
            }
        });
    });

    document.querySelectorAll('#notificationsModal .mark-unread-btn').forEach(button => {
        button.addEventListener('click', function() {
            const notificationItem = this.closest('.notification-item-full');
            if (notificationItem) {
                notificationItem.classList.remove('read');
                showToast(window.translations[window.currentLanguage]['notificationMarkUnread'], 'info');
                // Optionally update badge count here
            }
        });
    });

    document.querySelector('#notificationsModal .btn-modern[data-lang-key="modalClearAll"]')?.addEventListener('click', function() {
        const notificationList = document.querySelector('#notificationsModal .notification-full-list');
        if (notificationList) {
            // Use window.translations to ensure translation is always available
            notificationList.innerHTML = `<p style="text-align: center; color: var(--gray); padding: 20px;">${window.translations[window.currentLanguage]['noNotifications'] || 'No new notifications.'}</p>`;
            // Optionally update badge count to 0
            showToast(window.translations[window.currentLanguage]['modalClearAll'] + '!', 'success');
        }
    });

    document.querySelectorAll('#messagesModal .view-message-btn').forEach(button => {
        button.addEventListener('click', function() {
            const messageItem = this.closest('.message-item-full');
            if (messageItem) {
                // Simulate viewing message details (e.g., open a new modal or navigate)
                showToast(window.translations[window.currentLanguage]['messageViewDetails'] + ' (Simulated)', 'info');
                messageItem.classList.add('read'); // Mark as read when viewed
            }
        });
    });

    document.querySelector('#messagesModal .btn-modern[data-lang-key="modalComposeMessage"]')?.addEventListener('click', function() {
        showToast(window.translations[window.currentLanguage]['modalComposeMessage'] + ' (Simulated form open)', 'info');
        // Close the messages modal if compose message form opens
        closeModal('messagesModal');
    });

    // Function to download a chart as PNG - kept in main.js for now as it's a utility
    // But it should technically be in each page's JS if chart instances are local
    // For now, if called from global scope, it will work.
    // We will consider moving this to each page's JS if chart instances are isolated later.
    window.downloadChart = function(chartId, filename) { // Made global for temporary accessibility
        const chartCanvas = document.getElementById(chartId);
        if (chartCanvas) {
            // Ensure chart is initialized for Chart.js
            const chartInstance = Chart.getChart(chartCanvas); 
            if (chartInstance) {
                const url = chartInstance.toBase64Image();
                const a = document.createElement('a');
                a.href = url;
                a.download = filename || `${chartId}.png`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            } else {
                console.error(`Chart instance for canvas ID '${chartId}' not found. Cannot download.`);
            }
        } else {
            console.warn(`Canvas with ID '${chartId}' not found for download.`);
        }
    }
}); // End DOMContentLoaded