import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import SchoolIcon from '@mui/icons-material/School';
import ConstructionIcon from '@mui/icons-material/Construction';
import AssignmentIcon from '@mui/icons-material/Assignment'; // Projects
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar, Tooltip } from '@mui/material';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
    { title: "Home", href: "/", icon: <HomeIcon /> },
    { title: "About", href: "/about", icon: <PersonIcon /> },
    { title: "Skills", href: "/skills", icon: <ConstructionIcon /> },
    { title: "Education", href: "/education", icon: <SchoolIcon /> },
    { title: "Projects", href: "/projects", icon: <AssignmentIcon /> },
    { title: "Experience", href: "/experience", icon: <WorkOutlineIcon /> },
    { title: "Contact", href: "/contact", icon: <CallIcon /> },
];

export default function DrawerAppBar(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left', display: "flex", flexDirection: "column", height: "100vh" }}>
            <Box sx={{ display: "flex", flexDirection: "column", py: "30px", px: "15px", backgroundColor: "#1565c0" }}>
                <Avatar src="/../../public/IMG_20210816_130455.jpg" />
                <Typography variant="h5" sx={{ color: "white", fontWeight: "bold", mt: "15px" }}>
                    Muhammad Nasir
                </Typography>
            </Box>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton sx={{ textAlign: 'left' }} href={item.href}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                        <Divider />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2}}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'block' } }}
                    >
                        {!mobileOpen && "Muhammad Nasir" }
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        {navItems.map((item) => (
                            <Tooltip title={item.title}>
                            <IconButton key={item.title} size='large' color='secondary' href={item.href}>
                                {item.icon}
                            </IconButton>
                            </Tooltip>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: "block",
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>)
}