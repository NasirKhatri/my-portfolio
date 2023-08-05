"use client"

import Typography from "@mui/material/Typography/Typography"
import { Box, Grid, Button, Container } from '@mui/material';
import Image from 'next/image';
import DownloadIcon from '@mui/icons-material/Download';
import CallIcon from '@mui/icons-material/Call';
import useWindowSize from "@/hooks/useWindowSize";
import image from "./../../public/static/muhammadNasir.jpg"
const Zoom = require('react-reveal/Zoom')

export default function Home() {
  const size = useWindowSize();
  return (
    <Container maxWidth="lg" sx={{ height: "100%", paddingTop: {xs: "1rem", sm:"2rem"}, paddingBottom: {xs: "1rem", sm:"2rem"} }}>
      <Container maxWidth="lg" sx={{ height: "100%", display: "flex", flexDirection: "row" }}>
        <Grid container alignItems="center" flexWrap="wrap-reverse">
          <Grid item xs={12} md={6} style={{ display: "flex", justifyContent: 'center' }}>
            <Box sx={{ maxWidth: "500px" }}>
              <Typography variant="h3" color="primary.light">Hi!</Typography>
              <Typography variant="h3">I'm Nasir,</Typography>
              <Typography variant="h3">Full-Stack Developer</Typography>
              <Typography variant="body1" sx={{ marginTop: {xs: "10px", sm:"25px"}, marginBottom:  {xs: "15px", sm:"25px"}, textAlign: "justify" }}>I am a MERN Stack Developer, I work with ReactJS, React Native, NextJS, NodeJS, ExpressJS, MongoDB etc to develop web and mobile applications. Also carrying experience to work with third party libraries like MUI, Formik, Yup, Mongoose and many more. </Typography>
              <a href="/static/MuhammadNasir.pdf" download><Button variant="outlined" startIcon={<DownloadIcon />} sx={{ marginRight: "10px", marginBottom: {xs: "25px", sm: "inherit"} }}>Resume</Button></a>
              <Button variant="contained" startIcon={<CallIcon />} href="/contact" sx={{ marginBottom: {xs: "25px", sm: "inherit"} }}>Contact</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} textAlign="center">
            {
              size.width < 500 ?
              <Zoom>
                <div style={{ width: "190px", height: "190px", margin: "auto" }}>
                  <Image
                    alt="author"
                    src={image}
                    width={190}
                    height={190}
                    objectFit="cover"
                    style={{ borderRadius: "95px" }}
                  />
                </div>
                </Zoom>
                : <></>}
            {
              size.width >= 500 ?
              <Zoom>
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
                </Zoom>
                : <></>
            }
          </Grid>
        </Grid>
      </Container>
    </Container>
  )
}

