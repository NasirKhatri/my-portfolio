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
        <Grid item container xs={12} flexGrow={1} sx={{ marginTop: "0px", maxWidth: { xs: "800px", md: "1200px" }, paddingTop: "15px" }} rowSpacing={10}>
          <Typography variant="body1" sx={{textAlign: "justify"}}>
            I am an Industrial engineer by profession and a full stack web developer by passion, I am also holding Master's degree in Supply Chain. Currently I am employed in leading automobile industry of Pakistan as an Procurement Engineer. My development journey began back in 2019, the "COVID" year. It brought many chaos all over the world but I took it as an opportunity to explore new things. Since then have been falling in love with the programming. Hence considering my passion and current boom in the tech industry, looking forward to pursue my career in the field of web development. 
            <br/><br/>
            I started my training from "CodeAcademy", a world recognized platform of tech learning. Subsequent to initial learning have been developing small and intermediate level projects based on self interest. But the journey of learning never comes to an end, hence continously exploring professional courses from online resources like "Linked In Learning", "Youtube", "Pluralsight" to keep updated with the latest industry trends and development.
            <br/><br/>
            I have experience of working on HTML, CSS, Javascript, ReactJS, React Native, NodeJS, ExpressJS, SQL and MongoDB. Apart from mentioned languages and frameworks have also implimented saveral third party packages like MUI, Formik, Yup, Mongoose etc in my projects. In addition GIT and Postman are also in list of in hand tools for version controlling and API testing.
            <br/><br/>
            If you would like to know more about me, please contact!
          </Typography>
        </Grid>
      </PageBody>
    </Container>
  )
}