import React from 'react'
import {Typography,Grid, Card,CardContent,Button, CardMedia,CardActions,Container} from '@mui/material'
import {PrestationContainer,PrestationDetails,DevisList} from './style'
import { useParams } from 'react-router-dom'
import Img from '../../assets/img/banners-homepage.png'
import CardInfo from './CardInfo'
const PresentationItem = () => {
    const params = useParams();
  return (
    <>  
    <Container>
        <PrestationDetails>
            {/* {title } */}
            <Typography variant='h5' component='h1' sx={{mb:3,fontWeight:'bold'}}> PRESTATION {params.id} </Typography>
            <div>
              {/* {image details} */}
            <CardMedia
                component="img"
                height="340"
                width="30px"
                image={Img}
                alt="green iguana"
                sx={{mb:3}}
                                  />
            </div>
          {/* subtitle */}
          <Typography 
              variant='h6' 
              component='h3' 
              sx={{my:3,fontWeight:'bold'}}
            > 
            Prestation {params.id} 
          </Typography>
          {/* {Description} */}
          <Typography 
              variant="body2" 
              component="p" 
              sx={{mb:3}}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Dignissimos possimus repudiandae minima distinctio repellendus quae eius, harum odio assumenda modi
               consequatur aperiam excepturi rerum quibusdam optio sequi provident delectus necessitatibus.

          </Typography>


          <Typography 
              variant="body2" 
              component="p" 
              sx={{mb:3}}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Dignissimos possimus repudiandae minima distinctio repellendus quae eius, harum odio assumenda modi
               consequatur aperiam excepturi rerum quibusdam optio sequi provident delectus necessitatibus.

          </Typography>
            {/* card info */}
              <CardInfo />
        </PrestationDetails>
        </Container>
    </>
  )
}

export default PresentationItem