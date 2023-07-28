import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, router, useForm } from '@inertiajs/react';
import { Alert, AlertTitle, Box, Button, Card, CardContent, CardHeader, Checkbox, Container, FormControlLabel, Grid, Link, Stack, TextField, Typography } from '@mui/material';
import { blue, grey } from '@mui/material/colors';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <>
            <Head title="Forgot Password" />

            <Box id="hero" sx={{
                alignItems:'center',
                backgroundColor: grey[200],
                position: 'relative',
                justifyContent:'center',
                height:'100vh',
                pt:8
                }}>
            <Container maxWidth="sm">

                <Box sx={{ lineHeight: 0 }}>
                    <Stack spacing={3} direction="column" justifyContent="center">
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
                                     {status &&
                                        <Alert severity="success" variant='filled'>
                                            <AlertTitle>Success</AlertTitle>
                                            {status}
                                        </Alert>
                                    }
                                    <Typography>
                                        Forgot your password? No problem. Just let us know your email address and we will email you a password
                                        reset link that will allow you to choose a new one.
                                    </Typography>
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

                                    <Grid container justifyContent="flex-end" alignItems="center">
                                        <Grid item>
                                            <Button  type='submit' variant='contained' disabled={processing}>
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

            {/* <div className="mb-4 text-sm text-gray-600">
                Forgot your password? No problem. Just let us know your email address and we will email you a password
                reset link that will allow you to choose a new one.
            </div>

            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData('email', e.target.value)}
                />

                <InputError message={errors.email} className="mt-2" />

                <div className="flex items-center justify-end mt-4">
                    <PrimaryButton className="ml-4" disabled={processing}>
                        Email Password Reset Link
                    </PrimaryButton>
                </div>
            </form> */}
        </>
    );
}
