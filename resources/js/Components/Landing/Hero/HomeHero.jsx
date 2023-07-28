import { Box, Card, CardContent, CardHeader, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";

const HomeHero = () => {
    return(
        <Box id="hero" sx={{position: 'relative', pt:{xs:4,md:12},pb:{xs:8,md:10}}}>
            <Container maxWidth="lg">
                <Grid container spacing={0} direction={{xs:'column',md:'unset'}}>
                    <Grid item xs={12} md={7}>
                        <Box
                            sx={{
                                textAlign: { xs: 'center', md: 'left' },
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}>
                            <Box sx={{mb:3}}>
                                <Typography
                                    component="h3"
                                    sx={{
                                        position: 'relative',
                                        fontSize: { xs: 40, md: 62 },
                                        letterSpacing: 1.5,
                                        fontWeight: 'bold',
                                        lineHeight: 1.3,
                                        '& span':{
                                            color: 'text.secondary'
                                        }
                                    }}
                                >

                                    <Typography
                                        component="mark"
                                        sx={{
                                        position: 'relative',
                                        color: 'text.secondary',
                                        fontSize: 'inherit',
                                        fontWeight: 'inherit',
                                        backgroundColor: 'unset',
                                        }}
                                    >
                                        Welcome{' '}
                                        {/* <Box
                                             sx={{
                                                position: 'absolute',
                                                top: { xs: 24, md: 34 },
                                                left: 2,
                                                transform: 'rotate(3deg)',
                                                '& img': { width: { xs: 146, md: 210 }, height: 'auto' },
                                            }}
                                        >
                                            <img src="/images/headline-curve.svg" alt="Headline curve" />
                                        </Box> */}
                                    </Typography>
                                    to{' '}
                                    <Typography

                                        component="b"
                                        sx={{
                                        fontSize: 'inherit',
                                        fontWeight: 'inherit',
                                        position: 'relative',
                                        '& svg': {
                                            position: 'absolute',
                                            top: -16,
                                            right: -21,
                                            width: { xs: 22, md: 30 },
                                            height: 'auto',
                                        },

                                        }}
                                    >
                                        Efishy

                                        <svg version="1.1" viewBox="0 0 3183 3072">
                                            <g id="Layer_x0020_1">
                                                <path
                                                fill={blue[700]}
                                                d="M2600 224c0,0 0,0 0,0 236,198 259,562 52,809 -254,303 -1849,2089 -2221,1776 -301,-190 917,-1964 1363,-2496 207,-247 570,-287 806,-89z"
                                                />
                                                <path
                                                fill={blue[700]}
                                                d="M3166 2190c0,0 0,0 0,0 64,210 -58,443 -270,516 -260,90 -1848,585 -1948,252 -104,-230 1262,-860 1718,-1018 212,-73 437,39 500,250z"
                                                />
                                                <path
                                                fill={blue[700]}
                                                d="M566 3c0,0 0,0 0,0 -219,-26 -427,134 -462,356 -44,271 -255,1921 90,1962 245,62 628,-1392 704,-1869 36,-221 -114,-424 -332,-449z"
                                                />
                                            </g>
                                        </svg>
                                    </Typography>{' '}
                                    <br/>
                                    pond Monitoring {' '}
                                    <span>
                                        App
                                    </span>
                                </Typography>
                            </Box>
                            <Box sx={{ mb: 4, width: { xs: '100%', md: '70%' } }}>
                                <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                                {
                                    "Aplikasi yang dapat melakukan pemberian pakan secara otomatis serta dapat memonitoring keadaan kolam secara RealTime berbasis web dengan komunikasi MQTT."
                                }
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5} sx={{position:'relative'}}>
                        <Box sx={{ lineHeight: 0 }}>

                            <Card sx={{borderRadius:3, boxShadow:3}}>
                                <CardHeader title="Mqtt Configuration"/>
                                <CardContent >
                                    <Box component="form">
                                        <Stack spacing={3}>

                                            <TextField
                                                fullWidth
                                                id="outlined-read-only-input"
                                                label="Host"
                                                defaultValue="mqtt.efishy.my.id"
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                            />
                                            <Stack direction="row" justifyContent="space-between" >
                                                <TextField
                                                    id="outlined-read-only-input"
                                                    label="Mqtt Port"
                                                    defaultValue="8883"
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                />
                                                <TextField
                                                    id="outlined-read-only-input"
                                                    label="Websocket Port"
                                                    defaultValue="8083"
                                                    InputProps={{
                                                        readOnly: true,
                                                    }}
                                                />
                                            </Stack>
                                            <TextField
                                                fullWidth
                                                id="outlined-read-only-input"
                                                label="Username"
                                                defaultValue="patriot"
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                            />
                                            <TextField
                                                fullWidth
                                                id="outlined-read-only-input"
                                                label="Password"
                                                defaultValue="as Usual"
                                                InputProps={{
                                                    readOnly: true,
                                                }}
                                            />

                                        </Stack>
                                    </Box>
                                </CardContent>
                            </Card>
                            {/* <img src="/images/logo/efishy.png" width={775} height={787} alt="Hero img" /> */}
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default HomeHero
