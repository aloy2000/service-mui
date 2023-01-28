import { styled } from "@mui/material/styles";




export const ScrollBtn = styled('div')(({ theme }) => ({

    backgroundColor: theme.palette.secondary.main,
    width:'45px',
    zIndex: 30,
    button:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        color:'white'
    },
    position: 'fixed',
    left: '90%',
    top:'80%',
    borderRadius: '4px'
   

  
}));