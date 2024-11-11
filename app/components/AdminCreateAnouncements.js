'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
	Box,
	Autocomplete,
	Typography,
	TextField,
	FormControlLabel,
	Checkbox,
	Paper,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import EventIcon from '@mui/icons-material/Event';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ReportProblem from '@mui/icons-material/ReportProblem';

export default function AdminCreateAnnouncements() {
	const [openLogoutDialog, setOpenLogoutDialog] = useState(false);
	const router = useRouter();

	const handleLogoutClick = () => {
		setOpenLogoutDialog(true);
	};

	const handleProfileClick = () => {
		router.push('/adminProfile');
	};

	const handleTerminClick = () => {
		router.push('/adminTermin');
	};

	const handleLogoutConfirm = () => {
		setOpenLogoutDialog(false);
		router.push('/');
	};

	const handleAnouncements = () => {
		router.push('/adminAnouncements');
	};

	const handleLogoutCancel = () => {
		setOpenLogoutDialog(false);
	};

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
					<ListItemButton onClick={handleTerminClick}>
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
					<ListItemButton onClick={handleAnouncements}>
						<ListItemIcon>
							<ReportProblem style={{ color: '#ccc' }} />
						</ListItemIcon>
						<ListItemText primary="Ankündigungen" />
					</ListItemButton>
				</List>
				<List>
					<ListItemButton onClick={handleProfileClick}>
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

			{/* Main Content */}
			<Box sx={{ flex: 1, backgroundColor: '#f5f5f5', padding: 3 }}>
				<Typography variant="h4" gutterBottom></Typography>

				{/* Announcement Creation Form */}
				<Box
					component={Paper}
					elevation={4}
					sx={{
						maxWidth: 800,
						margin: 'auto',
						marginTop: 6,
						padding: 2,
						border: 3,
						borderColor: 'gray',
						borderRadius: 3,
						display: 'flex',
						flexDirection: 'column',
						bgcolor: '#ffffff',
					}}
				>
					<Typography
						variant="h5"
						align="center"
						fontWeight="bold"
						color="blue"
						gutterBottom
					>
						Ankündigung Erstellen
					</Typography>

					<TextField
						label="Ankündigung Title"
						variant="outlined"
						size="small"
						fullWidth
					/>

					<TextField
						label="Ankündigung Body"
						variant="outlined"
						size="small"
						fullWidth
						multiline
						rows={12}
						sx={{ marginTop: 4 }}
					/>

					<Typography variant="h6" fontWeight="bold">
						Methode
					</Typography>

					<FormControlLabel
						control={<Checkbox />}
						label="Bei Anmeldung"
					/>
					<FormControlLabel control={<Checkbox />} label="E-Mail" />

					{/* Buttons */}
					<Box display="flex" justifyContent="end" mt={2} gap={2}>
						<Button
							variant="contained"
							color="error"
							sx={{ width: { xs: '100%', sm: 'auto' } }}
						>
							Abbrechen
						</Button>
						<Button
							variant="contained"
							color="success"
							href="/admin/announcements"
							sx={{ width: { xs: '100%', sm: 'auto' } }}
						>
							Speichern
						</Button>
					</Box>
				</Box>
			</Box>

			{/* Logout Confirmation Dialog */}
			<Dialog open={openLogoutDialog} onClose={handleLogoutCancel}>
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
					<Button
						onClick={handleLogoutConfirm}
						color="primary"
						autoFocus
					>
						Ja
					</Button>
				</DialogActions>
			</Dialog>
		</Box>
	);
}
