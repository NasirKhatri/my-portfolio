//import { createStyles, makeStyles } from '@mui/styles';
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//   }),
// );

import { createTheme, responsiveFontSizes } from '@mui/material/styles';
let theme = createTheme({
  palette: {
     primary: {
        main: '#1976d2',
     },
     secondary: {
        main: '#ffffff',
     },
     success: {
         main: '#ff9800'
     }
  },
  components: {
   MuiDivider: {
      styleOverrides: {
         root: {
            marginTop: "10px",
            marginBottom: "10px",
         }
      }
   },
  }
});

theme = responsiveFontSizes(theme);
theme.typography.body1.textAlign = "justify";

export default theme;