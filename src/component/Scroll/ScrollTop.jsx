import React,{useState,useEffect} from 'react'
import { IconButton } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import {ScrollBtn} from './style'
const ScrollTop = () => {

  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };
  
  return (
    <>
    {showButton && (
      <ScrollBtn>
    <IconButton
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    <KeyboardArrowUp />
    </IconButton>
    </ScrollBtn>
    )}

    </>
  )
}

export default ScrollTop