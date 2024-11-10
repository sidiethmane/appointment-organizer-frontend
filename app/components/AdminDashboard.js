"use client";

import React, { useState } from 'react';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import EventIcon from '@mui/icons-material/Event';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useRouter } from 'next/navigation';

function AdminDashboard() {
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
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

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box
        sx={{
          width: 250,
          backgroundColor: '#333',
          color: '#ccc',
          paddingTop: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <List>
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon style={{ color: '#ccc' }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <GroupIcon style={{ color: '#ccc' }} />
            </ListItemIcon>
            <ListItemText primary="Benutzerverwaltung" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <EventIcon style={{ color: '#ccc' }} />
            </ListItemIcon>
            <ListItemText primary="Terminmanagement" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <NotificationsIcon style={{ color: '#ccc' }} />
            </ListItemIcon>
            <ListItemText primary="Benachrichtigungen" />
          </ListItemButton>
        </List>
        <List>
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon style={{ color: '#ccc' }} />
            </ListItemIcon>
            <ListItemText primary="Profil" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon style={{ color: '#ccc' }} />
            </ListItemIcon>
            <ListItemText primary="Einstellungen" />
          </ListItemButton>
          <ListItemButton onClick={handleLogoutClick}>
            <ListItemIcon>
              <ExitToAppIcon style={{ color: '#ccc' }} />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </List>
      </Box>
      <Box sx={{ flex: 1, backgroundColor: '#f5f5f5', padding: 3 }}>
        <h1>Willkommen im Admin-Dashboard</h1>
      </Box>

      {/* Logout-Bestätigungsdialog */}
      <Dialog
        open={openLogoutDialog}
        onClose={handleLogoutCancel}
      >
        <DialogTitle>Abmelden</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Möchten Sie sich wirklich abmelden?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogoutCancel} color="primary">
            Nein
          </Button>
          <Button onClick={handleLogoutConfirm} color="primary" autoFocus>
            Ja
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default AdminDashboard;
