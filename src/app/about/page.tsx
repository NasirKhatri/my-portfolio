import Typography from "@mui/material/Typography/Typography"
import { Container, Grid } from "@mui/material"
import PageHeading from "@/components/PageHeading"
import PageBody from "@/components/PageLayouts"

export default function About() {
  return (
    <Container maxWidth="lg">
      <PageBody>
        <Grid item xs={12} alignItems="center">
          <PageHeading>Who Am I?</PageHeading>
        </Grid>
        <Grid item xs={12} flexGrow={1} sx={{ marginTop: "0px", paddingTop: "1rem" }}>
          <Typography variant="body1" sx={{textAlign: "justify"}}>
          From an industrial engineer graduate, a procurement engineer in leading automobile industry of Pakistan to a self-taught "Software Engineer", my journey is a testament to my adaptability and passion for learning. I made a conscious choice to transition from procurement to the dynamic world of software engineering, and I've never looked back.
          <br></br>
          <br></br>
          Currently I am associated with VeeOne Health as a "Front End Developer" on an angular based application where I am continuously learning and growing.
          <br></br>
          <br></br>
          Prior to it, I had also embarked on a self initiated project diving into the world of MERN stack development, showcasing my determination and drive, in addition I had also worked on part time basis on a react based application.
          <br></br>
          <br></br>
          My development journey began back in 2019, the "COVID" year. It brought many chaos all over the world but it also gave opportunity to explore new things. Since then I have been a self learnt programmer.
          <br></br>
          <br></br>
          I started my journey from "CodeAcademy", a world recognized platform of tech learning. But the journey of learning never comes to an end, hence continously exploring professional courses from online resources like "Linkedin Learning", "Youtube", "Pluralsight" to keep updated with the latest industry trends and development.
          <br></br>
          <br></br>
          So far my path have been very dynamic which includes ReactJS, Angular, ExpressJS, SQL and mongoDB too.
          </Typography>
        </Grid>
      </PageBody>
    </Container>
  )
}