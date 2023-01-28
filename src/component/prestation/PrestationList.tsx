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

            >Title 
        </Typography>

        <Typography 
            variant="body2"
            gutterBottom
            component="p"
            >Lorem   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dignissimos possimus repudiandae minima distinctio repellendus quae eius,
        </Typography>
        <div style={{marginTop: '40px'}}>
            <Typography 
                variant="h6"
                gutterBottom

                >SubTitle 
            </Typography>

            <Typography 
                variant="body2"
                gutterBottom
                component="p"
                >Lorem   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dignissimos possimus repudiandae minima distinctio repellendus quae eius,
            </Typography>
        </div>

        <TablePrestation />

    </Container>
    </>
  )
}

export default PrestationList