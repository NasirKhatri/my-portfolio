import { Box, Grid } from "@mui/material"

const PageBody = ({ children }: any) => {
    return(
        <Box sx={{ height: "100%", display: "flex", margin:"auto", flexDirection: "column", justifyContent: "center", padding: "15px", paddingTop: "2rem", paddingBottom: {md: "60px"} }}>
            {...children}
        </Box>
    )

}

export default PageBody;