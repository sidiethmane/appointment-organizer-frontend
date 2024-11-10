export const sidebarItemsAdmin = {
    position_top: [
        {
            title: 'Dashboard',
            url: '/admin',
            icon: 'dashboard',
        },
        {
            title: 'Benutzerverwaltung',
            url: '/admin', // TODO: Change to correct URL
            icon: 'group',
        },
        {
            title: 'Terminmanagement',
            url: '/adminTermin',
            icon: 'event',
        },
        {
            title: 'Benachrichtigungen',
            url: '/admin', // TODO: Change to correct URL
            icon: 'notifications',
        },
        {
            title: 'Ankündigungen',
            url: '/admin', // TODO: Change to correct URL
            icon: 'report_problem',
        },
    ],
    position_bottom: [
        {
            title: 'Profil',
            url: '/adminProfile',
            icon: 'account_circle',
        },
        {
            title: 'Einstellungen',
            url: '/admin', // TODO: Change to correct URL
            icon: 'settings',
        },
        {
            title: 'Logout',
            url: '/',
            icon: 'exit_to_app',
            isConfirmationRequired: true,
        },
    ],
}