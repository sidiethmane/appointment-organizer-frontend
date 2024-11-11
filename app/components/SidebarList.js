import React from 'react';
import { List, ListItemButton, ListItemIcon, ListItemText, Icon } from '@mui/material';
import Link from 'next/link';
import PropTypes from 'prop-types';

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

SidebarList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            icon: PropTypes.string,
        })
    ).isRequired
}

export default SidebarList;