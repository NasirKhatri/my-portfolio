import Typography from "@mui/material/Typography/Typography"
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { ListItem, ListItemButton, ListItemIcon, ListItemText, Grid, Box } from "@mui/material";
import PageHeading from "@/components/PageHeading";
import PageBody from "@/components/PageLayouts";

export default function Contact() {
  return (
    <PageBody>
      <Grid item xs={12} alignItems="center">
        <PageHeading>Contact Details</PageHeading>
      </Grid>
      <Grid item xs={12} flexGrow={1} alignItems="center" sx={{ marginTop: "30px", maxWidth: { xs: "800px", md: "1200px" } }} rowSpacing={10}>
        <Box display="flex" justifyContent="center" p={2}>
          <EmailIcon fontSize="large" />
          <Typography ml={2} variant="h6">engrnasir73@gmail.com</Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={2}>
          <CallIcon fontSize="large" />
          <Typography ml={2} variant="h6">0334-2824412</Typography>
        </Box>
      </Grid>
    </PageBody>

  )
}