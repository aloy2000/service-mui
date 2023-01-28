import React from 'react'
import {Typography,Container} from '@mui/material'
import TablePrestation from './TablePrestation'
const PrestationList = () => {
  return (
    <>
    <Container>
        <Typography 
            variant="h4"
            gutterBottom

            >Plomberie 
        </Typography>

        <Typography 
            variant="body2"
            gutterBottom
            component="p"
            >La plomberie n'a aucun secret pour nous, quelque soit la presation demandée, nous nous en occupons 
            avec précision et professionnalisme. Vous serez satisfaits de notre travail en un rien de temps et nous vous 
            garantissons un travail plus que parfait.
        </Typography>
        <div style={{marginTop: '40px'}}>
            <Typography 
                variant="h6"
                gutterBottom

                >
                    Domaines d'intervention 
            </Typography>

            <Typography 
                variant="body2"
                gutterBottom
                component="p"
                >Nous exécutons tout travaux dans le domaine de plomberie, parmi ces travaux, voici un tableau contenant les services
                 et les domaines que nous prenons en charge 
            </Typography>
        </div>

        <TablePrestation />

    </Container>
    </>
  )
}

export default PrestationList