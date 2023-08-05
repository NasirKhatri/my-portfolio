"use client"
import { Grid, Typography, Box, Container, FormControl, Select, MenuItem  } from "@mui/material"
import data from "../../data.json";
import PageBody from "@/components/PageLayouts";
import PageHeading from "@/components/PageHeading";
import { useState } from "react";

const ProjectsDetails = data.Projects;


const ProjectList = ({ activeProject, setProject }: any) => {
  return (
    <Box sx={{ minWidth: 240 }}>
    <FormControl fullWidth>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={activeProject}
        onChange={(e) => setProject(e.target.value)}
      >
        {
          ProjectsDetails.map((project) => (
            <MenuItem value={project.ProjectTitle}>{project.ProjectTitle}</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  </Box>
  )
}

export default function Projects() {
  const [activeProject, setProject] = useState(ProjectsDetails[0].ProjectTitle)
  const project = ProjectsDetails.filter((project) => project.ProjectTitle === activeProject)
  return (
    <Container maxWidth="lg">
    <PageBody>
      <Grid item xs={12} alignItems="center">
        <PageHeading>Projects</PageHeading>
      </Grid>
      <Grid item container xs={12} flexGrow={1} sx={{ marginTop: "0px", maxWidth: { xs: "800px", md: "1200px" } }}>
        <Grid item display="flex" flexDirection="column" xs={12}>
          <Grid sx={{ padding: "10px" }}>
            <ProjectList activeProject={activeProject} setProject={setProject} />
          </Grid>
          <Grid sx={{marginTop: "10px"}}>
            <Typography variant="h5">Languages / Frameworks:</Typography>
            <Typography variant="body1">{project[0].Frameworks}</Typography>
          </Grid>
          <Grid flexGrow={1}  sx={{marginTop: "10px"}}>
            <Typography variant="h5">Details:</Typography>
            <Typography variant="body1">{project[0].Details}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </PageBody>
    </Container>
  )
}