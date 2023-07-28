import { Box } from "@mui/material";
import { NavigationData } from "./NavigationData";
import {Link as ScrollLink} from "react-scroll"



const Navigation = () => {
    return (

        <Box
            sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}
        >
            {NavigationData.map(({ path: destination, label }) => (
            <Box
            component={ScrollLink}
            key={destination}
            activeClass="current"
            to={destination}
            spy={true}
            smooth={true}
            duration={350}
            sx={{
                position: 'relative',
                color: 'text.disabled',
                cursor: 'pointer',
                fontWeight: 600,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: { xs: 0, md: 3 },
                mb: { xs: 3, md: 0 },
                fontSize: { xs: '1.2rem', md: 'inherit' },
                ...(destination === '/' && {
                color: 'primary.main',
                }),

                '& > div': { display: 'none' },

                '&.current>div': { display: 'block' },

                '&:hover': {
                color: 'primary.main',
                '&>div': {
                    display: 'block',
                },
                },
            }}
            >
            <Box
                sx={{
                position: 'absolute',
                top: 12,
                transform: 'rotate(3deg)',
                '& img': { width: 44, height: 'auto' },
                }}
            >
                {/* eslint-disable-next-line */}
                <img src="/images/headline-curve.svg" alt="Headline curve" />
            </Box>
            {label}
            </Box>
        ))}
        </Box>
    );
}

export default Navigation;