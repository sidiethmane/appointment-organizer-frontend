import React from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, Icon } from '@mui/material';
import Link from 'next/link';

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

export default SidebarList;