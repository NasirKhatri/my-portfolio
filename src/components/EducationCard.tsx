"use client"
import { Divider, Paper, Typography } from '@mui/material';
import { useInView } from 'react-intersection-observer';


const EducationCard = ({ data }: any) => {
    const { ref, inView } = useInView({
        initialInView: true,
        threshold: 0.40,
    });
    return (
        <Paper ref={ref} className={`opacityTransition ${inView ? 'opacity-1' : 'opacity-0'}`} elevation={12} sx={{ width: "350px", borderRadius: "6px", padding: "15px", "&:hover": {scale: "1.05"}}}>
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