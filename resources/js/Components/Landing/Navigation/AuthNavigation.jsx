import { router, useForm } from "@inertiajs/react";
import { Box, Button } from "@mui/material";

const AuthNavigation = ({user}) =>{

    const {get} = useForm();
    return (
        <Box sx={{ '& button:first-child': { mr: 2 } }}>
            {!user ?
                <div>
                    <Button disableHoverEffect={true} onClick={()=>router.get(route('forgot-password'))} variant="contained" >
                        Forgot Password
                    </Button>
                    <Button disableHoverEffect={false} onClick={()=>router.get(route('login'))} variant="outlined">
                        Sign In
                    </Button>

                    </div>
                    :
                    <Button disabledHoverEffect={false} onClick={()=>router.get(route('dashboard'))} variant='contained'>Dashboard</Button>

                    }

        </Box>
    )
}

export default AuthNavigation;
