import { Grid, Paper, Typography, Divider, Container } from "@mui/material"
import data from "../../data.json";
import PageBody from "@/components/PageLayouts";
import PageHeading from "@/components/PageHeading";
import EducationCard from "@/components/EducationCard";

export default function Education() {
  return (
    <Container maxWidth="lg">
    <PageBody>
      <Grid item xs={12} alignItems="center">
        <PageHeading>Academic Backgroud</PageHeading>
      </Grid>
      <Grid item container xs={12} flexGrow={1} sx={{ marginTop: "0px"}} rowSpacing={4}>
        {
          data.Education.map((item) => (
            <Grid item xs={12} md={6} lg={4} sx={{ display: "flex", flexDirection: "row", alignItems: "stretch", justifyContent: "center" }}>
              <EducationCard data={item} />
            </Grid>
          ))
        }
        <Grid item xs={12} md={6} lg={4} sx={{ display: "flex", flexDirection: "row", alignItems: "stretch", justifyContent: "center" }}>
        <Paper elevation={12} sx={{ width: "350px", borderRadius: "6px", padding: "15px", "&:hover": {scale: "1.05"}}}>
            <Typography variant='h5' sx={{ textAlign: 'center', color: "primary.light", fontWeight: "bold" }}>
                Linkedin Courses
            </Typography>
            <Divider />
            <Typography variant='body1'>ReactJS Essential Training</Typography>
            <Typography variant='body1'>From React to React Native</Typography>
            <Typography variant='body1'>Learning NextJS</Typography>
            <Typography variant='body1'>Learning Typescript</Typography>
            <Typography variant='body1'>NodeJS Essential Training</Typography>
            <Typography variant='body1'>ExpressJS Essential Training</Typography>
            <Typography variant='body1'>NodeJS: Securing Web APIs</Typography>
            <Typography variant='body1'>Data Modeling in MongoDB</Typography>
            <Typography variant='body1'>Creating & Hosting Full Stack Site</Typography>
        </Paper>
        </Grid>
        <Grid />
      </Grid>
    </PageBody>
    </Container>
  )
}