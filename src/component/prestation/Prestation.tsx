import React from 'react'
import {Typography,Grid, Card,CardContent,Button, CardMedia,CardActions} from '@mui/material'
import {PrestationContainer,PrestationDetails,DevisList} from './style'
import { useParams } from 'react-router-dom'
import Img from '../../assets/img/banners-homepage.png'
import AlertInfo from './AlertInfo'
import TypeDevis from './TypeDevis'
import CardInfo from './CardInfo'
import PrestationList from './PrestationList'
import PresentionItem from './PresentationItem'
import VilleIntervention from './VilleIntervention'
import Foire from '../FAQ/Foire'

const devis = [ 
    {
      "id": 1,
      "title": "Devis en ligne",
      "price":"Gratuit"
    },
    {
      "id":2,
      "title": "Frais de déplacement",
      "price":"$ 100"
    },
    {
      "id":3,
      "title": "Main d'oeuvre",
      "price":"$ 300"
    },

]

const Prestation = () => {
  //const params = useParams();
  //console.log('param',params)

  return (
    <>
    <PrestationContainer sx={{mt: 4}} >
      <Grid container spacing={4}>
        <Grid  item md={8} xs={12}>
          <PresentionItem />
        </Grid>

        <Grid item md={4}>
        <Card>
                            
            <CardContent>
                                
                <Typography 
                    gutterBottom   
                    variant="h5" 
                    component="div"
                    sx={{display:'flex',alignItems:'center',justifyContent:'center'}}
                  >
                      Nos tarifs d'intervention.
                </Typography>
                <Typography
                    gutterBottom 
                    variant="body2" 
                    component="p" 
                    sx={{mb:3}}
                  >
                    Vous cherchez un prix pour vos travaux et dépannages ?
                    Voici nos tarifs avec des prix très raisonnables. Néanmoins ces prix peuvent 
                    changer selon le cas rencontré.

                </Typography>
                {/* typedevis */}
                <DevisList>
                  {devis.map(devi => (
                      <TypeDevis key={devi.id} title={devi.title} price={devi.price}/>
                  ))}
                  
                </DevisList>

            </CardContent>
                <CardActions
                    sx={{display:'flex',alignItems:'center',justifyContent:'center'}}
                >
                  <Button 
                    variant="contained"
                                  
                  >Demander Devis
                  </Button>
                </CardActions>
                        
        </Card>

          {/* {alert info} */}
          <AlertInfo  />
        

        

        </Grid>

      </Grid>
        <PrestationList />
        <VilleIntervention />
      </PrestationContainer> 
      <Foire />
    </>
  )
}

export default Prestation