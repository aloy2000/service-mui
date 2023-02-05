import { AppBar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
//import { Button } from "@mui/material";

export const  AppBarItem = styled('div')(({ theme }) => ({

    display: 'flex',
    position: 'relative',
    left:'50%',
    padding: theme.spacing(0,2),
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]:{
        position: 'relative',
        left:'100%'
    }

}));

export const  LogoNav = styled(Typography)(({ theme }) => ({

    
    [theme.breakpoints.down('xs')]:{
        color:'#000',
       display:'flex',
       alignItems: 'center',
       justifyContent:'center'
    }

}));

export const NavInfoContainer = styled(AppBar)(({ theme }) => ({
    
    // backgroundColor: 'transparent',
    button:{
        padding: theme.spacing(0,1)
    }
}));




export const SocialProvider = styled('div')(({ theme }) => ({
    display:'flex',
    position:'relative',
    left: '55%',
    padding:theme.spacing(0,6),
    [theme.breakpoints.down('md')]: {
        left: '40%'
    },
    [theme.breakpoints.down('sm')]: {
        left:'20%',
    },
    [theme.breakpoints.down('xs')]: {
        left: '10%'
    }

}));