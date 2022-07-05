
import { Container, Typography, Tooltip, Box, Rating, Button, IconButton } from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

//importing images
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

//importing png icon
import share from '../assets/share.png';

//importing styles
import useStyles from './styles.js'

const Layout = ({ data }) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container maxWidth="xl">
                {
                    data.map((course) => (
                        <div key={course.title}>

                            {/* course title */}

                            <div>
                                <Typography sx={{ fontFamily: 'Josefin Sans', fontSize: '3.2em' }}>{course.title}</Typography>
                                <div className={classes.span}>
                                    <Typography sx={{ marginRight: '0.3rem' }}>Multi-Day Course</Typography>
                                    <Tooltip title="Multi-day">
                                        <HelpOutlineIcon />
                                    </Tooltip>
                                </div>
                            </div>

                            {/* course info */}

                            <div className={classes.courseInfo}>

                                {/* course left content */}

                                <Box sx={{width:'50%'}}>

                                    {/* course description */}

                                    <Typography variant="h5" sx={{ fontWeight:'lighter',fontSize:'1.5em' }}>{course.description}</Typography>
                                    
                                    {/* teacher profile */}

                                    <div className={classes.profile}>
                                        <img src={course.image} alt="profile" className={classes.profileImage} />
                                        <Typography variant="h5"  sx={{color:"#705FDB",fontWeight:"bold"}}>{course.teacherName}</Typography>
                                    </div>

                                    {/* teacher rating */}

                                    <div className={classes.rating}>
                                        <Rating value={course.teacherRating} size="large" sx={{marginRight:'0.9rem'}}/>
                                        <Typography variant="subtitle1" className={classes.ratingText} >467 total reviews for this teacher</Typography>
                                    </div>

                                    {/* course rating */}

                                    <div className={classes.rating}>
                                        <Rating value={course.courseRating} size="large" sx={{marginRight:'0.9rem'}}/>
                                        <Typography variant="subtitle1" className={classes.ratingText}>5 reviews for this class</Typography>
                                    </div>
                                    <Typography variant="h5" sx={{ fontWeight:'lighter',fontSize:'1.2em' }} >
                                        Completed by 21 learners
                                    </Typography>


                                    {/* course action buttons */}

                                    <div className={classes.actions}>
                                        <Button variant="contained" color="primary" sx={{borderRadius:'20px' }} size="large" endIcon={<KeyboardArrowRightIcon fontSize="large" />}>
                                            See Class Schedule
                                        </Button>
                                        <div className={classes.actionBtn}>
                                            <IconButton sx={{color:"#705FDB"}}>
                                                <FavoriteBorderIcon  />
                                            </IconButton>
                                            <Typography variant="h6" color="#3E079B" sx={{fontWeight:'bold'}}>Save</Typography>
                                        </div>
                                        <div className={classes.actionBtn}>
                                            <IconButton sx={{color:"#705FDB"}}>
                                                <img src={share} alt="share" width="30px" height="30px" style={{color:"#705FDB"}} />
                                            </IconButton>
                                            <Typography variant="h6" color="#3E079B" sx={{fontWeight:'bold'}}>Share</Typography>
                                        </div>

                                    </div>
                                </Box>

                                {/* course right content */}

                                <Box sx={{ display: 'flex' }}>
                                    <img src={image1} alt="painting1" className={classes.paint1} />
                                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                        <img src={image2} alt="painting2" className={classes.paint2}/>
                                        <img src={image3} alt="painting3" className={classes.paint3} />
                                    </div>
                                </Box>
                            </div>
                        </div>
                    ))
                }
            </Container>
        </div>
    );
}

export default Layout;