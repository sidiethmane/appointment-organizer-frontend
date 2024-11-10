"use client";

import React from 'react';
import { sidebarItemsAdmin } from '@/app/lib/sidebar-items/admin';
import Link from 'next/link';
import Icon from '@mui/material/Icon';
import {
    Box,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from '@mui/material';

const SidebarList = ({ items }) => (
    <List>
        {items.map((item) => (
            <Link key={item.title} href={item.url}>
                <ListItemButton>
                    <ListItemIcon>
                        <Icon sx={{ color: "#ccc" }}>{item.icon}</Icon>
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                </ListItemButton>
            </Link>
        ))}
    </List>
);

export default function TestPage() {
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
                <SidebarList items={sidebarItemsAdmin.position_top} />
                <SidebarList items={sidebarItemsAdmin.position_bottom} />
            </Box>
        </Box>
    );
}