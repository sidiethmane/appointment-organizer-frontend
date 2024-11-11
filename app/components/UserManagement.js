import React from 'react';
import { Grid2, Card, CardContent, Typography, Box, Divider } from '@mui/material';
import UserTable from '../Components/UserTable';
// Example data
export function UserManagement() {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
            {/* Sidebar */}


            {/* Main Content */}
            <Box
                sx={{
                    flex: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 3,
                }}
            >
                {/* Dashboard Content Box */}
                <Box
                    sx={{
                        maxWidth: 1000,
                        width: '100%',
                        padding: 3,
                        borderRadius: 2,
                        boxShadow: 1,
                        boxSizing: 'border-box',  // Ensure padding and border are included in width calculation
                    }}
                >
                    <Typography variant="h4" sx={{ mb: 2 }}>
                        User Management
                    </Typography>
                    <UserTable/>

                </Box>
            </Box>
        </Box>
    )
}



export default UserManagement; 