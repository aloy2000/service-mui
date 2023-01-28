import React ,{useState}from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Collapse from '@mui/material/Collapse';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

import List from '@mui/material/List';

const OneQuestion = () => {

    const [open, setOpen] = useState(true);

    const handleClick = () => {
      setOpen(!open);
    };
    return (
        <>  
             <List
                sx={{ width: '100%', bgcolor: '#f4f7f7' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                
                >
     
     
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                <QuestionMarkIcon />
                </ListItemIcon>
                <ListItemText primary="What's your favourite ice?" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                    <QuestionAnswerIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Favorite ice is bala alalalal" />
                </ListItemButton>
                </List>
            </Collapse>
            </List>
            
        </>
    )
    }

export default OneQuestion