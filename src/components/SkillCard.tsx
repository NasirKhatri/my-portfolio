import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';
import Box from '@mui/material/Box';

const SkillCard = ({data}: any) => {
    return (
        <Box sx={{minWidth: "350px",  backgroundColor: "lightBlue", borderRadius: "6px", padding: "15px"}}>
            {/* <Card>
                <CardContent> */}
                    <Typography variant='h4' sx={{textAlign: 'center', fontWeight: "bold"}}>
                    {data.scope}
                    </Typography>
                    {
                        data.languages.map((lang: any) => (
                            <>
                            <Divider sx={{p: "8px"}}/>
                            <Typography variant='h6' sx={{fontWeight: "bold"}}>{lang.name}</Typography>
                            <Typography variant='body1'>Experience: {lang.experience} {lang.Projects}</Typography>
                            <Typography variant='body1'>Level: {lang.Level}</Typography>
                            </>
                        ))
                    }
                {/* </CardContent>
            </Card> */}
        </Box>
    )   
}

export default SkillCard;