import React from 'react'
import {Container,Typography,Grid} from '@mui/material'
import CardVille from './CardVille'

const villes = ["ville1","Ville2","ville3","ville4"]

const VilleIntervention = () => {
  return (
    <>
    <Container sx={{mt:7,backgroundColor: '#ececec'}} >
    <Typography 
            variant="h4"
            gutterBottom
            sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                fontWeight:'bold'
            }}

            >Villes 
        </Typography>
        <Grid container spacing={3}>
            {villes.map(ville => (
                <Grid key={ville} item md={6} xs={12} sm={12}>
                    <CardVille ville={ville} />
                </Grid>
            ))
            
            }
        </Grid>
        

    </Container>
    </>
  )
}

export default VilleIntervention