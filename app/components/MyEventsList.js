"use client";

import React, { useState } from 'react';
import {
  Box,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Link,
  Paper,
  Alert,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Badge
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import EventNoteIcon from '@mui/icons-material/EventNote';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

function EventItem({ title, date, time, count }) {
  let color = 'default';
  if (count > 20) color = 'green';
  else if (count > 10) color = 'orange';
  else if (count > 0) color = 'red';

  return (
    <Paper
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: 2,
        marginBottom: 2,
        border: '1px solid #ddd',
      }}
      elevation={3}
    >
      <Box sx={{ flex: 1 }}>
        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {time}
        </Typography>
      </Box>

      {/* Count Badge */}
      <Badge
        badgeContent={count}
        color={color}
        showZero
        sx={{
          marginRight: 2,
          '& .MuiBadge-badge': {
            backgroundColor:
              color === 'green' ? '#4caf50' : color === 'orange' ? '#ffa726' : '#f44336',
            color: '#fff',
          },
        }}
      />
      {/* Edit Icon */}
      <IconButton color="primary" sx={{ marginRight: 1 }}>
        <EditIcon />
      </IconButton>
      {/* Delete Icon */}
      <IconButton color="error">
        <DeleteIcon />
      </IconButton>
    </Paper>
  );
}

function UserDashboard() {
  const [view, setView] = useState('list');
  const handleViewChange = (event, nextView) => {
    if (nextView !== null) {
      setView(nextView);
    }
  };

  // Sample data for events
  const eventsToday = [
    { title: 'Veranstaltung X', time: '8:00 - 12:00', count: 60 },
    { title: 'Veranstaltung Y', time: '14:00 - 20:00', count: 20 },
  ];

  const eventsTomorrow = [
    { title: 'Veranstaltung Z', time: '8:00 - 12:00', count: 20 },
  ];

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
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
            <ListItemText primary="Meine Veranstaltungen als Teilnehmer" />
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
          <ListItemButton>
            <ListItemIcon>
              <ExitToAppIcon style={{ color: '#ccc' }} />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </List>
      </Box>

      {/* Main Content */}
      <Box sx={{ flex: 1, padding: 3, backgroundColor: '#f5f5f5' }}>
        {/* Alert Message */}
        <Alert severity="warning" sx={{ marginBottom: 3 }}>
          Die Veranstaltung XU ist gelöscht
        </Alert>

        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
          <Typography variant="h5">Meine Veranstaltungen:</Typography>

          <Button variant="outlined" size="large">Neue Veranstaltung</Button>
        </Box>

        {/* View Toggle & File Creation Link */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, marginBottom: 3 }}>
          <ToggleButtonGroup
            value={view}
            exclusive
            onChange={handleViewChange}
            aria-label="View Toggle"
            size="small"
          >
            <ToggleButton value="grid">Grid</ToggleButton>
            <ToggleButton value="list">List</ToggleButton>
          </ToggleButtonGroup>

          <Link href="#" underline="hover">
            .ics Datei erstellen
          </Link>
        </Box>

        {/* Event List for Today */}
        <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
          Heute, 26.10.2024
        </Typography>
        {eventsToday.map((event, index) => (
          <EventItem
            key={index}
            title={event.title}
            time={event.time}
            count={event.count}
          />
        ))}

        {/* Event List for Tomorrow */}
        <Typography variant="subtitle1" sx={{ marginTop: 3, marginBottom: 1 }}>
          Morgen, 27.10.2024
        </Typography>
        {eventsTomorrow.map((event, index) => (
          <EventItem
            key={index}
            title={event.title}
            time={event.time}
            count={event.count}
          />
        ))}
      </Box>
    </Box>
  );
}

export default UserDashboard;
