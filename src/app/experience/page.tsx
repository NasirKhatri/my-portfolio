import Typography from "@mui/material/Typography/Typography"
import { Container, Divider, Grid, useTheme } from "@mui/material"
import PageHeading from "@/components/PageHeading"
import PageBody from "@/components/PageLayouts"

export default function Experience() {
  return (
    <Container maxWidth="lg">
      <PageBody>
        <Grid item xs={12} alignItems="center">
          <PageHeading>Experience</PageHeading>
        </Grid>
        <Grid item xs={12} flexGrow={1} sx={{ marginTop: "0px", maxWidth: { xs: "800px", md: "1200px" }, paddingTop: "15px" }} rowSpacing={10}>
        <>
            <Typography variant="h4" className="heading">Front End Development - Angular</Typography>
            <Typography variant="h5" className="heading">From Oct'2023 To Present</Typography>
            <Typography variant="body1" sx={{ textAlign: "justify" }}>Veeone Health is a US Based product company. Specializing in innovative healthcare solution.
            <br></br>
            As a angular developer, I am responsible for creating and implementing reusable angular components from scratch Diagnosing and resolving bugs to ensure seamless user experience Collaborating with cross-functional teams to develop user-friendly interfaces that align with business objectives.
            <br></br>
            Libraries and Frameworks: Angular, RxJS, Angular Material, Bootstrap, Azure, Git, GitHub, Visual Studio Code</Typography>
            <Divider/>
          </>
          <>
            <Typography variant="h4" className="heading">Front End Development (Freelancing)</Typography>
            <Typography variant="h5" className="heading">From Jan'2021 To Dec'2021</Typography>
            <Typography variant="body1" sx={{ textAlign: "justify" }}>Worked for around 1 year as a freelancer on a React based "Supply Chain" related web application key features were warehousing, inventory monitoring, accounting and many more. My key responsibilities were to create responsive web pages by implimenting "Material UI" library. Creating web forms, validate them and post to the API through Async functions. And also fetching data from API and render them on the web Pages. During the project implimented saveral ReactJS libraries like "Material UI", "Formik", "Yup", "React Query" etc</Typography>
            <Divider/>
          </>
          <>
          <Typography variant="h4" className="heading">SAP (ERP) Implimentation</Typography>
          <Typography variant="h5" className="heading">Pak Suzuki Motors, From Sep'18 To Dec'2022</Typography>
          <Typography variant="body1">Responsible for identifying business requirements and document them. Acted as a bridge between SAP consultants and bussiness to meet requirements.Conducted Fit and Gap Analysis and Identified the areas where costumization would require. Was also responsible for System Integration (SIT) and User Acceptance Testing (UAT).
          Trained the end users. Was also part of Data Migration team from Legacy system to SAP. Having thorough understanding of Complete Procure to Pay Cycle, Master Data Maintainance, SAP contracts and many more.</Typography>
          <Divider />
          </>
          <Typography variant="h4" className="heading">Deputy Manager - Procurement</Typography>
          <Typography variant="h5" className="heading">Pak Suzuki Motors, From Sep'13 To Sep'23</Typography>
          <Typography variant="body1">Purchasing direct materials from more than 20 local suppliers to meet daily production requirements. Monitor items’ inventory level to avoid capital blockage and also avoid risk of production stoppage. Evaluate vendors’ monthly performance and take countermeasures if required. Negotiation for Product Localization. Issuance of RFQs to the potential vendors. In order to promote procurement at competitive prices, “Assess Parts’ and Investment Cost” before negotiation. Conduct feasibility study for product localization. Issue letter of Intent to vendors in case localization is feasible. Negotiate with Foreign tool makers in case of imported tooling. Periodic review of negotiated prices based on exchange rate and other costing factors.</Typography>

        </Grid>
      </PageBody>
    </Container>
  )
}