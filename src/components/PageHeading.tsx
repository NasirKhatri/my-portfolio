import { Typography } from "@mui/material"

const PageHeading = ({ children }: any) => {
    return(
        <Typography variant="h3" sx={{ textAlign: "center" }}>{children}</Typography>
    )

}

export default PageHeading;