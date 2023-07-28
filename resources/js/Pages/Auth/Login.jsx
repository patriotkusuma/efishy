import { useEffect } from 'react';
// import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, router, useForm } from '@inertiajs/react';
import { Box, Card, CardContent,Checkbox, Link, CardHeader, Container, FormControl, FormControlLabel, Grid, Stack, TextField, Typography, Button } from '@mui/material';
import { blue, grey } from '@mui/material/colors';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
            <Head title="Log in" />

            <Box id="hero" sx={{
                alignItems:'center',
                backgroundColor: grey[200],
                position: 'relative',
                justifyContent:'center',
                height:'100vh',
                pt:12
                }}>
            <Container maxWidth="sm">

                <Box sx={{ lineHeight: 0 }}>
                    <Stack spacing={3} direction="column" justifyContent="center">
                        <Link href={route('welcome')} underline='none' color="text.primary">
                            <Typography
                                sx={{
                                    fontSize:{xs:40, md:58},
                                    fontWeight:'bold',
                                    lineHeight:1.3,
                                    '& b' : {
                                        color: blue[700]
                                    },
                                }}

                                variant='h2'>
                            E<b>fishy</b>
                            </Typography>
                        </Link>
                        <Card sx={{borderRadius:3}}>
                            <CardHeader title="Sign In"/>
                            <CardContent>

                            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                            <Box component="form"  onSubmit={submit}>
                                <Stack spacing={3}>
                                    <TextField
                                        id='email'
                                        type='email'
                                        name='email'
                                        value={data.email}
                                        autoComplete='username'
                                        focused
                                        onChange={(e)=>setData('email',e.target.value)}
                                        error={errors.email ? true: false}
                                        label="E-mail"
                                        fullWidth
                                        helperText={errors.email && errors.email}
                                    />


                                    <TextField
                                        id="outlined-password-input"
                                        type='password'
                                        name='password'
                                        value={data.password}
                                        autoComplete='current-password'
                                        focused
                                        onChange={(e)=>setData('password',e.target.value)}
                                        error={errors.password ? true: false}
                                        label="Password"
                                        fullWidth
                                        helperText={errors.password && errors.password}
                                    />

                                    <FormControlLabel control={
                                        <Checkbox
                                            name="remember"
                                            checked={data.remember}
                                            onChange={(e) => setData('remember', e.target.checked)}
                                        />}
                                        label="Remember Me"/>

                                    <Grid container justifyContent="space-between" alignItems="center">
                                        {canResetPassword && (

                                            <Grid item>

                                                <Link
                                                    href={route('password.request')}
                                                    color="text.secondary"
                                                >
                                                    Forgot your password?
                                                    </Link>
                                            </Grid>
                                        )}

                                        <Grid item>

                                            <Button type='submit' variant='contained' disabled={processing}>
                                                Log in
                                            </Button>
                                        </Grid>
                                    </Grid>

                                </Stack>
                            </Box>
                            </CardContent>
                        </Card>
                    </Stack>

                </Box>

            </Container>
        </Box>

            {/* <Container maxWidth="lg">
                <Grid container >
                    <Grid item xs={12} md={7}>

                    </Grid>
                    <Grid item xs={12} md={5}>


                <Card>
                    <CardHeader title="Sign In"/>
                    <CardContent>

                    {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="email" value="Email" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="block mt-4">
                            <label className="flex items-center">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                />
                                <span className="ml-2 text-sm text-gray-600">Remember me</span>
                            </label>
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Forgot your password?
                                </Link>
                            )}

                            <PrimaryButton className="ml-4" disabled={processing}>
                                Log in
                            </PrimaryButton>
                        </div>
                    </form>
                    </CardContent>
                </Card>
                    </Grid>

                </Grid>

            </Container> */}

        </>
    );
}
