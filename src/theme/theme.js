import { createTheme } from "@mui/material/styles";


//Colors used: Dark classic blue (#0A1828), turquoise (#178582)
export const colors = {
    primary: '#0A1828',
    secondary: '#178582',
    white: '#fff',
    gray: '#EBEBEB'
}



const theme = createTheme({
    palette: {
        primary: {
            main: colors.primary
        },
        secondary: {
            main: colors.secondary
        },
        gray: {
            main: colors.gray
        }
    }
});

export default theme