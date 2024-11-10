export const sidebarItemsUser = {
    position_top: [
        {
            title: 'Veranstaltung erstellen',
            url: '/admin', // TODO: Change to correct URL
            icon: 'group_add',
        },
        {
            title: 'Meine Veranstaltungen',
            url: '/admin', // TODO: Change to correct URL
            icon: 'event_available',
        },
        {
            title: 'Meine Teilnahmen',
            url: '/adminTermin',
            icon: 'event_note',
        },
    ],
    position_bottom: [
        {
            title: 'Profil',
            url: '/userProfile',
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