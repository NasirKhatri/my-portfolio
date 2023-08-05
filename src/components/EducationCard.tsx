import { Divider, Paper, Typography } from '@mui/material';

const EducationCard = ({ data }: any) => {
    return (
        <Paper className='fadein' elevation={12} sx={{ width: "350px", borderRadius: "6px", padding: "15px", "&:hover": {scale: "1.05"}}}>
            <Typography variant='h5' sx={{ textAlign: 'center', color: "primary.light", fontWeight: "bold" }}>
                {data.title}
            </Typography>
            <Divider />
            <Typography variant='body1'><span style={{fontWeight: 'bold'}}>Institute:</span> {data.institute}</Typography>
            <Typography variant='body1'><span style={{fontWeight: 'bold'}}>Passing Year:</span> {data.passingYear}</Typography>
            <Typography variant='body1'><span style={{fontWeight: 'bold'}}>Courses:</span>  {data.faculty}</Typography>
        </Paper>
    )
}

export default EducationCard;