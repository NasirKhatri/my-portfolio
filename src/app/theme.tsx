//import { createStyles, makeStyles } from '@mui/styles';
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//   }),
// );

import { createTheme } from '@mui/material/styles';
const theme = createTheme({
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
   // MuiTypography-body1: {
   //    styleOverrides: {
   //       root: {
   //          textAlign: "justify",
   //       }
   //    }
   // },
   // MuiPaper: {
   //    styleOverrides: {
   //       root: {
   //          "&:hover": {scale: "1.05"}
   //       }
   //    }
   // }
  }
});

// theme.typography.h3 = {
//     [theme.breakpoints.down("sm")]: {
//         fontSize: "32px"
//     },
//     fontWeight: "bold"
// }

theme.typography.body1.textAlign = "justify";

export default theme;