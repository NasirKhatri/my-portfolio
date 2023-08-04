"use client"

import Typography from "@mui/material/Typography/Typography"
import { Box, Grid, Button, Container } from '@mui/material';
import Image from 'next/image';
import DownloadIcon from '@mui/icons-material/Download';
import CallIcon from '@mui/icons-material/Call';
import useWindowSize from "@/hooks/useWindowSize";
import image from "./../../public/static/muhammadNasir.jpg"

export default function Home() {
  const size = useWindowSize();
  return (
    <Container maxWidth="lg" sx={{ height: "100%", paddingTop: "2rem", paddingBottom: "2rem" }}>
      <Container maxWidth="lg" sx={{ height: "100%", display: "flex", flexDirection: "row" }}>
        <Grid container alignItems="center" flexWrap="wrap-reverse">
          <Grid item xs={12} md={6} style={{ display: "flex", justifyContent: 'center' }}>
            <Box sx={{ maxWidth: "500px" }}>
              <Typography variant="h3" color="primary.light">Hi!</Typography>
              <Typography variant="h3">I'm Nasir,</Typography>
              <Typography variant="h3">Full-Stack Developer</Typography>
              <Typography variant="body1" sx={{ marginTop: "25px", marginBottom: "25px", textAlign: "justify" }}>I am a MERN Stack Developer, I work with ReactJS, React Native, NextJS, NodeJS, ExpressJS, MongoDB etc to develop web and mobile applications. Also carrying experience to work with third party libraries like MUI, Formik, Yup, Mongoose and many more. </Typography>
              <Button variant="outlined" startIcon={<DownloadIcon />} sx={{ marginRight: "10px" }}>Resume</Button>
              <Button variant="contained" startIcon={<CallIcon />}>Contact</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} textAlign="center">
            {
              size.width < 500 ?
                <div style={{ width: "225px", height: "225px", margin: "auto" }}>
                  <Image
                    alt="author"
                    src={image}
                    width={225}
                    height={225}
                    objectFit="cover"
                    style={{ borderRadius: "112.5px" }}
                  />
                </div>
                : <></>}
            {
              size.width >= 500 ?
                <div style={{ width: "350px", height: "350px", margin: "auto" }}>
                  <Image
                    alt="author"
                    src={image}
                    width={350}
                    height={350}
                    objectFit="cover"
                    style={{ borderRadius: "175px" }}
                  />
                </div>
                : <></>
            }
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

