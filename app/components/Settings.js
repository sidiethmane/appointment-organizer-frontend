"use client";

import React, { useState } from 'react';
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventNoteIcon from '@mui/icons-material/EventNote';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useRouter } from 'next/navigation';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';

function Settings() {
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
  {/* Formular */ }
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  {/* Zu Profil weiterleiten */ }
  const handleRouteToProfile = () => {
    router.push("/user/profile");
  }

  {/* Zu Einstellungen weiterleiten */ }
  const handleRouteToSettings = () => {
    router.push("/user/settings");
  }

  const [open, setOpen] = React.useState(true);

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
              <GroupAddIcon style={{ color: '#ccc' }} />
            </ListItemIcon>
            <ListItemText primary="Veranstaltung erstellen" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <EventAvailableIcon style={{ color: '#ccc' }} />
            </ListItemIcon>
            <ListItemText primary="Meine Veranstaltungen" />
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <EventNoteIcon style={{ color: '#ccc' }} />
            </ListItemIcon>
            <ListItemText primary="Meine Teilnahmen" />
          </ListItemButton>
        </List>
        <List>
          <ListItemButton onClick={handleRouteToProfile}>
            <ListItemIcon>
              <AccountCircleIcon style={{ color: '#ccc' }} />
            </ListItemIcon>
            <ListItemText primary="Profil" />
          </ListItemButton>
          <ListItemButton onClick={handleRouteToSettings}>
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

      {/* Konto bearbeiten Formular */}
      <Box sx={{ flex: 1, justifyContent: "center", backgroundColor: '#f5f5f5' }}>

        <Box sx={{ flex: 1, display: "flex", justifyContent: "center", padding: 3, fontSize: 30 }}>
          <h1>Einstellungen</h1>
        </Box>
        <div>
          <Box sx={{ '& > :not(style)': { m: 1, width: '25ch' }, flex: 1, display: "flex", justifyContent: "center" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sprache</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="German">Deutsch</MenuItem>
                <MenuItem value="English">Englisch</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div>
          <Box sx={{ '& > :not(style)': { m: 1, width: '25ch' }, flex: 1, display: "flex", justifyContent: "center" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Zeitzone</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value="UTC">UTC</MenuItem>
                <MenuItem value="CET">CET</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>

        {/* Buttons */}
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center", padding: 3 }}>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="error">
              Zurück
            </Button>
            <Button variant="contained" color="success">
              Änderungen speichern
            </Button>
          </Stack>
        </Box>

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

export default Settings;