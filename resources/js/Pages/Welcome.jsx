import HomeHero from '@/Components/Landing/Hero/HomeHero';
import Guest from '@/Layouts/GuestLayout';
import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <Guest user={auth.user}>
            <Head title='Welcome to Efishy'/>
            <HomeHero/>
        </Guest>
    );
}
