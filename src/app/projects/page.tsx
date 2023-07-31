"use client"
import { Grid, Typography, Divider, Box, List, ListItem, ListItemButton, ListItemText, ButtonGroup, Button, Paper, ImageList, ImageListItem } from "@mui/material"
import data from "../../data.json";
import PageBody from "@/components/PageLayouts";
import PageHeading from "@/components/PageHeading";
import { useState } from "react";
import Image from "next/image";

const ProjectsDetails = data.Projects;


const ProjectList = ({ activeProject, setProject }: any) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>
      {
        ProjectsDetails.map((project) => (
          <Paper onClick={() => setProject(project)} elevation={12} sx={{padding: "10px", margin: "10px", cursor: "pointer", backgroundColor: activeProject.ProjectTitle === project.ProjectTitle ? (theme) => theme.palette.primary.main : "inherit", "&:hover": { scale: "1.05" } }}>
            <Typography variant="h6" sx={{ color: activeProject.ProjectTitle === project.ProjectTitle ? (theme) => "white" : "inherit" }}>
              {project.ProjectTitle}
            </Typography>
          </Paper>
        ))
      }
    </Box>
  )
}

/////////////////////////////////////////////////////

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

////////////////////////////////////////////////////

export default function Projects() {
  const [activeProject, setProject] = useState(ProjectsDetails[0])
  return (
    <PageBody>
      <Grid item xs={12} alignItems="center">
        <PageHeading>Projects</PageHeading>
      </Grid>
      <Grid item container xs={12} flexGrow={1} sx={{ marginTop: "0px", maxWidth: { xs: "800px", md: "1200px" } }}>
        <Grid item display="flex" flexDirection="column" xs={12}>
          <Grid sx={{ padding: "10px" }}>
            <ProjectList activeProject={activeProject} setProject={setProject} />
          </Grid>
          <Grid sx={{ padding: "10px" }}>
            <Typography variant="h5">Languages / Frameworks:</Typography>
            <Typography variant="body1">{activeProject.Frameworks}</Typography>
          </Grid>
          <Grid flexGrow={1} sx={{ padding: "10px" }}>
            <Typography variant="h5">Details:</Typography>
            <Typography variant="body1">{activeProject.Details}</Typography>
          </Grid>
          {/* <Grid sx={{ backgroundColor: "lightGray", padding: "5px" }}>
            <ImageList sx={{ width: "100%", height: "200px" }} variant="quilted" cols={10} rowHeight={200}>
              {activeProject.pictures.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                  <Image
                    {...srcset(item.img, 121, item.rows, item.cols)}
                    alt={item.title}
                    loading="lazy"
                    fill
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid> */}
        </Grid>
      </Grid>
    </PageBody>
  )
}


const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    cols: 2,
  },
];