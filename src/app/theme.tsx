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
     }
  },
});

// theme.typography.h3 = {
//     [theme.breakpoints.down("sm")]: {
//         fontSize: "32px"
//     },
//     fontWeight: "bold"
// }

export default theme;