import Typography from "@mui/material/Typography/Typography"
import { Box, Grid } from "@mui/material"
import SkillCard from "@/components/SkillCard"
import data from "../../data.json";

export default function Skills() {
  return (
    <Box sx={{ height: "100%", display: "flex", maxWidth: "1200px", margin:"auto", flexDirection: "column", justifyContent: "center", padding: "15px", paddingTop: "50px" }}>
      <Grid item xs={12} alignItems="center">
        <Typography variant="h3" sx={{ textAlign: "center" }}>Skills Overview</Typography>
        <Typography variant="body1" sx={{maxWidth: "800px", textAlign: "justify", paddingTop: "15px", margin: "auto"}}>
          I have more than two years experiene of building rich web and mobile applications. Below is my quick overview of my technical skills' set and tools which I use for development. Would like to hire or know more about me? please contact
        </Typography>
      </Grid>
      <Grid item container xs={12} flexGrow={1} sx={{marginTop: "0px"}} rowSpacing={10}>
        <Grid item xs={12} md={6} lg={4} sx={{display: "flex", flexDirection: "row", alignItems: "stretch"}}>
        <SkillCard data={data.skills[0]}/>
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{display: "flex", flexDirection: "row", alignItems: "stretch"}}>
        <SkillCard data={data.skills[1]}/>
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{display: "flex", flexDirection: "row", alignItems: "stretch    "}}>
        <SkillCard data={data.skills[2]}/>
        </Grid>
      </Grid>
    </Box>
  )
}