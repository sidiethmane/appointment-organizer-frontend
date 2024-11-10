"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import SidebarList from '@/app/components/SidebarList';
import { sidebarItemsUser } from '@/app/lib/sidebar-items/user';
import {
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
    Avatar,
    TextField,
    Typography
} from '@mui/material';

function UserProfile() {
    const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
    const [profileImage, setProfileImage] = useState(null); // Für das Profilbild
    const router = useRouter();

    const handleLogoutClick = () => {
        setOpenLogoutDialog(true);
    };

    const handleLogoutConfirm = () => {
        setOpenLogoutDialog(false);
        router.push('/');
    };

    const handleUserProfilClick = () => {
        router.push('/userProfile'); // Navigiert explizit zur Profilseite
    };

    const handleLogoutCancel = () => {
        setOpenLogoutDialog(false);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSaveClick = () => {
        alert("Änderungen wurden gespeichert!");
        // Hier kannst du die eigentliche Speichern-Funktion implementieren
    };

    return (
        <Box sx={ { display: 'flex', height: '100vh' } }>
            <Box
                sx={ {
                    width: 250,
                    backgroundColor: '#333',
                    color: '#ccc',
                    paddingTop: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                } }
            >
                <SidebarList items={ sidebarItemsUser.position_top }/>
                <SidebarList items={ sidebarItemsUser.position_bottom }/>
            </Box>

            {/* Profil Inhalt */ }
            <Box sx={ { flex: 1, backgroundColor: '#f5f5f5', padding: 3 } }>
                <Typography variant="h4">Profil</Typography>

                {/* Profilbild und Ändern-Button */ }
                <Box sx={ { display: 'flex', alignItems: 'center', my: 2 } }>
                    <Avatar src={ profileImage } sx={ { width: 100, height: 100, mr: 2 } }/>
                    <Button
                        variant="outlined"
                        component="label"
                        sx={ { color: '#333', borderColor: '#333' } }
                    >
                        Profilbild ändern
                        <input type="file" hidden onChange={ handleImageChange }/>
                    </Button>
                </Box>

                {/* Persönliche Informationen */ }
                <Box component="form" sx={ { display: 'grid', gap: 2, width: '50%' } }>
                    <TextField label="Name" variant="outlined" fullWidth/>
                    <TextField label="Vorname" variant="outlined" fullWidth/>
                    <TextField label="Personalnummer" variant="outlined" fullWidth/>
                    <TextField label="E-Mail" variant="outlined" fullWidth/>
                    <TextField label="Telefonnummer" variant="outlined" fullWidth/>
                </Box>

                {/* Änderungen speichern Button */ }
                <Box sx={ { display: 'flex', justifyContent: 'flex-end', mt: 3 } }>
                    <Button
                        variant="contained"
                        sx={ { backgroundColor: '#333', color: '#fff' } }
                        onClick={ handleSaveClick }
                    >
                        Änderungen speichern
                    </Button>
                </Box>
            </Box>

            {/* Logout-Bestätigungsdialog */ }
            <Dialog
                open={ openLogoutDialog }
                onClose={ handleLogoutCancel }
            >
                <DialogTitle>Abmelden</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Möchten Sie sich wirklich abmelden?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={ handleLogoutCancel } color="primary">
                        Nein
                    </Button>
                    <Button onClick={ handleLogoutConfirm } color="primary" autoFocus>
                        Ja
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default UserProfile;