import React from 'react'
import {Typography,Container,List} from '@mui/material'
import OneQuestion from './OneQuestion'
const questions = [1,2,3,4,5,6]
const Foire = () => {
  return (
    <>  
        <Container sx={{my: 9}} >
            
            <Typography 
                variant="h4"
                gutterBottom
                sx={{
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    fontWeight:'bold'
                }}

            >Foire Aux Questions 
            </Typography>
            {questions.map(question => (
                <div key={question} style={{marginBottom : '10px'}}>
                <OneQuestion key={question} />
                </div>

            )

            )}
            
            
        </Container>
    </>
  )
}

export default Foire