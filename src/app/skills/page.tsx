import Typography from "@mui/material/Typography/Typography"
import { Box, Grid } from "@mui/material"
import SkillCard from "@/components/SkillCard"
import data from "../../data.json";
import PageBody from "@/components/PageLayouts";
import PageHeading from "@/components/PageHeading";

export default function Skills() {
  return (
    <PageBody>
      <Grid item xs={12} alignItems="center">
        <PageHeading>Skills Overview</PageHeading>
        <Typography variant="body1" sx={{ maxWidth: "lg", textAlign: "justify", paddingTop: "15px", margin: "auto" }}>
          I have more than two years experiene of building rich web and mobile applications. Below is my quick overview of my technical skills' set and tools which I use for development. Would like to hire or know more about me? please contact
        </Typography>
      </Grid>
      <Grid item container xs={12} flexGrow={1} sx={{ marginTop: "0px", maxWidth: { xs: "800px", md: "1200px" } }} rowSpacing={10}>
        <Grid item xs={12} md={6} lg={4} sx={{ display: "flex", flexDirection: "row", alignItems: "stretch", justifyContent: "center" }}>
          <SkillCard data={data.skills[0]} />
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ display: "flex", flexDirection: "row", alignItems: "stretch", justifyContent: "center" }}>
          <SkillCard data={data.skills[1]} />
        </Grid>
        <Grid item xs={12} md={6} lg={4} sx={{ display: "flex", flexDirection: "row", alignItems: "stretch", justifyContent: "center" }}>
          <SkillCard data={data.skills[2]} />
        </Grid>
      </Grid>
    </PageBody>
  )
}