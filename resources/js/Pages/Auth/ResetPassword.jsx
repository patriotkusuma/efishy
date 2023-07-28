import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, router, useForm } from '@inertiajs/react';
import { Alert, AlertTitle, Box, Button, Card, CardContent, CardHeader, Container, Grid, Link, Stack, TextField, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: '',
        password_confirmation: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('password.store'));
    };

    return (
        <>
            <Head title="Reset Password" />

            <Box id="hero" sx={{
                alignItems:'center',
                backgroundColor: grey[200],
                position: 'relative',
                justifyContent:'center',
                height:'100vh',
                pt:8
                }}
                >
                <Container maxWidth="sm">

                    <Box sx={{ lineHeight: 0 }}>
                        <Stack
                            spacing={3} direction="column" justifyContent="center"
                        >
                            <Link href={route('welcome')} underline='none' color="text.primary">
                                <Typography
                                    // onClick={()=>router.get(route('welcome'))}
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
                                <CardHeader title="Forgot Password"/>
                                <CardContent>



                                <Box component="form"  onSubmit={submit}>
                                    <Stack spacing={2}>
                                        <TextField
                                            id="outlined-email"
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
                                            autoComplete='New Password'
                                            onChange={(e)=>setData('password',e.target.value)}
                                            error={errors.password ? true: false}
                                            label="Password"
                                            fullWidth
                                            helperText={errors.password && errors.password}

                                        />

                                        <TextField
                                            id="outlined-password-input"
                                            type='password'
                                            name='password_confirmation'
                                            value={data.password_confirmation}
                                            autoComplete='Password Confirmation'
                                            onChange={(e)=>setData('password_confirmation', e.target.value)}
                                            error={errors.password_confirmation ? true: false}
                                            label="Password Confirmation"
                                            fullWidth
                                            helperText={errors.password_confirmation && errors.password_confirmation}
                                        />

                                        <Grid container justifyContent="flex-end" alignItems="center">
                                            <Grid item>
                                                <Button type='submit' variant='contained' disabled={processing}>
                                                    Email Password Reset Link
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

            {/* <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
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
                        autoComplete="new-password"
                        isFocused={true}
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ml-4" disabled={processing}>
                        Reset Password
                    </PrimaryButton>
                </div>
            </form> */}
        </>
    );
}
