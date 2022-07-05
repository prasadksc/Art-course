
//making styles
import { makeStyles } from "@mui/styles";

// making styles to layout
const useStyles = makeStyles({
    span: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        color:'grey'
        
    },
    courseInfo: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '60px',
    },
    profile:{
        display: 'flex', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        marginTop: "25px"
    },
    profileImage:{
        width: '45px', 
        height: '45px', 
        borderRadius: '100px',
        marginRight:'0.9rem'
    },
    rating :{
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'flex-start',
        margin:'1rem 0'
    },
    ratingText:{
        marginLeft: '0.7rem',
        color:'GrayText'
    },
    actions:{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        marginTop:'1rem'
    },
    actionBtn:{
        display:'flex',
        justifyContent:'flex-start',
        alignItems:'center',
        margin:'0 1.6rem'
    },
    paint1:{
        width: '350px', 
        height: '430px', 
        marginRight: "12px", 
        borderTopLeftRadius: '15px'
    },
    paint2:{
        width: '350px', 
        height: '210px', 
        borderTopRightRadius: '15px'
    },
    paint3:{
        width: '350px', 
        height: '210px'
    }
})

export default useStyles;


