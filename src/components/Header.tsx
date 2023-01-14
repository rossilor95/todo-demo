import { AppBar, Box, Toolbar, Typography } from '@mui/material';

const Header = () => (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="absolute">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Todo Demo App
                </Typography>
            </Toolbar>
        </AppBar>
        <Toolbar/>
    </Box>
);

export default Header;