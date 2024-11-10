"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { sidebarItemsAdmin } from '@/app/lib/sidebar-items/admin';
import SidebarList from '@/app/components/SidebarList';
import {
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Button,
    TextField,
    Avatar,
    Typography
} from '@mui/material';

function AdminProfile() {
    const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
    const [openSaveDialog, setOpenSaveDialog] = useState(false);
    const [profileImage, setProfileImage] = useState(null);
    const router = useRouter();

    const handleLogoutClick = () => {
        setOpenLogoutDialog(true);
    };

    const handleLogoutConfirm = () => {
        setOpenLogoutDialog(false);
        router.push('/');
    };

    const handleLogoutCancel = () => {
        setOpenLogoutDialog(false);
    };

    const handleImageChange = (event) => {
        setProfileImage(URL.createObjectURL(event.target.files[0]));
    };

    const handleSaveClick = () => {
        setOpenSaveDialog(true);
    };

    const handleSaveConfirm = () => {
        setOpenSaveDialog(false);
        alert("Änderungen wurden gespeichert!");
        // Hier kannst du die eigentliche Speichern-Funktion implementieren
    };

    const handleSaveCancel = () => {
        setOpenSaveDialog(false);
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
                <SidebarList items={ sidebarItemsAdmin.position_top }/>
                <SidebarList items={ sidebarItemsAdmin.position_bottom }/>
            </Box>

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
            <Dialog open={ openLogoutDialog } onClose={ handleLogoutCancel }>
                <DialogTitle>Abmelden</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Möchten Sie sich wirklich abmelden?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={ handleLogoutCancel } color="primary">Nein</Button>
                    <Button onClick={ handleLogoutConfirm } color="primary" autoFocus>Ja</Button>
                </DialogActions>
            </Dialog>

            {/* Änderungen speichern Bestätigungsdialog */ }
            <Dialog open={ openSaveDialog } onClose={ handleSaveCancel }>
                <DialogTitle>Änderungen speichern</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Möchten Sie die Änderungen übernehmen?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={ handleSaveCancel } color="primary">Nein</Button>
                    <Button onClick={ handleSaveConfirm } color="primary" autoFocus>Ja</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default AdminProfile;