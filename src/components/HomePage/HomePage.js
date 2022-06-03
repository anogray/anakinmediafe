import { useRef, useState } from "react";
import { useEffect,useEffectOnce  } from "react";
import axios from "axios";
import IssuePages from "../IssuePages/IssuePages";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function HomePage(){

    const [issueData,setIssueData] = useState({repoUrl:"",data:[]});
    const [loading, setLoading] = useState(false);

    // console.log("issueData",issueData);

    useEffect(()=>{

        const getData = async()=>{
            try{
                setLoading(true);
            const respRepo = await axios.get("https://api.github.com/repos/react-bootstrap/react-bootstrap");
            const respIssue = await axios.get("https://api.github.com/repos/react-bootstrap/react-bootstrap/issues?state=open");
            setIssueData({repoUrl:respRepo.data.html_url, data:respIssue.data});
            }catch(err){
                console.log("errorDataFetch",err)
            }finally{
                setLoading(false);
            }
        }

        getData();
    },[])

    return(
        <>
         {loading ? <Box sx={{ display: 'flex', "justifyContent":"center" , "marginTop":"2.5%"}}>
                <CircularProgress />
            </Box> : ""}
        <div className="issues-list-container">
           
           {issueData.data.length ?  <IssuePages issueData={issueData}/> : ""}
        </div>
        </>
    )
}