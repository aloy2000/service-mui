import DeskAppBar from './DeskAppBar'
import MobileAppBar from './MobileAppBar'
import {useMediaQuery} from '@mui/material'
import {useTheme} from '@mui/material/styles'

const Navbar = () => {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'))
    return(
        <>
        {matches ? <MobileAppBar/> :<DeskAppBar />}
        
        </>
    )

}

export default Navbar 