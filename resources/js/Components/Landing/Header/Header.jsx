import { Box, Container, IconButton, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import AuthNavigation from "../Navigation/AuthNavigation";
import {Menu, Close} from "@mui/icons-material";
import { blue } from "@mui/material/colors";

export default function Header({user}){
    const [visibleMenu, setVisibleMenu] = useState(false);
    const {breakpoints } = useTheme()
    const matchMobileView = useMediaQuery(breakpoints.down("md"));

    return (
        <Box sx={{backgroundColor: "background.paper"}}>
            <Container sx={{ py: { xs: 2, md: 3 } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Box>
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{ fontWeight: 700, '& span': { color: blue[500]} }}
                        >
                            E<span>fishy</span>
                        </Typography>
                    </Box>
                    <Box sx={{ ml: 'auto', display: { xs: 'inline-flex', md: 'none' } }}>
                        <IconButton onClick={() => setVisibleMenu(!visibleMenu)}>
                            <Menu/>
                        </IconButton>
                    </Box>
                    <Box
                        sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: { xs: 'column', md: 'row' },

                        transition: (theme) => theme.transitions.create(['top']),
                        ...(matchMobileView && {
                            py: 6,
                            backgroundColor: 'background.paper',
                            zIndex: 'appBar',
                            position: 'fixed',
                            height: { xs: '100vh', md: 'auto' },
                            top: visibleMenu ? 0 : '-120vh',
                            left: 0,
                        }),
                        }}
                    >
                        <Box display={{xs:'none',md:'block'}} /> {/* Magic space */}
                        {/* <Navigation /> */}
                        <AuthNavigation user={user} />
                        {visibleMenu && matchMobileView && (
                        <IconButton
                            sx={{
                            position: 'fixed',
                            top: 10,
                            right: 10,
                            }}
                            onClick={() => setVisibleMenu(!visibleMenu)}
                        >
                            <Close />
                        </IconButton>
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
