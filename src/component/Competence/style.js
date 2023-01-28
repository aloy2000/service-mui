import { styled } from "@mui/material/styles";




export const CardCompetence = styled('div')(({ theme }) => ({

    marginTop: '63px',
  
}));

export const CardActionContent = styled('div')(({ theme }) => ({

    display: 'block',
    alignItems: 'center',
    justifyContent: 'center',
    div:{
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center'
    },
    button:{
        textTransform: 'none',
        position: 'relative',
        left: '6%',
        
        [theme.breakpoints.down('md')] : {
            left:'17%'
        },
        [theme.breakpoints.down('sm')] : {
            left: '17%',
        },
        [theme.breakpoints.between('sm','md')] : {
            left: '5%',
        },
       
    }
  
}));

