import { Box, Grid } from "@mui/material"

const PageBody = ({ children }: any) => {
    return(
        <Box sx={{ height: "100%", display: "flex", maxWidth: "1200px", margin:"auto", flexDirection: "column", justifyContent: "center", padding: "15px", paddingTop: "50px" }}>
            {...children}
        </Box>
    )

}

export default PageBody;