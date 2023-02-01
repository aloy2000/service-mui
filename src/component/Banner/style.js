import { styled } from "@mui/material/styles";
import { Box, useMediaQuery } from "@mui/material";
import ImgBanner from '../../assets/img/banners-homepage.jpg';


export const BannerSection = styled(Box)(({ theme }) => ({
    width: '100%',
    backgroundImage: `url(${ImgBanner})`,
    backgroundColor: "#0000",
    backgoundSize: 'contain',
    height: useMediaQuery(theme.breakpoints.down('xs')) ? '50px' : '968px',
    marginTop: -60
}));


export const BannerItem = styled('div')(({ theme }) => ({
    display: 'flex',
    padding: theme.spacing(13, 13),
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(10, 8),
        p: {
            fontSize: '14px',
        },
        button: {
            width: '100%'
        }
    },
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: useMediaQuery(theme.breakpoints.down('xs')) ? '50px' : '968px'

}));