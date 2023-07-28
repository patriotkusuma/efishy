import EfishyGuest from "@/Layouts/EfishyGuestLayout.jsx";
import {Box, Button, Checkbox, createTheme, FormControlLabel, Grid, TextField, Typography} from "@mui/material";
import {Head, Link, useForm} from "@inertiajs/react";
import {useEffect} from "react";

function Copyright(props) {
    return(
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

const defaultTheme = createTheme();

export default function Register(){
    const {data, setData, post, processing, errors, reset} = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(()=> {
        return ()=> {
            reset('password','password_confirmation');
        };
    },[]);

    const submit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return <EfishyGuest>
        <Head title="Register"/>
        <Box xs={12} component="form" noValidate onSubmit={submit} sx={{ mt: 3 , alignItems: 'center',}}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="given-name"
                        name="firstName"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="family-name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                        label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                </Grid>
            </Grid>

            <Button
                type="submit"
                fullwidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Register
            </Button>
            <Grid container justifyContent="flex-end">
                <Grid item>
                    <Link href={route('login')} variant="body2">
                        Already have an account? Sign in
                    </Link>
                </Grid>
            </Grid>
        </Box>
    </EfishyGuest>
}
