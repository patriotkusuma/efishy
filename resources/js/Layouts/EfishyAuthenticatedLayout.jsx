import {useState} from "react";
import {styled} from '@mui/material/styles';

const StyledHeader = styled('header')(({theme})=>({
    top:0,
    left:0,
    lineHeight: 0,
    width: '100%',
    position: 'absolute',
    padding: theme.spacing(3, 3, 0),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(5, 5, 0),
    },
}));
export default function EfishyAuthenticated({user, header, children}){

    return (
        <>
            <StyledHeader>

            </StyledHeader>
            {children}
        </>
    )
}
