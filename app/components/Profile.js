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
import Stack from '@mui/material/Stack';

function Profile() {
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
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  {/* Konto löschen */ }
  const handleAccountDeletion = (event) => {
    alert("Konto erfolgreich gelöscht.");
  }

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
          <h1>Konto bearbeiten</h1>
        </Box>
        <div>
          <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' }, flex: 1, display: "flex", justifyContent: "center" }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Titel" variant="outlined" />
            <TextField id="outlined-basic" label="Anrede" variant="outlined" />
          </Box>
        </div>
        <div>
          <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' }, flex: 1, display: "flex", justifyContent: "center" }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Vorname" variant="outlined" />
            <TextField id="outlined-basic" label="Nachname" variant="outlined" />
          </Box>
        </div>
        <div>
          <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' }, flex: 1, display: "flex", justifyContent: "center" }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="E-Mail" variant="outlined" />
            <TextField id="outlined-basic" label="Telefonnummer" variant="outlined" />
          </Box>
        </div>
        <div>
          <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '52ch' }, flex: 1, display: "flex", justifyContent: "center" }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Adresse" variant="outlined" />
          </Box>
        </div>
        <div>
          <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' }, flex: 1, display: "flex", justifyContent: "center" }}
            noValidate
            autoComplete="off"
          >
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Neues Passwort</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword ? 'hide the password' : 'display the password'
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Passwort wiederholen</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword ? 'hide the password' : 'display the password'
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
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

        {/* Konto löschen */}
        <Box
          sx={{
            typography: 'body1',
            '& > :not(style) ~ :not(style)': {
              ml: 2,
            },
            flex: 1,
            display: "flex",
            justifyContent: "center"
          }}
          onClick={handleAccountDeletion}
        >
          <Link href="/">Konto löschen</Link>
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

export default Profile;