import { Divider, Paper, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';

const SkillCard = ({ data }: any) => {
    return (
        <Paper className='fadein' elevation={12} sx={{ width: "350px", borderRadius: "6px", padding: "15px", "&:hover": {scale: "1.05"} }}>
            <Typography variant='h4' sx={{ textAlign: 'center', color:"primary.light", fontWeight: "bold" }}>
                {data.scope}
            </Typography>
            {
                data.languages.map((lang: any) => (
                    <>
                        <Divider />
                        <Typography variant='h6' sx={{ fontWeight: "bold" }}>{lang.name}</Typography>
                        <Typography variant='body1'>Experience: {lang.experience} {lang.Projects}</Typography>
                        <Typography variant='body1'>Level: <span><Rating name="half-rating-read" defaultValue={lang.Level} precision={0.5} readOnly /></span></Typography>
                    </>
                ))
            }
        </Paper>
    )
}

export default SkillCard;